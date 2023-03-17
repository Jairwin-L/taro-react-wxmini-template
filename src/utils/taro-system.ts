import { PLATFORM } from '../constants';
import { getSystemInfoSync } from '@tarojs/taro';
/**
 * @module getSystemInfo
 * @description 获取系统信息
 */
function getSystemInfo() {
  try {
    const res = getSystemInfoSync();
    return res;
  } catch (error: unknown) {
    console.log(`getSystemInfoSync:error----->：`, error);
    return {
      platform: 'ios',
    };
  }
}
/**
 * @module getCustomTabbarClass
 * @description 跟据系统平台，获取自定义tabbar的class
 */
function getCustomTabbarClass() {
  const { platform } = getSystemInfo();
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

export { getSystemInfo, getCustomTabbarClass };
