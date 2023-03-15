declare namespace INutuiTaro {
  interface PickerOption extends ProvinceOption {
    text?: string;
    value?: string;
    children?: PickerOption[];
    disabled?: string;
    className?: string | number;
  }
  interface ProvinceOption {
    name?: string;
    code?: string;
    provinceCode?: string;
    children?: PickerOption[];
  }
}
