import React from "react";
import {Text, View,TextInput,StyleSheet,TouchableOpacity} from "react-native";
const data = require('../DataCart/login.json')
export default class Register extends React.Component{
    constructor(prop){
        super(prop);
        this.navigation = prop.navigation;

    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{backgroundColor:'#fff',padding:30,borderRadius:20}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle}>UserName:</Text>
                        <TextInput style={styles.inputStyle}></TextInput>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle}>Password :</Text>
                        <TextInput style={styles.inputStyle} secureTextEntry={true}></TextInput>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle}>Confirm    :</Text>
                        <TextInput style={styles.inputStyle} secureTextEntry={true}></TextInput>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.buttonStyle} 
                            onPress={()=>this.navigation.navigate('Login')}>
                            <Text>Oke</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} 
                            onPress={()=>this.navigation.navigate('Open')}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
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

