export default  (file,type) =>{
    let formData = new FormData();
  // 获取到上传的文件 
    formData.append('file',file)  //把获取到的文件append到formData里面
    formData.append('type',type)  
    // console.log(formData.get('file'));
    return formData;                                   
}