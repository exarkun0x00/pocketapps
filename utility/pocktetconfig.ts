
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { useState } from 'react';


  export const _handleGotoBrowser = async ({uri}) => {
    let result = await WebBrowser.openBrowserAsync(uri);
    console.log(result)
  };

export const _handleOpenURL = ({uri}) => {
   return  Linking.openURL(uri);
  };

export const qrscanBehaviour = ({uri})=>{
    /**
     * look at the uri then decide what to do
     * as this is being written we're using webbrowser to go to url
     * and open url for pthers.
     */
    // console.log(typeof(uri))
    _handleOpenURL({uri})
    //below is hardocded filter for https links :) fix later
    // if (typeof(uri) ==='string') {
    //     uri.startsWith('https') ? _handleGotoBrowser({uri}) : _handleL({uri})
    // }
   alert("Sorry im unable to read this QR ")
}





export function useQrcode() {
    // let qrcontent 
    const [qrcontent,setQrcontent] = useState('')

    const qrscanBehaviour = ({uri})=>{
        
        /**
         * look at the uri then decide what to do
         * as this is being written we're using webbrowser to go to url
         * and open url for pthers.
         */
        if (typeof(uri) ==='string') {
            uri.startsWith('https') ? _handleGotoBrowser({uri}) : _handleOpenURL({uri})
        }
       alert("Sorry im unable to read this QR ")
    }
    
   const onBarCodeScanned= ({data})=>{
       return data

    // qrscanBehaviour({uri:data})
}


    return [qrcontent,setQrcontent]
    
}