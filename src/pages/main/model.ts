import { useState } from 'react';
import { useDidShow } from '@tarojs/taro';
import { query } from '../../api/modules/biz';

function useModel() {
  const [loading, setLoading] = useState<boolean>(true);
  const [resp, setResp] = useState<IBaseResp<IQueryBiz.Resp>>();
  const fetchModel = async () => {
    setLoading(true);
    const response = await query({
      pageIndex: 1,
      pageSize: 1,
    });
    setLoading(false);
    setResp(response);
  };
  const onRefetch = () => {
    fetchModel();
  };
  useDidShow(() => {
    fetchModel();
  });
  return {
    ...resp,
    loading,
    onRefetch,
  };
}

export default useModel;
