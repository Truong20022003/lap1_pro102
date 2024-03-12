import { View, Text, ViewStyle } from 'react-native'
import React, { FC, memo } from 'react'
type FooterType = {
  timeUpdate: string;
  backgroundColor: string;
}
export const Footer1: FC<FooterType> = memo(props => {
const {timeUpdate, backgroundColor} = props;
  return (
    <View style={ containerStyle({
      height: 100,
      backgroundColor: backgroundColor,
      alignItems: 'center',
      justifyContent: 'center'
    })}>
      <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
        Thời gian bạn cập nhật thông tin: {timeUpdate}
      </Text>
    </View>
  )
})

const containerStyle = (props: ViewStyle) =>({
  ...props,
})