import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Linking, Share, ScrollView } from 'react-native';
import BottomSheet, { BottomSheetFlatList, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import CardExample from './CardExample';
import { snackapp, updateDescription, updateName, useSnack } from '../api/state';
import { FlatList } from 'react-native-gesture-handler';
import { IconButton,Caption,TextInput,Button,Avatar, TouchableRipple, List,Portal,FAB, Title, Divider } from 'react-native-paper';
import { publishapp } from '../utility/utility';
import useImagePickerExample, { getschema, pick_uploaded_media_assets } from '../api/utility';
import { deepMap } from 'react-children-utilities';
import * as WebBrowser from 'expo-web-browser';
import QRCode from 'react-native-qrcode-svg';
import ConfettiCannon from 'react-native-confetti-cannon';
import { BlurView } from 'expo-blur';
import { usebuildingappsteps } from '../api/hooks';
import ButtonExample from './ButtonExample';
import DraggableFlatList from "react-native-draggable-flatlist";
import TextInputExample from './TextinputExample';

const Pocketsheet = ({props,navigation}) => {
  const [imageassets,pickImage] = useImagePickerExample()

  const [active,setActive] = React.useState(false)
  const snack = useSnack()
  const {clips} = snack //we get clips from the snack
  // renders
  return (
    <ScrollView  style={styles.container}>
    <CardExample />
    <ButtonExample/>
    {/* <TextInputExample /> */}
    </ScrollView>
  );
};


export const MainEditor = (props)=>{

  const [imageassets,pickImage] = useImagePickerExample()

  const [active,setActive] = React.useState(true)
  const snack = useSnack()
  const {clips} = snack //we get clips from the snack
  const [data,setData] = React.useState(clips)

 const  renderItem = ({ item, index, drag, isActive }) => {
    return (
      <>
      <TouchableOpacity

onPress={()=>{
setActive(!active)
}}


        style={{
          // height: 100,
          backgroundColor: isActive ? "blue" : item.backgroundColor,
        }}
        onLongPress={drag}
      >

        {item}
        

      </TouchableOpacity>
    <Editorx app={clips} active={active} clipindex={index}   >
 {item}
 </Editorx>   
    
    </>
    );
  };


return(
  <DraggableFlatList
  data={clips}
  contentContainerStyle={{paddingHorizontal:12,paddingVertical:9}}
  ItemSeparatorComponent={()=><Divider style={{padding:5,backgroundColor:'whitesmoke'}} />}
  renderItem={renderItem}
  keyExtractor={(item, index) => `draggable-item-${index}`}
  onDragEnd={({ data }) => {
    snackapp.set({clips:data})
  }}
/>
)
}


const QrCodeTile = ({weburl})=>{
  return (
    <QRCode
    logoBackgroundColor='transparent'
      value={weburl}
    />
  )
}



export const Publish =(props)=>{
  const [imageassets,pickImage] = useImagePickerExample()
  const isImage  = imageassets ? <Avatar.Image   style={{alignItems:'center'}} size={99} source={{uri:imageassets}} /> : <Avatar.Icon size={80} icon="image" />
  // const [shippingstatus, setshippingstatus] = React.useState(null)
  // const [loading, setloading] = React.useState(false)
  const [appInfo,loading,hasAuth] =usebuildingappsteps()

  const shareWithFriends = async ({weburl})=>{
    await Share.share({title:'Let your friend know',message:`visit this app ${weburl}. done from a mobile phone`})
  }
  
  if(appInfo){
    const {weburl,message,share,downloadlink,...rest} = appInfo
    return (
<View style={styles.container}>

    {
      Object.entries({message,weburl,share,downloadlink}).map(([key,value])=>{
return <List.Item key={key} onPress={()=>{
  key==='downloadlink' ?   WebBrowser.openBrowserAsync(`${value}`) : null
  key==='weburl' ?   WebBrowser.openBrowserAsync(`${value}`) : null
  key === 'share' ? shareWithFriends({weburl}) :null
}} title={key} description={value} />
    })}
    <QrCodeTile weburl={weburl}/>
    <Caption>scan me</Caption>

</View>      
    )
  }

  if(loading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Caption>putting it all together....</Caption>
        <Caption>We welcome feedback to improve nomade.</Caption>
      </View>
    )
  }

  const publishing = async()=>{
    hasAuth()
    // setloading(!loading)
    // const shippingstatus =  await publishapp()
    // setshippingstatus(shippingstatus)
    // console.log(shippingstatus)
    // setloading(!loading)
    // // setshippingstatus(shippingstatus)
    // // navigation.goBack()

  }



  return(
    <View style={styles.container}>
            
            
            {/* //her is the image fil on the todo  */}
            <Caption>Publish your app in about 2 minutes</Caption>
            <TouchableOpacity style={{alignItems:'center'}} onPress={pickImage}>
                {
                    isImage
                }
             <Caption> upload ☝🏿☝🏿☝🏿  icon here</Caption>
             </TouchableOpacity>

<TextInput   
      onChangeText={(text)=>{
        updateName(text)
      }}
          label="App name" style={styles.input} autoFocus={true} />
      <TextInput label="Description" style={styles.input}
      multiline={false}
      onChangeText={(text)=>{
        updateDescription(text)
      }}
            
      />

    <Button mode="contained" icon="share" onPress={publishing} >Publish</Button>
    </View>
  )
}





