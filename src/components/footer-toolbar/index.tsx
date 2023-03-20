import { View } from '@tarojs/components';
import React from 'react';
import './index.scss';

function FooterToolbar(props: IFooterToolbar) {
  const { className = '', placeholderClassName = '', children } = props;
  return (
    <>
      <View className={`footer-toolbar-placeholder ${placeholderClassName}`} />
      <View className={`footer-toolbar-container ${className}`}>{children}</View>
    </>
  );
}

export default FooterToolbar;
