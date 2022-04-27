<template>
  <!-- 商品管理 -->
  <div class="goods">
    <!-- 顶部搜索区域 -->
    <header>
      <el-input v-model="input" placeholder="请输入内容" size="medium " @change="search"></el-input>
      <el-button type="primary" size="small" @click="search">查询</el-button>
      <el-button type="primary" size="small" @click="goAddGoods">添加</el-button>
    </header>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
      >
        <!-- 选择 -->
        <el-table-column type="selection" width="55"></el-table-column>
        <!-- 具体内容 -->
        <el-table-column prop="id" label="商品ID" width="120">
          <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
        </el-table-column>
        <el-table-column prop="title" label="商品名称" width="120"></el-table-column>
        <el-table-column prop="price" label="商品价格"></el-table-column>
        <el-table-column prop="num" label="商品数量"></el-table-column>
        <el-table-column prop="category" label="规格类目" show-overflow-tooltip></el-table-column>
        <el-table-column prop="image" label="商品图片" show-overflow-tooltip></el-table-column>
        <el-table-column prop="sellPoint" label="商品卖点" show-overflow-tooltip></el-table-column>
        <el-table-column prop="descs" label="商品描述" show-overflow-tooltip></el-table-column>
        <!-- 编辑和删除按钮 -->
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器，需要接收更新页面后的page 子传父,自定义事件 -->
      <Pagination :total="total" :pageSize="pageSize" @changepage="changepage" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Pagination from '@/components/Pagination/Pagination';
export default {
  name: 'Goods',
  mounted() {
    // 初始化
    this.getGoodsList();
  },
  data() {
    return {
      // 输入框
      input: '',
      // 存放表单数据
      tableData: [],
      // // 多个选择
      // multipleSelection: [],
      // 每页展示个数，默认8
      pageSize: 8,
      // 数据总数
      total: 8,
    };
  },
  computed: {
    ...mapGetters('goods', ['goodsList']),
    ...mapState('goods', ['goods', 'searchResult']),
  },
  watch: {
    // 更新商品数据
    goodsList(value) {
      this.tableData = value;
    },
    // 操作分页器和修改表单数据
    searchResult(value) {
      this.tableData = value;
      this.total = value.length;
    },
    // 操作分页器
    goods(value) {
      this.pageSize = value.pageSize;
      this.total = value.total;
    },
  },
  methods: {
    // 跳转到添加商品页面
    goAddGoods() {
      this.$router.replace({ name: 'addGoods' });
    },
    // 搜索
    search() {
      this.getsearch();
    },
    // 切换页面的回调
    changepage(page) {
      // console.log(page);
      // 更新页面
      this.getGoodsList(page);
    },
    // 表单选择按钮
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 表单编辑按钮
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 表单删除按钮
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 获取商品数据
    getGoodsList(page) {
      // console.log(page);
      this.$store.dispatch('goods/reqGoods', page);
    },
    getsearch() {
      this.$store.dispatch('goods/search', this.input);
    },
  },
  components: {
    Pagination,
  },
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  margin: 24px 23px;
  button {
    margin-left: 15px;
  }
}
.table {
  margin: 0 15px;
}
</style>
