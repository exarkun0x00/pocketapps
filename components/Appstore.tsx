import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Headline, List,Caption, Button,Card,Avatar,Divider } from 'react-native-paper'
import { BigFab } from './Firstscreen'
import ContentLoader,{ Rect, Circle } from 'react-content-loader/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { authref, currentanonymouslogin, dbref, usemyClips } from '../api/config'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useMyapps } from '../api/hooks'
// ()=><MaterialCommunityIcons
const ListHeaderComponent=(props)=>{
    const {appclips} =props
    return(
        <View style={[styles.container,{padding:9}]}>
            <AvatarList subtitle={"My appclips  "} data={appclips} {...props} />
        </View>
    )
}

const Appstore = ({navigation}) => {
    const [recentsapps, setRecentsapps] = React.useState([])
    const [clips,setClips] = React.useState([])
    const [myapps,hasAuth] = useMyapps()
 
      React.useEffect(() => {
    const FirstTimeSignup= ()=>{
         currentanonymouslogin()
        }

     FirstTimeSignup()
  }, [])

    return (
        <View style={styles.container}>
            <FlatList
            style={styles.container}
            renderItem={({item,key})=>{
                return <List.Item title={item.title} />
            }}
            // data={[{title:'Money'},{title:'Shopping'}]}
            keyExtractor={(item,index)=>`${index}`}
            ListHeaderComponent={()=><ListHeaderComponent appclips={myapps}  navigation={navigation} />}
            
            />

            
            <BigFab 
            
            onPress={() => navigation.navigate('Camera')}
            
            />
        </View>
    )
}


export const AppList = (props)=>{
    return(
        <Card style={{flex:1,marginVertical:6}} >
            <Card.Title {...props}  />
        <FlatList
        horizontal
        keyExtractor={(item,index)=>`${index}`}
        style={{flex:1}}
        focusable
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding:5}}
        ListHeaderComponent={()=>{
            return(
                (<View style={{flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:10}}>
                <TouchableOpacity
                onPress={()=>props.navigation.navigate('Canvas')}
                >
                 <Avatar.Icon icon="plus" size={68} /> 
                 <Caption  ellipsizeMode='middle' style={{textAlign:'center',fontSize:9}}>Make a new app</Caption>
                 {/* <Caption  ellipsizeMode='middle'  style={{textAlign:'center',fontSize:7}}> </Caption > */}
                 </TouchableOpacity>
                 </View>)
            )
        }}
        ListEmptyComponent={HistoriesLoader}
        ItemSeparatorComponent={()=><Divider style={{marginHorizontal:10}} />}
        renderItem={({item})=>{
            console.log(item)
            return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity
                onPress={()=>props.navigation.navigate('Appclipview',{weburl:item.weburl,...item})}
                >
                 <Avatar.Image source={{uri:item.icon}} size={68} /> 
                 <Caption  ellipsizeMode='middle' style={{textAlign:'center',fontSize:9}}>{item.name}</Caption>
                 {/* <Caption  ellipsizeMode='middle'  style={{textAlign:'center',fontSize:7}}>{item.description}</Caption > */}
                 </TouchableOpacity>
                 </View>)
        }}
        {...props}
        />
        </Card>
    )
}


export const AvatarList = (props)=>{
    return(
        <Card style={{flex:1,marginVertical:6}} >
            <Card.Title {...props}  />
        <FlatList
        horizontal
        keyExtractor={(item,index)=>`${index}`}
        style={{flex:1}}
        focusable
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding:5}}
        ListHeaderComponent={()=>{
            return(
                (<View style={{flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:10}}>
                <TouchableOpacity
                onPress={()=>props.navigation.navigate('Canvas')}
                >
                 <Avatar.Icon icon="plus" size={68} /> 
                 <Caption  ellipsizeMode='middle' style={{textAlign:'center',fontSize:9}}>Make a new app</Caption>
                 {/* <Caption  ellipsizeMode='middle'  style={{textAlign:'center',fontSize:7}}> </Caption > */}
                 </TouchableOpacity>
                 </View>)
            )
        }}
        ListEmptyComponent={HistoriesLoader}
        ItemSeparatorComponent={()=><Divider style={{marginHorizontal:10}} />}
        renderItem={({item})=>{
            return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity
                onPress={()=>props.navigation.navigate('Appclipview',{weburl:item.weburl,...item})}
                >
                 <Avatar.Image source={{uri:item.icon}}  size={68} /> 
                 <Caption  ellipsizeMode='middle' style={{textAlign:'center',fontSize:9}}>{item.name}</Caption>
                 {/* <Caption  ellipsizeMode='middle'  style={{textAlign:'center',fontSize:7}}>{item.description}</Caption > */}
                 </TouchableOpacity>
                 </View>)
        }}
        {...props}
        />
        </Card>
    )
}




const HistoriesLoader = props => (
    <ContentLoader
      width={500}
      height={100}
      viewBox="0 0 500 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <Circle cx="46" cy="38" r="38" />
      <Rect x="34" y="83" rx="5" ry="5" width="25" height="10" />
      <Rect x="547" y="222" rx="5" ry="5" width="220" height="10" />
      <Rect x="82" y="150" rx="5" ry="5" width="220" height="10" />
      <Circle cx="137" cy="38" r="38" />
      <Rect x="124" y="83" rx="5" ry="5" width="25" height="10" />
      <Circle cx="228" cy="38" r="38" />
      <Rect x="215" y="83" rx="5" ry="5" width="25" height="10" />
      <Circle cx="320" cy="38" r="38" />
      <Rect x="307" y="83" rx="5" ry="5" width="25" height="10" />
      <Circle cx="410" cy="38" r="38" />
      <Rect x="398" y="83" rx="5" ry="5" width="25" height="10" />
    </ContentLoader>
  )
  

export default Appstore

const styles = StyleSheet.create({container:{
    flex:1
}})



    // React.useEffect(() => {
       
    //     const fetchingThedata =  ()=>{
    //         if(authref.currentUser){
    //             let userID= authref.currentUser.uid
        
            //   dbref.ref('subscribers').child(`${userID}`).child('myappclips').on('value',(snapshot)=>{
            //   snapshot.forEach((childSnapshot) => {
            //     var childKey = childSnapshot.key;
            //     clips.push({key:childKey,...childSnapshot.val()})
            //   });
            // })
    //         setClips(clips)

    //         // console.log(clips)
    //     }
    // }

    //     return ()=> {
    //         fetchingThedata()

    //     }

    // }, [clips])


    // React.useEffect(() => {
    //     const unsubscribe = authref.currentUser ?  dbref.ref('subscribers').child(`${authref.currentUser.uid}`).child('myappclips').on('value',(snapshot)=>{
    //         let clips = []
    //         snapshot.forEach((childSnapshot) => {
    //           var childKey = childSnapshot.key;
    //           clips.push({key:childKey,...childSnapshot.val()})
    //         });
    //         setClips(clips)
    //       }) : []
    //     return () => unsubscribe()
    // }, [clips])



// ()=>{

//     if(authref.currentUser){
//         let userID= authref.currentUser.uid
//         let myapps = []
//       dbref.ref('subscribers').child(`${userID}`).child('myappclips').on('value',(snapshot)=>{

//       snapshot.forEach((childSnapshot) => {
//         var childKey = childSnapshot.key;
//         clips.push({key:childKey,...childSnapshot.val()})
//         myapps.push({key:childKey,...childSnapshot.val()})
//       });
//     })
//     return myapps
//     // console.log(clips)
// }

// }