import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import ReduxButton from '../Components/ReduxButton';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {storeData} from '../Redux/Action/Index';
import Wishlist from './Wishlist';
const Todo = props => {
  const [modal, setOpenModal] = useState('false');
  const [idd, setIdd] = useState('');
  console.log(idd);
  const stateData = useSelector(state => state.changeTheNumber);

  // const [Input, setInput] = useState('');

  const AddtoWishlist = id => {
    props.navigation.navigate('Wishlist');
    
  };
  const imagepic = id => {
    setIdd(id);
    const seletedpic = stateData.list.filter(item => {
      if (item.id === id) {
        props.navigation.navigate('Awesomeproject', {SelectedItemId: id});
      }
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'skyblue', padding: 10}}>
        {/* <Text style={{
            fontSize: 10,
            textAlign: 'center',
            fontStyle: 'normal',
            // color:'indianred',
            fontStyle:'italic',
          }}>Ice Cream</Text> */}
        {/* <Image style={{width:80 , height:100 , marginTop:-32,}} source={png} /> */}
        <Text
          style={{
            fontSize: 45,
            textAlign: 'center',
            fontStyle: 'normal',
            color: 'indianred',
            fontStyle: 'italic',
            //  fontFamily:'Satisfy-Regular',
            fontFamily: 'Fuggles-Regular',
            // marginTop:-75
          }}>
          Ice-Cream-Wale
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingHorizontal: 10,
          margin: 10,
          padding: 1,
        }}>
        <TouchableOpacity onPress={() => AddtoWishlist()} style={{flexDirection:'row'}}>
             <Icon2 name="shoppingcart" style={{fontSize: 30, color: 'indianred', fontFamily:'BebasNeue-Regular'}} /> 
            {<Icon2 name="right" style={{fontSize: 28, color: 'indianred'}} />}
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View>
          <FlatList
            data={stateData.list}
            numColumns={2}
            renderItem={({item}) => (
              <>
                <View style={{paddingHorizontal: 12.5, marginTop: 15}}>
                  <TouchableOpacity onPress={() => imagepic(item.id)}>
                    <Image
                      style={{width: 170, height: 180, borderRadius: 18}}
                      source={item.img}></Image>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}></View>
                </View>
              </>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Todo;
// <Wishlist dataid={idd}/>
{
  /* <Text
style={{
textAlign: 'center',
fontStyle: 'italic',
fontSize: 15,
padding:10
}}>
{item.name.charAt(0).toUpperCase() + item.name.slice(1)}
</Text> */
}
{
  /* </TouchableOpacity> */
}
{
  /* <Text
style={{
marginTop: 18,
paddingHorizontal: 10,
marginRight: 10,
color: 'darkgoldenrod',
fontSize: 18,
}}>
{item.list}
</Text> */
}

{
  /* <ReduxButton name="-" disabled={stateData.count <= 1 ? true : false} onPress={() => decrement(item.id)} />
                    
<Text
style={{
fontSize: 18,
marginTop: 15,
paddingHorizontal: 5,
}}>
{item.qnantity}
</Text>
                    
<ReduxButton name="+" onPress={() => increment(item.id)} /> */
}
