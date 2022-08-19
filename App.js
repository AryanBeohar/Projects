import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './src/Navigation/AuthStack';
import BottomTabBar from './src/Navigation/CreateBottomTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store/Store';
import { Awesomeproject } from './src/Screens/index';
import {Wishlist} from './src/Screens/index'
import { Proceed } from './src/Screens/Proceed';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="authStack">
          <Stack.Screen
            name="authStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="bottomTabBar"
            component={BottomTabBar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Awesomeproject"
            component={Awesomeproject}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="Wishlist"
            component={Wishlist}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Proceed"
            component={Proceed}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
