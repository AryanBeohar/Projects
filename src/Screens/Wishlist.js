import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import ReduxButton from '../Components/ReduxButton';
import {Delete, storeData, storeItem, storePrice} from '../Redux/Action/Index';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../Components/Button';
import {cond} from 'react-native-reanimated';

const Wishlist = ({route,navigation}) => {
  const Id = route.params?.Id
  console.log('Id=========>', Id);
  const [data, setData] = useState([]);
  const records = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!!Id){
      const selecteddata = records.list.find(item => item.id === Id);
      let datavalue = [...records.itemlist];
      datavalue.push(selecteddata);
      setData(datavalue);
      dispatch(storeItem(datavalue))
    }
  }, []);
  
  const increment = id => {
    console.log("id----->", id, "records.itemlist", records.itemlist)
    const updatedData = records.itemlist.map(item => {
     if (item.id === id) {
        let f = item.qnantity
        f++;
        console.log("🚀 ~ file: Wishlist.js ~ line 42 ~ Wishlist ~ f")
        item = {
          ...item,
          qnantity: f,
          Price:item.Price + item.Price
        };
        
      }
      return item;
    });
    console.log('<<<<<<<<<<In', updatedData);
    setData(updatedData);
    dispatch(storeItem(updatedData));
  };
  // route.params.SelectedItemId

  const decrement = id => {
    console.log("id----->", id, "records.itemlist", records.itemlist)
    const updatedData = records.itemlist.map(item => {
     if (item.id === id) {
        let f = item.qnantity;
        f--;
        console.log("🚀 ~ file: Wishlist.js ~ line 42 ~ Wishlist ~ f")
        item = {
          ...item,
          qnantity: f,
          Price: item.Price - item.Price
        };
        
      }
      return item;
    });
    console.log('<<<<<<<<<<In', updatedData);
    setData(updatedData);
    dispatch(storeItem(updatedData));
  };

  // const Price  = (id) =>{
  //   const updatedData = records.itemlist.map(item => {
  //     if (item.id === id) {
  //       let f = item.qnantity
  //       item = {...item, Price: item.Price * f};
  //       console.log('item.qnantity', item.Price);
  //     }
  //     return item;
  //   });

  //   dispatch(storeItem(updatedData));
  //   setData(updatedData);
  //   console.log('<<<<<<<<<<', updatedData);
  // }
  
  const proceed = () => {
   navigation.navigate('Proceed');
  };
  
  console.log('records.itemlist>>>>>>>>>>>>>>>>>', records.itemlist);
  
//   const Delete = id => {
//    const item = data.find(item => item.id !== id);
//    setData(item);
//    console.log('---------------->', data)
//    console.log('>>>>>>>>>>>>>>>data', data);
//  };
  
  return (
    <SafeAreaView>
      {console.log("")}
      <View style={{backgroundColor: 'skyblue', padding: 10}}>
        <Text
          style={{
            fontSize: 45,
            textAlign: 'center',
            fontStyle: 'normal',
            color: 'indianred',
            fontStyle: 'italic',
            fontFamily: 'Fuggles-Regular',
            // marginTop:-75
          }}>
          <Text></Text>
          Ice-Cream-Wale
        </Text>
      </View>
      <Button
        style={{
          fontSize: 25,
          fontFamily: 'FasterOne-Regular',
          color: 'white',
          textAlign: 'center',
          margin: 8,
          backgroundColor:'indianred',
          padding:10,
          width:250,
          marginLeft:'18%',
          borderRadius:15,
          overflow:'hidden'
        }}
        onPress={proceed}
        name={'Proceed To Buy'}
      />
    <FlatList
        data={data}
        renderItem={({item}) => (
          <>
            <View
              style={{
                padding: 8,
                borderWidth: 0.2,
                margin: 8,
                borderRadius: 14,
                borderColor: 'gray',
                shadowColor: '#000',
                overflow: 'hidden',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
                backgroundColor: 'white',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  style={{width: 120, height: 120, borderRadius: 18}}
                  source={item?.img}
                />

                <Text
                  style={{
                    padding: 10,
                    fontFamily: 'BebasNeue-Regular',
                    marginTop: 8,
                    fontSize: 18,
                  }}>
                  {item?.name}
                </Text>
                
                  <Text style={{position: 'absolute', left: '42%', top: 55,fontFamily: 'BebasNeue-Regular', fontSize: 18, color:'indianred'}}
                  >Price : <Text style={{color:'black'}}> {item?.Price} /-</Text></Text>
                  
                 
               
                { item.qnantity > 1 ?
                <ReduxButton name="-" onPress={() => decrement(item?.id)} />
                 :false  }
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'BebasNeue-Regular',
                    marginTop: 15,
                    paddingHorizontal: 5,
                  }}>
                  {item?.qnantity}
                </Text>
              {
                <ReduxButton name="+" onPress={() => increment(item?.id)} />
              }
              </View>
              <TouchableOpacity onPress={() => Delete(item?.id)}>
                <Icon
                  name="delete"
                  style={{fontSize: 18, textAlign: 'right', marginTop: -15}}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      /> 
    </SafeAreaView>
  );
};
export default Wishlist;
