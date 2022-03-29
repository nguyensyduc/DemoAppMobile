import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import fbIcon from '../assets/icons8-facebook-48.png'
export default function Help(){
    return (
      <View style={styles.container}>
          <Text style={{fontSize:30,alignSelf:'center',marginBottom:20}}>Link liên hệ với Shop</Text>
          <View style={{flexDirection:'row',backgroundColor:'gray',borderRadius:5,padding:5,alignSelf:'center',width:'90%'}}>
              <Image source={fbIcon} style={{width:40,height:40}}></Image>
              <Text>https://www.facebook.com/profile.php?id=100005310284106</Text>
          </View>
          
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
});