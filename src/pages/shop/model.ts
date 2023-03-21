import { useEffect, useState } from 'react';
import { useDidShow, useDidHide } from '@tarojs/taro';
import { query } from '../../api/modules/shop';

function useModel() {
  let didCancel = false;
  const [loading, setLoading] = useState<boolean>(true);
  const [resp, setResp] = useState<IBaseResp<IQueryShop.Resp>>();
  const [didShow, setDidShow] = useState<boolean>(false);
  const fetchModel = async () => {
    setLoading(true);
    const response = await query({
      pageIndex: 1,
      pageSize: 1,
    });
    if (didShow && !didCancel) {
      const tempList: IQueryShop.Resp = [];
      response?.data?.forEach((item) => {
        tempList.push({
          ...item,
          isSelected: false,
        });
      });
      setLoading(false);
      setResp({
        ...response,
        data: tempList,
      });
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
