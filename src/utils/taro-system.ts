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
  // 获取平台信息
  const { platform } = genSystemInfo();
  // 定义一个对象，保存不同平台对应的样式类名
  const platformClass = {
    [PLATFORM.DEVTOOLS]: 'custom-tab-bar-placeholder-devtools',
    [PLATFORM.MAC]: 'custom-tab-bar-placeholder-mac',
    [PLATFORM.WIN]: 'custom-tab-bar-placeholder-windows',
    [PLATFORM.IOS]: 'custom-tab-bar-placeholder-ios',
    [PLATFORM.ANDROID]: 'custom-tab-bar-placeholder-android',
  };
  // 根据平台信息获取对应的样式类名并返回
  return platformClass[platform] || 'custom-tab-bar-placeholder';
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
