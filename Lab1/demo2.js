import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const demo2 = () => {
    const inputRef = useRef(null)
    const focusInPut = () => {
        inputRef.current.focus()
    }
  return (


    <View>
      <input ref={inputRef}/>
      <Button title='Focus input' onPress={focusInPut}/>
    </View>
  )
}

export default demo2

const styles = StyleSheet.create({})