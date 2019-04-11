/**
* User: wuxinshuang
* Date: 2019/4/11
* Time: 11:39
* remark:
*/
<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                    ref="menu"
                    unique-opened
                    :default-active="$route.path"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    class="el-menu-vertical-side">
                <template v-for="(father,fatherIndex) in asyncRouterMap">
                    <!-- 一级菜单 -->
                    <router-link v-if="!father.children && !father.hide" :to="father.path" :key="father.path" >
                        <el-menu-item :index="father.path" :id="father.path" :key="father.path">
                            <!--<i v-if="father.meta.icon" :class="`fas fa-${ father.meta.icon}`"></i>-->
                            <i class="el-icon-setting"></i>
                            <span slot="title">{{father.meta.title}}</span>
                        </el-menu-item>
                    </router-link>
                    <!-- 二级菜单 -->
                    <el-submenu :index="father.meta.title" v-if="father.children && !father.hide" :key="father.path">
                        <template slot="title">
                           <!-- <i v-if="father.meta.icon" :class="`fas fa-${ father.meta.icon}`"></i>&nbsp;-->
                            <i class="el-icon-setting"></i>
                            <span>{{father.meta.title}}</span>
                        </template>
                        <template v-for="(one,oneIndex) in father.children">
                            <span v-if="!one.hide" :to="father.path+'/'+one.path" @click="routerLink(father, one)" :key="one.path">
                                <el-menu-item :index="thirdIndex(father, one)"><i class="fas fa-arrow-right right-icon"></i>{{one.meta.title}}</el-menu-item>
                            </span>
                        </template>
                    </el-submenu>
                </template>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
    import { asyncRouterMap } from '@/router'
    export default {
        name: "layout",
        data(){
          return{
              asyncRouterMap:asyncRouterMap
          }
        },
        methods: {
            thirdIndex (father, one) {
                if (one.children) {
                    const thirdPath = one.children[0].path;
                    return father.path + '/' + one.path + '/' + thirdPath
                } else {
                    return father.path + '/' + one.path
                }
            },
            routerLink (father, one) {
                if (one.children) {
                    const thirdMenuFirstName = one.children[0].name
                    this.$router.push({name: thirdMenuFirstName})
                } else {
                    this.$router.push({name: one.name})
                }
            },
        },
        created() {

        }
    }
</script>

<style scoped>
    .el-menu{
        border-right:none;
    }
    .el-aside {
        background-color: rgb(84, 92, 100);
        color: #333;
    }

    .el-main {
        background-color: #fff;
        color: #333;
        padding: 15px;
    }
    .el-container{
        height: 100%;
    }
</style>
