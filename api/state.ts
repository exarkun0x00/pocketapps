import { useAtom,atom } from "react-atomic-state";
const initalDescription = {
    name:null,
    description:null,
    icon:null,
    clips:[],
    template:null,
    weburl:null
}

export const snackapp = atom(initalDescription)
export const apps = atom([])
export const globalpublicKey = atom('')
export const setglobalpublicKey = (pubKey)=> globalpublicKey.set(pubKey)
const incrementApps = (clip)=> apps.set(prev=>({...prev,clip}))

const incrementClips = (clip)=> snackapp.set(prev=>({...prev,clips:[...prev.clips,clip]}))
const updateName = (name) =>snackapp.set(prev=>({...prev,name}))
const updateTemplate = (template) =>snackapp.set(prev=>({...prev,template}))
const updateIcon = (imageBlob) =>snackapp.set(prev=>({...prev,icon:imageBlob}))
const updateDescription = (text) =>snackapp.set(prev=>({...prev,description:text}))
const updateWeburl = (text) =>snackapp.set(prev=>({...prev,weburl:text}))

export const useSnack = ()=> useAtom(snackapp)
export const useSnacks = ()=> useAtom(apps)


export {incrementClips,updateName,updateDescription,updateTemplate,updateIcon,initalDescription,updateWeburl,incrementApps}