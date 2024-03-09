import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const demo1 = () => {
  return (
    <View style={styles.header}>
      <Text>demo1</Text>
    </View>
  )
}

export default demo1

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        
    }
})