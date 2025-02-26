import { Button } from '@nutui/nutui-react-taro';
import './index.scss';
import useModel from './model';

export default function Page() {
  const { onRefetch } = useModel();
  const onPay = () => {
    if (onRefetch) {
      onRefetch();
    }
  };
  return (
    <>
      <Button type="primary" className="btn" onClick={onPay}>
        支付页
      </Button>
    </>
  );
}
