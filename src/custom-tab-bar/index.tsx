import Taro, { useRouter } from '@tarojs/taro';
import { CoverView, CoverImage } from '@tarojs/components';
import { TAB_BARS } from './const';
import './index.scss';

export default function CustomTabBar() {
  const selectedValue = useRouter().path.split('/').filter(Boolean)[1];
  const onSwitchTab = (item) => {
    if (item.value === selectedValue) return;
    Taro.switchTab({ url: `/pages/${item.value}/index` });
  };

  return (
    <CoverView className="tab-bar">
      <CoverView className="tab-bar-border" />
      {TAB_BARS.map((item) => {
        return (
          <CoverView key={item.value} className="tab-bar-item" onClick={() => onSwitchTab(item)}>
            <CoverImage
              src={selectedValue === item.value ? item.selectedIconPath : item.iconPath}
            />
            <CoverView
              className={`tab-bar-label ${
                selectedValue === item.value ? 'selected-color' : 'normal-color'
              }`}
            >
              {item.label}
            </CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
}
