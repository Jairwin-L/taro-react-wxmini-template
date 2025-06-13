import { useEffect, useState } from 'react';
import { closeBluetoothAdapter, getSetting, openSetting, showToast } from '@tarojs/taro';
import { Button } from '@nutui/nutui-react-taro';
import {
  checkSystemBluetoothAuthorized,
  getBluetoothData,
  getBluetoothDeviceData,
} from '@/utils/bluetooth';
import { View } from '@tarojs/components';
import { BluetoothAuthorizeStatus } from '@/constants/bluetooth';
import './index.scss';

export default function Page() {
  const [bluetoothSwitchFlag, setBluetoothSwitchFlag] = useState<boolean>(false);
  const [bluetoothDevices, setBluetoothDevices] = useState<
    Taro.getBluetoothDevices.SuccessCallbackResultBlueToothDevice[]
  >([]);
  const [bluetoothSwitchStatus, setBluetoothSwitchStatus] = useState<
    'UN_AUTHORIZE' | 'SUCCESS' | 'FAIL'
  >('UN_AUTHORIZE');
  const checkBluetoothSetting = async () => {
    try {
      const systemInfo = await getSetting();
      const bluetoothFlag = systemInfo.authSetting['scope.bluetooth'];
      return bluetoothFlag;
    } catch (error) {
      console.error(`error----->：`, error);
      return false;
    }
  };
  const onSwitchBlue = async () => {
    try {
      const settingBluetoothFlag = await checkBluetoothSetting();
      if (settingBluetoothFlag) return;
      openSetting({
        success: (res) => {
          const bluetoothFlag = res.authSetting['scope.bluetooth'];
          showToast({
            title: bluetoothFlag ? '蓝牙已授权' : '您未授权蓝牙权限，无法使用该功能',
            icon: bluetoothFlag ? 'success' : 'none',
          });
          closeBluetoothAdapter();
          setBluetoothSwitchStatus('SUCCESS');
          setBluetoothSwitchFlag(bluetoothFlag);
        },
      });
    } catch (error) {
      console.error(`error----->：`, error);
    }
  };
  const onOpenBluetoothAdapter = async () => {
    try {
      const devices = await getBluetoothData();
      setBluetoothDevices(devices);
    } catch (error) {
      console.error(`onOpenBluetoothAdapter.error----->：`, error);
    }
  };
  const onBluetoothAuthorize = () => {
    const checkAuthorized = checkSystemBluetoothAuthorized();
    if (!checkAuthorized) return;
    fetchBluetoothDevices();
  };
  const fetchBluetoothDevices = async () => {
    const checkAuthorized = checkSystemBluetoothAuthorized();
    if (!checkAuthorized) return;
    try {
      const settingBluetoothFlag = await checkBluetoothSetting();
      if (settingBluetoothFlag) {
        setBluetoothSwitchFlag(true);
        setBluetoothSwitchStatus('SUCCESS');
        return;
      }
      const res = await getBluetoothDeviceData();
      setBluetoothSwitchStatus(res);
      setBluetoothSwitchFlag(res === 'SUCCESS');
      if (res === BluetoothAuthorizeStatus.SUCCESS) {
        closeBluetoothAdapter();
      }
    } catch (error) {
      if (error.errno === 103) {
        setBluetoothSwitchStatus('FAIL');
      }
      console.error(`fetchBluetoothDevices.error----->：`, error);
    }
  };
  useEffect(() => {
    fetchBluetoothDevices();
    return () => {
      closeBluetoothAdapter();
    };
  }, []);
  return (
    <>
      {bluetoothSwitchStatus === BluetoothAuthorizeStatus.UN_AUTHORIZE ? (
        <Button onClick={onBluetoothAuthorize}>蓝牙授权</Button>
      ) : null}
      {bluetoothSwitchStatus === BluetoothAuthorizeStatus.FAIL ? (
        <Button onClick={onSwitchBlue}>打开蓝牙</Button>
      ) : null}
      {bluetoothSwitchFlag ? (
        <>
          <Button onClick={onOpenBluetoothAdapter}>连接打印设备</Button>
          {bluetoothDevices?.length > 0 ? (
            <View>
              <View>可连接的蓝牙设备:</View>
              {bluetoothDevices.map((item) => (
                <View key={item.deviceId}>{item.name}</View>
              ))}
            </View>
          ) : (
            <View>暂无蓝牙设备可连接</View>
          )}
        </>
      ) : null}
    </>
  );
}
