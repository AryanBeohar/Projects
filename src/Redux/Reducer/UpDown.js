import icecream from '../../Image/icecream.jpeg';
import icecream2 from '../../Image/icecream2.jpeg';
import icecream3 from '../../Image/icecream3.jpeg';
import icecream4 from '../../Image/icecream4.jpeg';
import icecream5 from '../../Image/icecream5.jpeg';
import icecream6 from '../../Image/icecream8.jpeg';
import icecream7 from '../../Image/icecream6.jpeg';
import icecream8 from '../../Image/icecream7.jpeg';


const initialState = {
    count:0,
    itemlist:[],
    list: [{
        id: 1,
        img:  icecream4,
        name: 'choco-chips',
        qnantity: 1,
        Price: 40, 
      },
      
      {
        id: 2,
        img: icecream2,
        qnantity: 1,
        name: 'tooty-fruity',
        Price: 60,
      },
      
      {
        id: 3,
        img: icecream3,
        qnantity: 1,
        name: 'badam-pista',
        Price: 80,
      },

      {
        id: 4,
        img: icecream,
        qnantity: 1,
        name: 'chocoLate',
        Price: 70,
      },

      {
        id: 5,
        img: icecream5,
        name: 'Butterscotch',
        qnantity: 1,
        Price: 80,
      },

      {
        id: 6,
        img: icecream6,
        qnantity: 1,
        name: 'butterscotch-Cup',
        Price: 80,
      },
      
      {
        id: 7,
        img: icecream7,
        qnantity: 1,
        name: 'Vanilla',
        Price: 60,
      },

      {
        id: 8,
        img: icecream8,
        name: 'strawberry',
        Price: 70,
        qnantity: 1,
      }],
      
};

const changeTheNumber = (state = initialState,action) =>{
    switch(action.type){
        case "UPDATED_DATA" : return {...state , list:action.payload};
        case "UPDATED_ITEM" : 
          return {...state , itemlist:action.payload};
        default : return state;
    }
}
export default changeTheNumber