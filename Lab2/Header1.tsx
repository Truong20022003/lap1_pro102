import { View, Text, Image } from 'react-native'
import React, { FC, memo } from 'react'
import { UserType } from './Main1';
type HeaderType = {
  user: UserType;
}
export const Header1: FC<HeaderType> = memo(props => {
  const {user} = props
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
      resizeMode='center'
      style={{height: 80, width: 80}}
      source={{uri: user.avatar}}></Image>
      <View>
        <Text>Chào ngày mới</Text>
      <Text>{user.name}</Text>
      </View>
      
    </View>
  )
})

