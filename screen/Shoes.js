import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import cart from '../DataCart/cart';
export default function Shoes(props){
    const[product,setproduct]=useState([]);
    useEffect(()=>{
      fetch('http://syduc.somee.com/api/Shoe')
      .then((reponse)=>reponse.json())
      .then((data)=>setproduct(data));
    },[]);

    const addToCart = (item)=>{
      const addCart ={
        "id":item.maGiay*1000,
        "name":item.tenGiay,
        "price":item.giaGiay,
        "image":item.hinhAnh,
        "sluong":1,
      };
      if(cart.length>0){
        var temp = 0;
        for (let i = cart.length-1; i >= 0; i--) {
          if(item.maGiay==cart[i].id/1000){
            cart[i].sluong++;
            temp=1;
          }
        }
        for (let i = cart.length-1; i >= 0; i--) {
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
    const {navigation} = props;
    return (
      <FlatList 
        numColumns={2}
          data={product}
          renderItem={({item})=><View style={styles.cateList}>
            <Text>{item.tenGiay}</Text>
            <Image source={{uri:item.hinhAnh}} style={styles.imageStyle}></Image>
            <Text>Giá: {item.giaGiay} VNĐ</Text>
            <Text>Số lượng còn: {item.soLuong}</Text>
            <TouchableOpacity style={styles.buttonStyle} 
              onPress={()=>{addToCart(item);Alert.alert('Đã thêm '+item.tenGiay+' vào giỏ hàng');navigation.navigate('Store');navigation.navigate('StoreTab');navigation.navigate('Shoes')}}>
              <Text>+Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
            </View>}
          keyExtractor={(item)=>`${item.maGiay}`}
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