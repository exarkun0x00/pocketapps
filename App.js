import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { Caption, Provider, Title } from 'react-native-paper';
import { useSnack } from './api/state';
import MainNavigation from './components/Maintabbar';
import { currentanonymouslogin } from './api/config';
import * as Updates from 'expo-updates';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
export default function App() {
//  const snack =  useSnack()
//  const {clips} = snack

 React.useEffect(()=>{
  
  const isupdates =async ()=>{
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        // ... notify user of update ...
        Updates.reloadAsync();
      }
    } catch (e) {
      // handle or log error
    }
  }
isupdates()
 },[])


  return ( 
    <PaperProvider theme={theme}>
  <MainNavigation />

  </PaperProvider>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
