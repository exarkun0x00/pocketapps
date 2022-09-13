import React, { useState, useEffect,useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import { qrscanBehaviour, useQrcode, _handleOpenURL } from '../utility/pocktetconfig';
import Displaycard from './Displaycard';
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Camerascreen({props,navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [qrcontent,setQrcontent] = useQrcode()
  const dimensions = useRef(Dimensions.get("window"));
  const screenWidth = dimensions.current.width;
  const height = Math.round((screenWidth * 16) / 9);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (qrcontent) {
    console.log(qrcontent)
    _handleOpenURL({uri:qrcontent})
    //  navigation.navigate('Appclipview',{weburl:qrcontent})
      // return <Displaycard close={()=>setQrcontent(null)} uri={qrcontent} />
      
  }
  return (
    <Camera style={styles.camera} 
            type={type}
            onBarCodeScanned={({data})=>{
                setQrcontent(data)
            }}
            ratio="16:9"
      style={{
        height: height,
        width: "100%"}}
            >
        <View style={styles.buttonContainer}>
         
            <MaterialCommunityIcons name="qrcode-scan" color="white" size={99} />
            <Text style={styles.text}> Scan qr code </Text>
        </View>
      </Camera>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
  
  //  {/* <TouchableOpacity
  //           style={styles.button}
  //           onPress={() => {
  //             setType(
  //               type === Camera.Constants.Type.back
  //                 ? Camera.Constants.Type.front
  //                 : Camera.Constants.Type.back
  //             );
  //           }}> */}
  //         {/* </TouchableOpacity> */}

//   Platform.OS === 'web' &&
//   (
   
//    <iframe src="" allow="microphone; camera;">
//      <Camera style={styles.camera} 
//            type={type}
//            onBarCodeScanned={(scannedcode)=>{
//                const {data} = scannedcode
//                setQrcontent(scannedcode)
//                qrscanBehaviour({uri:data})
//            }}
           
//            >
//        <View style={styles.buttonContainer}>
//          <TouchableOpacity
//            style={styles.button}
//            onPress={() => {
//              setType(
//                type === Camera.Constants.Type.back
//                  ? Camera.Constants.Type.front
//                  : Camera.Constants.Type.back
//              );
//            }}>
//            <Text style={styles.text}> Flip </Text>
//          </TouchableOpacity>
//        </View>
//      </Camera>
//      </iframe>
//  )