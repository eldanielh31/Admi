import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import {deleteUserFailure, deleteUserStart, deleteUserSuccess, getUserFailure, getUserStart, getUserSuccess, loginFailure, loginStart, loginSuccess, setError} from "./userRedux";

export const login = async(dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        if(res.data.isAdmin === true){
            dispatch(setError(false));
            dispatch(loginSuccess(res.data));  
        }else{
            dispatch(setError(true));
            dispatch(loginFailure());    
        }
        
    }catch(err){
        dispatch(loginFailure());
    }
};

//USUARIOS
export const getUsers = async(dispatch)=>{
    dispatch(getUserStart());
    try{
        const res = await userRequest.get("/users");
        dispatch(getUserSuccess(res.data));
    }catch(err){
        dispatch(getUserFailure());
    }
};

export const deleteUser = async(id, dispatch)=>{
    dispatch(deleteUserStart());
    try{
        //const res = await userRequest.delete(`/users/${id}`);
        dispatch(deleteUserSuccess(id));
    }catch(err){
        dispatch(deleteUserFailure());
    }
}


//PRODUCTOS

export const getProducts = async(dispatch)=>{
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    }catch(err){
        dispatch(getProductFailure());
    }
};

export const deleteProducts = async(id, dispatch)=>{
    dispatch(deleteProductStart());
    try{
        //const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    }catch(err){
        dispatch(deleteProductFailure());
    }
}

export const updateProducts = async(id, product, dispatch)=>{
    dispatch(updateProductStart());
    try{
        //update
        dispatch(updateProductSuccess({id , product}));
    }catch(err){
        dispatch(updateProductFailure());
    }
}

export const addProduct = async(product, dispatch)=>{
    dispatch(addProductStart());
    try{
        const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    }catch(err){
        dispatch(addProductFailure());
    }
}