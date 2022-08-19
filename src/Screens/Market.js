import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import{ Inputbox , Inputcurved, Button} from '../Components/IndexComponent';
import Img from '../Image/HarryPorter.png';

const Market = () => {

  const [search, setSearch] = useState('');
  const [array, setArray] = useState([
    {
      id: 1,
      img: Img,
      name: 'Header1',
      content: 'Item #1 Name Goes Here ',
      price: `$14.00`,
    },

    {
      id: 2,
      img: Img,
      name: 'Header2',
      content: `Item #2 Name Goes Here `,
      price: `$14.00`,
    },

    {
      id: 3,
      img: Img,
      name: 'Header3',
      content: `Item #3 Name Goes Here `,
      price: `$14.00`,
    },

    {
      id: 4,
      img: Img,
      name: 'Header4',
      content: `Item #4 Name Goes Here `,
      price: `$14.00`,
    },
  ]);

  const Filter = () => {};
  const back = () => {};

  return (
  
  <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Button onPress={back} style={styles.back} name="Back" />
          <Text style={styles.Markettext}>Market</Text>
          <Button onPress={Filter} style={styles.Filter} name="Filter" />
        </View>

        <View style={styles.input}>
          <Inputcurved
            placeholder="Search"
            onChangeText={e => setSearch(e)}
            value={search}
          />
        </View>

        <Text
          style={{
            paddingHorizontal: 6,
            marginTop: 15,
            fontSize: 25,
            fontWeight: '500',
          }}>
          Hot deals
        </Text>
  
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', marginTop: 12}}>
  
            {array.map(item => {
              return (
                <View style={styles.mapcontainer}  key={item.id}>
                  <View>
                    <Image
                      style={styles.mapimage}
                      source={item.img}></Image>
                  </View>
                  <View>
                    <Text style={styles.mapcontent}>{item.content}</Text>
                    <Text
                      style={styles.mapprice}>
                      {item.price}
                    </Text>
                  </View>
                </View>
              );
            })
            }
  
          </View>
        </ScrollView>

        <Text
          style={{
            paddingHorizontal: 6,
            marginTop: 25,
            fontSize: 25,
            fontWeight: '500',
          }}>
          Trending
        </Text>
  
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', marginTop: 12}}>
  
            {array.map(item => {
                
                return (
                
                <View style={styles.mapcontainer} key={item.id}>
                  <View>
                    <Image
                      style={styles.mapimage}
                      source={item.img}></Image>
                  </View>
                
                  <View>
                    <Text style={styles.mapcontent}>{item.content}</Text>
                
                    <Text
                      style={styles.mapprice}>
                      {item.price}
                    </Text>
                
                  </View>
                </View>
              );
            })}

          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  mapcontainer:{
    width: 105,
    margin: 12
  },
  mapimage:{
    height: 120, width: 110, borderRadius: 10
  },
  mapcontent:{
    marginTop: 7
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  Markettext: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  Filter: {
    color: 'skyblue',
    fontSize: 18,
  },
  back: {
    color: 'skyblue',
    fontSize: 18,
  },
  mapprice:{
      fontWeight: '700',
      marginTop: 5,
      marginLeft: 12
  },
});
export default Market;

