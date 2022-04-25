<template>
  <div class="rightContent">
    <TopNav />
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
  components: { TopNav },
};
</script>

<style lang="less" scoped>
.rightContent {
  height: 50000px;
  margin-left: 200px;
  background-color: #f5f4f6;
}
</style>
