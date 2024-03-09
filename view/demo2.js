import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import App from '../App'

const DemoWraper = ({children}) => {
  return (
    <View style={styles.wraper}>
      {children}
    </View>
  )
}



const styles = StyleSheet.create({
    wraper: {
        padding: 20,
        backgroundColor: '#ff0000',
        borderRadius: 20, 
        margin: 10
    }
})
const APP = () =>{
    return(
        <DemoWraper>
            <Text>Xin chào các bạn</Text>
        </DemoWraper>
    )
}
export default App