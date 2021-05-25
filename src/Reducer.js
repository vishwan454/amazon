export const initialState = {
    basket :[],
    user:null,
}

export const getBasketTotal = (basket) =>
    basket?.reduce ((amount, item)=> item.price+amount,0)


function reducer(state, action){
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        case "ADD_TO_BASKET":
            //logic to add to basket 
            return { 
                ...state,
                basket:[...state.basket,action.item]
             }
            break;
        case "REMOVE_FROM_BASKET":
        //LOGIC TO REMOVE FROM THE BASKET 
        let newBasket = [...state.basket]
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

        if(index >=0){
            //item exists in basketm remove it
            newBasket.splice(index,1)
        }else{
            console.warn(
                `can't remove the product : (id:${action.id}) as its not in basket`
            )
        }

            return { 
                ...state, 
                basket: newBasket }
            break;
        default:
        return state


    }
}

export default reducer