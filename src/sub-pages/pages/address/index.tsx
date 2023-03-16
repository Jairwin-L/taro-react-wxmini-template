import { useState } from 'react';
import { View } from '@tarojs/components';
import { Picker, Cell } from '@nutui/nutui-react-taro';
import { useQueryString } from '../../../hooks';
import { getCascadeData } from '../../../utils';
import './index.scss';

const option = getCascadeData();

export default function Address() {
  const id = useQueryString<QueryStringKey>('id');
  const [isVisible, setIsVisible] = useState(false);
  const [pickerTitle, setPickerTitle] = useState('请选择地区');
  const [pickerValue, setPickerValue] = useState<Array<number | string>>([]);

  const onConfirm = (values: Array<number | string>, chooseData: INutuiTaro.PickerOption[]) => {
    const text = chooseData.map((item) => item.text).join('');
    setPickerTitle(text);
    setPickerValue(values);
  };
  const onClose = () => {
    setIsVisible(false);
  };
  const onOpen = () => {
    setIsVisible(true);
  };
  return (
    <>
      地址:{id}
      <Cell title="请选择城市" desc={pickerTitle} onClick={onOpen} />
      <View catchMove>
        <Picker
          isVisible={isVisible}
          title={pickerTitle}
          defaultValueData={pickerValue}
          // @ts-ignore
          listData={option}
          onClose={onClose}
          // @ts-ignore
          onConfirm={(values, list: INutuiTaro.PickerOption[]) => onConfirm(values, list)}
        />
      </View>
    </>
  );
}
