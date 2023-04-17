import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Content from './Content';
import proj from '../proj';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Content} />
    </Tab.Navigator>
  );
}

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = ({ navigation }) => (

    <SafeAreaView>
       {proj.map((item)=>(
     <Card key={item.title} style={styles.header}>
    <Card.Title  title={item.domain} subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>{item.title}</Title>
      <Paragraph>{item.duration}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={()=>navigation.navigate('Content')}>View</Button>
      <Button onPress={()=>console.log("ok")}>Ok</Button>
      <Button onPress={()=>console.log("ok")}>Register</Button>

    </Card.Actions>
    </Card>
     ))}
    <ScrollView></ScrollView>
  </SafeAreaView>
);
const styles = StyleSheet.create({
  header:
  {
    padding:50,
    margin:50,
  }
})
export default MyComponent;