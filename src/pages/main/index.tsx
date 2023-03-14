import { View } from '@tarojs/components';
import './index.scss';

export default function Main() {
  return (
    <>
      <View className='main'>首页</View>
      <View>
        {Array(50)
          .fill('1')
          .map((item) => {
            return <View key={item}>{item}</View>;
          })}
      </View>
      <View>底部</View>
    </>
  );
}
