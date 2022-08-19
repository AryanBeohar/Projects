import React from 'react';
const Data = () =>{
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
    return(
<View >
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
    )
}
export default Data;