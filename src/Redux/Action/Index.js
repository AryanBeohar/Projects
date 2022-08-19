// export const incNumber =(quantity) =>{
//     console.log(">>>>>>>>>.inc",quantity)
//     return{
//     type : 'INCREMENT',
//     quantity: quantity
//   }
// }

// export const decNumber =(quantity) =>{
//     console.log(">>>>>>>>>.dec",quantity)
//     return{
//         type : 'DECREMENT',
//         quantity: quantity
//    }
// }
export const storeData =(data) =>{
    return{
        type : 'UPDATED_DATA',
        payload: data
   }
}
export const storeItem =(data) =>{
    return{
        type : 'UPDATED_ITEM',
        payload: data,
        // isUpdated: isUpdated
   }
}
// export const storePrice = (data) =>{
//     return{
//         type :'UPDATED_PRICE',
//         payload : data,
//     }
// }
export const Data = () =>{
    console.log(">>>>>>>>>.Data", Data);
    return{
type :'Data'
    }
}

export const Add = (data) =>{
    console.log(">>>>>>>>>.Add", Add);
    return {
        type:'ADD',
        payload:{
            id: new Date.getTime().toString(),
            data: data
        }
    }
}
export const Delete = () =>{
    console.log(">>>>>>>>>.Delete", Delete);
    return{
        type :'DELETE'
    }
}
export const Remove = () =>{
    console.log(">>>>>>>>>.Remove", Remove);
    return{
        type :'REMOVE'
    }
}