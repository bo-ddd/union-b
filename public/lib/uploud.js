export default  () =>{
    let formData = new FormData();
    formData.append('file',this.$refs.file.files[0]);
    formData.append('type',2) 
    let res  =  this.uploadImage(formData);
    return res
}