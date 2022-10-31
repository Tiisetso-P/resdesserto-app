import React, { useState } from 'react';
import { Text,View, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';
  
export default function MenuExample({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container1} > 
     <Image style={styles.SEP}source={require('../dessert13.jpg')} />
      <Image style={styles.logo1}source={require('../logo1.png')} />
        <Image style={styles.logo2}source={require('../logo2.png')} />
    <TouchableOpacity style={styles.cakes}>
    
     <Text style={styles.Morning} onPress={() => navigation.navigate('menu')} >Morning Delicans</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.cakes}>
      <Text style={styles.Afternoon} onPress={() => navigation.navigate('afternoon')}>Afternoon Delicans</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cakes}>
       <Text style={styles.Dinner} onPress={() => navigation.navigate('dinner')}>Dinner Delicans</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.cakes}>
        <Text style={styles.Wedding} onPress={() => navigation.navigate('wedding')}>Wedding Cakes</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Delicans1}>    
    <Image style={styles.img1}source={require('../dessert14.jpg')}/>
        <Text style={styles.Choco1}> Choco bombs</Text>
          <Text style={styles.R1}>  R 37.50 per go</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
       <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../dessert10.jpg')}/>
        <Text style={styles.Choco1}> Choco pan bake</Text>
          <Text style={styles.R1}> R 15.90 per go</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
         <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../hot-chocolate-on-a-stick-square2.jpg')}/>
        <Text style={styles.Choco1}> Square Choco bombs</Text>
          <Text style={styles.R1}>  R 37.50 per go</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../morning-dessert03.jpg')}/>
        <Text style={styles.Choco1}> Choco pan bake</Text>
          <Text style={styles.R1}> R 45.90 per go</Text>
           <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
       <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../chocola.jpg')}/>
        <Text style={styles.Choco1}> Choco bomb dropings</Text>
          <Text style={styles.R1}> R 42.50 per go</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
       
   </View> 
      </SafeAreaView> 
  );
}
    
    
      

  
const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 50,
    backgroundColor:"#B88B84",
    justifyContent: 'center',
    height: -300,
   }, 
  
  SEP: {
width:'160%',
  height:300,                                 
  marginTop: -50,
  marginLeft:-40,
  },
logo1: {
  height: 128,
     width: 200,
     marginTop: -40,
     marginLeft: 230,
},
logo2: {
  height: 118,
    width: 200,
    marginTop: -110,
    marginLeft: 20,
}, 
Morning: {
  color: 'lightblue',
  marginLeft: -133,
},
Afternoon: {
color: 'lightblue',
 marginTop: -20,
 marginLeft: 80
},
Dinner: {
color: 'lightblue',
marginLeft: -116
},
Wedding: {
color: 'lightblue',
 marginTop: -20,
marginLeft: 90
},
img1: {
  marginTop:550,
  resizeMode: 'contain',
            height: 70,
            width: 70,
            marginTop: 30,
            marginLeft: -100,
            borderRadius: 60,
},
Choco1: {
  color: 'white',
  marginTop: -60,
  marginLeft:-20,
},
R1: {
  color:'green',
  marginLeft:-20
} ,
 order1: {
   color:'yellow',
   marginLeft:-20
 },
Afternoon1: {
  color: 'lightblue',
  alignItems: 'center',
  marginLeft: 30,
},
afternoon1: {
   height: 70,
            width: 70,
            marginTop: 30,
            marginLeft: -60,
            borderRadius: 60,
},
cake: {
height: 10,
            width: 10,
            marginTop: -15,
            marginLeft: -150
},

Choco2: {
   color: 'white',
  marginTop: -60,
  marginLeft:15,
},
R2: {
   color:'green',
  marginLeft:15
},
order2: {
  color:'yellow',
   marginLeft:15,
},
Dinner1: {
  color: 'lightblue',
  alignItems: 'center',
  marginLeft: 20,
},
dessert02: {
  height: 70,
            width: 70,
            marginTop: -10,
            marginLeft: -90,
            borderRadius: 60,
},
Choco3: {
   color: 'white',
  marginTop: -55,
  marginLeft:-10,
},
R3: {
   color:'green',
  marginLeft:-15
},
order3: {
  color:'yellow',
   marginLeft:-20,
},
dessert12: {
  height: 70,
            width: 70,
            marginTop: -10,
            marginLeft: -90,
            borderRadius: 60,
},
Wedding1: {
   color: 'lightblue',
  alignItems: 'center',
  marginLeft: 30,
}
});