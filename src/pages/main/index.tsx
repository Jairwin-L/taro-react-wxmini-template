import { View, Image } from '@tarojs/components';
import { Button, Swiper, SwiperItem } from '@nutui/nutui-react-taro';
import { CustomTabbarPlaceholder, PageLayout } from '../../components';
import useModel from './model';
import './index.scss';
import { subPageNavigate } from '../../utils/navigate';

export default function Main() {
  const model = useModel();
  const { data } = model;
  const onGoPay = () => {
    subPageNavigate('pay');
  };
  return (
    <>
      <PageLayout useModel={model}>
        <Swiper
          height={150}
          paginationColor="#1677ff"
          autoPlay="3000"
          paginationVisible
          className="swiper"
        >
          {data?.banners?.map((item) => {
            return (
              <SwiperItem key={item.id}>
                <Image className="banner-image" src={item.imgUrl} />
              </SwiperItem>
            );
          })}
        </Swiper>
        <View className="main">首页</View>
        <View>
          {data?.list?.map((item: IQueryBiz.ListItem) => {
            return <View key={item.id}>{item.title}</View>;
          })}
        </View>
        <Button type="primary" className="btn" onClick={onGoPay}>
          支付页
        </Button>
        <View>底部</View>
      </PageLayout>
      <CustomTabbarPlaceholder />
    </>
  );
}
