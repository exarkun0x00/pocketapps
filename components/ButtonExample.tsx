import * as React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, List, useTheme,FAB } from 'react-native-paper';
import Pal from './Nomade';

const ButtonExample = () => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <List.Section title="Text button">
        <View style={[styles.row,{marginBottom:70}]}>
          <Pal>
        <FAB
    label="Pay with Solana"
    icon="plus"
  /> 
  </Pal>
  <Pal>
        <FAB
    label="Subscriber with Solana"
    icon="plus"
  /> 
  </Pal>
          <Pal>
          <Button mode="outlined"  style={styles.button}>
          Pay with 
          </Button>
          </Pal>
        </View>

      </List.Section>
      {/*
      
       <Pal>
          <Button style={styles.button}>
            Default
          </Button>
          </Pal>
          <Pal>
          <Button
            color={colors.accent}
            style={styles.button}
          >
            Custom
          </Button>
          </Pal>
          <Pal>
          <Button mode="contained" style={styles.button}>
            Default
          </Button>
          </Pal>
      
      
      
      
      
      <List.Section title="Outlined button">
        <View style={styles.row}>
         
          <Button
            mode="outlined"
            disabled
            onPress={() => {}}
            style={styles.button}
          >
            Disabled
          </Button>
          <Button
            mode="outlined"
            icon="camera"
            onPress={() => {}}
            style={styles.button}
          >
            Icon
          </Button>
          <Button
            mode="outlined"
            loading
            onPress={() => {}}
            style={styles.button}
          >
            Loading
          </Button>
          <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.button}
            labelStyle={{
              fontWeight: '800',
              fontSize: 18,
            }}
          >
            Custom Font
          </Button>
        </View>
      </List.Section> */}
      {/* <List.Section title="Contained button">
        <View style={styles.row}>
            <Pal>
          <Button mode="contained" onPress={() => {}} style={styles.button}>
            Default
          </Button>
          </Pal>
          <Button
            mode="contained"
            color={colors.accent}
            onPress={() => {}}
            style={styles.button}
          >
            Custom
          </Button>
          <Button
            mode="contained"
            disabled
            onPress={() => {}}
            style={styles.button}
          >
            Disabled
          </Button>
          <Button
            mode="contained"
            icon="camera"
            onPress={() => {}}
            style={styles.button}
          >
            Icon
          </Button>
          <Button
            mode="contained"
            loading
            onPress={() => {}}
            style={styles.button}
          >
            Loading
          </Button>
        </View>
      </List.Section> */}
      {/* <List.Section title="Custom icon">
        <View style={styles.row}>
          <Button
            mode="outlined"
            icon={{
              uri:
                'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
            }}
            onPress={() => {}}
            style={styles.button}
          >
            Remote image
          </Button>
          <Button
            mode="outlined"
            icon={{
                uri:
                  'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
              }}            onPress={() => {}}
            style={styles.button}
          >
            Required asset
          </Button>
          <Button
            mode="outlined"
            icon={({ size }) => (
              <Image
              source={{
                uri:
                  'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
              }}
                style={{ width: size, height: size, borderRadius: size / 2 }}
              />
            )}
            onPress={() => {}}
            style={styles.button}
          >
            Custom component
          </Button>
        </View>
      </List.Section> */}
    </ScrollView>
  );
};

ButtonExample.title = 'Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  button: {
    margin: 4,
  },
});

export default ButtonExample;
