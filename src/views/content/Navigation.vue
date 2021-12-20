<template>
    <div class="wrap">
        <div class="head">
            <div>
                <div class="right-block"></div>
                <h3>桌面端导航</h3>
            </div>
            <div>
                <el-button>取消</el-button>
                <el-button class="pink">保存</el-button>
            </div>
        </div>

            <div class="text-tips">
                <h4>操作区域</h4>
                <h4 class="mr-300">桌面端预览</h4>
                <!-- <span>操作区域</span><span>桌面端预览</span> -->
            </div>
            <div class="content">
                <div class="left">
                    <!-- 主导航 -->
                    <div class="mainNav">
                        <div class="nav-name">
                            <span class="wrods">主导航&nbsp;&nbsp;</span>
                            <span class="font-color">(数量限制:2-6个)</span>
                        </div>
                        <div class="nav">
                            <!-- 可删除的导航 -->
                            <div class="nav-item" v-for="key in deletebtn(mainNav)" :key="key.id"  >
                                <div class="jian mt-5" @click="del(key.id)">
                                    <div>{{key.delete}}</div>
                                </div>
                                <div class="img">
                                    <div>
                                        <img :src="key.img" alt="">
                                    </div>
                                </div>
                                <div class="text" >
                                    <span>{{key.text}}</span>
                                </div>
                            </div>

                            <!-- 不可删除的导航 -->
                            <div class="nav-item " v-for="key in notDeletebtn(mainNav)" :key="key.id"  >
                                <div class="img mt-20">
                                    <div>
                                        <img :src="key.img" alt="">
                                    </div>
                                </div>
                                <div class="text">
                                    <span>{{key.text}}</span>
                                </div>
                            </div>
                            <div>
                                <el-upload
                                    action="#"
                                    list-type="picture-card"
                                    :auto-upload="false">
                                        <i slot="default" class="el-icon-plus"></i>
                                        <div slot="file" slot-scope="{file}">
                                        <img
                                            class="el-upload-list__item-thumbnail"
                                            :src="file.url" alt=""
                                        >
                                        <span class="el-upload-list__item-actions">
                                            <span
                                            class="el-upload-list__item-preview"
                                            @click="handlePictureCardPreview(file)"
                                            >
                                            <i class="el-icon-zoom-in"></i>
                                            </span>
                                            <span
                                            v-if="!disabled"
                                            class="el-upload-list__item-delete"
                                            @click="handleDownload(file)"
                                            >
                                            <i class="el-icon-download"></i>
                                            </span>
                                            <span
                                            v-if="!disabled"
                                            class="el-upload-list__item-delete"
                                            @click="handleRemove(file)"
                                            >
                                            <i class="el-icon-delete"></i>
                                            </span>
                                        </span>
                                        </div>
                                </el-upload>
                            </div>
                        </div>
                    </div>


                    <!-- 快捷导航 -->
                    <div class="quickNav">
                        <div class="nav-name">
                            <span class="wrods">快捷导航&nbsp;&nbsp;</span>
                            <span class="font-color">(数量限制:2-6个)</span>
                        </div>
                        <div class="nav" ondragover="allowDrop(event)">
                            <div class="nav-item flex" v-for="key in quickNav" :key="key.id">
                                <div class="img mt-20">
                                    <div>
                                        <img :src="key.img" alt="">
                                    </div>
                                </div>
                                <div class="text">
                                    <span>{{key.text}}</span>
                                </div>
                            </div>

                            <el-upload
                                action="#"
                                list-type="picture-card"
                                :auto-upload="false">
                                    <i slot="default" class="el-icon-plus"></i>
                                    <div slot="file" slot-scope="{file}">
                                    <img
                                        class="el-upload-list__item-thumbnail"
                                        :src="file.url" alt=""
                                    >
                                    <span class="el-upload-list__item-actions">
                                        <span
                                        class="el-upload-list__item-preview"
                                        @click="handlePictureCardPreview(file)"
                                        >
                                        <i class="el-icon-zoom-in"></i>
                                        </span>
                                        <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleDownload(file)"
                                        >
                                        <i class="el-icon-download"></i>
                                        </span>
                                        <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleRemove(file)"
                                        >
                                        <i class="el-icon-delete"></i>
                                        </span>
                                    </span>
                                    </div>
                            </el-upload>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="nav">
                        <div v-for="key in mainNav" :key="key.id">
                            <div class="img">
                                <img :src="key.img" alt="">
                            </div>
                            <div class="text">
                                {{key.text}}
                            </div>
                        </div>
                    </div>
                    <div class="main">
                        <div class="title_wrap">
                            <div class="left-b">
                                <span>京东秒杀</span>
                                <div>
                                    <span>10</span>
                                    <i class="el-icon-star-off"></i>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div class="right-b">
                                更多秒杀
                            </div>
                            <div class="center-b">
                                <div>
                                    <img src="" alt="">
                                    <span>￥9.9</span>
                                </div>
                                <div>
                                    <img src="" alt="">
                                    <span>￥9.9</span>
                                </div>
                                <div>
                                    <img src="" alt="">
                                    <span>￥9.9</span>
                                </div>
                                <div>
                                    <img src="" alt="">
                                    <span>￥9.9</span>
                                </div>
                                <div>
                                    <img src="" alt="">
                                    <span>￥9.9</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      


        
    </div>
</template>


<script>


