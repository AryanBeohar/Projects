import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ReduxButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.naam}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default ReduxButton;

const styles = StyleSheet.create({
    naam: {
        fontSize: 18,
        fontFamily:'BebasNeue-Regular',
        marginTop: 15,
        backgroundColor: 'skyblue',
        paddingHorizontal: 10,
      },
  });
   