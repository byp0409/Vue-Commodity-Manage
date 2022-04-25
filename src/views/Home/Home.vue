<template>
  <!-- 登陆后内容的容器 -->
  <div class="home">
    <!-- 左侧导航 -->
    <LeftNav />
    <RightContent />
  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav/LeftNav.vue';
import RightContent from '@/views/Home/RightContent/RightContent.vue';
export default {
  name: 'Home',
  components: {
    LeftNav,
    RightContent,
  },
};
</script>

<style lang="less" scoped></style>