const Editorx = (props)=>{
  const {clipindex,app} = props
  const [currentchildren,setCurrentChildren] = React.useState(props.children)
  const [currentdata,setcurrentdata] = React.useState(()=>getschema(props.children))
     const [weburl,setWeburl] = React.useState(null)
const snack = useSnack()
   const [value, setValue] = React.useState('')

  React.useEffect(() => {
    console.log(currentdata)
  }, [weburl])



   if(props.active){
    return null
  }
  return (
 <FlatList style={{flex:1,paddingVertical:4}} contentContainerStyle={{
   padding:5,
   backgroundColor:'whitesmoke'
 }}

  renderItem={({item})=>{
  // build a voyager code for this one 
  return (

  <TextInput style={{marginVertical:5,borderRadius:2}} 
   disabled={item.name ==='source' && true}

   right={item.name === 'source' ? <TextInput.Icon size={52} color="tomato" onPress={ async()=>{
   const weburl = await pick_uploaded_media_assets()
   setWeburl(weburl)        

   const temp = deepMap(currentchildren,(child,index)=>{
    const {props} = child
    item['value']= {uri:weburl}
    const {name,childindex,} = item
    
    //----
    //only non media files
    if(index === childindex && Object.keys(props).includes(name)){
     if (name==='source') {
      return React.cloneElement(child,{[name]:item.value})
 
     }
     return child
    }
    
        return child
    })
    app[clipindex] = temp[0]
    setCurrentChildren(temp[0])
    setcurrentdata((prev)=>getschema(temp[0]))
    snackapp.set((prev)=>({...prev,...app})) // update ui state. this is hacky gonna improve it after mvp
    // the main state of ui 


  }} name="image" /> : null} autoFocus={true} placeholder={ item.name === 'source' ? 'press image icon' : item.name} onChangeText={text=>{
const temp = deepMap(currentchildren,(child,index)=>{
const {props} = child
item['value']= text
const {name,childindex,} = item
console.log(item)
//----cons
//only non media files
if(index === childindex && Object.keys(props).includes(name)){
 
  return React.cloneElement(child,{[name]:item.value})
}

    return child
})
app[clipindex] = temp[0]
setCurrentChildren(temp[0])
setcurrentdata((prev)=>getschema(temp[0]))
snackapp.set((prev)=>({...prev,...app})) // update ui state. this is hacky gonna improve it after mvp
// the main state of ui 

        }}/>
  )
      } 
      
      
      }
     data={currentdata}
keyExtractor={(item,index)=>`${index}`}
        /> 
  )

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
    paddingHorizontal:9,
    // justifyContent:'space-evenly'
  },
  contentContainer: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor:'lightgreen'
  },
  handle:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgreen',
    height:60,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },input:{
    marginVertical:10
  }
});

export default Pocketsheet;




    // <View style={styles.container}>
    //           <CardExample />
    //           <ButtonExample />
            // {/* <ButtonExample /> */}
      
  
    // </View>

// if (item.name==='source') {
//   item['value'] ={source:{uri:weburl}}
//   const temp = deepMap(currentchildren,(child,index)=>{
//     const {props} = child


//   })
  
// }


{/* 
       <BottomSheet
               detached={true}

      handleComponent={()=><HandleBar Appstore={()=>navigation.navigate('Appstore')} onPressEdit={()=>navigation.navigate('Publish')} onPressDeploy={publishapp} />}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      > 
        
       <BottomSheetFlatList
      style={{flex:1}}
      contentContainerStyle={{}}
      data={clips}
      renderItem={({item,index})=>{

        return (
          <View style={{flex:1}}>
        <TouchableOpacity
        onPress={()=>{
          setActive(!active)
        }}
        >
          {item} 


        </TouchableOpacity>
        <Editorx app={clips} active={active} clipindex={index}   >
          {item}
        </Editorx>
  </View>
        )


      }}
      ItemSeparatorComponent={()=>{
        return null
      }}
      keyExtractor={(item,index)=>`${index}`}
      />
       
      </BottomSheet> */}