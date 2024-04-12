import { toast } from "react-toastify"
import { CURRENT, EDIT_PASSWORD, FAIL_USER, LOAD_USER, SIGNIN, LOGOUT, SIGNUP,EDIT_IMAGE } from "../ACTIONS/actions"


//initialState
const initialState={
    user:null,
    load:false,
    error:null,

}


//pure function

const userReducer=(state=initialState,{type,payload})=>{

    switch (type) {
        case LOAD_USER :
            return{...state,load:true}
        case SIGNUP:
            toast(payload.msg)
            localStorage.setItem("token", payload.token);
            return{...state,user:payload.newUser,load:false}
        case SIGNIN :
            toast(payload.msg)
                localStorage.setItem("token",payload.token)
            return{...state,load:false,user:payload.foundUser}
        case FAIL_USER:
            toast.error("please verify you're email and password")
            return{...state,error:payload.data,load:false}
        case EDIT_PASSWORD:
            toast("Password updated")
            return{...state,load:false}
        case EDIT_IMAGE:
                toast("image updated success")
                return{...state,load:false}
        case LOGOUT:
            toast("Logged Out successffully")
            localStorage.removeItem("token")
            return{...state,user:null,load:false}  
        case CURRENT:
            toast(payload.msg)
            return{...state,user:payload,load:false}
        default:
            return state
    }
}
export default userReducer
