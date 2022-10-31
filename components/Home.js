import { StatusBar } from 'expo-status-bar';
import { Button,Platform, StyleSheet,PreviewLayout, SafeAreaView, Text, View,Image, TouchableOpacity, } from 'react-native';
import React, { FC, useState } from 'react';
import { Picker } from 'react-native' 
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default function HomeScreen({ navigation }) {

  
const [flexDirection, setflexDirection] = useState("row");


   const ViewBoxesWithColorAndText = () => {}

   
  return (
    
    <SafeAreaView style={styles.container}>
    <Image style={styles.SEP}source={require('../SEP.jpg')} />
    <View style={styles.container1}>
    <Image style={styles.logo1}source={require('../logo1.png')} />
    <Image style={styles.logo2}source={require('../logo2.png')} />
    
      <TouchableOpacity  onPress={() => navigation.navigate('morning')}>
    <Text style={styles.Menu} >Menu</Text>
    
    </TouchableOpacity>
    <Text style={styles.RESDESSERTO}>RESDESSERTO is an all about kinds 
  of creative food, luxury dessert to
 your liking of once desire to indulge
 in soft silk,melting mouth-watering
 decedant delicacy 
</Text>

<View style= {{flexDirection:'row'}}>
 
    <View style={styles.container3} >
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
           marginRight:10,
           marginBottom:10,
            paddingBottom: 10,
          }}
          source={require('../chocola.jpg')}
        />
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
            marginRight:8,
          }}
          source={require('../dessert11.jpg')}
        />
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
            marginRight:6,
          }}
          source={require('../HOTCOCO1.jpg')}
        />
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
          }}
          source={require('../afternoon-dessert04.jpg')}
        />
      </View>
      </View>
 <View style= {{flexDirection:'row'}}>
    <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
            marginRight:10,
            marginBottom:10,
          }}
          source={require('../hot-chocolate-on-a-stick-square2.jpg')}
        />
      </View>
    <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
            marginRight:8,
          }}
          source={require('../afternoon-dessert01.jpg')}
        />
      </View>
    <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
            marginRight:6,
          }}
          source={require('../dessert12.jpg')}
        />
      </View>
    <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
          }}
          source={require('../dessert10.jpg')}
        />
      </View>
    </View>
    <View style= {{flexDirection:'row'}}>
    <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
            marginRight:10,
          }}
          source={require('../wedding-cake01-Orange-blossom-bride.jpg')}
        />
      </View>
    <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
            marginRight:8,
          }}
          source={require('../Wedding-Cake05-flowers.jpg')}
        />
      </View>
    <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
            marginRight:6,
          }}
          source={require('../Wedding-Cake05-Green,Gold.png')}
        />
      </View>
    <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
          }}
          source={require('../wedding-cake-06-finished-blue-orchid-cake.jpg')}
        />
      </View>
    
    
    </View>
     </View>
    </SafeAreaView>
    
  );
}

        
const styles = StyleSheet.create({
container: {
width:'600',
height:600,
},
container1: {
  alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:"#BB8888",

},
SEP: {
  width:'100%',
  height:200,
},
logo1: {
   height: 128,
    width: 172,
  marginTop: -72,
},
logo2: {
height: 128,
    width: 192,
    marginTop: -55,
    marginLeft: 20,
},
RESDESSERTO: {
  color:'white',
  marginBottom:25
},
container3: {
   display: 'flex',
    flexDirection: 'vertical',
    justifyContent: 'space-around',
    marginBottom:15,
},
flexDirection: {
 padding: 5,
},
Menu: {
  color:'lightgreen',
  marginBottom:15,
  fontSize: 20
}




})