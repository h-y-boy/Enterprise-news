<template>
    <el-aside :width="store.isCollapsed ? '64px' : '240px'">
        <el-menu :collapse="store.isCollapsed" :collapse-transition="false" :router="true" :default-active="route.fullPath">
            <el-menu-item index="/index">
                <el-icon><home-filled /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/center">
                <el-icon>
                    <avatar />
                </el-icon>
                <span>个人中心</span>
            </el-menu-item>

            <el-sub-menu index="/user-manage" v-admin>
                <template #title>
                    <el-icon>
                        <user-filled />
                    </el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/user-manage/UserAdd">添加用户</el-menu-item>
                <el-menu-item index="/user-manage/UserList">用户列表</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/news-manage">
                <template #title>
                    <el-icon>
                        <message-box />
                    </el-icon>
                    <span>新闻管理</span>
                </template>
                <el-menu-item index="/news-manage/NewsAdd">创建新闻</el-menu-item>
                <el-menu-item index="/news-manage/NewsList">新闻列表</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/product-manage">
                <template #title>
                    <el-icon>
                        <reading />
                    </el-icon>
                    <span>产品管理</span>
                </template>
                <el-menu-item index="/product-manage/ProductAdd">添加产品</el-menu-item>
                <el-menu-item index="/product-manage/ProductList">产品列表</el-menu-item>
            </el-sub-menu>

            <!-- <el-sub-menu index="/product-manage">
        <template #title>
            <el-icon>
                <reading />
            </el-icon>
            <span>产品管理</span>
        </template>
        <el-menu-item index="/product-manage/addproduct">添加产品</el-menu-item>
        <el-menu-item index="/product-manage/productlist">产品列表</el-menu-item>
    </el-sub-menu> -->
        </el-menu>
    </el-aside>
</template>

<script setup>
import { } from "vue"
import { HomeFilled, Avatar, UserFilled, MessageBox, Reading, Pointer } from '@element-plus/icons-vue'
import { UserStore } from '../../store/user'
import { useRoute } from "vue-router";
const store = UserStore();
const route = useRoute();

const vAdmin = {
    mounted(el) {
        // console.log(el)
        if (store.userInfo.role !== 1) {
            el.parentNode.removeChild(el)
        }
    }
}
</script>;

<style lang='scss' scoped>
.el-aside {
    height: 100vh;

    .el-menu {
        height: 100vh;
    }
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    position: absolute;
}

::-webkit-scrollbar-thumb {
    background: #1890ff;
}

::-webkit-scrollbar-track {
    background: #ddd;
}
</style>