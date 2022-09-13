import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { MainEditor } from './Pocketsheet';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
import { Publish } from './Pocketsheet';
import Pocketsheet from './Pocketsheet';
import Appstore from './Appstore';
import Apps from './Firstscreen';
import Firstscreen from './Firstscreen';
import Camerascreen from './Camerascreen';
const Stack = createStackNavigator(); //Stack
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Appclipview from './Appclipview';
import AppInfo from './AppInfo';
import Authscreen from './Authscreen';

function CustomNavigationBar({ navigation, back,route }) {

    return (
      <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="Pocket" />
        <Appbar.Action icon="information-outline" onPress={()=>navigation.navigate('Info')}  />
      </Appbar.Header>
    );
  }
export default function MainNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator 

initialRouteName="Welcome"
screenOptions={{
  header: (props) => <CustomNavigationBar {...props} />,
}}

>
  <Stack.Screen component={Camerascreen} name="Camera" />
<Stack.Screen 
          name="Appstore"
          component={Appstore}
        />
        <Stack.Screen
          name="Publish"
          component={Publish}
        />
<Stack.Screen
          name="Canvas"
          component={MyTabs}
        />
        <Stack.Screen
          name="Appclipview"
          component={Appclipview}
        />

<Stack.Screen
          name="Info"
          component={AppInfo}
        />
        <Stack.Screen
          name="Welcome"
          component={Authscreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const Tab = createMaterialBottomTabNavigator();

export function  MyTabs() {
  return (
    <Tab.Navigator
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    // barStyle={{ paddingBottom: 48 }}
    
    >
    <Tab.Screen   options={{
        tabBarLabel: 'Pick',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons  name="puzzle" color={color} size={26} />
        ),
      }} name="Home" component={Pocketsheet} />
      <Tab.Screen name="Settings" component={MainEditor}
      
      options={{
        tabBarLabel: 'Edit',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons  name="puzzle-edit" color={color} size={26} />
        ),
      }}
      
      />
   <Tab.Screen name="Publish" component={Publish}
      
      options={{
        tabBarLabel: 'Publish',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons  name="share" color={color} size={26} />
        ),
      }}
      
      />

    </Tab.Navigator>
  );
}


{/* <Stack.Screen 
          name="Editor"
          component={MainEditor}
        />
<Stack.Screen 
          name="Home"
          component={Pocketsheet}
        /> */}
        {/* <Stack.Screen 
          name="Menu"
          component={Menu}
        /> */}