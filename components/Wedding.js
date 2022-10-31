import React, { useState } from 'react';
import { Text,View, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';
  
export default function Weddings({ navigation }) {

return (
<SafeAreaView style={styles.container}>
    <View style={styles.container1} >
    <Image style={styles.SEP}source={require('../dessert13.jpg')} />
      <Image style={styles.logo1}source={require('../logo1.png')} />
        <Image style={styles.logo2}source={require('../logo2.png')} /> 
<TouchableOpacity style={styles.cakes}>
     <Text style={styles.Morning} onPress={() => navigation.navigate('morning')} >Morning Delicans</Text>
     </TouchableOpacity>
<TouchableOpacity style={styles.Delicans2}> 
       <Text style={styles.Afternoon1} onPress={() => navigation.navigate('afternoon')}>Afternoon Delicans</Text>
         <TouchableOpacity style={styles.cakes}>
       <Text style={styles.Dinner} onPress={() => navigation.navigate('dinner')}>Dinner Delicans</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.cakes}>
       <Image style={styles.cake}source={require('../cake.png')}/>
        <Text style={styles.Wedding} onPress={() => navigation.navigate('wedding')}>Wedding Cakes</Text>
    </TouchableOpacity>
       
       
       
    <Image style={styles.afternoon1}source={require('../wedding-cake01-Orange-blossom-bride.jpg')}/>
        <Text style={styles.Choco2}> White Triple Stek </Text>
          <Text style={styles.R2}>  R 1355.50 per go</Text>
             <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
       
       <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../wedding-cake02-choco-wrap.webp')}/>
        <Text style={styles.Choco1}> Sweet Cake</Text>
          <Text style={styles.R1}> R 15.90 per go</Text>
             <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
         
         <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../Wedding-Cake05-Green,Gold.png')}/>
        <Text style={styles.Choco1}> Choco Flower Stek</Text>
          <Text style={styles.R1}> R1450.50 per go</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../wedding-cake-06-finished-blue-orchid-cake.jpg')}/>
        <Text style={styles.Choco1}>Two Stek White Choco</Text>
          <Text style={styles.R1}>R 1299.50 per go</Text>
             <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
       
       <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../Wedding-Cake04-fairytale.jpg')}/>
        <Text style={styles.Choco1}> Tripel Dark Blue Choco</Text>
          <Text style={styles.R1}> R 2199.50 per go</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>





</View>
  </SafeAreaView>
)
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
  marginLeft: -143,
},
Afternoon: {
color: 'lightblue',
 marginTop: -20,
 marginLeft: 80
},
Dinner: {
color: 'lightblue',
marginLeft: -38,
marginTop: 5
},
Wedding: {
color: 'lightblue',
 marginTop: -15,
marginLeft: 85
},
img1: {
  marginTop:550,
  resizeMode: 'contain',
            height: 80,
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
   marginLeft:10
 },
Afternoon1: {
  color: 'lightblue',
  marginTop: -20,
  marginLeft: 80,
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
            marginTop: -14,
            marginLeft:70
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