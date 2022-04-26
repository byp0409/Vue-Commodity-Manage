<template>
  <div class="topNav">
    <i @click="change" v-show="!flag" class="el-icon-s-fold"></i>
    <i @click="change" v-show="flag" class="el-icon-s-unfold"></i>
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
}
</style>
