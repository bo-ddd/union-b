import axios from 'axios';
export default class Axios extends axios {
    constructor(){
        super();
    }
    post(){
        Axios.post('/user/getToken').then(res=>{
            console.log(res);
            if(res==undefined){
                return
            }
            sessionStorage.setItem('token',res.data)
        })
    }
}