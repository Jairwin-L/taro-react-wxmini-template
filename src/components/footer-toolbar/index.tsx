import { View } from '@tarojs/components';
import './index.scss';

export default function FooterToolbar(props: IFooterToolbar) {
  const { className = '', placeholderClassName = '', children } = props;
  return (
    <>
      <View className={`footer-toolbar-placeholder ${placeholderClassName}`} />
      <View className={`footer-toolbar-container ${className}`}>{children}</View>
    </>
  );
}
