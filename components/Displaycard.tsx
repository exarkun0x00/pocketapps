import React from 'react'
import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import { Avatar, Badge, Caption, Card,FAB,IconButton, Modal, Surface } from 'react-native-paper'
import { MotiView, useAnimationState } from 'moti'
import { qrscanBehaviour } from '../utility/pocktetconfig'

const Displaycard = ({uri,close,props,pressfab}) => {
    return (
        <Modal style={styles.container} visible={true}>
            <MotiView
                 transition={{
                    type: 'spring',
                  }}
                  delay={300}
                  from={{
                    transform: [
                      {
                        translateY: 200,
                      },
                    ],
                  }}
                  animate={{
                    transform: [{ scale: 1 }, { translateY: -10 }],
                  }}
            
            >
            <Card style={styles.cardstyle}>
                <IconButton onPress={close} style={{alignItems:'flex-end'}}  icon="close-circle" color="grey" size={30} />
             <Card.Cover 
               style={{
                     borderRadius:38,
                height:250
                 }}
                 blurRadius={1}

                     source={{uri:'https://cdn2.vectorstock.com/i/1000x1000/73/06/cooking-and-restaurant-logo-design-vector-29707306.jpg'}}
                 />
                <Card.Content style={styles.bottomContainer}>
                <Card.Title 
                title="Hello"
                subtitle="hello word"
                right={()=> <FAB onPress={pressfab} style={{backgroundColor:'#0091FF',opacity:20}} color="white" label="open" icon="arrow-right" />} 
                {...props}
                />
                <Caption>supporting digital business</Caption>
                </Card.Content>
            </Card>
            </MotiView>
            </Modal>
    )
}

export default Displaycard

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:9,
        backgroundColor:'rgba(255,255,255,0.5)',
        justifyContent:'flex-end'

        },
    cardstyle:{
        height:402,
        borderRadius:38,
        justifyContent:'flex-end',
        
    },
    bottomContainer:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        backgroundColor:'rgba(255,255,255,0.5)',
        // borderBottomEndRadius:38,

        
    }
})

        // {/* <Card.Cover 
        //         style={{
        //             borderRadius:38,
        //             // height:402,

        //         }}
        //             source={{uri:'https://cdn2.vectorstock.com/i/1000x1000/73/06/cooking-and-restaurant-logo-design-vector-29707306.jpg'}}
        //         /> */}