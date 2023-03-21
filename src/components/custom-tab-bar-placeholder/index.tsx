import { genCustomTabbarClass } from '../../utils';
import { View } from '@tarojs/components';
import './index.scss';

function CustomTabbarPlaceholder() {
  const customTabbarClass = genCustomTabbarClass();
  return <View className={customTabbarClass} />;
}

export default CustomTabbarPlaceholder;
