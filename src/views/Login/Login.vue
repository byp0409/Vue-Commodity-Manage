<template>
  <div class="login">
    <!-- 登录组件 -->
    <div class="main">
      <div class="title">
        <span>{{ $t('login.login') }}</span>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        show-message
        label-width="80px"
        :hide-required-asterisk="true"
      >
        <el-form-item
          :label="$t('login.account')"
          prop="account"
          class="change-label-calss"
          hide-required-asterisk="true"
        >
          <el-input v-model="ruleForm.account" :placeholder="$t('login.p1')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password" class="change-label-calss">
          <el-input
            :placeholder="$t('login.p2')"
            v-model="ruleForm.password"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button type="primary" @click="submitForm('ruleForm')">
          {{ $t('login.login') }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        account: '',
        password: '',
      },
      rules: {
        account: [{ required: true, message: `${this.$t('login.p1')}`, trigger: 'change' }],
        password: [{ required: true, message: `${this.$t('login.p2')}`, trigger: 'change' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = { username: this.ruleForm.account, password: this.ruleForm.password };
          this.$store.dispatch('login/login', data).then(
            value => {
              this.$message({
                message: `${this.$t('login.wel')}`,
                type: 'success',
                center: 'true',
              });
              console.log();
              this.$router.replace({ path: '/home/homePage' });
            },
            error => {
              this.$message({
                message: `${this.$t('login.msg1')}`,
                type: 'warning',
                center: 'true',
              });
              this.$refs[formName].resetFields();
            }
          );
        } else {
          this.$message({
            message: `${this.$t('login.msg2')}`,
            type: 'warning',
            center: 'true',
          });
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  // 设置登录背景
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: url(./images/background.jpg) no-repeat;
  background-size: 100% 100%;
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
    background-color: rgba(234, 224, 224, 0.4);
    border-radius: 10px;
    .title {
      text-align: center;
      margin-top: 20px;
      font-size: 35px;
      font-weight: 700;
    }
    .demo-ruleForm {
      margin-right: 50px;
      margin-top: 25px;
      font-size: 20px;
      // 穿透修改组件样式
      .change-label-calss /deep/ .el-form-item__label {
        font-size: 20px;
        color: #333333;
      }
      .change-label-calss /deep/ .el-form-item__error {
        color: #fff;
      }
    }
    .button {
      text-align: center;
    }
  }
}
</style>
