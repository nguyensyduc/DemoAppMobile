
import { StyleSheet, Text, View,FlatList, Image,TouchableOpacity,Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import cart from '../DataCart/cart';

export default function Clothes(props){
  const[product,setproduct]=useState([]);
  useEffect(() => {
      fetch('http://syduc.somee.com/api/Clothe')
      .then((response)=>response.json())
      .then((data)=>setproduct(data));
    },[]);

  const OnClickaddCart=(item)=>{
    const addCart ={
      "id":item.maSp,
      "name":item.tenSp,
      "price":item.giaSp,
      "image":item.hinhAnh,
      "sluong":1,
    };
    if(cart.length>0){
      var temp = 0;
      for (let i = cart.length-1; i >= 0; i--) {
        if(item.maSp==cart[i].id){
          cart[i].sluong++;
          temp++;
        }
      }
      for (let i = cart.length-1; i >= 0; i--) {
        if(temp==0){
          cart.push(addCart);
          temp=0;
          break;
        }
      }
    }
    else{
      cart.push(addCart);
    }
   
  }
  
  const {navigation} =props;
  return (
      <FlatList 
      numColumns={2} 
      data={product}
      renderItem={({item})=>
      <View style={styles.cateList}>
        <Text>{item.tenSp}</Text>
        <Image source={{uri:item.hinhAnh}} style={styles.imageStyle}></Image>
        <Text>Giá: {item.giaSp} VNĐ</Text>
        <TouchableOpacity style={styles.buttonStyle} 
          onPress={()=>{OnClickaddCart(item);Alert.alert('Đã thêm '+ item.tenSp +' vào giỏ');navigation.navigate('Store');navigation.navigate('StoreTab');navigation.navigate('Clothes')}}>
          <Text>+Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>}
      keyExtractor={(item)=>item.maSp}
      contentContainerStyle={styles.container}></FlatList>
    
  );
}



const styles = StyleSheet.create({
  container: {
    alignItems:'stretch',
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
  buttonStyle:{
    backgroundColor:'green',
    alignItems:'center',
    width:150,
    margin:5,
    padding:5,
    borderRadius:15
  },
  imageStyle:{
    width:110,
    height:110
  }
});