export default{
    data() {
        return{
            imageUrl: '',
            mainNav : [
                {
                    id : '1',
                    img : '',
                    text : '消息',
                    delete : '-',
                },
                {
                    id : '2',
                    img : '',
                    text : '消息',
                    delete : '-',
                },
                {
                    id : '3',
                    img : '',
                    text : '消息',
                    delete : '-',
                },
                {
                    id : '4',
                    img : '',
                    text : '消息',
                    delete : '-',
                },
                {
                    id : '5',
                    img : '',
                    text : '消息'
                },
                {
                    id : '6',
                    img : '',
                    text : '消息'
                },
                
            ],
            quickNav : [
                {
                    id : '1',
                    img : '',
                    text : '消息',
                },
                {
                    id : '2',
                    img : '',
                    text : '消息',
                },
                {
                    id : '3',
                    img : '',
                    text : '消息',
                },
                {
                    id : '4',
                    img : '',
                    text : '消息',
                },
            ],
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
        }
    },
    methods: {
        
        // 主导航可删除的数据的数组
        deletebtn(arr){
            var newarr = [];
            arr.forEach(fs=>{
                if(fs.delete){
                    newarr.push(fs);
                }
            })
            return newarr;
        },
        // 主导航不可删除的数据的数组
        notDeletebtn(arr){
            var newarr = [];
            arr.forEach(fs=>{
                if(!fs.delete){
                    newarr.push(fs);
                }
            })
            return newarr;
        },
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        // 主导航的删除的点击事件
        del(a){
            console.log(a);
            this.mainNav.forEach((nav,index)=>{
                if(nav.id == a){
                    this.mainNav.splice(index,1)
                }
            })
        }
    },   
}
</script>




<style scoped lang="scss">
.flex{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.mt-5{
    margin-top: 5px;
}
::v-deep .is-ready{
    width: 120px;
    height: 110px;
}
::v-deep .el-upload{
    width: 120px;
    height: 110px;
    border: none;
}
::v-deep .el-upload--picture-card{
    line-height: 110px;
}
.bor{
    border: none;
}
.avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 110px;
    line-height: 110px;
    text-align: center;
  }
  .avatar {
    padding: 5px;
    width: 110px;
    height: 110px;
    display: block;
  }
.mr-180{
    margin-right: 180px;
}
.mr-300{
    margin-right: 300px;
}
.mt-20{
    margin-top: 20px;
}
.fs-16{
    font-size: 16px;
    font-weight: 700;
}
.text-color{
    color: #ccc;
}
.wrap{
    height: calc(100vh - 100px);
    overflow-y:auto;
    margin-right: 100px;
     .head{
         display: flex;
         justify-content: space-between;
         & .right-block{
             height: 16px;
             width: 8px;
             background-color: #ff4070;
             margin-right: 20px;
         }
         & div{
             display: flex;
             align-items: center;
         }
    }
    .text-tips{
        margin-top: 35px;
        display: flex;
        justify-content: space-between;
    }
    .content{
        & .left{
            float: left;
            // background-color: blue;

            & .mainNav , & .quickNav{

                & .wrods{
                    font-size: 18px;
                    font-weight: 700;
                }

                & .font-color{
                    color: #ccc;
                }
                

                & .nav-name{
                    padding: 10px 0;
                }

                & .nav{
                    width: 100%;
                    
                    & .nav-item{
                        float: left;
                        width: 120px;
                        height: 110px;
                        border: 1px dashed #ccc;
                        padding: 0 5px;

                        & div{
                            width: 100%;
                        }

                        & .jian{
                            height: 20px;

                            & div{
                                float: right;
                                width: 20px;
                                height: 20px;
                                border-radius: 20px;
                                background-color: #ccc;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                        }

                        & .img{
                            height: 50px;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            & div{
                                width: 50px;
                                height: 50px;
                                border-radius: 50px;

                                & img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }

                            
                        }

                        & .text{
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        
                    }
                }

            }

            

        }
        & .right{
            float: right;
            width: 375px;
            height: 500px;
            background-color: #ccc;

           & .nav{
               padding: 20px 10px;
               display: grid;
               grid-template-columns: repeat(5,1fr);
               gap:20px 20px;

               & div{
                   height: 50px;

                   & div{
                       display: flex;
                       align-items: center;
                       justify-content: center;
                   }

                   & .img{
                       height: 30px;
                       
                       & img{
                           width: 30px;
                           height: 30px;
                       }
                   }
                   & .text{
                       height: 20px;
                   }
               }
           }

           & .main{
               margin: 0 5px;
               background-color: white;
               border-radius: 5px;

               & .title_wrap{
                   width: 100%;
                   height: 150px;

                   & div{
                       float: left;
                   }

                   & .left-b{
                       width: 50%;
                       height: 20%;
                       display: flex;
                       align-items: center;
                       justify-content: space-around;
                   }

                   & .right-b{
                       width: 50%;
                       height: 20%;
                       
                   }

                   & .center-b{
                       width: 100%;
                       height: 80%;
                       min-width: 100%;

                       & div{
                           width: 80px;
                           height: 100%;
                           display: flex;
                           align-items: center;
                           justify-content: center;
                           flex-wrap: wrap;

                           & img{
                               width: 80px;
                               height: 70px;
                           }
                       }
                   }

               }
           }
        }
        
    }
    .pink{
        background-color: #ff4070;
    }
    .ccc{
        color: #ccc;
    }
}

</style>