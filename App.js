import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Login  from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Morning from './components/Morning';
import Afternoon from './components/Afternoon';
import Dinner from './components/Dinner';
import Wedding from './components/Wedding'
import Order from './components/Order' ;
import Thankyou from './components/Thankyou';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
      options={{ headerShown: false}}/>
       <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home} options={{ headerShown: false}} />
         <Stack.Screen name="morning" component={Morning} options={{ headerShown: false}} />
         <Stack.Screen name="afternoon" component={Afternoon} options={{ headerShown: false}} />
         <Stack.Screen name="dinner" component={Dinner} options={{ headerShown: false}} />
         <Stack.Screen name="wedding" component={Wedding} options={{ headerShown: false}} />
          <Stack.Screen name="order" component={Order} />
          <Stack.Screen name="thankyou" component={Thankyou} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}        
              
     
      

export default App;


