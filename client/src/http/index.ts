import axios from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL = "http://localhost:5000/api"

var $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {         
        'Access-Control-Allow-Origin' : 'true',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
})

//const token=`Bearer ${localStorage.getItem('token')}`; 
//$api.defaults.headers.common['Authorization'] = token;


$api.interceptors.request.use(async (config) => {
    //config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
    //config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
    config.headers = {
        ...config.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    //config.default.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$api.interceptors.response.use((config) => {
    //console.log("config");
    return config;    
}, async (error) => {
    //console.log(error.response.status);
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !originalRequest._isRetry){
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})        
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
            
        } catch (e) {
            console.log('Не авторизован!');            
        }       
    }
    throw error;
})



export default $api;