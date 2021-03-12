<template>
  <div>
    <el-divider></el-divider>
    <span class="title">拾物信息</span>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="拾物名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="拾得日期：">
        <el-input v-model="form.date"></el-input>
      </el-form-item>
      <el-form-item label="拾物地点：">
        <el-input v-model="form.place"></el-input>
      </el-form-item>
      <el-form-item label="物品分类：">
        <el-select v-model="form.type" placeholder="请选择活动区域">
          <el-option label="类型一" value="类型一"></el-option>
          <el-option label="类型二" value="类型二"></el-option>
          <el-option label="类型三" value="类型三"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="拾物描述：">
        <el-input type="textarea" v-model="form.detail"></el-input>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <span class="title">联系方式</span>
    <div class="el-form">
      <label class="padding">电话号码：</label>
      <el-input v-model="telephone"></el-input>
    </div>
    <el-divider></el-divider>
    <span class="title">上传图片</span>
    <el-upload
        class="el-form margin"
        action="#"
        list-type="picture-card"
        :auto-upload="false">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
        >
        <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="imgVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: "FillForm",
  data(){
    return{
      form: {
        name: '',
        date: '',
        place: '',
        type: '',
        detail: ''
      },
      telephone: '',
      dialogImageUrl: '',
      imgVisible: false,
      disabled: false
    }
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.imgVisible = true;
    }
  }
}
</script>

<style scoped lang="scss">
.title{
  font-size: 16px;
  font-weight: 700;
}
.el-input{
  width: 50%;
}
/deep/.el-form-item__label{
  white-space: nowrap;
}
.el-form{
  margin-left: 20px;
}
/deep/.el-textarea__inner{
  width: 50%;
}
.padding{
  padding-right: 12px;
}
.margin{
  margin-top: 6px;
}
</style>