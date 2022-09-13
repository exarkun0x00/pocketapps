import * as React from 'react';
import { Alert, Dimensions, ScrollView, StyleSheet } from 'react-native';
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  IconButton,
  useTheme,
} from 'react-native-paper';
import Pal from './Nomade';

const CardExample = () => {
  const {
    colors: { background },
  } = useTheme();

  return (
    <>
     <ScrollView
      style={[styles.container, { backgroundColor: background }]}
     contentContainerStyle={styles.content}
     horizontal={false}

     >
      <Pal>
      <Card style={styles.card}>
        <Card.Cover source={{uri:'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'}} />
        <Card.Title title="Abandoned Ship" />
        <Card.Content>
          <Paragraph>
            The Abandoned Ship is a wrecked ship located on Route 108 in Hoenn,
            originally being a ship named the S.S. Cactus. The second part of
            the ship can only be accessed by using Dive and contains the
            Scanner.
          </Paragraph>
        </Card.Content>
      </Card>
      </Pal>
      <Pal>

      
      <Card style={styles.card}>
        <Card.Cover source={{uri:'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'}} />
        <Card.Actions>
          <Button onPress={() => {}}>Share</Button>
          <Button onPress={() => {}}>Explore</Button>
        </Card.Actions>
      </Card>
      </Pal>
        <Pal>
      <Card style={styles.card}>
        <Card.Title
          title="Berries that are trimmed at the end"
          subtitle="Omega Ruby"
          left={(props: any) => <Avatar.Icon {...props} icon="folder" />}
          right={(props: any) => (
            <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
          )}
        />
        <Card.Content>
          <Paragraph>
            Dotted around the Hoenn region, you will find loamy soil, many of
            which are housing berries. Once you have picked the berries, then
            you have the ability to use that loamy soil to grow your own
            berries. These can be any berry and will require attention to get
            the best crop.
          </Paragraph>
        </Card.Content>
      </Card>
      </Pal>
      <Pal>
      <Card style={styles.card}>
        <Card.Cover source={{uri:'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'}} />
        <Card.Title
          title="Just Strawberries"
          subtitle="... and only Strawberries"
          right={(props: any) => (
            <IconButton {...props} icon="chevron-down" onPress={() => {}} />
          )}
        />
      </Card>
      </Pal>
      <Pal>
      <Card
        style={styles.card}
      >
        <Card.Cover source={{uri:'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'}} />
        <Card.Title title="Pressable Chameleon" />
        <Card.Content>
          <Paragraph>
            This is a pressable chameleon. If you press me, I will alert.
          </Paragraph>
        </Card.Content>
      </Card>
      </Pal>
      <Pal>
      <Card
        style={styles.card}
      >
        <Card.Cover source={{uri:'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'}} />
        <Card.Title
          title="Long Pressable City"
          left={props => <Avatar.Icon {...props} icon="city" />}
        />
        <Card.Content>
          <Paragraph>
            This is a long press only city. If you long press me, I will alert.
          </Paragraph>
        </Card.Content>
      </Card>
      </Pal>
     </ScrollView>
     </>

  );
};

CardExample.title = 'Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  // card: {
  //   margin: 4,
  //   width:Dimensions.get('screen').width -10
  // },
});

export default CardExample;
