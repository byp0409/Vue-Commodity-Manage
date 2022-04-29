<template>
  <!-- 商品管理 -->
  <div class="goods">
    <!-- 顶部搜索区域 -->
    <header>
      <el-input v-model="input" placeholder="请输入内容" size="medium " @change="search"></el-input>
      <el-button type="primary" size="small" @click="search" icon="el-icon-search">查询</el-button>
      <el-button type="primary" size="small" @click="goAddEditGoods" icon="el-icon-plus">
        添加
      </el-button>
    </header>
    <div class="table">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark">
        <!-- 具体内容 -->
        <el-table-column prop="id" label="商品ID" width="110">
          <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
        </el-table-column>
        <el-table-column prop="title" label="商品名称" width="110"></el-table-column>
        <el-table-column prop="price" label="商品价格" width="90"></el-table-column>
        <el-table-column prop="num" label="商品数量" width="90"></el-table-column>
        <el-table-column
          prop="category"
          label="规格类目"
          width="90"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="image"
          label="商品图片"
          width="150"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column prop="sellPoint" label="商品卖点" show-overflow-tooltip></el-table-column>
        <el-table-column
          prop="descs"
          label="商品描述"
          show-overflow-tooltip
          header-align="center"
        ></el-table-column>
        <!-- 编辑和删除按钮 -->
        <el-table-column label="操作" width="250" header-align="center">
          <template slot-scope="scope">
            <el-button size="mini">查看</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit">
              编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-delete"
            >
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
      // 前端分页需要截取数据
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
    // 表单删除按钮
    handleDelete(index, row) {
      this.$confirm('此操作将永久数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        showClose: false,
      })
        .then(() => {
          // index 索引  row  商品信息  向服务器请求删除
          this.$store.dispatch('goods/deleteGoods', row.id).then(
            value => {
              this.$message({
                showClose: true,
                message: '恭喜你，删除成功！',
                center: true,
                type: 'success',
                showClose: false,
              });
              // 重新获取数据，刷新页面
              this.getGoodsList();
            },
            error => {
              this.$message({
                showClose: true,
                message: '删除失败了哦',
                center: true,
                type: 'error',
                showClose: false,
              });
            }
          );
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            center: true,
            showClose: false,
          });
        });
    },
    // 跳转到添加商品页面
    goAddEditGoods() {
      this.$router.replace({
        name: 'addEditGoods',
        query: { headerName: '添加商品', confirm: '立即创建' },
      });
    },
    // 搜索
    search() {
      this.$store.dispatch('goods/search', this.input);
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
      console.log(val);
    },
    // 表单编辑按钮
    handleEdit(index, row) {
      this.$router.replace({
        name: 'addEditGoods',
        query: { headerName: '编辑商品', confirm: '立即修改', row },
      });
    },
    // 获取商品数据
    getGoodsList(page) {
      // console.log(page);
      this.$store.dispatch('goods/reqGoods', page);
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
