import { getCustomTabbarClass } from '../../utils';
import { View } from '@tarojs/components';
import './index.scss';

function CustomTabbarPlaceholder() {
  const customTabbarClass = getCustomTabbarClass();
  return <View className={customTabbarClass} />;
}

export default CustomTabbarPlaceholder;
