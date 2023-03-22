import { useEffect, useState } from 'react';
import { showToast, showModal } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { PageLayout, FooterToolbar, CustomTabbarPlaceholder } from '../../components';
import { InputNumber, Swipe, Icon, Button } from '@nutui/nutui-react-taro';
import useModel from './model';
import './index.scss';
import { genCustomTabbarClass } from '../../utils';

export default function Shop() {
  const customTabbarClass = genCustomTabbarClass();
  const model = useModel();
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const [list, setList] = useState<IQueryShop.Resp>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedList, setSelectedList] = useState([]);
  // 下单支付
  const onPayOrder = () => {
    if (selectedList.length <= 0) {
      // return toast({
      //   content: '您还没有选择宝贝哦',
      // });
    }
  };
  const onClear = () => {
    showModal({
      title: '删除提示',
      content: `确定要清空购物车？`,
      success(res) {
        if (res.confirm) {
          setTotalPrice(0);
          setAllSelected(false);
          setList([]);
          setSelectedList([]);
          showToast({ title: '操作成功' });
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      },
    });
  };
  // 商品删除
  const onDel = (item, index) => {
    showModal({
      title: '删除提示',
      content: `确定要删除“${item.title}”？`,
      success(res) {
        if (res.confirm) {
          onCalculatePrice(item.price, index);
          setList(list.filter((delItem) => delItem.id !== item.id));
          showToast({ title: '删除成功' });
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      },
    });
  };
  // 单个商品选择和不选择
  const onToggleSelected = (index: number) => {
    list[index].isSelected = !list[index].isSelected;
    getSelectedShop(list, list);
  };
  // 单个商品价格计算
  const onCalculatePrice = (value: number, index: number) => {
    list[index].count = value;
    const priceList = list.filter((item) => item.isSelected);
    const total = priceList.reduce(
      (acc, cur: IQueryShop.ListItem) => acc + cur.price * cur.count,
      0,
    );
    setTotalPrice(total);
    setList([...list]);
  };
  // 全选和非全选
  const onSelectedAll = () => {
    const dataList = list?.map((item) => {
      return {
        ...item,
        isSelected: selectedList.length === list.length ? !item.isSelected : true,
      };
    });
    getSelectedShop(dataList, dataList);
  };
  // 计算已选商品价格
  const getSelectedShop = (selectedShopList, originList) => {
    const priceList = selectedShopList.filter((item) => item.isSelected);
    const total = priceList.reduce((acc, cur) => acc + cur.price * cur.count, 0);
    setTotalPrice(total);
    setSelectedList(priceList);
    setList(originList);
    setAllSelected(priceList.length === originList.length);
  };
  useEffect(() => {
    setList(model.data as IQueryShop.Resp);
  }, [JSON.stringify(model.data)]);

  return (
    <PageLayout useModel={model}>
      <View className="base-container">
        <View className="header-title">
          <View className="title">
            <Text>
              购物车共计<Text className="number">{list?.length ?? '--'}</Text>件商品
            </Text>
          </View>
          <View className="delete-btn" onClick={onClear}>
            清空
          </View>
        </View>
        <View className="shop-list-container">
          <View className="shop-list">
            {list?.map((item: IQueryShop.ListItem, index) => {
              return (
                <Swipe
                  key={item.id}
                  rightAction={
                    <Button type="danger" shape="square" onClick={() => onDel(item, index)}>
                      删除
                    </Button>
                  }
                >
                  <View className="shop-list-item">
                    <Text onClick={() => onToggleSelected(index)}>
                      {item.isSelected ? (
                        <Icon name="check-checked" />
                      ) : (
                        <Icon name="check-normal" />
                      )}
                    </Text>
                    <View className="shop-img-container">
                      <Image className="shop-img" src={item.url} />
                    </View>
                    <View className="shop-desc">
                      <p className="shop-title">{item.desc}</p>
                      <View className="shop-money">
                        <Text className="shop-price">¥{item.price ?? '0'}</Text>
                        <InputNumber
                          min={1}
                          max={100000}
                          modelValue={item.count}
                          onChangeFuc={(value: number) => onCalculatePrice(value, index)}
                        />
                      </View>
                    </View>
                  </View>
                </Swipe>
              );
            })}
          </View>
        </View>
      </View>
      <FooterToolbar>
        <View className={`"shop-footer" ${customTabbarClass}`}>
          <View className="shop-selected" onClick={onSelectedAll}>
            {allSelected ? <Icon name="check-checked" /> : <Icon name="check-normal" />}
            <Text>全选</Text>
          </View>
          <View className="footer-price">
            <View className="total-price">合计：¥{totalPrice}</View>
            <View className="calculate-btn" onClick={onPayOrder}>
              结算
            </View>
          </View>
        </View>
      </FooterToolbar>
      <CustomTabbarPlaceholder />
    </PageLayout>
  );
}
