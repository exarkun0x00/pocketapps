import React from 'react';
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const  MainHeader = (props) => {
  return (
    <Appbar style={styles.bottom}>
    <Appbar.Action
      icon="archive"
      onPress={() => console.log('Pressed archive')}
     />
     <Appbar.Content title="Pocketapp" subtitle={"See in Qr Code"} />

   </Appbar>
  );}


  
const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

  export default MainHeader