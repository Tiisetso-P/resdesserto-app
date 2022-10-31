import React, { useState } from 'react';
import { Text, SafeAreaView, View,  StyleSheet, Image, TextInput,TouchableOpacity, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import { useNavigate } from 'react-router-dom'; 

export default function Login({ navigation }) {
   
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
   const nextpage = (()=>{
     navigation.navigate('signup')

  });

    const homepage = (()=>{
     navigation.navigate('home')

  });

    const ViewBoxesWithColorAndText = () => {}

  
  return (
    
    <SafeAreaView>
    <ScrollView>
         <View style={styles.container1}>
            <Image style={styles.Logo1}source={require('../logo1.png')}/>
            <Image style={styles.logo2}source={require('../logo2.png')}/>
            </View>
            
          
          <View style={styles.container2}>
             <Text style={styles.loginDetails}>Login Details</Text>
            <TextInput  placeholder="Email"   style={styles.input}/>
            <TextInput  placeholder="Password"   style={styles.input}/>
             <TouchableOpacity style = {styles.btn1}   onPress={homepage}>
             
              <Text style={styles.login}>Login</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {styles.btn2}   onPress={homepage}>
              <Button style={styles.SignUp} uppercase={false}  onPress={nextpage}>Sign-Up</Button>
             </TouchableOpacity>
            

            

            </View>
            </ScrollView>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:"#8E9769",
    marginTop:-30,
  },
  Logo1: {
    height: 128,
     width: 200,
     marginTop: 190,
     marginBottom:70,
    
  },

  logo2: {
    height: 158,
    width: 128,
    marginTop: -170,
    marginLeft: 20,
    boxSizing: 'border-box',
},
 
container2: {
      alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:"#353333",
    marginBottom:30,
  },
input :{
    width: 200,
    height:25,
    backgroundColor:"white",
    borderRadius: 30,
    padding: 10,
     marginBottom:30,
  },
  btn1: {
  borderRadius:30, 
  width:170,
  height:40,
  backgroundColor:"white",
  marginTop:20,
  marginLeft:10,
  paddingLeft:70,
  paddingTop:10,
},

loginDetails: {
color:'white',
 marginBottom:50,
 fontSize: 25
},
btn2: {
marginTop:20,
},
SignUp: {
  marginBottom:50,
  marginLeft:25,
}

});


  


  
