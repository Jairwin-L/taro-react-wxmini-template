import { PLATFORM } from '../constants';
import { getSystemInfoSync, getAccountInfoSync } from '@tarojs/taro';
/**
 * @module getSystemInfo
 * @description 获取系统信息
 */
export function getSystemInfo() {
  try {
    const res = getSystemInfoSync();
    return res;
  } catch (error: unknown) {
    console.log(`getSystemInfoSync:error----->：`, error);
    return {
      platform: 'ios',
      bluetoothAuthorized: false,
    };
  }
}
/**
 * @module getCustomTabbarClass
 * @description 跟据系统平台，获取自定义tabbar的class
 */
function getCustomTabbarClass() {
  // 获取平台信息
  const { platform = '' } = getSystemInfo();
  // 根据平台信息获取对应的样式类名并返回
  return `custom-tab-bar-placeholder${platform ? `-${PLATFORM[platform]}` : ''}`;
}
/**
 * @module getEnvVersion
 * @description 获取当前帐号所属环境，默认正式环境
 */
function getEnvVersion(): IEnvVersion {
  try {
    const { miniProgram } = getAccountInfoSync();
    const { envVersion } = miniProgram || {};
    return envVersion || 'release';
  } catch (error: unknown) {
    console.log(`Taro.getAccountInfoSync:error----->：`, error);
    return 'release';
  }
}

export { getCustomTabbarClass, getEnvVersion };
