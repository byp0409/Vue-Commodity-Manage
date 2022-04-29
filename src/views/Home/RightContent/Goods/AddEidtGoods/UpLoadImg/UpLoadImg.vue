<template>
  <!-- 上传图片 -->
  <div class="upload">
    <!-- 
      class="upload-demo" 
      ref="upload"  用于获取dom，使用上传图片封装的方法
      action="http://127.0.0.1:8090/api/upload"   上传到哪个服务器
      :on-preview="handlePreview"   预览回调
      :on-remove="handleRemove"   删除回调，回调虽然不用但是必须写
      :file-list="fileList"   图片暂存位置
      :on-success="uploadSuccess" 上传成功回调，其中response是最重要的参数，他是后台响应的数据
      :auto-upload="false"  禁止自动上传
      :on-error="uploadError"  上传失败
      multiple    多文件上传
      list-type="picture"   展示类型
      :on-error
    -->
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://127.0.0.1:8090/api/upload"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload"
      :auto-upload="false"
      :limit="parseInt(1)"
      list-type="picture"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px" size="small" type="success" @click="submitUpload">
        上传到服务器
      </el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，只能上传1个，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'UpLoadImg',
  data() {
    return {
      // 暂存图片
      fileList: [],
    };
  },
  methods: {
    // 手动上传
    submitUpload() {
      this.$refs.upload.submit();
    },
    // 删除
    handleRemove() {
      // console.log(file, fileList);
    },
    // 上传成功
    uploadSuccess(response) {
      if (response.res_code == 0) {
        let imgName = response.url.split('\\')[1]; //转义一个\
        let imgUrl = `http://localhost:8090/${imgName}`;
        // 给父组件传图片url
        this.$emit('getImgUrl', imgUrl);
        // 上传成功提示消息
        this.$message({
          message: '恭喜你，上传成功 <(￣︶￣)>',
          type: 'success',
          center: true,
        });
      }
    },
    // 上传失败
    uploadError() {
      this.$message({
        message: '抱歉，上传失败 ╥﹏╥...',
        type: 'error',
        center: true,
      });
    },
    // 限制上传大小
    beforeUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1); //截取后缀
      const extension1 = testmsg === 'jpg';
      const extension2 = testmsg === 'png';
      const isLt500KB = file.size / 1024 < 500; //这里做文件大小限制
      if (!isLt500KB) {
        this.$message({
          message: '上传文件大小不能超过 500KB!',
          type: 'warning',
        });
      }
      if (!extension1 && !extension2) {
        this.$message({
          message: '上传文件只能是 jpg、png格式!',
          type: 'warning',
        });
      }
      return extension1 || (extension2 && isLt500KB);
    },
  },
};
</script>

<style lang="less" scoped>
.upload-demo {
  width: 390px;
  .el-upload__tip {
    margin-top: -8px;
  }
}
</style>
