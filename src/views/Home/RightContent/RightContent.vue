<template>
  <div class="rightContent" :class="{ active: flag }">
    <TopNav :changeflag="changeflag" />
    <!-- 展示内容  二级路由出口 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav.vue';
export default {
  name: 'RightContent',
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    // 事件回调
    changeflag(value) {
      this.flag = value;
    },
  },
  components: { TopNav },
};
</script>

<style lang="less" scoped>
.rightContent {
  margin-left: 200px;
  background-color: #f5f4f6;
}
.active {
  margin-left: 64px;
}
</style>
