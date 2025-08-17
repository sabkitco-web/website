
import axios from 'axios';
// import { cookie } from './cookies';
// import { storageData } from './storage';


function getAxios(backendUrl) {
    const axiosInstance = axios.create({
        baseURL: backendUrl || process.env.NEXT_PUBLIC_PREPAID_BACKEND_URL,
        // timeout: REQUEST_TIMEOUT,
    });


    function onRequestFulfilled(request) {
        // const authToken = backendUrl ? 
        // cookie.token : cookie.leadAuthToken
        // const program = sessionStorage.program ||  storageData.programSelectedByUser;
        // request.headers['source'] = 'functionup-website'
        
        // if(authToken)
        //     request.headers['x-auth-token'] = authToken
        // if('data' in request){
        //     request.data.program = program;
        // }
        // // Do something before request is sent
        return request;
    }

    function onRequestRejected(error) {
        // Do something with request error
        // Retry code can be put here
        // internet connectivity check can be put here
        return Promise.reject(error);
    }

    function onResponseFulfilled(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response;
    }


    function onResponseRejected(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        return Promise.reject(error);
    }


    axiosInstance.interceptors.request.use(onRequestFulfilled, onRequestRejected, {synchronous: true })
    axiosInstance.interceptors.response.use(onResponseFulfilled, onResponseRejected, { synchronous: true })

    return axiosInstance
}

let axiosInstance = null

if (!axiosInstance) {
    axiosInstance = getAxios()
}
    
export default axiosInstance

export {
    getAxios
}

