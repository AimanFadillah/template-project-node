import axios from "axios";

const ConfigAxios = axios.create({ withCredentials: true, baseURL: `http://localhost:5000` })

// ConfigAxios.interceptors.request.use(request => {
//     console.log("Loading")
//     return request
// })

// ConfigAxios.interceptors.response.use(response => {
//     console.log("Finish")
//     return response;
// })

export default ConfigAxios;



