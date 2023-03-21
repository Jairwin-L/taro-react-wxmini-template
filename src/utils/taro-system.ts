import { PLATFORM } from '../constants';
import { getSystemInfoSync, getAccountInfoSync } from '@tarojs/taro';
/**
 * @module genSystemInfo
 * @description 获取系统信息
 */
function genSystemInfo() {
  try {
    const res = getSystemInfoSync();
    return res;
  } catch (error: unknown) {
    console.log(`genSystemInfoSync:error----->：`, error);
    return {
      platform: 'ios',
    };
  }
}
/**
 * @module genCustomTabbarClass
 * @description 跟据系统平台，获取自定义tabbar的class
 */
function genCustomTabbarClass() {
  const { platform } = genSystemInfo();
  let customTabbarClass = 'custom-tab-bar-placeholder';
  if (platform === PLATFORM.DEVTOOLS) {
    customTabbarClass = 'custom-tab-bar-placeholder-devtools';
  } else if (platform === PLATFORM.MAC) {
    customTabbarClass = 'custom-tab-bar-placeholder-mac';
  } else if (platform === PLATFORM.WIN) {
    customTabbarClass = 'custom-tab-bar-placeholder-windows';
  } else if (platform === PLATFORM.IOS) {
    customTabbarClass = 'custom-tab-bar-placeholder-ios';
  } else if (platform === PLATFORM.ANDROID) {
    customTabbarClass = 'custom-tab-bar-placeholder-android';
  }
  return customTabbarClass;
}
/**
 * @module genEnvVersion
 * @description 获取当前帐号所属环境，默认正式环境
 */
function genEnvVersion(): IEnvVersion {
  try {
    const { miniProgram } = getAccountInfoSync();
    const { envVersion } = miniProgram || {};
    return envVersion || 'release';
  } catch (error: unknown) {
    console.log(`Taro.getAccountInfoSync:error----->：`, error);
    return 'release';
  }
}

export { genSystemInfo, genCustomTabbarClass, genEnvVersion };
