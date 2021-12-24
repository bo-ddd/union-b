import axios from 'axios';
export default class Axios extends axios {
    constructor(){
        super();
    }
    post(){
        super.post(arguments)
    }
}

new Axios.post('/user/getToken').then(res=>{
    console.log(res);
})