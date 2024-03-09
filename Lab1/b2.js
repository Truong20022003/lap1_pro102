import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SectionView2 = ({title, imageSoure,description}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={imageSoure}></Image>
      <Text>{description}</Text>
    </View>
  )
}


const App2 = () =>{
    return (
        <View>
            <SectionView2
            title="chào các bạn"
            imageSoure={{uri: ''}}
            description="đây là bài học đầu tiên"></SectionView2>
        </View>
    )
}
export default SectionView2

const styles = StyleSheet.create({
    
})