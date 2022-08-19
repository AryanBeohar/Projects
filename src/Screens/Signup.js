import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  InputText,
  TouchableOpacity,
} from 'react-native';
import{ Inputbox , Button} from '../Components/IndexComponent';
import { signUpNavigate } from '../Redux/Action/Index';
const Signup = props => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const signupbutton = () => {};
  
  const Login = () => {
    props.navigation.navigate('Login');
  };
  const X = () => {};
  
  return (
   
   <SafeAreaView>
      <View style={styles.container}>
   
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            marginTop: 10,
          }}>
   
          <Button
            onPress={X}
            name="X"
            style={{textAlign: 'center', fontSize: 16}}
          />
   
          <Text style={{textAlign: 'center', fontSize: 25 , fontWeight: 'bold' ,marginLeft:30}}>Sign Up</Text>
          <Button
            onPress={Login}
            name="Login"
            style={{textAlign: 'center', fontSize: 16, color: 'skyblue'}}
          />
        </View>

        <View style={{marginTop: 12}}>
          <Inputbox
            placeholder={'Name'}
            onChangeText={e => setName(e)}
            value={name}
          />
          <Inputbox
            placeholder={'Email'}
            onChangeText={e => setEmail(e)}
            value={email}
          />
          <Inputbox
            placeholder={'Password'}
            onChangeText={e => setPassword(e)}
            value={password}
          />
        </View>
        <View>
          <Button
            onPress={signupbutton}
            name="Sign Up"
            style={styles.signupbutton}
          />
          <Button
            style={{textAlign: 'center', marginTop: 10}}
            name="Forgot your password?"
          />
        </View>
         
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    Flex: 1,
    padding: 10,
    justifyContent: 'center',
  },

  input: {
    backgroundColor: 'aliceblue',
    borderRadius: 10,

    margin: 4,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.65,

    elevation: 1,
  },

  signupbutton: {
    backgroundColor: 'skyblue',
    color: 'white',
    padding: 10,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 18,
    overflow: 'hidden',
    margin: 7,
  },
});

export default Signup;
