import { createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Home from "../Navigation/Home";
import Cart from "./Cart";
import Order from "./Order";
import Account from "./Account";
import cart from "../DataCart/cart";
import Clothes from "../screen/Clothes";
import React from 'react';
const Tab = createBottomTabNavigator();

export default function StoreTab(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel:'Store',
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="store" color={color} size={25}></MaterialCommunityIcons>
                    ),
                }}></Tab.Screen>
            <Tab.Screen name="Cart" component={Cart} 
                options={{
                    tabBarBadge:`${cart.length}`,
                    tabBarLabel:'Cart',
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="cart" color={color} size={25}></MaterialCommunityIcons>
                    ),
                }}></Tab.Screen>
            {/* <Tab.Screen name="Order" component={Order} 
                options={{
                    tabBarLabel:'Order',
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="receipt" color={color} size={25}></MaterialCommunityIcons>
                    ),
                }}></Tab.Screen> */}
            {/* <Tab.Screen name="Account" component={Account}
                options={{
                    tabBarLabel:'Account',
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="account" color={color} size={25}></MaterialCommunityIcons>
                    ),
                }}></Tab.Screen> */}
        </Tab.Navigator>
    );
}