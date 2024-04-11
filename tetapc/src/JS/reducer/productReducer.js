import { ADD_PRODUCT, DELETE_PRODUCT, FAIL_PRODUCT, GET_PRODUCTS, LOAD_PRODUCT, MODIFY } from "../ACTIONS/productActions"
import { toast } from "react-toastify"

const initialstate={
    product:null,
    load:false,
    error:true
}


export const productReducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case ADD_PRODUCT:
            toast("product added succesfully")
            return{...state,load:false}
        case MODIFY:
            return {...state,load:false}
        case GET_PRODUCTS:
            console.log(payload.products)
            return {...state,load:false,product:payload}
        case DELETE_PRODUCT:
            return {...state,load:false}
        case FAIL_PRODUCT:
            return{...state,load:false,error:payload}
        case LOAD_PRODUCT:
            return{...state,load:true}
        default:
            return state
    }
}