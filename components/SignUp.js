import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';

 

export default function SignUp({ navigation }) {
const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((() => {

        navigate('/home')

      }))
      .catch(error =>
        console.error(error))
  };

  const homepage = (()=>{
     navigation.navigate('home')

  });
  return (
     <SafeAreaView>
    <View style={styles.container1}>
      <Image style={styles.logo1}source={require('../logo1.png')}/>
      <Image style={styles.logo2}source={require('../logo2.png')}/>
       </View> 
        
      
      <View style={styles.container2}>
      <Text style={styles.signupDetails}>Sign Up </Text>
       <TextInput  placeholder="Username"   style={styles.input} onChangeText={(username) =>setUsername(username)} />
       <TextInput  placeholder="Email"   style={styles.input} onChangeText={(email) =>setEmail(email)} />
       <TextInput  placeholder="Password"   style={styles.input} onChangeText={(password) =>setPassword(password)} />
      <TouchableOpacity style = {styles.button}  onPress={homepage}>
      <Text style={styles.Submit}>Submit</Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:"#8E9769",
  },

  logo1: {
    height: 128,
     width: 200,
      marginTop: 20,
      marginBottom:30,
  },

  logo2: {
    height: 158,
    width: 148,
    marginTop: -90,
    marginLeft: 20,
    boxSizing: 'border-box',
},
 
container2: {
      alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:"#353333",
  },
input :{
    width: 200,
    height:25,
    backgroundColor:"white",
    borderRadius: 30,
    padding: 10,
    marginBottom:30,
  },
  button: {
  borderRadius:30, 
  width:130,
  height:30,
  backgroundColor:"green",
  marginTop:20,
  marginLeft:10,
  paddingLeft:70,
  paddingTop:10
},


signupDetails: {
color:'white',
 marginBottom:50,
 fontSize: 35
},
Submit: {
   color:'white',
    marginTop:-5,
    marginLeft: -25,
    textAlign: 'centre',
 },
});