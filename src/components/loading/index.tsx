import { View, Text } from '@tarojs/components';
import './index.scss';

export default function Loading(props: ILoading) {
  const { text = '加载中...' } = props;
  return (
    <View className="loading-container">
      <View className="loading">
        <View className="loader">
          <View />
          <View />
          <View />
        </View>
        {text ? <Text className="text">{text}</Text> : null}
      </View>
    </View>
  );
}
