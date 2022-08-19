import React from 'react';
import {TextInput, StyleSheet, Button, View, TouchableOpacity} from 'react-native';

const Inputbox = ({placeholder, onChangeText, value, externalStyle}) => {
  return (
    <TextInput
      style={[styles.input, {...externalStyle}]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    /> 
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: 'gray',
    padding: 10,
    margin: 8,
    shadowColor: '#000',
  },
});
export default Inputbox;
