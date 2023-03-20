import { showModal } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { Empty, Button } from '@nutui/nutui-react-taro';
import { navigate } from '../../../utils';
import { AutoCenter, FooterToolbar, PageLayout } from '../../../components';
import { getCodeToText } from '../../../utils/cascade-data';
import { del } from '../../../api/modules/address';
import useModel from './model';
import './index.scss';

export default function Address() {
  const model = useModel();
  const onAdd = () => {
    navigate('address/add');
  };
  const onDelete = (item) => {
    showModal({
      title: '删除提示',
      content: '确定要删除该条数据？',
      async success(res) {
        if (res.confirm) {
          try {
            const { success } = await del({
              id: item.id,
            });
            if (success && model.onRefetch) {
              model.onRefetch();
            }
          } catch (error) {
            console.error(`error----->：`, error);
          }
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      },
    });
  };
  const addressList = model.data || [];
  return (
    <PageLayout useModel={model}>
      {addressList.length > 0 ? (
        <View className="address_list">
          <View className="address_ul">
            {addressList.map((item) => {
              return (
                <View className="address_li" key={item.id}>
                  <View className="address_content">
                    <View className="address_content_info">
                      <Text className="address_name">{item.username}</Text>
                      <Text>{item.mobile}</Text>
                    </View>
                    <Text className="address_detail">{getCodeToText(item.code)}</Text>
                  </View>
                  <View className="address_action">
                    <Text onClick={() => navigate('address/edit', { id: item.id })}>修改</Text>
                    <Text onClick={() => onDelete(item)}>X</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      ) : (
        <AutoCenter>
          <Empty description="暂无数据" />
        </AutoCenter>
      )}
      <FooterToolbar placeholderClassName="placeholder-tool" className="button-add">
        <Button block type="primary" onTap={onAdd}>
          添加收货地址
        </Button>
      </FooterToolbar>
    </PageLayout>
  );
}
