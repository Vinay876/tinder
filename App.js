import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    <NavigationContainer>
    {/* HOC-Higher Order Component */}
      <AuthProvider>
      {/* Passes down the cool auth stuff to Children...*/}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
//  import { Text, View,StyleSheet } from 'react-native';

// export default function App() {
//   return (
//    <View className="flex items-center justify-center bg-white">
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// // const style=sty
