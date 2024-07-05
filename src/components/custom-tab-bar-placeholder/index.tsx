import { getCustomTabbarClass } from '../../utils';
import { View } from '@tarojs/components';
import './index.scss';

export default function CustomTabbarPlaceholder() {
  const customTabbarClass = getCustomTabbarClass();
  return <View className={customTabbarClass} />;
}
