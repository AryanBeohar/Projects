import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import{ Inputbox , Button} from '../Components/IndexComponent';
import Img from '../Image/HarryPorter.png';
import Gokuimg from '../Image/goku.jpeg';


const Dashboad = props => {
  const [search, setSearch] = useState('');
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
      img: Img,
      name: 'Header2',
      Time: '8m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },

    {
      id: 3,
      img: Img,
      name: 'Header3',
      Time: '8m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },

    {
      id: 4,
      img: Img,
      name: 'Header4',
      Time: '10m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },
  ]);
 
  const [arraymain, setArrayMain] = useState([]);
  const back = () => {
    props.navigation.navigate('Login');
  };
  useEffect(() => {
    setArrayMain(array);
  }, []);

  const Searchfunction = text => {
    if (text) {
      const newData = arraymain.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setArray(newData);
      setSearch(text);
    } else {
      setArray(arraymain);
      setSearch(text);
    }
  };

  const Filter = () => {
    navigation.navigate('');
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
       
          <View style={styles.header}>
            <Button onPress={back} style={styles.back} name="Back" />
            <Text style={styles.Feedtext}>Feed</Text>
            <Button onPress={Filter} style={styles.Filter} name="Filter" />
          </View>
         
          <View>
            <Inputbox
              placeholder={'Search'}
              onChangeText={text => Searchfunction(text)}
              value={search}
            />
          </View>
         
   <View>
            {array.map(item => {
              return (
                <View style={styles.mapcontainer}>
                  <View style={{flexDirection: 'row'}} key={item.id}>
                  <Image
              style={{width: 50, height: 50, borderRadius: 12}}
              source={item.img}>
                   </Image>
                    <Text style={styles.mapname}>{item.name} </Text>
                    <Text style={styles.maptime}>{item.Time}</Text>
                  </View>
                  <Text style={styles.mapcontent}>{item.content}</Text>
                </View>
              );
            })}
          </View>

          <View style={{marginTop: 25}}>
            <Image
              style={{width: 370, height: 220, borderRadius: 12}}
              source={Gokuimg}
            />
          </View>
      
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  mapcontainer: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    borderBottomLeftRadius: 80,
    padding: 7,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  Feedtext: {
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
  mapname: {
    fontSize: 18,
    padding: 8,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  maptime: {
    fontSize: 15,
    padding: 9,
    color: 'grey',
    marginLeft: 155,
  },
  mapcontent: {
    flexDirection: 'row',
    marginLeft: 63,
    marginTop: -20,
  },
});
export default Dashboad;
