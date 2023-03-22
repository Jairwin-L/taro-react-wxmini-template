import { useState } from 'react';
import { View, Image } from '@tarojs/components';
import { Tabs } from '@nutui/nutui-react-taro';
import { PageLayout, CustomTabbarPlaceholder } from '../../components';
import useModel from './model';
import './index.scss';

export default function Category() {
  const model = useModel();
  const [tabValue, setTabValue] = useState('0');

  return (
    <PageLayout useModel={model}>
      <Tabs
        style={{ height: '100vh' }}
        value={tabValue}
        onChange={({ paneKey }) => {
          if (Number(tabValue) === Number(paneKey)) return;
          setTabValue(paneKey);
        }}
        titleScroll
        direction="vertical"
        autoHeight
      >
        {model?.data?.map((item: IQueryCategory.ListItem) => (
          <Tabs.TabPane key={item.id} title={item.name}>
            {item?.categoryList?.map((sbuItem) => (
              <View>
                <View>{sbuItem.name}</View>
                <Image className="category-image" src={sbuItem.wapBannerUrl as string} />
              </View>
            ))}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <CustomTabbarPlaceholder />
    </PageLayout>
  );
}
