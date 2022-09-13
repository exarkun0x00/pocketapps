import { snackapp, updateWeburl, useSnack } from "../api/state"
import reactElementToJSXString from 'react-element-to-jsx-string';
import * as React from "react";
import useImagePickerExample from "../api/utility";
import { assigntoaccount, authref, baseURL } from "../api/config";
export const publishapp = async()=>{
    //appclips
    let {clips,description,name,icon,...snack} = snackapp.get()
    snack.templates =  clips.map(clip=>  reactElementToJSXString(React.cloneElement(clip)))
    // console.log(snack)
    // snack.icon=null
    //template is the string of ontent in the files
const Url ='https://nomadesever.vercel.app/api/appclip'
// const Url = 'http://192.168.2.248:3000/api/appclip'
const res = await  fetch(Url,{
    method:'POST',
    body:JSON.stringify({snack:{description,name,templates:snack.templates,icon}})
})

const appstatus = await res.json()
assigntoaccount({name,description,icon,weburl:`${baseURL}${name}`,appstatus})

return appstatus
}

