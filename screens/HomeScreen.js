import { View, Text,Button } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import React from 'react'

const HomeScreen = () => {

    const navigation=useNavigation()

  return (
    <View>
      <Text>I m the Home Screen</Text>
      <Button title="Go To Chat Screen" onPress={()=>navigation.navigate('Chat')}/>
    </View>
  )
}

export default HomeScreen