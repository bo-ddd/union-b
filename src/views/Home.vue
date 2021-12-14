<template>
<div class="home">
    <el-container>
        <el-aside width="200px">
            <div class="aside-head">
                <el-tag effect="dark" class="head_tag"> LOGO </el-tag>
                <div class="mt-10">系统管理中心</div>
            </div>
            <div class="aside_main">
                <el-col :span="12" class="aside_menu">
                    <el-menu background-color="#f2f2f2" class="menu" text-color="#999999">
                        <el-menu-item v-for="(link, index) in linkList" :key="index" :index="index">
                            <i :class="link.tagImg"></i>
                            <span slot="title">{{ link.tagName }}</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </div>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    color: #999999;

    & .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }

    & .el-aside {
        background-color: #f2f2f2;
        color: #333;
        text-align: center;
        height: 100vh;

        & .aside-head {
            text-align: center;
            margin-top: 20px;

           & .head_tag {
                width: 50%;
                height: 10%;
                text-align: center;
                line-height: 80px;
            }

           & .mt-10 {
                font-weight: bolder;
            }
        }

        .aside_main {
            margin-top: 20px;
            text-align: center;

            .aside_menu {
                width: 100%;
            }
        }
    }

    & .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
}
</style>
