import { View, Text, ToastAndroid, TextInput, TouchableOpacity } from 'react-native'
import React, { FC, memo, useState } from 'react'
import { UserType } from './Main1'


const colors = ['white', 'gray', 'yellow', 'red', 'blue']
export type BodyType = {
  onUpdateInFor: (user: UserType) => void
  onClickChangeBgFooter: ()=> void
}
const Body1: FC<BodyType> = memo(props => {
  const { onUpdateInFor, onClickChangeBgFooter } = props;
  const [name, setName] = useState('')
  const [linkImg, setLinkImg] = useState('')
  const handleChangeInfo = () => {
    if (name.length > 0 && linkImg.length > 0) {
      onUpdateInFor({name,avatar: linkImg})
    }else{
      ToastAndroid.show('Khong duoc de trong',ToastAndroid.SHORT)
    }
  }
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <TextInput
    style={{ borderBottomWidth: 0.5, marginHorizontal: 20, marginVertical: 10,width: '100%'}}
      onChangeText={setName}
      value={name}
      placeholder="Nhập tên của bạn"
    />
    <TextInput
    style={{ borderBottomWidth: 0.5, marginHorizontal: 20, marginVertical: 10,width: '100%'}}
      onChangeText={setLinkImg}
      value={linkImg}
      placeholder="Nhập đường dẫn ảnh của bạn"
    />
    <TouchableOpacity onPress={onClickChangeBgFooter} style={{alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'aqua',
                                            paddingVertical: 10,
                                            margin: 30,
                                            width: '50%'}}>
      <Text>ĐỔI MÀU FOOTER</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleChangeInfo} style={{alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'aqua',
                                            paddingVertical: 10,
                                            marginHorizontal: 30,
                                            width: '50%'}}>
      <Text>Cập nhật thông tin</Text>
    </TouchableOpacity>
  </View>
    </View>
  )
})



export default Body1