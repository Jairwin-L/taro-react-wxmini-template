type IBaseSelect = IBaseSelectOption[];
interface IBaseSelectOption {
  value: string;
  label: string;
}

type QueryStringKey = 'id';

type IPagePreFix =
  | 'main'
  | 'mine'
  | 'address'
  | 'collection'
  | 'change-password'
  | 'address/add'
  | 'address/edit';

type IEnvVersion = 'release' | 'trial' | 'develop';
