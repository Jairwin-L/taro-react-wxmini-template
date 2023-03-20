import { useState } from 'react';
import { View } from '@tarojs/components';
import { Form, Input, Picker, Cell, Button } from '@nutui/nutui-react-taro';
import { create, edit } from '../../../../api/modules/address';
import { getCascadeData } from '../../../../utils';
import './index.scss';
import { useQueryString } from '../../../../hooks';

const option = getCascadeData();

export default function AddressAdd() {
  const id = useQueryString<QueryStringKey>('id');
  console.log(`id----->：`, id);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pickerTitle, setPickerTitle] = useState('请选择地区');
  const [pickerValue, setPickerValue] = useState<Array<number | string>>([]);

  const onConfirm = (values: Array<number | string>, chooseData: INutuiTaro.PickerOption[]) => {
    console.log(`values----->：`, values);
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
  const onFinish = async (values) => {
    console.log(`values----->：`, values);
    setLoading(true);
    try {
      let result: IBaseResp<string> = {};
      if (id) {
        result = await edit({
          name: 'name',
          id: 123,
        });
      } else {
        result = await create({
          name: 'name',
        });
      }
      setLoading(false);
      if (!result?.success) return;
    } catch (error) {
      setLoading(false);
      console.error(`error----->：`, error);
    }
  };
  // rule: 官方示例暂无提供ts类型导出
  // const customValidator = (rule: any, value: string) => {
  //   return /^\d+$/.test(value);
  // };

  // const valueRangeValidator = (rule: any, value: string) => {
  //   return /^(\d{1,2}|1\d{2}|200)$/.test(value);
  // };
  return (
    <>
      {/* TODO:还有问题，待官方修复 */}
      <Form onFinish={(values) => onFinish(values)}>
        <Form.Item label="姓名" name="username" rules={[{ required: true, message: '请输入姓名' }]}>
          <Input className="nut-input-text" placeholder="请输入姓名" type="text" />
        </Form.Item>
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
        <Button loading={loading} block type="primary" formType="submit">
          确认
        </Button>
      </Form>
    </>
  );
}
