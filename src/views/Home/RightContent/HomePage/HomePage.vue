<template>
  <!-- 首页 -->
  <div class="home">
    <!-- 顶部标签 -->
    <div class="top">
      <TopCard :toplist="toplist" />
    </div>
    <div class="center">
      <!-- 统计图 -->
      <div id="line" style="width: 840px; height: 450px"></div>
      <div class="area">
        <span>地区分布</span>
        <el-empty style="padding-top: 110px" description="暂无数据"></el-empty>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TopCard from '@/components/TopCard/TopCard.vue';
export default {
  name: 'HomePage',
  mounted() {
    // 请求顶部数据
    this.$store.dispatch('home/reqtop');
    this.$store.dispatch('home/reqChartData');
  },
  computed: {
    ...mapState('home', ['toplist', 'chartdata']),
  },
  watch: {
    // 接收到数据后创建实例
    chartdata(value) {
      this.$Chart.line('line', value);
    },
  },
  components: {
    TopCard,
  },
};
</script>

<style lang="less" scoped>
.home {
  padding: 20px 25px 0px;
  .top {
    width: 100%;
    height: 130px;
    // background-color: #333;
  }
  .center {
    display: flex;
    margin-top: 20px;
    #line {
      background-color: #fff;
    }
    .area {
      position: relative;
      margin-left: 18px;
      width: 410px;
      height: 450px;
      background-color: #ffffff;
      span {
        position: absolute;
        top: 10px;
        left: 15px;
        font-size: 15px;
      }
    }
  }
}
</style>
