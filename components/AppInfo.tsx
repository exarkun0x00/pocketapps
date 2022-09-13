import { Share, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card,Button, IconButton, Title, Caption, Paragraph } from 'react-native-paper';

const AppInfo = ({route,navigation}) => {



    const Sharing = ({content})=> Share.share({title:"share with",message:content})
    const { weburl,downloadlink,name, } =  route.params || {}
    if (weburl) {
        return (
          <View style={styles.container}>
      
      
      <Card style={styles.card}>
              <Card.Content>
                  <Title>
                  🎈🌍
                  </Title>
              </Card.Content>
              <Card.Actions>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                  <IconButton color='blue' icon="twitter" size={66} onPress={()=>Sharing({content:weburl})} />
      <Caption >copy</Caption> 
                  </View>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                  <IconButton color='tomato' icon="whatsapp" size={66}  onPress={()=>Sharing({content:weburl})}  />
      <Caption >Mail</Caption> 
                  </View>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                  <IconButton color='lightgreen' icon="link" size={66}  onPress={()=>Sharing({content:weburl})}  />
      <Caption >download</Caption> 
                  </View>
      
                  <IconButton icon="mail"  size={66} onPress={()=>Sharing({content:weburl})}  />
              </Card.Actions>
            </Card>
      
          <Card style={styles.card}>
              <Card.Content>
                  <Title>
                       🧑‍💻 🧑🏿‍💻 Source code
                  </Title>
              </Card.Content>
              <Card.Actions>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                  <IconButton color='blue' icon="content-copy" size={66} onPress={()=>Sharing({content:`https://snack.expo.dev/${downloadlink.split('/')[8]}`})} />
      <Caption >expo</Caption> 
                  </View>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                  <IconButton color='tomato' icon="mail" size={66} onPress={()=>Sharing({content:downloadlink})} />
      <Caption >Mail</Caption> 
                  </View>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                  <IconButton color='lightgreen' icon="download" size={66} onPress={()=>Sharing({content:downloadlink})} />
      <Caption >download</Caption> 
                  </View>
      
                  <IconButton icon="mail"  size={66} />
              </Card.Actions>
            </Card>
          </View>
        );
      }
 
return (
<Card style={styles.card}>
        <Card.Content>
            <Title>
            🤔💡 How to make an appclip
            </Title>
        </Card.Content>
        <Card.Actions style={{justifyContent:'space-evenly'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <IconButton color='blue' icon="gesture-tap" size={66} />
<Caption >Tap pick</Caption> 
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <IconButton color='tomato' icon="gesture-tap" size={66} />
<Caption >Tap edit</Caption> 
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <IconButton color='lightgreen' icon="gesture-swipe-vertical" size={66} />
<Caption >Hold  Drag</Caption> 
            </View>
            {/* <IconButton icon="mail"  size={66} /> */}
        </Card.Actions>
        

<Card.Content>
        <Caption> Tap to pick a template </Caption> 
        <Caption> Tap to edit content </Caption>
        <Caption> Hold a template to drag up or down </Caption>
            {/* </Paragraph> */}
        </Card.Content>
      </Card>
)        


  
};

export default AppInfo;

const styles = StyleSheet.create({container:{
    flex:1
},
card:{
    padding:9
}

});
