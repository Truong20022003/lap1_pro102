import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'



const Child = ({onClick}) => {
    
  return (
    <Button onClick={onClick}>Click me</Button>
  )
}


const parent = ()=>{
    const [count,setCount] = useState(0)
    const handleClick = useCallback(
        () => {
            setCount(count + 1)
        },
        [count]
    )
    return(
        <View>
            <Text>Count {count}</Text>
            <Child onClick={handleClick}/>
        </View>
    )
}


export default parent

const styles = StyleSheet.create({})