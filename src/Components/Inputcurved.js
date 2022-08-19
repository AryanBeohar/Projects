import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Inputcurved = (props) => {
  
  return (

    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    backgroundColor: 'lightgray',
    borderRadius: 65,
    borderWidth: 0.2,
    borderColor: 'gray',
    padding: 15,
    margin: 8,
    shadowColor: '#000',

  } 
});
export default Inputcurved;
