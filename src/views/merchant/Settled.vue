<template>
<div class="wrap">
    <!-- 基本信息 -->
    <div class="information">
        <div class="information-title">基本信息</div>
        <div class="information-content">
            <el-form label-width="150px">
                <el-form-item label="归属" :rules="[{required: true}]">
                    <el-select v-model="value" reserve-keyword>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="名称" :rules="[{required: true}]">
                    <el-input class="el-input"></el-input>
                </el-form-item>
                <el-form-item label="描述" :rules="[{required: true}]">
                    <el-input class="el-input"></el-input>
                </el-form-item>
                <el-form-item label="上传营业执照" :rules="[{required: true}]" class="img">
                    <el-upload action="" list-type="picture-card" :http-request="upload" :before-upload="text">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
            </el-form>
        </div>
    </div>
    <!-- 编辑权限 -->
    <div class="jurisdiction">
        <div class="jurisdiction-title">编辑权限</div>
        <div class="commodity">
            <div class="commodity-title">商品管理</div>
            <div class="commodity-content">
                <span class="commodity-content_title">商品管理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">商品查看</el-checkbox>
                    <el-checkbox v-model="checked">商品审核</el-checkbox>
                </div>
            </div>
            <div class="commodity-content">
                <span class="commodity-content_title">商品分类</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">商品分类查看</el-checkbox>
                    <el-checkbox v-model="checked">商品分类查看</el-checkbox>
                </div>
            </div>
            <div class="commodity-content">
                <span class="commodity-content_title">商品参数</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">商品参数查看</el-checkbox>
                    <el-checkbox v-model="checked">商品参数编辑</el-checkbox>
                </div>
            </div>
            <div class="commodity-content">
                <span class="commodity-content_title">商品属性</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">商品属性查看</el-checkbox>
                    <el-checkbox v-model="checked">商品属性编辑</el-checkbox>
                </div>
            </div>
            <div class="commodity-content">
                <span class="commodity-content_title">规格管理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">规格查看</el-checkbox>
                    <el-checkbox v-model="checked">规格编辑</el-checkbox>
                </div>
            </div>
            <div class="commodity-content">
                <span class="commodity-content_title">品牌管理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">品牌查看</el-checkbox>
                    <el-checkbox v-model="checked">品牌编辑</el-checkbox>
                </div>
            </div>
            <div class="commodity-title">订单管理</div>
            <div class="commodity-content">
                <span class="commodity-content_title">订单列表</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">订单管理</el-checkbox>
                    <el-checkbox v-model="checked">待审核订单</el-checkbox>
                    <el-checkbox v-model="checked">待支付订单</el-checkbox>
                    <el-checkbox v-model="checked">待发货订单</el-checkbox>
                    <el-checkbox v-model="checked">已取消订单</el-checkbox>
                    <el-checkbox v-model="checked">订单导出</el-checkbox>
                    <el-checkbox v-model="checked">订单删除</el-checkbox>
                </div>
            </div>
            <div class="commodity-content">
                <span class="commodity-content_title">订单处理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">收款管理</el-checkbox>
                    <el-checkbox v-model="checked">发货管理</el-checkbox>
                    <el-checkbox v-model="checked">发货单删除</el-checkbox>
                    <el-checkbox v-model="checked">平台收货</el-checkbox>
                    <el-checkbox v-model="checked">异常支付订单</el-checkbox>
                    <el-checkbox v-model="checked">异常支付操作</el-checkbox>
                </div>
            </div>
            <div class="commodity-title">供应商</div>
            <div class="commodity-content">
                <span class="commodity-content_title">供应商管理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">供应商管理</el-checkbox>
                </div>
            </div>
            <div class="commodity-title">BD管理</div>
            <div class="commodity-content">
                <span class="commodity-content_title">BD管理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">BD账号查看</el-checkbox>
                    <el-checkbox v-model="checked">BD账号编辑</el-checkbox>
                    <el-checkbox v-model="checked">BD账号导入</el-checkbox>
                    <el-checkbox v-model="checked">BD推广明细</el-checkbox>
                </div>
            </div>
            <div class="commodity-content">
                <span class="commodity-content_title">推广管理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">BD推广明细查看</el-checkbox>
                    <el-checkbox v-model="checked">BD推广数据导出</el-checkbox>
                    <el-checkbox v-model="checked">BD推广管理查看</el-checkbox>
                    <el-checkbox v-model="checked">BD推广管理编辑</el-checkbox>
                </div>
            </div>
            <div class="commodity-title">营销管理</div>
            <div class="commodity-content">
                <span class="commodity-content_title">特卖管理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">特卖查看</el-checkbox>
                    <el-checkbox v-model="checked">特卖编辑</el-checkbox>
                </div>
            </div>
            <div class="commodity-content">
                <span class="commodity-content_title">秒杀管理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">秒杀查看</el-checkbox>
                    <el-checkbox v-model="checked">秒杀新增编辑</el-checkbox>
                    <el-checkbox v-model="checked">秒杀关联产品</el-checkbox>
                    <el-checkbox v-model="checked">秒杀发布</el-checkbox>
                </div>
            </div>
            <div class="commodity-content">
                <span class="commodity-content_title">会销管理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">会销查看</el-checkbox>
                    <el-checkbox v-model="checked">会销编辑</el-checkbox>
                </div>
            </div>
            <div class="commodity-content">
                <span class="commodity-content_title">优惠券</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">优惠券管理</el-checkbox>
                </div>
            </div>
            <div class="commodity-title">代理管理</div>
            <div class="commodity-content">
                <span class="commodity-content_title">代理管理</span>
                <div class="commodity-select">
                    <el-checkbox v-model="checked">代理管理</el-checkbox>
                    <el-checkbox v-model="checked">品牌招商</el-checkbox>
                </div>
            </div>
        </div>
        <div class="bottom">
            <el-button>保存</el-button>
            <el-button type="primary">提交</el-button>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '平台'
            }, {
                value: '选项2',
                label: '商家'
            }],
            value: '',
            checked: false,
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
       ...mapActions(["uploadImage"]),
       text(val){
         const isJPG = val.type === "image/jpeg" || "image/png";
         const isLt2M = val.size /1024 /1024 < 2;
         if(!isJPG){
           this.$message.error("上传头像图片只能是 JPG 格式!")
         }
         if(!isLt2M){
           this.$message.error("上传头像大小不能超过 2MB!")
         }
         return isJPG && isLt2M;
       },
      async upload(val){
        let formData = new FormData();
        formData.append('file',val.file);
        formData.append('type',4);
        let res = await this.uploadImage(formData);
        console.log(res);
      }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-input__inner {
    height: 28px;
}

::v-deep .el-form-item {
    margin-bottom: 10px;
    width: 35%;
}

.el-checkbox {
    width: 120px !important;
}

.wrap {
    height: calc(100vh - 100px);
    overflow-y: auto;

    & .information {
        width: 100%;
        padding-bottom: 10px;
        background-color: white;

        & .information-title {
            padding: 20px;
            font-weight: bold;
        }

        & .information-content {
          & .img{
            width: 100%;
          }
        }
    }

    & .jurisdiction {
        background-color: white;
        margin-top: 2%;

        & .jurisdiction-title {
            padding: 20px;
            font-weight: bold;
        }

        & .commodity {
            padding: 0px 0 0 30px;
            border-bottom: 2px solid #fe5681;

            & .commodity-title {
                font-weight: bold;
            }

            & .commodity-content {
                display: flex;
                margin: 20px;

                & .commodity-content_title {
                    margin: 0 20px 0 0;
                    width: 9%;
                }
            }
        }

        & .bottom {
            width: 100%;
            padding: 20px 0;
            text-align: center;

            & .submit {
                width: 70px;
                height: 40px;
                border-radius: 4px;
                color: white;
                margin-left: 3%;
            }
        }
    }
}
</style>
