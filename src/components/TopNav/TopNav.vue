<template>
  <div class="topNav">
    <i @click="change" v-show="!flag" class="el-icon-s-fold"></i>
    <i @click="change" v-show="flag" class="el-icon-s-unfold"></i>
    <div class="right">
      <!-- 多语言选择 -->
      <div class="lang">
        <el-dropdown>
          <span class="el-dropdown-link">
            多语言
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="user">
        <span>欢迎用户：</span>
      </div>
      <div class="logout">退出登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  props: ['changeflag'],
  data() {
    return {
      // 控制导航伸缩
      flag: false,
    };
  },
  methods: {
    // 切换导航栏状态
    change() {
      this.flag = !this.flag;
      this.$bus.$emit('changeCollapse', this.flag);
      this.changeflag(this.flag);
    },
  },
};
</script>

<style lang="less" scoped>
.topNav {
  height: 50px;
  background-color: #1573c3;
  i {
    margin-top: 12px;
    font-size: 32px;
  }
  .right {
    display: flex;
    justify-content: space-between;
    float: right;
    width: 210px;
    margin-right: 20px;
    line-height: 50px;
    .lang {
      .el-dropdown-link {
        cursor: pointer;
        color: #fff;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
    .user {
      color: #fff;
      font-size: 14px;
      cursor: default;
    }
    .logout {
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
