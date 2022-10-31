import React, { useState } from 'react';
import { Text,View, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';
  
export default function Dinner({ navigation }) {

return (
<SafeAreaView style={styles.container}>
    <View style={styles.container1} > 
    <Image style={styles.SEP}source={require('../dessert13.jpg')} />
      <Image style={styles.logo1}source={require('../logo1.png')} />
        <Image style={styles.logo2}source={require('../logo2.png')} />
<TouchableOpacity style={styles.cakes1}>
     <Text style={styles.Morning} onPress={() => navigation.navigate('morning')} >Morning Delicans</Text>
     </TouchableOpacity>
<TouchableOpacity style={styles.cakes2} > 
       <Text style={styles.Afternoon1}onPress={() => navigation.navigate('afternoon')} >Afternoon Delicans</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.cakes3}>
         <Image style={styles.cake}source={require('../cake.png')}/>
       <Text style={styles.Dinner} onPress={() => navigation.navigate('dinner')}>Dinner Delicans</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.cakes4} >
        <Text style={styles.Wedding} onPress={() => navigation.navigate('wedding')}>Wedding Cakes</Text>
    </TouchableOpacity>
       
       
    
    <TouchableOpacity style={styles.cakes} > 
    <Image style={styles.dessert02}source={require('../dessert02.jpg')}/>
        <Text style={styles.Choco3}> Choco surprises 01</Text>
          <Text style={styles.R3}>  R 53.50 per go</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order3} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
       <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../dessert01.jpg')}/>
        <Text style={styles.Choco1}> Choco surprises 02</Text>
          <Text style={styles.R1}> R 52.50 per go</Text>
             <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity><br></br><br></br>
         <TouchableOpacity style={styles.cakes}>
    <Image style={styles.dessert12}source={require('../dessert12.jpg')}/>
        <Text style={styles.Choco1}> White Choco surprises 01</Text>
          <Text style={styles.R1}>  R 50.50 per go</Text>
             <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../SEP.jpg')}/>
        <Text style={styles.Choco1}>Dark Choco surprises 01</Text>
          <Text style={styles.R1}>R 52.50 per go</Text>
             <TouchableOpacity  onPress={() => navigation.navigate('order')}>
              <Text style={styles.order1} >order now</Text>
                </TouchableOpacity>
      </TouchableOpacity>
       <TouchableOpacity style={styles.cakes}>
    <Image style={styles.img1}source={require('../dessert05.jpg')}/>
        <Text style={styles.Choco1}>Choco surprises 03</Text>
          <Text style={styles.R1}> R 52.50 per go</Text>
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

Dinner: {
color: 'lightblue',
marginLeft: -105,
marginTop: -49,
},
Wedding: {
color: 'lightblue',
 marginTop: -20,
marginLeft: 110
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
cakes1: {
marginBottom: 5,
 marginTop:-5,
},
cakes2: {
marginBottom: 5,
},

cakes4: {
 marginBottom: 35
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
  marginLeft: 88,
   marginTop: -20,
},

cake: {
height: 10,
            width: 15,
         
            marginLeft: -122,
            marginBottom: 35
},


dessert02: {
  height: 70,
            width: 70,
            marginTop: -10,
            marginLeft: -70,
            borderRadius: 60,
},
Choco3: {
   color: 'white',
  marginTop: -55,
  marginLeft:10,
},
R3: {
   color:'green',
  marginLeft:10
},
order3: {
  color:'yellow',
   marginLeft:10,
},
dessert12: {
  height: 70,
            width: 70,
            marginTop: -10,
            marginLeft: -90,
            borderRadius: 60,
},

});