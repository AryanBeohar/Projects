import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import Button from '../Components/Button';
import ReduxButton from '../Components/ReduxButton';
import {Add, storeData} from '../Redux/Action/Index';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Awesomeproject = ({route, navigation}) => {

  const [selectedRecord, setSelectedRecord] = useState({});
  const [itemid , setItemId] = useState('')
  const records = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  

  const Add = () => {
    const newArr = records.itemlist.filter(item => item?.id === selectedRecord?.id);
    if(newArr[0]?.id === selectedRecord.id){
      alert("added")
    }
    else{
      navigation.navigate('Wishlist', {Id: selectid});
    }
  };
  const Buy =() =>{
    alert('not in stock')
  }
  
  console.log('route.params.SelectedItemId', route.params.SelectedItemId);
  useEffect(() => {
    const selecteddata = records.list.find(
      item => item.id === route.params.SelectedItemId,
      );
      console.log('selecteddata>>>>', selecteddata.id);
  
      setSelectedRecord(selecteddata);
    }, [records]);
    const selectid = route?.params?.SelectedItemId;
  console.log('selectid--------->', selectid);
  return (
    <SafeAreaView>
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

      {/* <TouchableOpacity onPress={()=>AddtoWishlist()}>
          <Text style={{textAlign:'right', marginRight:12, padding:5}}>
            Wishlist
            {<Icon2 name="right" style={{fontSize: 15, color: 'black'}} />}
          </Text>
        </TouchableOpacity> */}
      <Image
        source={selectedRecord.img}
        style={{
          width: '80%',
          borderRadius: 50,
          overflow: 'hidden',
          height: '58%',
          marginLeft: 37,
          marginTop: 10,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 45,
          fontStyle: 'italic',
          fontFamily: 'Fuggles-Regular',
          marginTop: 12,
          color: 'gray',
        }}>
        {selectedRecord.name}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'BebasNeue-Regular',
          fontSize: 20,
          color: 'indianred',
        }}>
        <Text style={{color: 'gray'}}>M.R.P :</Text> {selectedRecord.Price}
      </Text>

      <Button
        name="Buy"
        onPress={() =>Buy()}
        style={{
          fontSize: 30,
          fontFamily: 'BebasNeue-Regular',
          textAlign: 'center',
          backgroundColor: 'indianred',
          padding: 6,
          color: 'white',
          width: 240,
          marginLeft: 76,
          borderRadius: 20,
          overflow: 'hidden',
          marginTop: 10,
        }}
      />

      <Button
        name="Add to Wishlist"
        onPress={() => Add()}
        style={{
          fontSize: 30,
          fontFamily: 'BebasNeue-Regular',
          textAlign: 'center',
          backgroundColor: 'indianred',
          padding: 6,
          color: 'white',
          width: 240,
          marginLeft: 76,
          borderRadius: 20,
          overflow: 'hidden',
          marginTop: 10,
        }}
      />
    </SafeAreaView>
  );
};

export default Awesomeproject;

// const increment = id => {
//   const updatedData = records.list.map(item => {
//     if (item.id === route.params.SelectedItemId) {
//       item = {...item, qnantity: item.qnantity + 1};
//       console.log('updateddata', updatedData);
//     }
//     return item;
//   });
//   dispatch(storeData(updatedData));
// };

// const decrement = id => {
//   const updatedData = records.list.map(item => {
//     if (item.id === route.params.SelectedItemId) {
//       item = {...item, qnantity: item.qnantity - 1};
//     }
//     return item;
//   });
//   dispatch(storeData(updatedData));
// };

{
  /* <View style={{flexDirection: 'row', justifyContent:'flex-start', paddingHorizontal:18}}>
        
<Text style={{fontSize: 18,fontFamily:'BebasNeue-Regular', marginTop: 16, paddingHorizontal: 8}}>
  Qty
</Text>


<ReduxButton name="-" onPress={() => decrement()} />

<Text
style={{
  fontSize: 20,
  fontFamily:'BebasNeue-Regular',
  marginTop: 15,
  paddingHorizontal: 5,
}}>
{selectedRecord.qnantity}
</Text>

<ReduxButton name="+" onPress={() => increment()} />


<Text style={{textAlign:'center' , fontFamily:'BebasNeue-Regular', fontSize:20, color:'indianred'}}><Text style={{color:'gray'}}>Price :</Text> {selectedRecord.Price}</Text>
</View> */
}

// const [countdata, setCountData] = useState(true)
// const dispatch = useDispatch();
// const stateData = useSelector(state => state.changeTheNumber);

// const increment = () => {
//   dispatch(incNumber());
// };
// const increment1 = () => {
//   dispatch(incNumber1());
// };
// const increment2 = () => {
//   dispatch(incNumber2());
// };
// const increment3 = () => {
//   dispatch(incNumber3());
// };
// const decrement = () => {
//   dispatch(decNumber());
// };
// const decrement1 = () => {
//   dispatch(decNumber1());
// };
// const decrement2 = () => {
//   dispatch(decNumber2());
// };
// const decrement3 = () => {
//   dispatch(decNumber3());
// };
// console.log(stateData);

// const Array = [
//   {
//     id: 1,
//     img: <Image style={{width: 80, height: 80,}} source={icecream4}/> ,
//     name : 'choco-chips',

