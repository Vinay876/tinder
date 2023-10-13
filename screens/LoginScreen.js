import { View, Text, ImageBackground,StyleSheet,TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'
// import {useTailwind} from 'tailwind-rn'
const LoginScreen = () => {
  const tw = useTailwind();  

  // useLayoutEffect(()=>{
  //   navigation.setOptions({
  //     headerShown:false,
  //   });
  // },[]);
  return (
    <View style={styles.image}>
   <ImageBackground 
   resizeMode='cover'
   style={styles.image}
   source={{uri:"https://tinder.com/static/tinder.png"}}
   >
   <TouchableOpacity>
   {/* <TouchableOpacity style={tw('absolute bottom-40 w-52')}> */}
    <Text>Sign in & get swiping</Text>
   </TouchableOpacity>
   </ImageBackground>
    </View>
  )
}

const styles=StyleSheet.create({
  image:{
   flex:1
  }
})

export default LoginScreen