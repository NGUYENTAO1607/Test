import axios from 'axios'
import qs from 'qs'
import {getToken} from ''

// parse error response
function parseError(message){
    if(messages){
        if(messages instanceof Array){
            return Promise.reject({messages : messages})
        }else{
            return Promise.reject({messages:[messages]})
        }
    }else{
        return Promise.reject({messages:['error parseError']})
    }
}

// parse responce
function parseBody(response){
    if(response.status === 200){
        return response.data
    }else{
        return this.parseError(response.data.messages)
    }
}

// create axios instance
let instance = axios.create({
    baseURL : 'http://localhost:50500',
    timeout :5000,

})
// request header
instance.interceptors.request.use((config)=>{
    config.headers = {
        Authorization : getToken(config.url)
    }
    return config
},error=>{
    return Promise.reject(error)
})

// response parse
instance.interceptors.response.use((response)=>{
    if(response.data.err === 200){
        return parseBody(response)
    }else{
        if(response.data.logout){
            window.location.href = "/login"
        }
    }
    return parseBody(response)
},error=>{
    if(error.response){
        return parseError(err.response.data)
    }else{
        return Promise.reject(error)
    }
})
export const request = instance

