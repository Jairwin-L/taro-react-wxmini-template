import { Button } from '@nutui/nutui-react-taro';
import { navigate } from '../../../utils';
import { FooterToolbar } from '../../../components';
import './index.scss';

export default function Address() {
  const onAdd = () => {
    navigate('address/add');
  };
  return (
    <>
      <FooterToolbar placeholderHeight={120} className="button-add">
        <Button block type="primary" onTap={onAdd}>
          添加收货地址
        </Button>
      </FooterToolbar>
    </>
  );
}
