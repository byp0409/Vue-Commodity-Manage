<template>
  <div class="topNav">
    <i @click="change" v-show="!flag" class="el-icon-s-fold"></i>
    <i @click="change" v-show="flag" class="el-icon-s-unfold"></i>
    <div class="right">
      <!-- 多语言选择 -->
      <div class="lang">
        <el-dropdown @command="changeLang">
          <span class="el-dropdown-link">
            {{ $t('topNav.multi') }}
          </span>
          <i class="el-icon-arrow-down el-icon--right" style="color: #fff"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="user">
        <span>{{ $t('topNav.wel') }}{{ username }}</span>
      </div>
      <div class="logout" @click="logout">{{ $t('topNav.logout') }}</div>
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
      username: '',
    };
  },
  mounted() {
    // 存储一下用户名
    this.username = localStorage.getItem('username');
  },
  methods: {
    // 退出登录
    logout() {
      // 没有退出登录的接口，只销毁token
      localStorage.removeItem('manage_token');
      localStorage.removeItem('username');
      this.$router.replace('/login');
    },
    // 切换语言
    changeLang(command) {
      // 切换语言模式
      this.$i18n.locale = command;
    },
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
    justify-content: flex-end;
    float: right;
    // width: 200;
    margin-right: 20px;
    line-height: 50px;
    .lang {
      margin-right: 30px;
      .el-dropdown-link {
        cursor: pointer;
        color: #fff;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
    .user {
      margin-right: 30px;
      color: #fff;
      font-size: 14px;
      cursor: default;
    }
    .logout {
      margin-right: 15px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
