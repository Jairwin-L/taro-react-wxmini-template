import { View, Image } from '@tarojs/components';
import { Button, Swiper } from '@nutui/nutui-react-taro';
import { CustomTabbarPlaceholder, Icon, PageLayout } from '@/components';
import useModel from './model';
import { subPageNavigate } from '@/utils/navigate';
import './index.scss';

export default function Page() {
  const model = useModel();
  const { data } = model;
  const onGoPay = () => {
    subPageNavigate('pay');
  };
  const onGoDemo = () => {
    subPageNavigate('demo');
  };
  return (
    <>
      <PageLayout useModel={model}>
        <Swiper
          height={150}
          // paginationColor="#1677ff"
          // autoPlay="3000"
          autoPlay
          // paginationVisible
          className="swiper"
        >
          {data?.banners?.map((item) => {
            return (
              <Swiper.Item key={item.id}>
                <Image className="banner-image" src={item.imgUrl} />
              </Swiper.Item>
            );
          })}
        </Swiper>
        <Icon name="main" />
        <Button type="primary" onClick={onGoPay}>
          支付页
        </Button>
        <Button type="primary" onClick={onGoDemo}>
          演示页
        </Button>
        <View>
          {data?.list?.map((item: IQueryBiz.ListItem) => {
            return <View key={item.id}>{item.title}</View>;
          })}
        </View>
        <View>底部</View>
      </PageLayout>
      <CustomTabbarPlaceholder />
    </>
  );
}
