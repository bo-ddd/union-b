<template>
<div class="home">
    <el-container>
        <el-aside :width="isCollapse?'60px':'220px'">
            <div class="aside_main">
                <el-menu class="menu el-menu-vertical-demo" collapse-transition unique-opened :router="true" :default-active="$route.path" @open="handleOpen" @close="handleClose" :collapse="isCollapse" active-text-color="#ff6f93">
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
                            <el-menu-item v-for="(children, index) in link.children" :key="index" :index="children.path" v-show='!children.meta.flag' @click="show = !show">
                                <span>{{ children.meta.title }}</span>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div>
        </el-aside>
        <el-container>
            <el-header>
                <div class="top_left">
                    <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="isCollapse = !isCollapse"></i>
                    <span class="fw-b fs-20">{{ $route.meta.title }}</span>
                </div>
                <i class="el-icon-bell"></i>
                <div class="top_right">
                    <div class="avatorbox">
                        <img class="avator" src="../assets/logo.png" alt="">
                    </div>
                    <span>苏苏喂苏苏</span>
                </div>
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
            isCollapse: false,
            show: true
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
    min-width: 1100px;
    overflow: hidden;

    ::-webkit-scrollbar {
        width: 0px;
    }

    & .fw-b {
        font-weight: bold;

    }

    & .fs-20 {
        font-size: 20px;
    }

    & .el-aside {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        height: 100vh;
        overflow-x: hidden;

        & .el-menu {
            border: none;
        }

        & .el-menu-item:focus,
        .el-menu-item:hover,
        .el-menu-item.is-active,
        ::v-deep .el-submenu__title:hover,
        ::v-deep .el-submenu__title.is-active {
            outline: 0;
            background-color: var(--color) !important;
            color: var(--textcolor) !important;
        }

        & .logobox {
            padding: 20px 20px 10px 20px;
            display: grid;
            grid-template-columns: 1fr 3fr;
            width: 180px;

            & .logo {
                width: 25px;
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
        grid-template-columns: 30fr 1fr 5fr;
        box-shadow: 2px 0 2px #e7d0d0;
        background-color: #ffffff;
        font-size: 16px;
        align-items: center;

        & .top_left {
            & i {
                font-size: 20px;
                margin-right: 10px;
                cursor: pointer;
            }
        }

        & .top_right {
            display: flex;

            & .avatorbox {
                width: 25px;
                height: 25px;
                border-radius: 25px;
                overflow: hidden;
                margin-right: 10px;

                & .avator {
                    width: 25px;
                }
            }
        }

    }

}
</style>
