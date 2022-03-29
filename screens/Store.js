import React,{useRef,useState} from 'react';
import {View,ScrollView,StyleSheet,Image,Text,TouchableOpacity,StatusBar, Alert,DrawerLayoutAndroid,Button} from 'react-native';
import ImageEx from '../assets/kawhi.jpg'
import ImageEx1 from '../assets/ball1.jpg'
import ImageMenu from '../assets/icons8-menu-30.png'
import ImageIcon from  '../assets/icons8-basketball-50.png'
import ExProduct from '../assets/shoe1.jpg'
import ExProduct1 from '../assets/phukien1.jpg'
import ExProduct2 from '../assets/curry.jpg'
import ShoeAdmin from '../assets/shoe1.jpg'
import ShoeAdmin1 from '../assets/shoe4.jpg'
import ShoeAdmin2 from '../assets/shoe3.jpg'
import ClotheAdmin from '../assets/james.jpg'
import ClotheAdmin1 from '../assets/irving.webp'
import ClotheAdmin2 from '../assets/curry.jpg'
import AccessAdmin from '../assets/phukien2.jpg'
import AccessAdmin1 from '../assets/phukien3.jpg'
import AccessAdmin2 from '../assets/phukien4.jpg'
import BallAdmin from '../assets/ball2.jpg'
import BallAdmin1 from '../assets/ball3.jpg'
import BallAdmin2 from '../assets/ball4.jpg'
import DrawerImage from '../assets/user.png'
import logoutIcon from '../assets/logout.png'
import changeIcon from '../assets/change.png'
import cancelIcon from '../assets/cancel.png'
import Swiper from 'react-native-swiper'


