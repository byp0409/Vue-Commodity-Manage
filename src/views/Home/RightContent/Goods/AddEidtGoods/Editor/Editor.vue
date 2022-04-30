<template>
  <!-- 富文本编辑器 -->
  <div>
    <div id="editor"></div>
  </div>
</template>

<script>
import E from 'wangeditor';
export default {
  name: 'Editor',
  data() {
    return {
      e: null,
    };
  },
  props: ['desc'],
  // 创建编辑器实例
  mounted() {
    let editor = this.e;
    editor = new E('#editor');
    // 提示信息
    editor.config.placeholder = this.$t('goods.tip2');
    // 取消自动 focus
    editor.config.focus = false;
    // 默认情况下，显示所有菜单
    editor.config.menus = [
      'bold',
      'fontSize',
      'italic',
      'underline',
      'strikeThrough',
      'indent',
      'foreColor',
      'link',
      'justify',
      'quote',
      'emoticon',
      'undo',
      'redo',
    ];
    // 失去焦点，给父组件传值
    editor.config.onblur = newHtml => {
      this.$emit('getEditor', newHtml);
    };
    //层级
    editor.config.zIndex = 1;
    editor.create();
    // 默认数据
    this.$nextTick(() => {
      editor.txt.append(`<p>${this.desc || ''}</p>`);
    });
  },
};
</script>

<style></style>
