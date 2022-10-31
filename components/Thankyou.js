import React from 'react';
import { Button, StyleSheet, SafeAreaView, Text, View,Image, TouchableOpacity, } from 'react-native';



export default function Order({ navigation }) {

return (

<SafeAreaView style={styles.container}>
    <Image style={styles.SEP}source={require('../SEP.jpg')} />
    <View style={styles.container1}>
    <Image style={styles.logo1}source={require('../logo1.png')} />
    <Image style={styles.logo2}source={require('../logo2.png')} />
    </View>
    <Text style={styles.Thank1}>Thank You</Text>
     <Image style={styles.approved1}source={require('../images2.png')} />
      <Image style={styles.approved2}source={require('../download1.png')} />


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>

      
        <Text style={styles.Submit1}  >Submit</Text>
      </TouchableOpacity>
      
</SafeAreaView>
);
 } 

const styles = StyleSheet.create({
container: {
  backgroundColor: '#B88B84',
   
},
SEP: {
width:'100%',
  height:400,
},
container1: {
marginBottom:50
},

logo1: {
height: 128,
    width: 200,
  marginTop: -42,
  marginLeft: 190,
},
logo2: {
  color: 'black',
  height: 128,
    width: 192,
    marginTop: -105,
    marginLeft: 90,
},
Thank1: {
  color: 'white',
 fontSize: 50,
    fontWeight: 'bold',
    marginTop: -60,
  marginLeft: 35,
},
approved1: {
  marginTop: 10,
  marginLeft: 50,
  marginBottom:30
},
approved2: {
  height: 190,
    width: 192,
    marginTop: -20,
marginLeft: 80,
marginBottom:30
},
Submit1: {
   color:'white',
    marginTop:-5,
    marginLeft: -25,
    textAlign: 'centre',
   
 },

button: {
  borderRadius:30, 
  width:130,
  height:30,
  backgroundColor:"green",
  marginTop:20,
  marginLeft:120,
  paddingLeft:70,
  paddingTop:10,
   marginBottom:70
},
  
})