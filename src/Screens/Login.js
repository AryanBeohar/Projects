import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  InputText,
  TouchableOpacity,
} from 'react-native';
import{ Inputbox , Inputcurved, Button} from '../Components/IndexComponent';

const Login = props => {
  const [loginemail, setLoginEmail] = useState('');
  const [loginpassword, setLoginPassword] = useState('');

  const loginbutton = () => {
    props.navigation.navigate('bottomTabBar');
  };

  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Login
        </Text>

        <View style={{marginTop: 12}}>
          <Inputbox
            placeholder={'Email'}
            onChangeText={e => setLoginEmail(e)}
            value={loginemail}
            // externalStyle={{borderRadius: 30}}
          />
          <Inputbox
            placeholder={'Password'}
            onChangeText={e => setLoginPassword(e)}
            value={loginpassword}
          />
        </View>

        <View>
          <Button
            onPress={loginbutton}
            name="Login"
            style={styles.loginbutton}
          />
        </View>

        <Button
          style={{textAlign: 'center', marginTop: 10 }}
          name="Forgot your password?"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginbutton: {
    backgroundColor: 'skyblue',
    color: 'white',
    padding: 10,
    fontSize: 15,
    margin:10,
    textAlign: 'center',
    borderRadius: 18,
    overflow: 'hidden',
    marginTop: 95,
  },
});

export default Login;
