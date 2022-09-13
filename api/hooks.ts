import React,{ useEffect,useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { assigntoaccount, authref, baseURL, dbref } from "./config";
import { snackapp } from "./state";
const APIURL ='https://nomadesever.vercel.app/api/appclip'


export const useMyapps = ()=>{
    const [myapps, setMyapps] = useState([])

    const connectedUser = (isUser) =>{
        dbref.ref('subscribers').child(isUser.uid).child('myappclips').on('value',(snapshot)=>{
            let clips = []
            snapshot.forEach((childSnapshot) => {
              var childKey = childSnapshot.key;
              clips.push({key:childKey,...childSnapshot.val()})
              console.log(clips)
            });
            setMyapps(clips)
          })

    }

    const hasAuth = ()=>{
        authref.onAuthStateChanged(connectedUser)
    }

    useEffect(() => {
        hasAuth()
        // return () => {
        //     dbref.goOffline()
        // }
    }, [])

    return [myapps,hasAuth]
}



export const usebuildingappsteps = ()=>{
  
    const [appInfo,setAppInfo] = useState(null)
    const [loading, setLoading] = useState(false)

    const connectedUser = async (isUser) =>{
        setLoading(true)
        const {clips,description,name,icon,...snack} = snackapp.get()
        snack.templates =  clips.map(clip=>  reactElementToJSXString(React.cloneElement(clip)))
        let key = dbref.ref('appclips').push().key
        let weburl = `${baseURL}${name}`
        let updates ={}

        //-------------------------------------------------------
        //lets publish

      const data = await (await fetch(APIURL,{
        method:'POST',
        body:JSON.stringify({snack:{description,name,templates:snack.templates,icon,appID:key}})
    })).json()
    // ----------- updtes firebase
    updates['subscribers/'+ isUser.uid+ '/myappclips/'+ key] ={name,description,icon,weburl,...data}
    updates['appclips/'+key] = {name,description,icon,weburl,...data,done:false}
    dbref.ref().update(updates)
    setAppInfo({name,description,icon,weburl,...data,done:false})
    setLoading(!loading)
    console.log(appInfo)
    }

    const hasAuth = ()=>{
        authref.onAuthStateChanged(connectedUser)
    }

    return [appInfo,loading,hasAuth]

}


    //  const publishapp = async()=>{
    //     //appclips
    //     // console.log(snack)
    //     // snack.icon=null
    //     //template is the string of ontent in the files
    // const Url ='https://nomadesever.vercel.app/api/appclip'
    // // const Url = 'http://192.168.2.248:3000/api/appclip'
    // const res = await  fetch(Url,{
    //     method:'POST',
    //     body:JSON.stringify({snack:{description,name,templates:snack.templates,icon}})
    // })
    
    // const appstatus = await res.json()
    // // assigntoaccount({name,description,icon,weburl:,appstatus})
    
    // return appstatus
    // }