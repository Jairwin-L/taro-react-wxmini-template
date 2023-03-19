import { View } from '@tarojs/components';
import './index.scss';

function AutoCenter({ children }: { children: React.ReactNode }) {
  return <View className="center-container">{children}</View>;
}

export default AutoCenter;
