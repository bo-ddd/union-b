<template>
<div class="wrap">
    <!-- <div class="selectbox">
        <span>选择角色</span>
        <el-select v-model="ident" placeholder="全部" clearable class="mar-right_20">
            <el-option v-for="item in IdentList" :key="item.id" :label="item.identityName" :value="item.id">
            </el-option>
        </el-select>
    </div> -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="管理员" name="first">
            <div class="box" v-for="(link, index) in routes" :key="index">
                <div class="title">{{link.meta.title}}</div>
                <el-checkbox-group v-model="checkboxGroup" :label="link.meta.title">
                    <el-checkbox :label="children.meta.title" border v-for="(children, index) in link.children" :key="index"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="bottom">
                <el-button type="primary" @click="submit">保存</el-button>
            </div>
        </el-tab-pane>
        <el-tab-pane label="店主" name="second">
            <div class="box" v-for="(link, index) in routes" :key="index">
                <div class="title">{{link.meta.title}}</div>
                <el-checkbox-group v-model="checkboxGroup2" :label="link.meta.title">
                    <el-checkbox :label="children.meta.title" border v-for="(children, index) in link.children" :key="index"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="bottom">
                <el-button type="primary" @click="submit">保存</el-button>
            </div>
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
export default {
    data() {
        return {
            IdentList: [],
            checkboxGroup: ['订单详情', '我的店铺', '店铺详情', '商品分类', '单位管理', '特卖管理', '标签管理', '口令分享'],
            checkboxGroup2: ['订单详情','标签管理', '口令分享'],
            ident: '',
            activeName: 'first'
        }
    },
    computed: {
        ...mapGetters(['routes'])
    },
    methods: {
        ...mapActions(["getIdentityList"]),
        submit() {
            console.log(this.checkboxGroup1)
        },
        async getIdentList() {
            let res = await this.getIdentityList()
            if (res.status == 1) {
                this.IdentList = res.data.rows
            }
        },
        handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    created() {
        this.getIdentList()
    },
    // updated(){
    //     console.log(this.ident)
    //     console.log(this.checkboxGroup)
    // }
}
</script>

<style lang="scss" scoped>
.wrap {
    background-color: #ffffff;
    height: calc(100vh - 100px);
    overflow-y: auto;

    & .selectbox {
        display: flex;
        align-items: center;
        padding: 20px;

        & span {
            margin-right: 10px;
        }
    }

    & .box {
        padding-left: 20px;
        margin-bottom: 20px;

        & .title {
            margin: 20px 0;
            font-weight: bold;
        }
    }

    & .bottom {
        border-top: 2px solid var(--color);
        width: 100%;
        padding: 20px 0;
        text-align: center;
    }
}
</style>
