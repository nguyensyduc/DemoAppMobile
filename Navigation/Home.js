import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image,Alert} from 'react-native';
import React from 'react';
import logoutIcon from '../assets/logout.png'
import IconImage2 from '../assets/icons8-basketball-64.png'
import IconImage1 from '../assets/accessory.png'
import IconImage from '../assets/icons8-basketball-jersey-50.png'
import IconImage3 from '../assets/shoecate.png'
import ImageIcon from  '../assets/out.png'


export default function Home(props){
    const {navigation} =props;
    
    const Logout=()=>{
        
        Alert.alert('Logout','Bạn có muốn đăng xuất khỏi hệ thống không?',
        [
            {
                text:'Đồng ý',
                onPress:()=>{navigation.navigate('Open')}
            },
            {
                text:'Không'
            },
        ]);
    }

        return(
            <View style={styles.container}>
            <View style={{backgroundColor:'lightgreen',borderRadius:5,margin:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:'green',borderRadius:5,padding:5,alignSelf:'flex-end',margin:10}}
                onPress={()=>navigation.pop()}>
                    <Image source={logoutIcon} style={{width:30,height:30}}></Image>
                </TouchableOpacity>
                <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>Danh sách sản phẩm</Text>
                <TouchableOpacity style={{backgroundColor:'green',borderRadius:5,padding:5,margin:10}}
                onPress={()=>Logout()}>
                    <Image source={ImageIcon} style={{width:30,height:30}}></Image>
                </TouchableOpacity>
            </View>
            
            <ScrollView>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Clothes')}>
                <View style={styles.cateStyle}>
                    <Text>Quần áo bóng rổ</Text>
                    <Image source={IconImage} style={styles.imageStyle}></Image>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Accessory')}>
                <View style={styles.cateStyle}>
                    <Text>Phụ kiện bóng rổ</Text>
                    <Image source={IconImage1} style={styles.imageStyle}></Image>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Ball')}>
                <View style={styles.cateStyle}>
                    <Text>Các loại bóng</Text>
                    <Image source={IconImage2} style={styles.imageStyle}></Image>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Shoes')}>
                <View style={styles.cateStyle}>
                    <Text>Giày bóng rổ</Text>
                    <Image source={IconImage3} style={styles.imageStyle}></Image>
                </View>
            </TouchableOpacity>
            </ScrollView>
            </View>  
        );
    
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'gray',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  cateStyle: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
    padding:10,
    borderRadius:3,
    shadowColor:'#000',
    shadowRadius:5,
    shadowOpacity:0.1,
    shadowOffset:{width:0,height:0},
    elevation:10,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'lightblue'
  },
  imageStyle:{
      width:64,
      height:64
  }
});