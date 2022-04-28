<template>
  <div class="add">
    <!-- 面包屑 -->
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/homePage' }" replace>首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/home/goods' }" replace>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加商品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 表单 -->
    <div class="form">
      <el-form
        :model="goodsForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="类目选择" prop="category">
          <!-- 控制弹窗 -->
          <el-button type="primary" @click="centerDialogVisible">类目选择</el-button>
          <span class="categoryName" v-show="goodsForm.category">
            类别：{{ goodsForm.category }}
          </span>
        </el-form-item>
        <el-form-item label="商品ID" prop="id">
          <el-input v-model.number="goodsForm.id"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="title">
          <el-input v-model="goodsForm.title"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model.number="goodsForm.price"></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="num">
          <el-input v-model.number="goodsForm.num"></el-input>
        </el-form-item>
        <el-form-item label="商品卖点" prop="sellPoint">
          <el-input v-model="goodsForm.sellPoint"></el-input>
        </el-form-item>
        <el-form-item label="上传图片" prop="image">
          <UpLoadImg @getImgUrl="getImgUrl" />
        </el-form-item>
        <el-form-item label="商品描述" prop="desc">
          <el-input type="textarea" v-model="goodsForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 弹窗组件 -->
    <Category ref="category" @getCategoryName="getCategoryName" />
  </div>
</template>

<script>
// 选择类别模块
import Category from './Category/Category.vue';
// 上传图片模块
import UpLoadImg from './UpLoadImg/UpLoadImg.vue';
export default {
  name: 'AddGoods',
  data() {
    return {
      // 要添加的商品信息
      goodsForm: {
        category: '', //类别
        id: '', //id
        title: '', //商品名
        price: '', //价格
        num: '', //数量
        sellPoint: '', //卖点
        image: '', //图片
        desc: '', //描述
      },
      // 表单验证
      rules: {
        id: [
          { required: true, message: 'ID不能为空', trigger: 'blur' },
          { type: 'number', message: 'ID必须是数字' },
        ],
        title: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' },
        ],
        price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' },
          { type: 'number', message: '价格必须是数字' },
        ],
        num: [
          { required: true, message: '请输入商品数量', trigger: 'blur' },
          { type: 'number', message: '数量必须是数字' },
        ],
      },
    };
  },
  methods: {
    // 从子组件获取上传图片url的回调
    getImgUrl(value) {
      this.goodsForm.image = value;
      // console.log(this.goodsForm.image);
    },
    // 获取类别的自定义事件的回调
    getCategoryName(value) {
      this.goodsForm.category = value;
    },
    // 展示选择
    centerDialogVisible() {
      // 通过ref操作子组件的数据
      this.$refs.category.centerDialogVisible = true;
    },
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  components: { Category, UpLoadImg },
};
</script>

<style lang="less" scoped>
.bread {
  background-color: #fff;
  padding: 20px 20px;
  margin: 10px 15px 18px;
  border-radius: 5px;
}
.form {
  padding-top: 15px;
  padding-bottom: 1px;
  margin: 10px 15px 0;
  border-radius: 5px;
  background-color: #fff;
  .categoryName {
    margin-left: 70px;
  }
}
</style>
