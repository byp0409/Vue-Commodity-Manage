<template>
  <div class="leftNav">
    <div class="title">后台易购管理系统</div>
    <el-row class="tac">
      <el-col>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#304159"
          text-color="#fff"
          active-text-color="#289aff"
          router
        >
          <el-menu-item index="/home/homePage">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="/manage">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">订单列表</el-menu-item>
              <el-menu-item index="1-2">退货管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/home/specifications">
            <i class="el-icon-document"></i>
            <span slot="title">规格参数</span>
          </el-menu-item>
          <el-menu-item index="/home/ads">
            <i class="el-icon-setting"></i>
            <span slot="title">广告分类</span>
          </el-menu-item>
          <el-menu-item index="/home/userCenter">
            <i class="el-icon-s-custom"></i>
            <span slot="title">个人中心</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
};
</script>

<style lang="less" scoped>
.leftNav {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 200px;
  background-color: #304159;
  .title {
    margin: 15px 0;
    font-size: 17px;
    color: #fff;
    margin-left: 20px;
    // text-align: center;
    cursor: default;
  }
}
</style>
