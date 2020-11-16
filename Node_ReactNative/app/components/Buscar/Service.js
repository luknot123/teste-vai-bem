import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = "http://192.168.0.3:8015";

export const buscar = async data => {
    console.log(data);
    let token = await AsyncStorage.getItem('@AuthApp:token');
    return axios.post(URL+'/estabelecimento/buscar',data,{
        headers: {'x-access-token': token,'Content-Type': 'application/json'}
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
        return false;
    })
}
