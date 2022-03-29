import React from "react";
import {Text, View,TextInput,StyleSheet,TouchableOpacity,Image,Alert} from "react-native";
import LoginImage from '../assets/user.png'

const data = require('../DataCart/login.json')
export default class Login extends React.Component{
    constructor(prop){
        super(prop);
        this.navigation = prop.navigation;
        this.state={
            name: '',
            pass: '',
            data: data.Login,
            Login: data,
        }
    }
    onPressLogin() {
        let data = this.state.Login
        if (this.state.name == '') {
            Alert.alert('Tài khoản của quý khách không được bỏ trống!')
        }
        else if (this.state.pass == '') {
            Alert.alert('Mật khẩu của quý khách không được bỏ trống!')
        }
        else if (this.state.pass == '' && this.state.name == '') {
            Alert.alert('Tài khoản và mật khẩu của quý khách không được bỏ trống!')
        }
        let check = false;
        data.Login.map((item) => {
            if (this.state.name == item.name && this.state.pass == item.pass) {
                let name = this.state.name;
                this.navigation.navigate('Store')
                Alert.alert('Đăng nhập thành công!')
                this.setState({ name: '' })
                this.setState({ pass: '' })
                check = true;
                return item;
            }
        })

        data.Login.map((item) => {
        if(this.state.name!='' && this.state.pass!=''){
            if (this.state.name != item.name && this.state.pass != item.pass && !check) {
                Alert.alert('Tài khoản hoặc mật khẩu của quý khách không chính xác!')
                this.setState({ name: '' })
                this.setState({ pass: '' })
            }
            else if (this.state.name == item.name && this.state.pass != item.pass && !check) {
                Alert.alert('Mật khẩu của quý khách không chính xác!')
                this.setState({ pass: '' })
            }
        }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{backgroundColor:'#fff',padding:30,borderRadius:20}}>
                    <Image source={LoginImage} style={{width:90,height:90,alignSelf:'center',marginBottom:10}}></Image>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle} >UserName:</Text>
                        <TextInput style={styles.inputStyle}
                        value={this.state.name}
                        autoCapitalize="none"
                        onChangeText={(name) => { this.setState({ name }) }}></TextInput>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle}>Password :</Text>
                        <TextInput style={styles.inputStyle} 
                        value={this.state.pass} 
                        autoCapitalize="none"
                        onChangeText={(pass) => { this.setState({ pass }) }}
                        secureTextEntry={true}></TextInput>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.buttonStyle} 
                            onPress={()=>this.onPressLogin()}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} 
                            onPress={()=>this.navigation.navigate('Open')}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{margin:10,alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=>this.navigation.navigate('Register')}>
                            <Text>Chưa có tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: '#199',
        padding:50
    },
    inputStyle:{
        backgroundColor:'#7DE24E',
        borderRadius:5,  
        width:'70%',
        marginBottom:10,
        marginLeft:10
    },
    textStyle:{
        width:'30%',
    },
    buttonStyle:{
        backgroundColor: '#7DE24E',
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        padding:10,
        width:130,
        marginRight:10,
        marginTop:20
    }
});