export default function Store(props){
    const {navigation} = props

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

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("left");

    const drawerView = () => (
        <View style={[{padding:5,flex:1},{backgroundColor:'lightgreen'}]}>
            <Image source={DrawerImage} style={{width:120,height:120,alignSelf:'center',marginBottom:10}}></Image>
            <Text style={{alignSelf:'center',marginBottom:20}}>USER</Text>
            <TouchableOpacity style={styles.buttonStyle} 
            onPress={()=>Logout()}>
                <Image source={logoutIcon} style={{width:20,height:20}}></Image>
                <Text>Đăng xuất</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>{drawer.current.openDrawer();drawer.current.closeDrawer()}}>
                <Image source={cancelIcon} style={{width:20,height:20}}></Image>
                <Text>Hủy</Text>
            </TouchableOpacity> */}
        </View>
    );
    return(
        <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={200}
        drawerPosition={drawerPosition}
        renderNavigationView={drawerView}
        keyboardDismissMode={false}
        >
        <View style={{marginBottom:150,height:'90%'}}>
            <StatusBar showHideTransition='true'></StatusBar>
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'lightgreen',width:'100%',justifyContent:'space-between'}}>
                <Image source={ImageIcon} style={{width:40,height:40,marginRight:10}}></Image>
                <Text>THIÊN ĐƯỜNG BÓNG RỔ</Text>
                <Image source={ImageIcon} style={{width:40,height:40,marginRight:10}}></Image>
            </View>
            <View>
            <ScrollView style={{padding:5,backgroundColor:'lightblue'}}>
                <View style={{backgroundColor:'gray',marginBottom:10,borderRadius:10,marginLeft:50,marginRight:50,marginTop:5}}>
                    <Text style={{alignSelf:'center',marginBottom:10}}>Mua nhiều nhất</Text>
                    <Swiper height={165} autoplay={true} >
                    <View style={{justifyContent: 'center',alignItems: 'center',}}>
                        <Image
                            source={ExProduct}
                            style={{ resizeMode: 'stretch',width:120,height:120}}
                        />
                    </View>
                    <View style={{justifyContent: 'center',alignItems: 'center',}}>
                        <Image
                            source={ExProduct1}
                            style={{ resizeMode: 'stretch',width:120,height:120}}
                        />
                    </View>
                    <View style={{justifyContent: 'center',alignItems: 'center',}}>
                        <Image
                            source={ExProduct2}
                            style={{ resizeMode: 'stretch',width:120,height:120}}
                        />
                    </View>
                    </Swiper>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{backgroundColor:'gray',borderRadius:10,marginLeft:50,marginRight:50}} onPress={()=>navigation.navigate('StoreTab')}>
                    <View style={styles.CateStyle}>
                        <Text>Các loại sản phẩm</Text>
                        <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                            <Image source={ImageEx} style={styles.ImageStyle}></Image>
                            <Image source={ImageEx1} style={styles.ImageStyle}></Image>
                        </View>
                        <Text>(Ấn vào để mua hàng)</Text>
                    </View>
                </TouchableOpacity>
                <View style={{marginBottom:5,marginTop:20,backgroundColor:'red',alignItems:'center',padding:5,borderRadius:5}}>
                    <Text>MUA GÌ HÔM NAY</Text>
                </View>
                
                <Text>Giày Signature cực đẹp mắt:</Text>
                <View style={{backgroundColor:'black',padding:5,marginTop:10,marginBottom:10,borderRadius:5,marginLeft:20,marginRight:20}}>
                    
                    <ScrollView horizontal={true} contentContainerStyle={{backgroundColor:'black',padding:10}}>
                        <Image source={ShoeAdmin} style={{borderRadius:5,width:200,height:150,marginRight:5}}></Image>
                        <Image source={ShoeAdmin1} style={{borderRadius:5,width:200,height:150,marginRight:5}}></Image>
                        <Image source={ShoeAdmin2} style={{borderRadius:5,width:200,height:150}}></Image>
                        
                    </ScrollView>
                </View>
                <Text>Mẫu quần áo các sao NBA chất lượng:</Text>
                <View style={{backgroundColor:'black',padding:5,marginTop:10,marginBottom:10,borderRadius:5,marginLeft:20,marginRight:20}}>
                    <ScrollView horizontal={true} contentContainerStyle={{backgroundColor:'black',padding:10}}>
                        <Image source={ClotheAdmin} style={{borderRadius:5,width:150,height:150,marginRight:5}}></Image>
                        <Image source={ClotheAdmin1} style={{borderRadius:5,width:150,height:150,marginRight:5}}></Image>
                        <Image source={ClotheAdmin2} style={{borderRadius:5,width:150,height:150}}></Image>
                        
                    </ScrollView>
                </View>
                <Text>Các phụ kiện hỗ trợ:</Text>
                <View style={{backgroundColor:'black',padding:5,marginTop:10,marginBottom:10,borderRadius:5,marginLeft:20,marginRight:20}}>
                    <ScrollView horizontal={true} contentContainerStyle={{backgroundColor:'black',padding:10}}>
                        <Image source={AccessAdmin} style={{borderRadius:5,width:150,height:150,marginRight:5}}></Image>
                        <Image source={AccessAdmin1} style={{borderRadius:5,width:150,height:150,marginRight:5}}></Image>
                        <Image source={AccessAdmin2} style={{borderRadius:5,width:150,height:150}}></Image>
                        
                    </ScrollView>
                </View>
                <Text>Các loại bóng NBA:</Text>
                <View style={{backgroundColor:'black',padding:5,marginTop:10,marginBottom:10,borderRadius:5,marginLeft:20,marginRight:20}}>
                    <ScrollView horizontal={true} contentContainerStyle={{backgroundColor:'black',padding:10}}>
                        <Image source={BallAdmin} style={{borderRadius:5,width:150,height:150,marginRight:5}}></Image>
                        <Image source={BallAdmin1} style={{borderRadius:5,width:150,height:150,marginRight:5}}></Image>
                        <Image source={BallAdmin2} style={{borderRadius:5,width:150,height:150}}></Image>
                        
                    </ScrollView>
                </View>
            </ScrollView>
            </View>
            <View style={{backgroundColor:'green',height:20}}></View>
        </View>
        </DrawerLayoutAndroid>
        
    );
}
const styles = StyleSheet.create({
    CateStyle:{
        alignItems:'center',
        padding:20,
        backgroundColor:'gray',
        paddingBottom:10,
        borderRadius:10

    },
    ImageStyle:{
        width:100,
        height:100,
        marginHorizontal:5
    },
    buttonStyle:{
        backgroundColor:'green',
        marginBottom:30,
        padding:5,
        alignSelf:'center',
        borderRadius:5,
        flexDirection:'row',
        width:'90%'
    }
  });