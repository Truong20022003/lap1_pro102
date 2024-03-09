import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const DemoInput = () => {

    const [text, setText] = useState('')
    const handleChangeText = (inputText) =>{
        setText(inputText)
    }
  return (
    <View>
      <TextInput placeholder='mời nhập'
      onChange={handleChangeText}
      value={text}></TextInput>
    </View> 
  )
}

export default demo3

const styles = StyleSheet.create({})