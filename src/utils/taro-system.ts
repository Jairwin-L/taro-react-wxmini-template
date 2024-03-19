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
  const { platform = '' } = genSystemInfo();
  // 根据平台信息获取对应的样式类名并返回
  return `custom-tab-bar-placeholder${platform ? `-${PLATFORM[platform]}` : ''}`;
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
