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
                <el-form-item label="身份" :rules="[{required: true}]">
                    <el-radio-group v-model="role">
                        <el-radio v-for="item in radioList" :key="item.id" :label="item.id">{{item.identityName}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="上传资格证书" :rules="[{required: true}]" class="img">
                    <el-upload action="" list-type="picture-card" :http-request="upload2" :before-upload="text">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible2">
                        <img width="100%" :src="dialogImageUrl2" alt="">
                    </el-dialog>
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
        <div class="bottom">
            <el-button type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    data() {
        return {
            options: [{
                value: '平台',
                label: '平台'
            }, {
                value: '商家',
                label: '商家'
            }],
            value: '平台',
            role: 2,
            radioList: [],
            dialogImageUrl: '',
            dialogVisible: false,
            dialogImageUrl2: '',
            dialogVisible2: false,
            businessUrl: '',
            qualificationsUrl: '',
        }
    },
    methods: {
        ...mapActions(["uploadImage", "getIdentityList", "createSettled"]),
        text(val) {
            const isJPG = val.type === "image/jpeg" || "image/png";
            const isLt2M = val.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error("上传头像图片只能是 JPG 格式!")
            }
            if (!isLt2M) {
                this.$message.error("上传头像大小不能超过 2MB!")
            }
            return isJPG && isLt2M;
        },
        async upload(val) {
            let formData = new FormData();
            formData.append('file', val.file);
            formData.append('type', 4);
            let res = await this.uploadImage(formData);
            if (res.status) {
                this.businessUrl = res.data
            }else{
                this.$message.error(res.message)
            }
            console.log(this.businessUrl)
        },
        async upload2(val) {
            let formData = new FormData();
            formData.append('file', val.file);
            formData.append('type', 4);
            let res = await this.uploadImage(formData);
            if (res.status) {
                this.qualificationsUrl = res.data
            }else{
                this.$message.error(res.message)
            }
            console.log(this.qualificationsUrl)
        },
        async getIdentList() {
            let res = await this.getIdentityList()
            if (res.status) {
                this.radioList = res.data.rows
            }
        },
        async submit() {
            let res = await this.createSettled({
                role: this.role,
                qualificationsUrl: this.qualificationsUrl,
                businessUrl: this.businessUrl
            })
            if (res.status) {
                this.$message.success('提交成功')
            } else {
                this.$message.error('提交失败,请稍后再试')
            }
        }
    },
    created() {
        this.getIdentList()
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
            border-bottom: 2px solid var(--color);
            padding-bottom: 10px;

            & .img {
                width: 100%;
            }
        }
    }

    & .bottom {
        width: 100%;
        padding: 20px 0 10px 0;
        text-align: center;
    }

}
</style>
