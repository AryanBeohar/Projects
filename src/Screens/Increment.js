import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Title} from 'react-native-paper';
import {Value} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import {incNumber, decNumber} from '../Redux/Action/Index';

const Increment = () => {

  const dispatch = useDispatch();
  const stateData = useSelector(state=>state.changeTheNumber)
  
  const increment = () => {
   dispatch(incNumber());
  };
  const decrement = () => {
    dispatch(decNumber()); 
  };
  console.log(stateData);

return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 350,
          backgroundColor: 'white',
        }}>
      
        <TouchableOpacity onPress={decrement}>
          <Text
            style={{
              marginRight: 20,
              fontSize: 40,
              backgroundColor: 'skyblue',
              paddingHorizontal: 15,
            }}
          >
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 40}}>{stateData.count}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increment}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 40,
              backgroundColor: 'skyblue',
              paddingHorizontal: 15,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Increment;
