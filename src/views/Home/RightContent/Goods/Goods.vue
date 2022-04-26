<template>
  <!-- 商品管理 -->
  <div class="goods">
    <!-- 顶部搜索区域 -->
    <header>
      <el-input v-model="input" placeholder="请输入内容" size="medium "></el-input>
      <el-button type="primary" size="small">查询</el-button>
      <el-button type="primary" size="small">添加</el-button>
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
        <el-table-column label="商品ID" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="120"></el-table-column>
        <el-table-column prop="address" label="商品价格"></el-table-column>
        <el-table-column prop="address" label="商品数量"></el-table-column>
        <el-table-column prop="address" label="规格类目"></el-table-column>
        <el-table-column prop="address" label="商品图片" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="商品卖点" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="商品描述" show-overflow-tooltip></el-table-column>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data() {
    return {
      input: '',
      // 存放表单数据
      tableData: [
        // 测试案例
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家',
        },
      ],
      // // 多个选择
      // multipleSelection: [],
    };
  },
  methods: {
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
