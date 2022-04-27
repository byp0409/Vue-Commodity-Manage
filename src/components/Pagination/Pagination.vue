<template>
  <!-- 分页器 -->
  <div class="pagination">
    <el-pagination
      background
      layout=" prev, pager, next,total"
      :page-size="pageSize"
      :total="total"
      @current-change="changepage"
      hide-on-single-page
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    // 可以用简化写法，因为在父组件这只默认值
    pageSize: {
      type: Number,
      default: 8,
    },
    total: {
      type: Number,
      default: 8,
    },
  },
  methods: {
    changepage(page) {
      this.$emit('changepage', page);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
}
</style>
