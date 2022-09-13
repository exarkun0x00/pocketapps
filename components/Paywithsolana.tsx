import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button,FAB } from 'react-native-paper'

const Paywithsolana = () => {
  return (
<FAB
    label="Pay with Solana"
    icon="plus"
    onPress={() => console.log('Pressed')}
  /> 
  )
}

export default Paywithsolana

const styles = StyleSheet.create({})