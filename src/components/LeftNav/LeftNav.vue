<template>
  <div class="leftNav">
    <el-row class="tac">
      <el-col>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#304159"
          text-color="#fff"
          active-text-color="#289aff"
          router
          :collapse="iscollapse"
        >
          <el-menu-item index="/xxxx" class="title">
            <span>{{ $t('leftNav.logo') }}</span>
          </el-menu-item>
          <el-menu-item index="/home/homePage">
            <i class="el-icon-s-home"></i>
            <span slot="title">{{ $t('leftNav.nav1') }}</span>
          </el-menu-item>
          <el-submenu index="/manage">
            <template slot="title">
              <i class="el-icon-s-management"></i>
              <span>{{ $t('leftNav.nav2') }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/manage/orderList">
                <i class="el-icon-s-order"></i>
                <span>{{ $t('leftNav.nav2_1') }}</span>
              </el-menu-item>
              <el-menu-item index="/home/manage/returnList">
                <i class="el-icon-truck"></i>
                <span>{{ $t('leftNav.nav2_2') }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/home/specifications">
            <i class="el-icon-document"></i>
            <span slot="title">{{ $t('leftNav.nav3') }}</span>
          </el-menu-item>
          <el-menu-item index="/home/ads">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ $t('leftNav.nav4') }}</span>
          </el-menu-item>
          <el-menu-item index="/home/goods">
            <i class="el-icon-s-goods"></i>
            <span slot="title">{{ $t('leftNav.nav5') }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  data() {
    return {
      // 控制导航栏伸缩
      iscollapse: false,
    };
  },
  mounted() {
    // 接收伸缩导航栏的信号
    this.$bus.$on('changeCollapse', value => {
      this.iscollapse = value;
    });
  },
};
</script>

<style lang="less" scoped>
.leftNav {
  position: fixed;
  top: 0;
  bottom: 0;
  // 让导航撑开
  // width: 200px;
  background-color: #304159;

  .el-menu {
    border-right-width: 0;
    .title {
      font-size: 17px;
      color: #fff;
      cursor: default !important;
      pointer-events: none;
    }
    // 调整激活时背景颜色
    .el-menu-item.is-active {
      background-color: #004079 !important;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
