import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'
import Displaycard from './Displaycard';
import { BigFab } from './Firstscreen';

const Appclipview = ({route,navigation}) => {
    const { weburl,downloadlink } = route.params;
    console.log(route.params)
    const [qrcontent,setQrcontent] = React.useState(false)
    React.useEffect(() => {
        const isAppclipUp = async ()=>{
            let res =await   fetch(weburl)
            console.log(res.status)
            if(res.status.toString() === '200'){
              setQrcontent(!qrcontent)
            }
      }
      isAppclipUp()
    }, [])

if(qrcontent){
    return (
        <View style={{flex:1}}>
        <WebView
        style={styles.container}
          source={{ uri: weburl.toLowerCase() }}
         />
<BigFab

icon="information-outline" onPress={()=>navigation.navigate('Info',{weburl,downloadlink})}
/>

        </View>

)
}
// if (!qrcontent) {
    return (
        <View style={{flex:1}}>

        <WebView
        style={styles.container}
                  source={{ uri: 'https://comingsoonapp.vercel.app' }}
         />
         <BigFab

icon="information-outline" onPress={()=>navigation.navigate('Info',{weburl,downloadlink})}
/>
</View>

    ) 
// }

// return null


}

export default Appclipview

const styles = StyleSheet.create({container:{
    flex:1
}})
