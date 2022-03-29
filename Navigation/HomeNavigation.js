import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
import Login from '../screens/Login';
import Open from '../screens/Open';
import Home from './Home';
import Clothes from '../screen/Clothes';
import Ball from '../screen/Ball';
import Register from '../screens/Register';
import Accessory from '../screen/Accessory';
import Shoes from '../screen/Shoes';
import StoreTab from '../TabScreen/BottomScreen';
import Store from '../screens/Store';
import Help from '../screens/Help';
const Stack=createNativeStackNavigator();
export default function HomeNavigation(){
    return (
        <Stack.Navigator>
          <Stack.Screen name='Open' component={Open} options={{title:'Basketball Store',headerShown:false}}></Stack.Screen>
          <Stack.Screen name='Login' component={Login}></Stack.Screen>
          <Stack.Screen name='Register' component={Register}></Stack.Screen> 
          <Stack.Screen name='Help' component={Help}></Stack.Screen> 
          <Stack.Screen name='Store' component={Store} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='StoreTab' component={StoreTab} options={{title:'Store Home',headerShown:false}}></Stack.Screen>        
          <Stack.Screen name='Clothes' component={Clothes}></Stack.Screen>
          <Stack.Screen name='Ball' component={Ball}></Stack.Screen>
          <Stack.Screen name='Accessory' component={Accessory}></Stack.Screen>
          <Stack.Screen name='Shoes' component={Shoes}></Stack.Screen>
        </Stack.Navigator>
    );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
