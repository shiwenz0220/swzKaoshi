<template>
  <div>
    <el-container>
      <el-aside class="aside" background-color="rgb(50, 64, 87)">
        <el-menu
          background-color="rgb(50, 64, 87)"
          text-color="#fff"
          :router="true"
        >
          <!-- 一级菜单 -->
          <el-menu-item class="item" index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">用户列表</el-menu-item>
              <el-menu-item index="2-2">商家列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <div class="top">
        <div class="left">
          <i class="el-icon-menu"></i>
        </div>
        <div class="right">
          <div class="icon">
            <i class="el-icon-rank"></i>
            <i class="el-icon-setting"></i>
            <i class="el-icon-bell"></i>
          </div>
          <div class="xiala">
            <el-dropdown>
              <span class="el-dropdown-link">
                Admin<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus"
                  >个人中心</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-plus"
                  >退出系统</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
      <el-container>
        <el-main>
          <!-- 二级路由出口组件 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "HomeView",
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 50px;
  background: rgb(0, 195, 255);
  display: flex;
  justify-content: space-between;
}
.top .right {
  display: flex;
}
.aside {
  height: 100vh;
  background-color: rgb(50, 64, 87);
}
.aside .item {
  color: #fff;
  background-color: rgb(50, 64, 87);
}
.aside .item .span {
  color: #fff;
}
.aside .item:hover {
  background: #fff;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eff2f7;
}
</style>