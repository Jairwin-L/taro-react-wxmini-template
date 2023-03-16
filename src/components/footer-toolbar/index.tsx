import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
import React from 'react';
import './index.scss';

function FooterToolbar(props: IFooterToolbar) {
  const { placeholderHeight = 100, className = '', children } = props;
  return (
    <>
      <View className={`footer_placeholder`} style={{ height: pxTransform(placeholderHeight) }} />
      <View className={`footer_toolbar_container ${className}`}>{children}</View>
    </>
  );
}

export default FooterToolbar;
