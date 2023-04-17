import { View, Text,StyleSheet,Image,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import {  } from 'react-native-paper'

export default function Content() {
  return (
    <View>
<View style={styles.cont}>
     <View>
     <Image style={{width:200,height:200,paddingHorizontal:100,margin:100}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0gl44rwKfXxPbM0AxBU8-TzV36Wt6dqnS80-xsOrEKnHfBuOnLh7ayKJGVykAIY8NBM&usqp=CAU'}} />
     </View>
      <Text style={styles.header}>
      Training program benefits:
      Python programming live lectures (on the spot doubt clearance)
      Basic and advanced python libraries
      Game development lectures
      Quizzes for Self assessment
      Live lectures with coding
      Project for performance evaluation (optional)
      Opportunity for internship with AI-Shala
      Certificate program
      </Text>
    </View>
    <View style={[{ width: "90%", marginHorizontal:60, backgroundColor: "red" }]}>
          <Button
            title="Button Three"
            color="#FF3D00"
          />
        </View> 
    </View>
    
  )
}
const styles = StyleSheet.create({
    cont:{
        flexDirection:'row',
    },
    header:{
        justifyContent:'center',
        textAlign:"center",
        paddingHorizontal:100,
        margin:100
    },
    img:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        height:"50%",
        width:"60%",
        paddingHorizontal:50,
        marginHorizontal:50,
        marginHorizontal:40,
        backgroundColor:"black",
    },
    btn:{
        height:30,
        justifyContent:"center",
        color:'purple'
    }
})