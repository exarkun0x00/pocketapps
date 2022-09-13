import React from 'react'
import { deepMap } from 'react-children-utilities'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { addChildren } from '../api/utility'



const Nomade = ({props,children}) => {
    const getschema = (children)=>{
        const intital = {required:false}
        const data = []
        deepMap(children,(child,index)=>{
            const {props,children} = child
                    if(index !== undefined){
                Object.keys(props).map((key,value)=>{
                if (key !== 'onPress'){
                    let content = child.props[key]
                    let fieldType = typeof(value)
                    let hideLabel = false
                data.push({...child.props,name,childindex:index,content,fieldType,hideLabel})
                }
            })
             if (props.children !== undefined) {
            }}

        })
        return data
    }
    return (
        <TouchableHighlight
        style={{marginVertical:9}}
        onPress={()=>{
            addChildren(children)
           let data =  getschema(children)

        }}
        >
            {
            children
            }
        </TouchableHighlight>
    )
}

export default Nomade

const styles = StyleSheet.create({})
 