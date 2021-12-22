import axios from 'axios';
export default  (filename) =>{
    let formData = new FormData();
    let file = document.getElementById(filename).files[0];  //this.$refs.file.files[0] 获取到上传的文件
    formData.append('file',file)  //把获取到的文件append到formData里面
    formData.append('type',1)                                         //把type append到formData里面
    console.log(formData.get('file'));    //拿到formData里面的file并打印
    console.log(formData.get('type'));    //拿到formData里面的type并打印
    axios.post('/upload/avator',formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }).then(res=>{
        console.log(res);
    })
}