import { query } from '../../api/modules/biz';
import { useEffect, useState } from 'react';

export function useModel() {
  const [resp, setResp] = useState<IBaseResp<IQueryBiz.Resp>>();
  const fetchMain = async () => {
    const response = await query({
      pageIndex: 1,
      pageSize: 1,
    });
    setResp(response);
  };
  useEffect(() => {
    fetchMain();
  }, []);
  return resp || {};
}
