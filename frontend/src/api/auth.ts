import axios from 'axios'
const API  = "http://localhost:3000/api/auth"


export const signupUser = async(email:string,password:string) =>{
    return axios.post(`${API}/signup`,{email,password})
}


export const loginUser  = async(email:string,password:string)=>{
    return axios.post(`${API}/login`,{email,password})
}