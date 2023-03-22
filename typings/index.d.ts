type IBaseSelect = IBaseSelectOption[];
interface IBaseSelectOption {
  value: string;
  label: string;
}

type QueryStringKey = 'id';

type IPagePreFix =
  | 'main'
  | 'category'
  | 'shop'
  | 'mine'
  | 'address'
  | 'collection'
  | 'change-password'
  | 'address/add'
  | 'address/edit'
  | 'login'
  | 'register'
  | 'pay';

type IEnvVersion = 'release' | 'trial' | 'develop';
