import { View } from '@tarojs/components';
import './index.scss';

export default function AutoCenter({ children }: { children: React.ReactNode }) {
  return <View className="center-container">{children}</View>;
}
