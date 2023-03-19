import { Empty, Button } from '@nutui/nutui-react-taro';
import AutoCenter from '../auto-center';
import Loading from '../loading';
// TODO:渲染还有点小问题
export default function PageLayout(props: IPageLayout) {
  const { children, useModel } = props || {};
  const { loading = false, msg = '', success = false, onRefetch } = useModel || {};
  if (loading) {
    return <Loading />;
  }
  if (!loading && !success) {
    return (
      <AutoCenter>
        <Empty image="error" description={msg}>
          <Button icon="refresh" type="primary" onClick={onRefetch && onRefetch}>
            重试
          </Button>
        </Empty>
      </AutoCenter>
    );
  }
  return <>{children}</>;
}
