import React, { useEffect, useState } from 'react'
import { FlatList,Image, TouchableOpacity,Text,View,StyleSheet, Alert} from 'react-native'
import cart from '../DataCart/cart';
import icon1 from '../assets/icons8-accept-67.png'
import icon2 from '../assets/icons8-available-updates-50.png'
import deleteIcon from '../assets/icons8-delete-32.png'
export default class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:cart,
    }
  }

  orderProduct=()=>{
    const{data} = this.state;
    if(cart.length==0){
      Alert.alert('Giỏ hàng đang trống!','Bạn hãy thêm sản phẩm vào giỏ hàng!');
    }else{
      Alert.alert('Đặt hàng thành công!');
      // for(let i =cart.length-1;i>=0;i--){
      //   cart.pop();
      //   this.setState(data);
      // }
    }
  }

  reset=()=>{
    const{data}=this.state;
    Alert.alert('Thông báo!','Bạn có muốn đặt lại không?',[
      {
        text:'Đông ý',
        onPress:()=>{
          for(let i =cart.length-1;i>=0;i--){
            cart.pop();
            this.setState(data);
          }
        }
      },
      {
        text:'Không'
      }
    ])
  }

  delete=(ma)=>{
    const{data}=this.state;
    Alert.alert('Thông báo!','Bạn có xoá đơn hàng không?',[
      {
        text:'Đồng ý',
        onPress:()=>{
          for(let i = 0;i<cart.length;i++){
            if(ma==cart[i].id){
              cart.splice(i,1);
              this.setState(data);
            }
          }
        }
      },
      {
        text:'Không'
      }
    ])
  }

  render(){
    const {data}=this.state;
    const arrTotal = cart.map(e=> e.price*e.sluong);
    const total =arrTotal.length ? arrTotal.reduce((a,b)=>a+b) : 0;
    return(
      <View style={styles.container}>
          <View style={{backgroundColor:'lightgreen'}}>
            <Text style={{alignSelf:'center',margin:10,fontSize:25,fontWeight:'bold'}}>GIỎ HÀNG CỦA BẠN</Text>
          </View>

          <FlatList 
          data={data}
          renderItem={({item})=>
          <View style={styles.cartStyle}>
            <Image source={{uri:item.image}} style={{width:'20%',height:70,marginRight:30}}></Image>
            <View style={{width:'60%'}}>
              <Text>{item.name}</Text>
              <Text>Giá: {item.sluong*item.price} VNĐ</Text>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{item.sluong--;this.setState(data)}}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={{marginRight:10}}>{item.sluong}</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{item.sluong++;this.setState(data)}}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{width:'10%',justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity style={{backgroundColor:'red',padding:5,borderRadius:10}} onPress={()=>this.delete(item.id)}>
                <Image source={deleteIcon} style={{width:20,height:20}}></Image>
              </TouchableOpacity>
            </View>
          </View>}
          keyExtractor={(item)=>`${item.id}`}></FlatList>


         <View style={{alignItems:'center',backgroundColor:'orange',}}>
           <Text>Tổng tiền: {total} VNĐ</Text>
           <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{marginBottom:10,backgroundColor:'lightgreen',padding:10,borderRadius:5,marginRight:10,flexDirection:'row'}}
            onPress={()=>this.orderProduct()}>
             <Image source={icon1} style={{width:20,height:20}}></Image>
             <Text>Đặt hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginBottom:10,backgroundColor:'red',padding:10,borderRadius:5,flexDirection:'row'}} onPress={()=>this.reset()}>
             <Image source={icon2} style={{width:20,height:20}}></Image>
             <Text>Đặt lại</Text>
            </TouchableOpacity>
           </View>
         </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  cartStyle:{
    backgroundColor:'#fff',
    flexDirection:'row',
    padding:10,
    margin:5,
    shadowColor:'#000',
    shadowRadius:5,
    elevation:10,
    borderRadius:5,
  },
  buttonStyle:{
    marginRight:10,
    backgroundColor:'lightgreen',
    paddingLeft:20,
    paddingRight:20,
    borderRadius:5
  }
})
