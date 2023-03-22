declare namespace IQueryCategory {
  type List = ListItem[];
  interface ListItem {
    id: string;
    superCategoryId?: string;
    name: string;
    frontDesc: string;
    bannerUrl: string;
    iconUrl?: string;
    wapBannerUrl?: string;
    categoryList?: ListItem[];
  }
  interface QueryParam extends CommonPage {
    name?: string;
  }
  interface Param {
    name: string;
  }
  interface DetailParam {
    id: number;
  }
  interface DelParam {
    id: number;
  }
  type Resp = List;
}
