import axios from "axios";
import { loadingBarFinish, loadingBarStart } from "../functions/LoadingBar";

const ConfigAxios = axios.create({ withCredentials: true, baseURL: `http://localhost:5000` })

ConfigAxios.interceptors.request.use(request => {
    loadingBarStart()
    return request
})

ConfigAxios.interceptors.response.use(response => {
    loadingBarFinish()
    return response;
}, error => {
    const status = error.response.status;
    if (status == 401 || status == 403) loadingBarFinish()
    return Promise.reject(error);
})

export default ConfigAxios;



