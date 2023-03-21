import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import { CustomTabbarPlaceholder, PageLayout } from '../../components';
import useModel from './model';
import './index.scss';

export default function Main() {
  const model = useModel();
  const { data } = model;
  return (
    <>
      <PageLayout useModel={model}>
        <View className="main">首页</View>
        <View>
          {data?.list?.map((item: IQueryBiz.ListItem) => {
            return <View key={item.id}>{item.title}</View>;
          })}
        </View>
        <Button type="primary" className="btn">
          主要按钮
        </Button>
        <View>底部</View>
      </PageLayout>
      <CustomTabbarPlaceholder />
    </>
  );
}
