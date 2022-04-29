<template>
  <!-- 分类弹框 -->
  <div class="category">
    <el-dialog title="请选择类目" :visible.sync="centerDialogVisible" width="30%" center>
      <!-- 展示当前选择的类别 -->
      <div class="checked">
        <span>当前选择的类别：{{ category }}</span>
      </div>
      <!-- 类别选择 树形结构 -->
      <el-tree :props="props" :load="loadNode" lazy @node-click="nodeClick"></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sendCategoryName">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { reqCategoryInfo } from '@/api/index';
export default {
  name: 'Category',
  // props: ['category', 'cid'],
  props: {
    category: {
      type: String,
      default: '',
    },
    cid: {
      default: '',
    },
  },
  data() {
    return {
      // 控制弹框
      centerDialogVisible: false,
      // 树形结构
      props: {
        // 这里都是字段，真正控制数据的在下面
        label: 'name',
        children: 'zones',
      },
      // 类别
      categoryName: '',
      // 类别id
      categoryCid: '',
    };
  },
  mounted() {
    // 赋初值
    this.categoryName = this.category;
    this.categoryCid = this.cid;
  },
  methods: {
    // 给父组件类别信息,并修改弹窗显示状态
    sendCategoryName() {
      this.$emit('getCategoryName', this.categoryName, this.categoryCid);
      this.centerDialogVisible = false;
    },
    // 添加选择
    nodeClick(data) {
      this.categoryCid = data.cid;
      this.categoryName = data.name;
    },
    // 懒加载函数
    loadNode(node, resolve) {
      // 如果当前层级为0
      if (node.level === 0) {
        // 请求一级分类，id默认1
        // 直接请求数据
        reqCategoryInfo(1).then(res => {
          if (res.data.status == 200) {
            return resolve(res.data.result);
          } else {
            return resolve([]);
          }
        });
      }
      if (node.level === 1) {
        let id = node.data.cid;
        reqCategoryInfo(id).then(res => {
          if (res.data.status == 200) {
            return resolve(res.data.result);
          } else {
            return resolve([]);
          }
        });
      }
      if (node.level === 2) {
        let id = node.data.cid;
        reqCategoryInfo(id).then(res => {
          if (res.data.status == 200) {
            return resolve(res.data.result);
          } else {
            return resolve([]);
          }
        });
      }
      if (node.level === 3) {
        let id = node.data.cid;
        reqCategoryInfo(id).then(res => {
          if (res.data.status == 200) {
            return resolve(res.data.result);
          } else {
            return resolve([]);
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.checked {
  text-align: center;
}
</style>
