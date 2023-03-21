type IBaseSelect = IBaseSelectOption[];
interface IBaseSelectOption {
  value: string;
  label: string;
}

type QueryStringKey = 'id';

type IPagePreFix =
  | 'main'
  | 'shop'
  | 'mine'
  | 'address'
  | 'collection'
  | 'change-password'
  | 'address/add'
  | 'address/edit'
  | 'pay';

type IEnvVersion = 'release' | 'trial' | 'develop';
