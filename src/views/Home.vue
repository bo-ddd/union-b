<template>
<div class="home">
    <el-container>
        <el-aside width="200px">
            <div class="aside-head">
                <img src="../assets/logo.png" alt="" class="head_tag">
                <div class="fw-b">系统管理中心</div>
            </div>
            <div class="aside_main">
                <el-col :span="12" class="aside_menu">
                    <el-menu class="menu" :router="true" default-active="">
                        <el-submenu  v-for="(link, index) in linkList" :key="index" :index="link.path">
                            <template slot="title">
                                <i :class="link.meta.icon"></i>
                                <span>{{ link.meta.title }}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item v-for="(children, index) in link.children" :key="index" :index="children.path">
                                    <!-- <i :class="children.meta.icon"></i> -->
                                    <span>{{ children.meta.title }}</span>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </div>
        </el-aside>
        <el-container>
            <el-header class="header">
                <div class="top_left">
                    <i :class="$route.meta.icon"></i>
                    <span>{{ $route.meta.title }}</span>
                </div>
                <i class="el-icon-arrow-left"></i>
                <i class="el-icon-refresh"></i>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';
export default {
    data() {
        return {
            linkList: [],
        }
    },
    computed: {
        ...mapGetters(['routes'])
    },
    async created() {
        this.routes.shift()
        this.linkList = this.routes
    }
}
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    color: #0a0a0a;
    & .el-aside {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        height: 100vh;

        & .aside-head {
            text-align: center;
            margin-top: 20px;

            & .head_tag {
                width: 40%;
                margin-bottom: 10px;
            }

            & .fw-b {
                font-weight: bolder;
            }
        }

        .aside_main {
            text-align: center;

            .aside_menu {
                width: 100%;
            }
        }
    }

    & .el-header {
        display: grid;
        grid-template-columns: 40fr 1fr 1fr;
        box-shadow: 0 0 4px #ccc;
        font-size: 16px;
        align-items: center;

        & .top_left {
            &>span {
                margin-left: 10px;
            }
        }
    }
}
</style>
