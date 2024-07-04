import { type PickerOption } from '@nutui/nutui-react-taro';

declare namespace INutuiTaro {
  type PickerOptions = PickerOption & ProvinceOption;
  interface ProvinceOption {
    name?: string;
    code?: string;
    provinceCode?: string;
    children?: PickerOption[];
  }
}
export = INutuiTaro;
export as namespace INutuiTaro;
