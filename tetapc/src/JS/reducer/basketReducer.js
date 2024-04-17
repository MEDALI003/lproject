import { ADD_BASKET, ADD_NEWBASKET, FAIL_BASKET, GET_BASKET, LOAD_BASKET } from "../ACTIONS/basketActions";
import { toast } from "react-toastify"


const initialstate={
    newbasket:[],
    basket:null,
    load:false,
    error:null
}


export const basketReducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case ADD_BASKET:
            toast("basket Added successefully!")
            return{...state,load:false}
        case GET_BASKET:
            return {...state,load:false,basket:payload.foundBasket}
        case LOAD_BASKET:
            return{...state,load:true}
        case FAIL_BASKET:
            toast("cannot serve right now")
            return{...state,load:false,error:true}
            case ADD_NEWBASKET:
                const index = state.newbasket.findIndex(el => el[0] === payload[0]);
                if (index !== -1) {
                    const updatedBasket = [...state.newbasket];
                    updatedBasket[index] = payload;
                    return { ...state, newbasket: updatedBasket };
                } else {
                    return { ...state, newbasket: [...state.newbasket, payload] };
                }            
        default:
            return state
    }
}