//     qnantity: stateData.count,
//     incre: (
//       <ReduxButton name='+' onPress={increment} />
//     //  <Text>Aryan</Text>
//     ),
//     decre: (
//       stateData.count >= 1 ?
//       <ReduxButton name='-' onPress={decrement} /> : false
//     ),
//     Price: stateData.count * 40,
//   },
//   {
//     id: 2,
//     img: <Image style={{width: 80, height: 80}} source={icecream2} />,
//     qnantity:stateData.count1 ,
//     name : 'tooty-fruity',
//     incre: (
//       <ReduxButton name='+' onPress={increment1} />
//     ),
//     decre: (
//       stateData.count1 >= 1 ?
//       <ReduxButton name='-' onPress={increment1} /> : false
//     ),
//     Price: stateData.count1 * 60,
//   },
//   {
//     id: 3,
//     img: <Image style={{width: 80, height: 80}} source={icecream3} />,
//     qnantity: stateData.count2,
//     name : 'badam-pista',
//     incre: (
//       <ReduxButton name='+' onPress={increment2} />
//     ),
//     decre: (

//       stateData.count2 >= 1?
//       <ReduxButton name='-' onPress={increment2} /> : false
//         ),
//     Price: stateData.count2 * 80,
//   },
//   {
//     id: 4,
//     img: <Image style={{width: 80, height: 80}} source={icecream} />,
//     qnantity: stateData.count3,
//     name :   ' chocoLate',
//     incre: (
//       <ReduxButton name='+' onPress={increment} />
//     ),
//     decre: (
//       stateData.count3 >= 1 ?
//       <TouchableOpacity onPress={decrement3}>
//         <Text
//           style={{
//             fontSize: 25,
//             marginTop: 15,
//             backgroundColor: 'skyblue',
//             paddingHorizontal: 10,
//           }}>
//           -
//         </Text>
//       </TouchableOpacity> : false
//     ),
//     Price: stateData.count3 * 80,
//   },
//   // { id :5, Price: stateData.count*40+stateData.count1*60 +stateData.count2*80+stateData.count3*80 },
//   // {id :6 , Price:stateData.count+stateData.count1 +stateData.count2+stateData.count3}
// ];

// ------------------------------------------------------------------------------

//   <SafeAreaView style={{flex:1}}>
//     <View style={{backgroundColor:'skyblue', padding:20}}>
//     <Text
//       style={{
//         fontSize: 40,
//         textAlign: 'center',
//         fontStyle: 'normal',
//         color: 'indianred',
//       }}>
//       S-T-O-R-E
//     </Text>
//     </View>
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         borderWidth: 0.2,
//         borderColor:'gray',
//         marginTop: 0,
//         padding: 15,
//         backgroundColor: 'white',
//         margin: 5,
//         borderRadius:6
//       }}>
//       <Text style={{marginLeft: '2%', fontSize: 20, color: 'indianred'}}>
//         Icecream
//       </Text>
//       <Text style={{fontSize: 20, color: 'indianred'}}>Quantity</Text>
//       <Text style={{marginRight: '5%', fontSize: 20, color: 'darkorange'}}>
//         Price
//       </Text>
//     </View>
//     <ScrollView>
//     {Array.map(Item => {
//       return (
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             padding: 12,
//             borderWidth: 0.2,
//             borderRadius:10,
//             overflow:'hidden',
//             borderColor: 'gray',
//             margin: 5,
//             marginTop: 10,
//             backgroundColor: 'white',
//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: 1,
//             },
//             shadowOpacity: 0.25,
//             shadowRadius: 2.0,

//             elevation: 2,
//           }}>
//             <View >
//           <Text>{Item.img}</Text>
//           <Text style={{fontStyle:'italic' ,fontSize:15}}>{Item.name}</Text>
//           </View>
//           <Text>{Item.decre}</Text>
//           <TouchableOpacity>
//             <Text style={{fontSize: 25, marginTop: 15}}>{Item.qnantity}</Text>
//           </TouchableOpacity>
//           <Text>{Item.incre}</Text>
//          <Text style={{fontSize: 25, marginTop: 15, paddingHorizontal: 10}}>
//             {Item.Price}
//           </Text>
//         </View> : false
//       );
//     })}
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 10,
//         borderWidth: 0.5,
//         margin: 5,
//         padding: 10,
//         borderColor:'gray',
//         borderRadius:6
//       }}>
//       <Text
//         style={{
//           fontSize: 35,
//           marginLeft: 20,
//           fontWeight: '400',
//           color: 'indianred',
//         }}>
//         Total
//       </Text>
//       <Text
//         style={{
//           marginTop: 0,
//           fontSize: 25,
//           marginLeft: 20,
//           marginTop: 5,
//           fontWeight: '300',
//         }}>
//         {stateData.count +
//           stateData.count1 +
//           stateData.count2 +
//           stateData.count3 +
//           ' ' +
//           'q'}
//       </Text>
//       <Text
//         style={{
//           fontSize: 25,
//           marginRight: 15,
//           marginTop: 5,
//           fontWeight: '300',
//         }}>
//         {stateData.count * 40 +
//           stateData.count1 * 60 +
//           stateData.count2 * 80 +
//           stateData.count3 * 80}
//       </Text>
//     </View>
//     </ScrollView>
//   </SafeAreaView>
