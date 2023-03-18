import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
import React from 'react';
import './index.scss';

function FooterToolbar(props: IFooterToolbar) {
  const { placeholderHeight = 100, className = '', children } = props;
  return (
    <>
      <View className={`footer-placeholder`} style={{ height: pxTransform(placeholderHeight) }} />
      <View className={`footer-toolbar-container ${className}`}>{children}</View>
    </>
  );
}

export default FooterToolbar;
