import {
  getBluetoothDevices,
  openBluetoothAdapter,
  authorize,
  showModal,
  getSetting,
  openAppAuthorizeSetting,
  getAppAuthorizeSetting,
  showToast,
} from '@tarojs/taro';

export function getBluetoothData(): Promise<
  Taro.getBluetoothDevices.SuccessCallbackResultBlueToothDevice[]
> {
  return new Promise((resolve) => {
    openBluetoothAdapter({
      success() {
        getBluetoothDevices({
          success(deviceRes) {
            console.log(`getBluetoothDevices.log----->：`, deviceRes);
            if (deviceRes.errMsg === 'getBluetoothDevices:ok' && deviceRes.devices.length > 0) {
              resolve(deviceRes.devices);
            } else {
              resolve([]);
            }
          },
        });
      },
    });
  });
}

export function getBluetoothDeviceData(): Promise<'UN_AUTHORIZE' | 'SUCCESS' | 'FAIL'> {
  return new Promise((resolve, reject) => {
    getSetting({
      success(res) {
        if (res.authSetting['scope.bluetooth']) {
          getBluetoothData();
        }
        if (!res.authSetting['scope.bluetooth']) {
          showModal({
            title: '权限提示',
            content: '需要蓝牙权限才能使用此功能，是否前往设置页面开启？',
            success: (modalRes) => {
              if (modalRes.confirm) {
                authorize({
                  scope: 'scope.bluetooth',
                  success() {
                    showToast({
                      title: '蓝牙已授权',
                      icon: 'success',
                    });
                    resolve('SUCCESS');
                  },
                  fail(error: { errno: number; errMsg: string }) {
                    console.error(`authorize.error----->：`, error);
                    if (error.errno === 103) {
                      showToast({
                        title: '您未授权蓝牙权限',
                        icon: 'none',
                      });
                      resolve('FAIL');
                      reject(error);
                    }
                  },
                });
              }
              if (modalRes.cancel) {
                showToast({
                  title: '您未授权蓝牙权限',
                  icon: 'none',
                });
                resolve('UN_AUTHORIZE');
              }
            },
            fail(error) {
              console.error(`showModal.error----->：`, error);
              reject(error);
            },
          });
        }
      },
      fail(error) {
        console.error(`getSetting.error----->：`, error);
        throw error;
      },
    });
  });
}

export function checkSystemBluetoothAuthorized() {
  const setting = getAppAuthorizeSetting();
  const { bluetoothAuthorized } = setting;
  if (bluetoothAuthorized === 'denied') {
    showModal({
      title: '系统权限提示',
      content: '需要打开系统设置微信app的蓝牙开关',
      success: (modalRes) => {
        if (modalRes.confirm) {
          openAppAuthorizeSetting({
            success(res) {
              console.log(`openSystemBluetoothSetting.success----->：`, res);
            },
            fail(error) {
              console.error('openSystemBluetoothSetting.fail----->', error);
              showToast({
                title: '未打开系统设置的蓝牙开关',
                icon: 'none',
              });
            },
          });
        }
        if (modalRes.cancel) {
          showToast({
            title: '未打开系统设置的蓝牙开关',
            icon: 'none',
          });
        }
      },
      fail(error) {
        console.error(`showModal.error----->：`, error);
        // reject(error);
      },
    });
    return false;
  }
  return true;
}
