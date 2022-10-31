import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Button, StyleSheet, SafeAreaView, Text, View,Image, TouchableOpacity, } from 'react-native';



export default function Order({ navigation }) {
 const [isCash, setCash] = useState();
 const [isCredit, setCredit] = useState();

 
return (

  <SafeAreaView style={styles.container}>
    <Image style={styles.SEP}source={require('../SEP.jpg')} />
    <View style={styles.container1}>
    <Image style={styles.logo1}source={require('../logo1.png')} />
    <Image style={styles.logo2}source={require('../logo2.png')} />
    
    <Text style={styles.Order} >Order Form
       No.1</Text>
    <Image style={styles.img1}source={require('../wedding-cake-06-finished-blue-orchid-cake.jpg')}/>
        <Text style={styles.Choco1}>Two Stek White Choco</Text>
          <Text style={styles.R1}>R 1299.50 per go</Text>
             <Text style={styles.Payment}>Payment Method</Text>
     <View style={styles.section}>
        <Checkbox style={styles.checkbox1} value={isCash} onValueChange={setCash} />
        <Text style={styles.Normal1}>Cash On Delivery</Text>
      </View>
    <View style={styles.section}>
        <Checkbox style={styles.checkbox2} value={isCredit} onValueChange={setCredit} />
        <Text style={styles.Normal2}>Credit Card</Text>
      </View>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('thankyou')}>

      
        <Text style={styles.Submit1}>Submit</Text>
      </TouchableOpacity>
      
    </View>
  </SafeAreaView>
 ); 
}

const styles = StyleSheet.create({
container: {
  backgroundColor: '#B88B84'
},
SEP: {
width:'100%',
  height:400,
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
Order: {
  color: 'white',
  marginLeft: 90,
  marginBottom:30,
  fontSize:20
},
img1: {
  marginTop:550,
  resizeMode: 'contain',
            height: 70,
            width: 70,
            marginTop: 30,
            marginLeft: 15,
            borderRadius: 30,
},
Choco1: {
  color: 'white',
  marginTop: -60,
  marginLeft:90,
},
R1: {
  color:'green',
  marginLeft:90,
  marginBottom:100
},
Payment: {
  color: 'white',
  marginTop: -60,
  marginLeft:120,
  marginBottom:20
},
Normal1: {
  color: 'white',
  marginLeft:40,
  marginTop: -20,
   marginBottom:25
},
Normal2: {
  color: 'white',
  marginLeft:40,
  marginTop: -18,
   marginBottom:25
},
checkbox1: {
  marginLeft: 10,
  marginTop: 15
},
checkbox2: {
  marginLeft: 10,
  marginTop: 15
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
  marginLeft:100,
  paddingLeft:70,
  paddingTop:10,
   marginBottom:70
},
 

})