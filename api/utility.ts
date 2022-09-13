import Children,{deepMap}  from 'react-children-utilities';
import React, { Children as ReactChildren,useState, useEffect } from "react";
import { incrementClips, updateIcon } from './state';
// keep in mind no side effect.
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadAsset } from './config';

const getChildren = (child)=>  ReactChildren.toArray(child) //ChildArray
export const addChildren = (child)=>{
    const arraychilds = getChildren(child)
    // incrementClips(arraychilds)
    incrementClips(child)
}

// const childrento

export const getschema = (children)=>{
    const intital = {required:false}
    const data = []
    deepMap(children,(child,index)=>{
      const {props} = child

      if(index !== undefined){
        // console.log('###############-Play here for the props - ########')
        Object.keys(props).map((key,value)=>{
let name =key
let content = child.props[key]
let fieldType = typeof(value)
let hideLabel = false
let filterprops = ['left','right','onPress']
if (!filterprops.includes(key)){
  data.push({...child.props,name,childindex:index,content,fieldType,hideLabel})

  }
        })
// console.log('###############-Play here for the props - ########')

    }


        // if(index !== undefined){
          
        //     let name =Object.keys(child.props)[0]
        //     let content = child.props[name]
        //     let fieldType = typeof(value)
        //     let hideLabel = false
        //     // let onChangeText= (value)=> 
        //     data.push({...child.props,name,childindex:index,content,fieldType,hideLabel})
        // } 
    })
    return data
}
const ImageToBlob = async(imagepath)=>  await (await fetch(imagepath)).blob()

export default function useImagePickerExample() {
  const [imageassets, setImage] = useState(null);
  const [imageBlob, setImageBlob] = useState(null);
  const [weburl, setWeburl] = useState(null);


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    let weburl = ''
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
     const web_icon_url =await uploadAsset(result.uri)
     let blobimage= ImageToBlob(result.uri)
     updateIcon(web_icon_url)
        //  updateIcon(blobimage)

    //  setImageBlob(blobimage)

    }
  };
return [imageassets,pickImage,imageBlob,weburl] 
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   )
}


export const pick_uploaded_media_assets = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    let asset_uri = result.uri
    // console.log(asset_uri)
   let weburl = await uploadAsset(asset_uri)
  //  console.log(weburl);
   return weburl
  }
};



export const pick_uploaded_media_Icon = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    let asset_uri = result.uri
    // console.log(asset_uri)
   let weburl = await uploadAsset(asset_uri)
  //  console.log(weburl);
   return weburl
  }
};


