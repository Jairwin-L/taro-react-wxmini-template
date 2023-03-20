import { useEffect, useState } from 'react';
import { useDidShow, useDidHide } from '@tarojs/taro';
import { show } from '../../../../api/modules/address';

function useModel() {
  let didCancel = false;
  const [loading, setLoading] = useState<boolean>(true);
  const [resp, setResp] = useState<IBaseResp<IQueryAddress.Resp>>();
  const [didShow, setDidShow] = useState<boolean>(false);
  const fetchModel = async () => {
    setLoading(true);
    const response = await show({
      id: 12312,
    });
    if (didShow && !didCancel) {
      setLoading(false);
      setResp(response);
    }
  };
  const onRefetch = () => {
    fetchModel();
  };
  useDidShow(() => {
    setDidShow(true);
  });
  useDidHide(() => {
    setLoading(true);
    setDidShow(false);
  });
  useEffect(() => {
    if (didShow) {
      fetchModel();
    }
    return () => {
      didCancel = true;
    };
  }, [didShow]);
  return {
    ...resp,
    loading,
    onRefetch,
  };
}

export default useModel;
