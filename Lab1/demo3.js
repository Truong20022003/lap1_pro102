import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const DemoUseEffect = () => {
    const [count,setCount] = useState(0)
    useEffect(() => {
        //hàm đc gọi sau mỗi lần render
        console.log('có thay đổi giá trị')
    }, [])
  return (
    <View>
      <Text>DemoUseEffect: {count}</Text>
      <Button title='tăng' onPress={() => setCount(count+1)}></Button>
    </View>
  )
}

export default DemoUseEffect

const styles = StyleSheet.create({})