import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity,Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import cart from '../DataCart/cart';
export default function Accessory(props){
  const[product,setproduct]=useState([]);
  useEffect(()=>{
    fetch('http://syduc.somee.com/api/Accessory')
    .then((reponse)=>reponse.json())
    .then((data)=>setproduct(data));
  },[]);
  const addToCart=(item)=>{
    const addCart={
      "id":item.maPk*100000,
      "name":item.tenPk,
      "price":item.giaPk,
      "image":item.hinhAnh,
      "sluong":1
    }
      if(cart.length>0){
        var temp=0;
        for(let i=cart.length-1;i>=0;i--){
          if(item.maPk==cart[i].id/100000){
            cart[i].sluong++;
            temp=1;
          }
        }
        for(let i=cart.length-1;i>=0;i--){
          if(temp==0){
            cart.push(addCart);
            break;
          }
        }
      }
      else{
        cart.push(addCart);
      }
  }
  const{navigation}=props;
  return (
    <FlatList 
      numColumns={2}
      data={product}
      renderItem={({item})=>
      <View style={styles.cateList}>
        <Text>{item.tenPk}</Text>
        <Image source={{uri:item.hinhAnh}} style={styles.imageStyle}></Image>
        <Text>Giá: {item.giaPk} VNĐ</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{addToCart(item);Alert.alert('Đã thêm '+item.tenPk+' vào giỏ hàng');navigation.navigate('Store');navigation.navigate('StoreTab');navigation.navigate('Accessory')}}>
          <Text>+Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>}
      keyExtractor={(item)=>`${item.maPk}`}
      contentContainerStyle={styles.container}></FlatList>
  );
}
  

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    paddingHorizontal:8,
    padding:10
    
  },
  cateList:{
    flex:1,
    margin:10,
    alignItems:'center',
    backgroundColor:'lightgreen',
    borderRadius:5,
    shadowColor:'#000',
    elevation:10,
    padding:5
  },
  imageStyle:{
    width:110,
    height:110
  },
  buttonStyle:{
    backgroundColor:'green',
    alignItems:'center',
    width:150,
    margin:5,
    padding:5,
    borderRadius:15
  }
});