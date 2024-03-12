import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Body from './Body'
import Footer from './Footer'

const Main = () => {
    const [footerInfo, setFooterInfo] = useState('')
    const handleSubmit = (inputValue:string) =>{
        setFooterInfo(inputValue)
    }
  return (
    <div>
        <Header/>
        <Body onSubmit={handleSubmit}></Body>
        <Footer info={footerInfo}></Footer>
    </div>
  )
}

export default Main

const styles = StyleSheet.create({})