import { CellGroup, Cell, Avatar } from '@nutui/nutui-react-taro';
import { CustomTabbarPlaceholder, Icon } from '@/components';
import { subPageNavigate } from '@/utils';
import { CELL_LIST } from '@/constants';
import './index.scss';

export default function Page() {
  const onCell = (item: IBaseSelectOption) => {
    subPageNavigate(item.value, {
      id: 123123123123,
    });
  };
  return (
    <>
      <Avatar
        size="large"
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
      <CellGroup>
        {CELL_LIST.map((item: IBaseSelectOption) => {
          return (
            <Cell
              title={item.label}
              extra={<Icon name="right-arrow" />}
              onClick={() => onCell(item)}
            />
          );
        })}
      </CellGroup>
      <CustomTabbarPlaceholder />
    </>
  );
}
