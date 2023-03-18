declare namespace IQueryBiz {
  type List = ListItem[];
  interface ListItem {
    id: number;
    title: string;
    price: number;
    goodsPicUrl: string;
  }
  type RequestParam = Partial<{
    id?: number;
    title?: string;
    price?: number;
  }> & {
    pageIndex: number;
    pageSize: number;
  };

  interface DelParam {
    id: number;
    apiType: 'BIZ';
  }
  interface Resp {
    list: List[];
    page: CommonPage;
  }
}

export = IQueryBiz;
export as namespace IQueryBiz;
