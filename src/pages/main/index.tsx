import { useState } from 'react';
import { View } from '@tarojs/components';
import { Button, Picker, Cell } from '@nutui/nutui-react-taro';
import { getCascadeData } from '../../utils/cascade-data';
import './index.scss';

const option = getCascadeData();

export default function Main() {
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
      <View className="main">首页</View>
      <Button type="primary" className="btn">
        主要按钮
      </Button>
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
      <View>
        {Array(50)
          .fill('1')
          .map((item) => {
            return <View key={item}>{item}</View>;
          })}
      </View>
      <View>底部</View>
    </>
  );
}
