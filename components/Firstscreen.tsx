import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import Camerascreen from './Camerascreen';
import MainHeader from './MainHeader';

// import Displaycard from './Displaycard';
// import Homescreen from './Homescreen';
// import { useQrcode } from '../utility';
import 'react-native-reanimated'


export default function Firstscreen() {

  return (
    <View style={styles.container}>
    <Camerascreen />
      <StatusBar style="auto" />

    </View>
  );
}


export const BigFab = (props)=>{
  return(
    <FAB
    style={styles.fab}
    // small
    icon="qrcode-scan"
    onPress={() => console.log('Pressed')}
    {...props}
  />
  )
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
