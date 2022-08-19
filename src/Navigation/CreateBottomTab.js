import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboad, Login , Market , Profile , Signup, Increment, Cars,Todo} from '../Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Iconant from 'react-native-vector-icons/AntDesign';
import { Image,View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  Icon  from 'react-native-vector-icons/FontAwesome';
const BottomTabBar = () => {
  const [color , setColor] = useState(true)
  const Tab = createBottomTabNavigator();

  return (

      <Tab.Navigator initialRouteName="Signup"
        screenOptions={({ route, focus }) => ({
        headerShown: false,
        focus:true,
        tabBarActiveTintColor:'skyblue',
        tabBarInactiveTintColor:'grey',
        tabBarIcon: ({focused, color, size})=>{
          // console.log('>>>>>>>>>>',focused)
         if(route.name =='Dashboad'){
           return(
 <Icon name="feed" color={focused? 'skyblue': 'grey'}  size={size}/>

           )}

          else if(route.name =='Market'){
            return(
                        <Iconant name="shoppingcart" color={focused? 'skyblue': 'grey'} size={size} /> 
            )
          }
            else if(route.name == 'Profile'){
              return(
             
             <Iconant name="user" color={focused? 'skyblue': 'grey'} size={size} /> 
            
              )
            }
            else if(route.name == 'Increment'){
              return(
                <Iconant name='upcircleo' color={focused? 'skyblue': 'grey'} size={size}/>
              )
            } 
            else if(route.name == 'Cars'){
              return(
                <Iconant name='car'  color={focused? 'skyblue': 'grey'} size={size}/>
              )
              }
        }
      })
    } 
    >

       <Tab.Screen
          name="Dashboad"
          component={Dashboad}
          options={{headerShown: false ,
            tabBarLabel: 'Dashboad',}}
            // tabBarIcon: ({ color, size }) => (
            //   <Icon name="feed" color='grey'  size={size} />
            // ),}}
        />
        <Tab.Screen
          name="Market"
          component={Market}
          options={{headerShown: false,
            tabBarLabel: 'Market',}}
            // tabBarIcon: ({ color, size }) => (
            //   <Iconant name="shoppingcart" color={'grey'} size={size} />
            // ),}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false,tabBarLabel:'Profile' }}
          //   tabBarLabel: 'Profile',
          //   tabBarIcon: ({ color, size }) => (
          //     <Iconant name="user" color={'skyblue'} size={size} />
          //   ),}}
        />
         <Tab.Screen
          name="Increment"
          component={Increment}
          options={{headerShown : false , tabBarLabel:'Increment'}}
        />
        <Tab.Screen 
        name="Cars"
        component={Cars}
        options={{headerShown : false , tabBarLabel :'Cars'}}
        />
        <Tab.Screen
        name='ToDo'
        component={Todo}
        options={{headerShown : false ,tabBarLabel:'Todo'}}/>
      </Tab.Navigator>

  );
};

export default BottomTabBar;
