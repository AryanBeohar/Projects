import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {Inputbox, Button} from '../Components/IndexComponent';
import ImagePicker from 'react-native-image-crop-picker';
import kakashi from '../Image/kakashi.jpeg';
import Img from '../Image/HarryPorter.png';

const Profile = ({navigation}) => {

  const [filePath, setFilePath] = useState('/Users/dr.mac/Downloads/kakashi.jpeg');
  const [toggle, setToggle] = useState(true);
  const back = () => {  };
  const filter = () => {  };
  
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
    {
      id: 5,
      img: Img,
      name: 'Header1',
      Time: '8m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },

    {
      id: 6,
      img: Img,
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
      img: Img,
      name: 'Header4',
      Time: '10m ago',
      content: `He will to use your react yact ,and I don't want this thing smelling like fish `,
    },
  ]);
  const upload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(res => {
      console.log("res===>",res);
      setFilePath(res.sourceURL);
    });
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.maincontainer}>
        <Button onPress={back} style={styles.back} name="Back" />
        <Text style={styles.titleText}>Profile</Text>
        <Button onPress={filter} style={styles.Filter} name="Logout" />
      </View>
      <View>
        <Image style={styles.circle} source={{
          uri:filePath
        }}></Image>
      </View>
      <View style={{padding: 10}}>
        <Button name="upload" onPress={() => upload()} style={styles.upload} />
        <Text style={styles.profilename}>Victoria Robertson</Text>
        <View style={styles.toggle}>
          <Button name="Post" style={toggle? styles.post : styles.post2}onPress={() => setToggle(true)} />
          <Button name="Photos" style={toggle?styles.photos2 : styles.photos} onPress={() => setToggle(false)} />
        </View>
       
        {toggle ? 
        ( 
          array.map(item => {
            return (
             
              <View style={styles.mapcontainer}>
                <View style={{flexDirection: 'row'}} key={item.id}>
                  <Image
                    style={{width: 50, height: 50, borderRadius: 12}}
                    source={item.img}></Image>
                  <Text style={styles.mapname}>{item.name} </Text>
                  <Text style={styles.maptime}>{item.Time}</Text>
                </View>
                <Text style={styles.mapcontent}>{item.content}</Text>
              </View>
            );
          })
        ) : (
          <FlatList
            data={array}
            numColumns={2}
            renderItem={({item}) => (
              <>
                <View style={styles.flatlistdata}>
                  <View>
                    <Image
                      style={{
                        width: 120,
                        height: 120,
                        marginHorizontal: 32,
                        margin: 10,
                        borderRadius:15
                      }}
                      source={item.img}
                    />
                  </View>
                </View>
              </>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maincontainer: {
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:'skyblue',
    height:170,
    padding: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 18,
    color:'white'
  },
  textStyle: {
    padding: 0,
    color: 'black',
  },
  Filter: {
    fontSize: 18,
    color:'white'
  },
  back: {
    fontSize: 18,
    color:'white'
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
  circle: {
    borderWidth: 4,
    width: 145,
    height: 145,
    borderRadius: 145 / 2,
    marginTop: -95,
    marginLeft: 125,
    borderColor: 'white',
  },
  profilename: {
    marginLeft: 48,
    fontSize: 35,
  },
  upload: {
    marginLeft: 165,
    fontSize: 15,
  },
  toggle: {
  margin:15,
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor:'lightgray',
  marginHorizontal:0,
  marginHorizontal:40,
  padding:1,
  overflow:'hidden',
  borderRadius:20
},
  post:{
  backgroundColor:'white',  
  padding:10,
  width:148,
  textAlign:'center',
  overflow:'hidden',
  borderRadius:20,
  fontWeight:'bold',
  color:'skyblue'

},
photos:{
backgroundColor:'white',
padding:10,
width:145,
textAlign:'center',
overflow:'hidden',
borderRadius:20,
color:'skyblue'
},
post2:{
backgroundColor:'lightgray',
padding:10,
width:142,
textAlign:'center',
overflow:'hidden',
borderRadius:20
},
photos2:{
 backgroundColor: 'lightgray',
 padding:10,
 width:142,
 textAlign:'center'
},
mapcontainer: {
  borderBottomWidth: 1,
  borderColor: 'lightgray',
  borderBottomLeftRadius: 80,
  padding: 7,
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
  marginLeft: 140,
},
mapcontent: {
  flexDirection: 'row',
  marginLeft: 63,
  marginTop: -20,
},
});

{
  /* <Text style={styles.titleText}>
Example of Image Picker in React Native
</Text>
<View style={styles.container}>
{/*<Image 
  source={{ uri: filePath.path}} 
  style={{width: 100, height: 100}} />*/
}
{
  /* <Image
  source={{
    uri: 'data:image/jpeg;base64,' + filePath.data,
  }}
  style={styles.imageStyle}
/> */
}
{
  /* <Image
  source={{uri: filePath.uri}}
  style={styles.imageStyle}
/>
<Text style={styles.textStyle}>
  {filePath.uri}
</Text> */
}
{
  /*
  <Button
    title="Choose File"
    onPress={chooseFile} />
*/
}
{
  /* <TouchableOpacity
  activeOpacity={0.5}
  style={styles.buttonStyle}
  onPress={chooseFile}>
  <Text style={styles.textStyle}>
    Choose Image
  </Text>
</TouchableOpacity>
</View>
</SafeAreaView> */
}
