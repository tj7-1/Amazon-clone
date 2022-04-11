//First we push every activity to the datalayer .
//And then it shows on the bascket

//Basically the initialstate is what data look like in the beginning 
//And the reducer is how we manipulate the datalayer.
//Reducer is how we able to dispatch the action into the datalayer and how do we actully go and pull it

//Context API and Redux is not the same thing but have the same pattern eg a global store.

export const initialState = {
    basket:[],      //creating an initial or empty basket to begin with
    user: null
};

//selector
export const getBasketTotal = (basket) =>       //to get the total amount 
    basket?.reduce((amount, item)=>item.price+amount,0);   //reduce is a function that tells the totaleg price of the item + the amount and initial amount is 0 

const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){

        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem)=> basketItem.id===action.id
            );
            let newBasket=[...state.basket];

            if(index>=0)
            {
                newBasket.splice(index, 1); //chopping it by one
            }else{
                console.warm(`cant remove product(id: ${action.id})`)
            }

            return {
                ...state,
                basket: newBasket
            };

            case 'SET_USER':
                return{
                    ...state,
                    user: action.user
                }

            default:
                return state;
    }
};

export default reducer;