<template>
<div class="home">
    <el-container>
        <el-aside width="200px">
            <div class="logobox">
                <img src="../assets/logo.png" alt="" class="logo">
                <div class="fw-b">系统管理中心</div>
            </div>
            <div class="aside_main">
                <el-col :span="12" class="aside_menu">
                    <el-menu class="menu" :router="true" default-active="">
                        <el-submenu v-for="(link, index) in routes" :key="index" :index="link.path">
                            <template slot="title">
                                <i :class="link.meta.icon"></i>
                                <span>{{ link.meta.title }}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item v-for="(children, index) in link.children" :key="index" :index="children.path">
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
        return {}
    },
    computed: {
        ...mapGetters(['routes'])
    },

}
</script>

<style lang="scss" scoped>
.home {
    background-color: #fcf9fa;
    height: 100vh;
    color: #0a0a0a;

    & .el-aside {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        height: 100vh;

        & .logobox {
            padding: 20px;
            display: grid;
            grid-template-columns: 1fr 10fr;

            & .logo {
                width: 180%;
            }

            & .fw-b {
                font-weight: bolder;
            }
        }

        & .aside_main {
           text-align: left;
            & .aside_menu {
                width: 100%;
            }

            & i{
              margin-right: 20px;
            }

            & .el-menu-item{
              text-align: center;
            }
        }
    }

    & .el-header {
        display: grid;
        grid-template-columns: 40fr 1fr 1fr;
        box-shadow: 0 0 2px #3a3434;
        background-color: #ffffff;
        font-size: 16px;
        align-items: center;

        & .top_left {
            & >span {
                margin-left: 10px;
            }
        }
    }

}
</style>
