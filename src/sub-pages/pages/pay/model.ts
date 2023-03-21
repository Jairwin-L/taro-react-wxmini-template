import { login, requestPayment, reLaunch, showToast } from '@tarojs/taro';
import { openid, create } from '../../../api/modules/pay';
import { genPayParams } from '../../../utils';

export default function useModel() {
  const fetchPay = () => {
    login({
      async success({ code, errMsg }) {
        if (code) {
          // 获取服务端openid，传至下一个接口所需参数
          const result = await openid({
            code,
          });
          if (!result.success) return;
          // 这里还需要其他参数，以实际业务为准
          const params: IQueryPay.CreateParam = {
            openid: result.data as string,
          };
          // 创建订单
          const { data, success } = await create(params);
          if (!success) return;
          requestPayment({
            ...genPayParams(data),
            success() {
              showToast({
                title: '支付成功',
                icon: 'success',
              });
              reLaunch({
                url: '../../../pages/main/index',
              });
            },
            fail(res) {
              showToast({
                title: res.errMsg || '订单创建失败',
              });
            },
          });
        } else {
          console.log(`登录失败！${errMsg}`);
        }
      },
      fail() {},
    });
  };
  const onRefetch = () => {
    fetchPay();
  };
  return {
    onRefetch,
  };
}
