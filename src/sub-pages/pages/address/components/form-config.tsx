import { useState } from 'react';
import { View } from '@tarojs/components';
import { Form, Input, Picker, Cell, Button } from '@nutui/nutui-react-taro';
import { create, edit } from '../../../../api/modules/address';
import { getCascadeData } from '../../../../utils';
import { goBack } from '../../../../utils/navigate';

const option = getCascadeData();

export default function FormConfig(props: FormConfig) {
  const { id } = props;
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
      goBack();
    } catch (error) {
      setLoading(false);
      console.error(`error----->：`, error);
    }
  };
  return (
    <>
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
