import React, { useEffect } from 'react';
import { Text,FlatList ,View , Image } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Axios } from 'react-native-axios';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
import { ScrollView } from 'react-native-gesture-handler';
import Img from '../Image/HarryPorter.png';
import kakashi from '../Image/kakashi.jpeg';
import goku from '../Image/goku.jpeg';
import goku2 from '../Image/goku2.jpeg';
import naruto from '../Image/narutro.jpeg';
import saske from '../Image/saske.jpeg';
import saske2 from '../Image/saske2.jpeg';
// import { useScrollToTop } from '@react-navigation/native';

const Cars = () =>{
  // const dispatch = useDispatch();
  // const stateData = useSelector(state=>state.changeTheNumber)
  // const url = `https://private-anon-1b5ed9d0ed-carsapi1.apiary-mock.com/manufacturers`;
  const [number , setNumber] = useState(2)
  const [headerShown, setHeaderShown] = useState(false);
  // const ref = React.useRef(null);
  // useScrollToTop(ref);
  const [array, setArray] = useState([
    {
      id: 1,
      img: Img,
      name: 'Header1',
      Time: '8m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },

    {
      id: 2,
      img: saske,
      name: 'Header2',
      Time: '8m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },

    {
      id: 3,
      img: saske2,
      name: 'Header3',
      Time: '8m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },

    {
      id: 4,
      img: goku,
      name: 'Header4',
      Time: '10m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },
    {
      id: 5,
      img: goku2,
      name: 'Header1',
      Time: '8m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },

    {
      id: 6,
      img: naruto,
      name: 'Header2',
      Time: '8m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },

    {
      id: 7,
      img: Img,
      name: 'Header3',
      Time: '8m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },

    {
      id: 8,
      img: saske,
      name: 'Header4',
      Time: '10m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },
  ]);
  // const fetchMoreData = () =>{
  //   // if(!array.isListEnd && !array.moreLoading){
  //     setNumber(number+2)
  //   // }
  // }
const [height,setHeight] = useState(null)
return(
<SafeAreaView >
<FlatList
contentContainerStyle={{flexGrow:1}}
            data={array.slice(0,number)}
            // data={array}
            // ref={ref}
            // ItemSeparatorComponent={}
            // onEndReachedThreshold={0.5}
            // onEndReached={fetchMoreData}
            onScroll = {(event) => {
              const scrollOffset = event.nativeEvent.contentOffset.y
              if(scrollOffset>=(height/2)){
                setNumber(number+2)
              }
              console.log(scrollOffset);
            }}
            onLayout={(event) => {
              const {x, y, width, height} = event.nativeEvent.layout;
              // do something here like set your initial animated value for the height
            console.log('>>>>>>>>>>', x, y, width, height)
            setHeight(height)
          }} 
          
            renderItem={({item }) => (
              <>

    <View style={{ flex: 1 }} />

            <View style={{alignItems:'center' }}>
            <View style={{flexDirection:'row', padding:10}}>
            <Text style={{fontSize:20, color:'indianred'}}>{item.id} {'.'}</Text>
            <Text style={{marginLeft:260, fontSize:20, color:'indianred'}} >{item.name}</Text>
            </View>
            <Image style={{width:450, height:500 , margin:10,borderWidth:0.2 }} source={item.img}/>
            </View>
           
           </>
            )}
/>
</SafeAreaView>
)}
export default Cars;