import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Dem = () => {
    const[count,setCount] = useState('')
    const tang = () => {
        setCount(count + 1)
    }

  return (
    <View>
      <Text>số lần click: {count}</Text>
      <Button title='tăng' onPress={tang }></Button>
    </View>
  )
}

export default Dem

const styles = StyleSheet.create({})