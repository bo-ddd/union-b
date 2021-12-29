import axios from 'axios';
export default class Axios extends axios {
    constructor(){
        super();
    }
    post(){
        Axios.post('/user/getToken').then(res=>{
            sessionStorage.setItem('token',res.data)
            console.log(res.data)
            if(!res){
                return;
            }
        })
    }
}