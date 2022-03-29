import React from "react";
import { Button,Text, View,Image,StyleSheet,ScrollView,TouchableOpacity,Alert,StatusBar} from "react-native";
import BackgroundImage from '../assets/oke.jpg'
import Ex from '../assets/kawhi.jpg'
import Ex1 from '../assets/phukien2.jpg'
import Ex2 from '../assets/shoe1.jpg'
import Ex3 from '../assets/ball3.jpg'
import Icon1 from '../assets/icons8-new-48.png'
import Icon2 from '../assets/icons8-information-48.png'
import Icon3 from '../assets/icons8-product-48.png'
import Icon4 from '../assets/icons8-contacts-48.png'
import Icon5 from '../assets/icons8-login-64.png'
import Icon6 from '../assets/icons8-sign-up-48.png'
export default class Open extends React.Component{
    render(){
        const{navigation} = this.props;
        return(
            <View style={{flex:1}}>
                <View style={{backgroundColor:'orange',alignItems:'center',padding:20}}>
                    <Text>Shop Bóng Rổ</Text>
                </View>
                <ScrollView style={styles.container}>
                    <StatusBar showHideTransition="true"></StatusBar>
                    <View>
                        <Image source={BackgroundImage} style={styles.ImageStyle}></Image>
                    </View>
                    <View style={{backgroundColor:'#7DE24E',padding:5,alignItems:'center',marginBottom:2}}>
                        <Text>Bạn muốn chọn</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Image source={Icon1} style={styles.iconStyle}></Image>
                                <Text>Mới nhất</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Image source={Icon2} style={styles.iconStyle}></Image>
                                <Text>Thông tin</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Help')}>
                                <Image source={Icon4} style={styles.iconStyle}></Image>  
                                <Text>Liên hệ</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity  style={styles.buttonStyle} onPress={()=>navigation.navigate('Login')}>
                                <Image source={Icon3} style={styles.iconStyle}></Image>
                                <Text>Sản phẩm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Login')}>
                                <Image source={Icon5} style={styles.iconStyle}></Image>
                                <Text>Đăng nhập</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Register')}>
                                <Image source={Icon6} ></Image>
                                <Text>Đăng ký</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={{alignItems:'center',backgroundColor:'#0099cc',width:'100%',padding:5}}>
                    <Text style={{alignSelf:'center'}}>Địa chỉ: 109 - Trần Quang Khải - Sầm Sơn - Thanh Hóa</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image source={Ex} style={styles.ExStyle}></Image>
                        <Image source={Ex1} style={styles.ExStyle}></Image>
                        <Image source={Ex2} style={styles.ExStyle}></Image>
                        <Image source={Ex3} style={styles.ExStyle}></Image>
                    </View>
                </View>
            </View>
            
           
        );
    }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'green',
      height:'100%'
    },
    ImageStyle:{
        width:'75%',
        height:200,
        borderRadius:50,
        alignSelf:'center',
        margin:5
    },
    buttonStyle:{
        backgroundColor:'#fff',
        alignItems:'center',
        padding:10,
        borderRadius:5,
        margin:10,
        width:100
    },
    ExStyle:{
        width:50,
        height:50,
        borderRadius:7,
        margin:2
    },
    iconStyle:{
        width:50,
        height:50
    }
  });