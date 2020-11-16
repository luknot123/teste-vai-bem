import axios from 'axios';
const URL = "http://192.168.0.3:8015";

export const login = user => {
    console.log(URL);
    return axios.post(URL+'/usuario/login',user,{
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
        return false;
    })
}
