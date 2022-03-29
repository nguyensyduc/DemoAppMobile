import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import React from 'react';
import order from '../DataCart/order';
import cart from '../DataCart/cart';
export default class  Order extends React.Component{
  constructor(prop){
    super(prop);
    this.state={
      data:order
    }
  }
  render(){
    const{data}=this.state; 
    return (
      <View>
          <Text>Ngày đặt hàng: </Text>
          <FlatList 
          data={data}
          renderItem={({item})=>
          <View>
          <Image source={{uri:item.image}} style={{width:'20%',height:70,marginRight:30}}></Image>
            <View style={{width:'60%'}}>
              <Text>{item.name}</Text>
              <Text>Giá: {item.sluong*item.price} VNĐ</Text>
                <Text style={{marginRight:10}}>{item.sluong}</Text>
            </View>
          </View>
          }
          keyExtractor={(item)=>`${item.id}`}></FlatList>
      </View>
    );
  }
  
  }
  