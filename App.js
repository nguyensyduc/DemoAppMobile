import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import HomeNavigation from './Navigation/HomeNavigation';

export default function App(){
    return (
      
      <NavigationContainer>
        <HomeNavigation></HomeNavigation>
      </NavigationContainer>
    );
  }
  