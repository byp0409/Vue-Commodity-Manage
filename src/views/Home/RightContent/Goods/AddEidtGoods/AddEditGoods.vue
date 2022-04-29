<template>
  <div class="add">
    <!-- 面包屑 -->
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/homePage' }" replace>首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/home/goods' }" replace>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $route.query.headerName }}</el-breadcrumb-item>
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
          <UpLoadImg @getImgUrl="getImgUrl" ref="upload" />
        </el-form-item>
        <el-form-item label="商品描述" prop="desc">
          <!-- 文本编辑 -->
          <Editor @getEditor="getEditor" ref="editor" :desc="goodsForm.desc" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">
            {{ $route.query.confirm }}
          </el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 弹窗组件 -->
    <Category
      ref="category"
      @getCategoryName="getCategoryName"
      :category="goodsForm.category"
      :cid="goodsForm.cid"
    />
  </div>
</template>

<script>
// 选择类别模块
import Category from './Category/Category.vue';
// 上传图片模块
import UpLoadImg from './UpLoadImg/UpLoadImg.vue';
// 富文本编辑器
import Editor from './Editor/Editor.vue';
export default {
  name: 'AddEditGoods',
  data() {
    return {
      // 要添加的商品信息
      goodsForm: {
        category: '', //类别
        cid: '',
        title: '', //商品名
        price: '', //价格
        num: '', //数量
        sellPoint: '', //卖点
        image: '', //图片
        desc: '', //描述
        paramsInfo: '', //状态
        // 修改数据时用的
        id: '',
      },
      // 表单验证
      rules: {
        title: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' },
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
  mounted() {
    // 简化数据操作，至少为空对象解决添加数据时query空数据的报错
    let row = this.$route.query.row || {};
    if (row.id) {
      let row = this.$route.query.row || {};
      // 初始化部分信息
      let { price, num } = row;
      this.goodsForm = row;
      // 覆盖掉错误信息，把字符串类型的数字覆盖成数字
      this.goodsForm.price = parseInt(price) || '';
      this.goodsForm.num = parseInt(num) || '';
      // 服务器字段和用的字段不一样
      this.goodsForm.desc = row.descs;
    }
  },
  methods: {
    // 从子组件获取文本
    getEditor(value) {
      this.goodsForm.desc = value;
    },
    // 从子组件获取上传图片url的回调
    getImgUrl(value) {
      this.goodsForm.image = value;
      // console.log(this.goodsForm.image);
    },
    // 从子组件上获取类别和类别id
    getCategoryName(category, cid) {
      this.goodsForm.category = category;
      this.goodsForm.cid = cid;
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
          // 整理数据
          let { title, cid, category, sellPoint, price, num, desc, paramsInfo, image, id } =
            this.goodsForm;
          if (id == '') {
            // 添加商品
            this.$store
              .dispatch('goods/addGoods', {
                title,
                cid,
                category,
                sellPoint,
                price,
                num,
                desc,
                paramsInfo,
                image,
              })
              .then(
                value => {
                  this.$message({
                    message: '恭喜你，添加商品成功',
                    center: true,
                    type: 'success',
                    showClose: false,
                  });
                  this.$router.replace({ name: 'goods' });
                },
                error => {
                  this.$message({
                    message: '抱歉，添加失败了',
                    center: true,
                    type: 'error',
                    showClose: false,
                  });
                }
              );
          } else if (id) {
            // 更新商品
            this.$store
              .dispatch('goods/modifyGoods', {
                title,
                cid,
                category,
                sellPoint,
                price,
                num,
                desc,
                paramsInfo,
                image,
                id,
              })
              .then(
                value => {
                  this.$message({
                    message: '恭喜你，添加商品成功',
                    center: true,
                    type: 'success',
                    showClose: false,
                  });
                  this.$router.replace({ name: 'goods' });
                },
                error => {
                  this.$message({
                    message: '抱歉，添加失败了',
                    center: true,
                    type: 'error',
                    showClose: false,
                  });
                }
              );
          }
        } else {
          this.$message({
            message: '要把信息填完整哦',
            type: 'warning',
            center: true,
            showClose: false,
          });
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  components: { Category, UpLoadImg, Editor },
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
