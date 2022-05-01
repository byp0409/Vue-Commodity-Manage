<template>
  <!-- 规格参数 -->
  <div>
    <header>
      <el-input v-model="input" placeholder="请输入内容" size="medium " @change="search"></el-input>
      <el-button type="primary" size="small" @click="search" icon="el-icon-search">
        {{ $t('goods.search') }}
      </el-button>
      <el-button type="primary" size="small" @click="goAddEditGoods" icon="el-icon-plus">
        {{ $t('goods.add') }}
      </el-button>
    </header>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="itemCatId"
          label="规格参数ID"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column prop="id" label="类目ID" show-overflow-tooltip></el-table-column>
        <el-table-column prop="specsName" label="规格名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="paramData" label="规格参数" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit">
              {{ $t('goods.edit') }}
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-delete"
            >
              {{ $t('goods.delete') }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Specifications',
  data() {
    return {
      tableData: [
        {
          id: '2016-05-02',
          itemCatId: '王小虎',
          paramData: '上海市普陀区金沙江路 1518 弄',
          specsName: '',
        },
      ],
      input: '',
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 搜索
    search() {},
    // 跳转到添加商品页面
    goAddEditGoods() {},
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
  margin: 0 23px;
}
</style>
