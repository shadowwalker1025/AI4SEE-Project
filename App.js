import { SafeAreaView, StyleSheet, Text, View,ScrollView,Button } from 'react-native';
import MyComponent from './components/Magic';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Content from './components/Content';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Cards" component={MyComponent} />
      <Stack.Screen name="Content" component={Content} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor:"black",
  },
});
