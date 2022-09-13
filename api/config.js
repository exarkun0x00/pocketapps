import firebase from "firebase";
import { useState } from "react";
import { Alert } from "react-native";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyAp2ud48SITHPC1WfzBP1QlCFBVhdvCXvA",
    authDomain: "appclips-691e8.firebaseapp.com",
    projectId: "appclips-691e8",
    storageBucket: "appclips-691e8.appspot.com",
    messagingSenderId: "834830314461",
    appId: "1:834830314461:web:4b3b57418a49cb634fa434",
    measurementId: "G-YPSVCKZ9TL"
  };

 firebase.initializeApp(firebaseConfig);
export const dbref = firebase.database()
export const authref = firebase.auth()
export const storageRef = firebase.storage()

export const user = authref.currentUser
export const baseURL= 'http://com.appstoreafrica.apps.s3-website-us-east-1.amazonaws.com/'
export const currentanonymouslogin = async()=>{
    try {
        authref.onAuthStateChanged((user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log(uid)
              Alert.alert('Welcome back')
            } else {
              // User is signed out            
              authref.signInAnonymously()
            }
          });

    } catch (error) {
        console.log(error.message)
        
    }
}


export const assigntoaccount = ({name,description,icon,weburl,appstatus})=> {
    if (authref.currentUser) {
        let key = dbref.ref('subscribers').child(authref.currentUser.uid).child('clips').push().key
        let updates ={}
        updates['subscribers/'+ authref.currentUser.uid+ '/myappclips/'+ key] ={name,description,icon,weburl,...appstatus}
        updates['appclips/'+key] = {name,description,icon,weburl}
        dbref.ref().update(updates)

    }
    else{
        currentanonymouslogin()
        if (authref.currentUser) {
            let key = dbref.ref('subscribers').child(authref.currentUser.uid).child('myappclips').push().key
            let updates ={}
            updates['subscribers/'+ authref.currentUser.uid+ '/myappclips/'+ key] ={name,description,icon,weburl,...appstatus}
            updates['appclips/'+key] = {name,description,icon,weburl}
            dbref.ref().update(updates)
        }
    }
    
}
export const uploadAsset = async (asset_uri)=>{
    if (authref.currentUser) {
        let filename =  uuidv4()
        console.log(filename)
        let imageblob = await (await fetch(asset_uri)).blob()
        let g = await storageRef.ref('appstoreafrica').child('assets').child(`${filename}.png`).put(imageblob)
        let weburl = await g.ref.getDownloadURL() 
        console.log(weburl)
        return weburl
    }



}

const uploadIconAsset = async (service)=>{
    if (authref.currentUser) {
        let imageblob = await (await fetch(service.image)).blob()
        let g = await storageRef.ref('appstoreafrica').child(authref.currentUser.uid).child(`${service.appname}`).child('assets').child('icon.png').put(imageblob)
        f.put(blob)
        let weburl = await g.ref.getDownloadURL() 
        return weburl
    }

}


const updateAppInfo = async ()=>{
    if (authref.currentUser) {

    const userID =  authref.currentUser.uid
    let mainpath = 'services'
    let userspath = 'users'
    let userRef = dbref.ref(userspath).child(userID) 
    dbref.ref(mainpath).push(clip)
    userRef.push(clip)
    }
}



export const usemyClips = async ()=>{
    if(authref.currentUser){
        const [clips,setClips] = useState([])
        let userID= authref.currentUser.uid

     await dbref.ref('subscribers').child(`${userID}`).child('myappclips').once('value',(snapshot)=>{
      snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        console.log(childKey)
        var childData = childSnapshot.val();
        console.log(childSnapshot)
        clips.push({key:childKey,...childSnapshot.val()})
      });
    })

    console.log(data)

    return [clips,setClips]
}
return null
}

// const addfiletoserver = (filetype)=>{
//         dbref.ref('users').child(auth.currentUser.uid).child

//     // storage.ref('appstoreafrica').child(uuid.v4()).child(`${info.appname}`).put(file)



//   f.updateMetadata({contentType:'text/plain'})
//   let d = await f.getMetadata()
//   console.log(d)
//     .putString('hello'
//       )




const Appinfo = {
  name:'',
  description:'',
  icon:'',
  public:'',
  snackUrl:'',
  templates: ''
}


export const addaservice = async (service)=>{
        if (authref.currentUser) {
    
          /** template string components are replace here start */
          const t  = service.templates.toString().replace(/withTheme/g,'').replace(/[()]/g, '').replace(/,/g,'').replace(/function noRefCheck {}/g,'null')     
    
            let message = filetemplate.replace('content',t) 
            console.log(message)
          /** template string components replace ends */
            //turn template into blob to be saved in the 
            var blob = new Blob([message],{ type: "tsx/plain;charset=utf-8" });
            let imageblob = await (await fetch(service.image)).blob()
            //firebase stuff saving file app.tsx and images icons and more
      let f = await storageRef.ref('appstoreafrica').child(authref.currentUser.uid).child(`${service.appname}`).child(`${service.appname}.tsx`)
       let g = await storageRef.ref('appstoreafrica').child(authref.currentUser.uid).child(`${service.appname}`).child('assets').child('icon.png').put(imageblob)
      f.put(blob)
      let uri = await g.ref.getDownloadURL() //ref.getDownloadUrl to return the 
      // getting back the url
      const deploy = await getappurl({...service,message,icon:uri})
      console.log(deploy)
              const clip = {...service,uri,...deploy,icon:uri}
          const userID =  authref.currentUser.uid
        let mainpath = 'services'
        let userspath = 'users'
        let userRef = dbref.ref(userspath).child(userID) 
        dbref.ref(mainpath).push(clip)
        userRef.push(clip)
        }
        Alert.alert('kindly signup ')
    }
    
    