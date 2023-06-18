declare namespace IQueryShop {
  type List = ListItem[];
  interface ListItem {
    id: number;
    title?: string;
    price: number;
    amount: number;
    goodsPicUrl?: string;
    desc?: string;
    isSelected?: boolean;
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
  interface EditParam extends Param {
    id: number;
  }
  interface DelParam {
    id: number;
  }
  type Resp = List;
}
