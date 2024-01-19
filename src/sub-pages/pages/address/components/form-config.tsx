import { useState } from 'react';
import { View } from '@tarojs/components';
import { Form, Input, Picker, Cell, Button, TextArea } from '@nutui/nutui-react-taro';
import { create, edit } from '../../../../api/modules/address';
import { Icon } from '../../../../components';
import { genCascadeData } from '../../../../utils';
import { goBack } from '../../../../utils/navigate';

const option = genCascadeData();

export default function FormConfig(props: FormConfig) {
  const [form] = Form.useForm();
  const { id } = props;
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pickerTitle, setPickerTitle] = useState('请选择城市');
  const [pickerValue, setPickerValue] = useState<Array<number | string>>([]);

  const onConfirm = (chooseData: INutuiTaro.PickerOption[], values: Array<number | string>) => {
    console.log(`values----->：`, values);
    console.log(`chooseData----->：`, chooseData);
    const text = chooseData.map((item) => item.text).join('');
    setPickerTitle(text);
    setPickerValue(values);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onOpen = () => {
    setVisible(true);
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
      <Form form={form} divider labelPosition="right" onFinish={onFinish}>
        <Form.Item label="姓名" name="username" rules={[{ required: true, message: '请输入姓名' }]}>
          <Input placeholder="请输入姓名" type="text" />
        </Form.Item>
        <Form.Item
          label="选择城市"
          name="code"
          required
          rules={[
            {
              validator: () => {
                return pickerValue?.length <= 0;
              },
              message: '请选择城市',
            },
          ]}
        >
          <Cell
            style={{
              padding: 0,
            }}
            extra={
              <>
                <View style={{ width: '100%' }}>{pickerTitle}</View>
                <Icon name="right-arrow" />
              </>
            }
            onClick={onOpen}
          />
        </Form.Item>
        <Form.Item
          label="详细地址"
          name="address"
          rules={[
            { required: true, message: '请输入详细地址' },
            // { max: 15, message: '详细地址不能超过15个字' },
          ]}
        >
          <TextArea placeholder="请输入详细地址" rows={1} autoSize />
        </Form.Item>
      </Form>
      <Button loading={loading} block type="primary" onClick={() => form.submit()}>
        确认
      </Button>
      <Picker
        visible={visible}
        title={pickerTitle}
        // @ts-ignore
        options={option}
        onClose={onClose}
        // @ts-ignore
        onConfirm={(list: INutuiTaro.PickerOption[], values) => onConfirm(list, values)}
      />
    </>
  );
}
