<template>
  <!-- 顶部卡片 -->
  <div class="top">
    <!-- 单个卡片 -->
    <div class="card" v-for="data in toplist" :key="data.id">
      <!-- 动态数据 -->
      <div class="content">
        <span>{{ data.title }}</span>
        <span class="num">{{ data.total }}</span>
        <span>{{ data.today }}{{ data.current }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCard',
  props: ['toplist'],
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  justify-content: space-between;
  .card {
    width: 290px;
    height: 130px;
    background-color: #fff;
    border-radius: 10px;
    .content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 15px 15px;
      font-size: 15px;
      color: #fff;
      .num {
        font-size: 20px;
        font-weight: 700;
      }
    }
    &:nth-child(1) {
      background-image: linear-gradient(180deg, #ce9ffc, #7367f0);
    }
    &:nth-child(2) {
      background-image: linear-gradient(180deg, #606c88, #3f4c6b);
    }
    &:nth-child(3) {
      background-image: linear-gradient(180deg, #52e5e7, #130cb7);
    }
    &:nth-child(4) {
      background-image: linear-gradient(180deg, #70f570, #49c628);
    }
  }
}
</style>
