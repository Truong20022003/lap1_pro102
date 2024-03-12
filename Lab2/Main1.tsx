import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

import Body1 from './Body1'

import { Header1 } from './Header1'
import { Footer1 } from './Footer1'



export type UserType = {
  name: string;
  avatar: string;
}
const Main1 = () => {
  const [footer, setFooter] = useState('')
  const colors = ['white', 'gray', 'yellow', 'red', 'blue']
  const handleSub = (inputValue: string) => {
    setFooter(inputValue)
  }
  const [user, setUser] = useState<UserType>({
    name: 'Trần Quang Trường',
    avatar: "https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg"
  })
  const [lastTimeUpdate, setLastTimeUpdate] = useState('ban chua cap nhat thong tin')

  const [footerColor, setFooterColor] = useState(colors[0])
  const handleUpdateInfo = useCallback((mUser: UserType) => { setUser(mUser) }, [])
  const handleRandomColor = useCallback(() => {
    const numberRanDom = Math.floor(Math.random() * colors.length)
    setFooterColor(colors[numberRanDom])
  }, [])

  useEffect(() => {
    const currenrdate = new Date()
    const datetime =
      currenrdate.getDate() +
      '/' +
      (currenrdate.getMonth() + 1) +
      '/' +
      currenrdate.getFullYear() +
      ' ' +
      currenrdate.getHours() +
      ':' +
      currenrdate.getMinutes() +
      ':' +
      currenrdate.getSeconds();
    setLastTimeUpdate(datetime)
  }, [user])
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{backgroundColor: '#fff', height: 80,justifyContent:'center'}}>
        <Header1 user={user} />
      </View>

      <View style={{flex: 1}}>
        <Body1 onUpdateInFor={handleUpdateInfo}
          onClickChangeBgFooter={handleRandomColor} />
      </View>
      <View>
        <Footer1 timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
      </View>

    </View>
  )
}

export default Main1