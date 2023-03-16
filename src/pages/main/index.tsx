import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import './index.scss';

export default function Main() {
  return (
    <>
      <View className="main">首页</View>
      <Button type="primary" className="btn">
        主要按钮
      </Button>
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
