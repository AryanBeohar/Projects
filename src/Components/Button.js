import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={props.style}>{props.name}</Text>
    </TouchableOpacity>
  );
};



export default Button;
