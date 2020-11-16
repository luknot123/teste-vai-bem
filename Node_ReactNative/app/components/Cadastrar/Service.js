import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = "http://192.168.0.3:8015";

export const cadastrar = async data => {
    let token = await AsyncStorage.getItem('@AuthApp:token');
    console.log("Token aq marilene");
    console.log(token);
    console.log("Data aq marilene");

    console.log(data);

    return axios.post(URL+'/estabelecimento/cadastrar',data,{
        headers: {'x-access-token': token,'Content-Type': 'application/json'}
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
        return false;
    })
}
