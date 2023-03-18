import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import { useModel } from './model';
import { CustomTabbarPlaceholder } from '../../components';
import './index.scss';

export default function Main() {
  const model = useModel();
  console.log(`model----->：`, model);
  return (
    <>
      <View className="main">首页</View>
      <View>
        {model?.data?.list?.map((item) => {
          /* @ts-ignore TODO: */
          return <View key={item.id}>{item.title}</View>;
        })}
      </View>
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
      <CustomTabbarPlaceholder />
    </>
  );
}
