import { SYSTEM_ERROR_MSG } from '../../constants/api';
import { Empty, Button } from '@nutui/nutui-react-taro';
import AutoCenter from '../auto-center';
import Loading from '../loading';

export default function PageLayout(props: IPageLayout) {
  const { children, useModel } = props || {};
  const { loading = false, msg = '', success = false, onRefetch } = useModel || {};
  if (loading) {
    return <Loading />;
  }
  if (!loading && !success) {
    return (
      <AutoCenter>
        <Empty image="error" description={msg || SYSTEM_ERROR_MSG}>
          <Button icon="refresh" type="primary" onClick={onRefetch && onRefetch}>
            重试
          </Button>
        </Empty>
      </AutoCenter>
    );
  }
  return <>{children}</>;
}
