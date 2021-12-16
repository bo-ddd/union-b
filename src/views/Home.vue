<template>
<div class="home">
    <el-container>
        <el-aside :width="isCollapse?'60px':'220px'">
            <el-checkbox v-model="isCollapse" class="switch"></el-checkbox>
            <div class="aside_main">
                <el-menu class="menu el-menu-vertical-demo" :router="true" :default-active="$route.path" @open="handleOpen" @close="handleClose" :collapse="isCollapse" active-text-color="#ff6f93">
                    <div class="logobox">
                        <img src="../assets/logo.png" alt="" class="logo">
                        <div class="fw-b" v-if="!isCollapse">系统管理中心</div>
                    </div>
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
        return {
            isCollapse: false
        };
    },
    methods: {
        handleOpen() {},
        handleClose() {}
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
        position: relative;

        & .switch {
            position: absolute;
            top: 50vh;
            right: 0px;
        }

        &.el-menu-item:focus,
        .el-menu-item:hover,
        .el-menu-item.is-active,
        ::v-deep .el-submenu__title:hover,
        ::v-deep .el-submenu__title.is-active {
            outline: 0;
            background-color: #ffebf0 !important;
        }

        & .logobox {
            padding: 20px 20px 10px 20px;
            display: grid;
            grid-template-columns: 1fr 3fr;
            width: 150px;

            & .logo {
                width: 25px;
            }

            & .fw-b {
                font-weight: bold;

            }
        }

        & .aside_main {
            text-align: left;

            & i {
                margin-right: 20px;
            }

            & .el-menu-item {
                text-align: center;
            }
        }
    }

    & .el-header {
        display: grid;
        grid-template-columns: 40fr 1fr 1fr;
        box-shadow: 2px 0 2px #3a3434;
        background-color: #ffffff;
        font-size: 16px;
        align-items: center;

        & .top_left {
            &>span {
                margin-left: 10px;
            }
        }
    }

    & ::v-deep .el-main {
        overflow: auto;
    }

}
</style>
