import  axios  from "axios";

export const ADD_PRODUCT="addproduct"
export const GET_PRODUCTS="get product"
export const MODIFY="modify"
export const DELETE_PRODUCT="delete the product"
export const LOAD_PRODUCT="load product"
export const FAIL_PRODUCT="fail_product"


export const addProduct=(product)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT})
try {
    let result=await axios.post("http://localhost:8000/api/product/addproduct",product)
    dispatch({type:ADD_PRODUCT})
} catch (error) {
    dispatch({type:FAIL_PRODUCT,payload:error})
}
}

export const modify=(price,_id)=>async(dispatch)=>{
dispatch({type:LOAD_PRODUCT})
try {
let result= await axios.put(`/api/product/updateproduct/${_id}`,price)
dispatch({type:MODIFY,payload:price})
} catch (error) {
dispatch({type:FAIL_PRODUCT,payload:error})
}
}
export const get_product=()=>async(dispatch)=>{
dispatch({type:LOAD_PRODUCT})
try {
let result= await axios.get(`/api/product/products`)
dispatch({type:GET_PRODUCTS,payload:result})
} catch (error) {
dispatch({type:FAIL_PRODUCT,payload:error})
}
}
export const delete_product=(_id)=>async(dispatch)=>{
dispatch({type:LOAD_PRODUCT})
try {
let result= await axios.delete(`/api/product/deleteproduct/${_id}`)
dispatch({type:DELETE_PRODUCT,payload:result})
} catch (error) {
dispatch({type:FAIL_PRODUCT,payload:error})
}
}