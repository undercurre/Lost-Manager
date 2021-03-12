<template>
  <div>
    <el-tabs v-model="activeName" type="border-card" stretch>
      <el-tab-pane label="修改密码" name="first">
        <el-form ref="form" v-model="form" label-width="80px">
          <el-form-item label="新密码:">
            <el-input v-model="form.new" placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item label="再次确认:">
            <el-input v-model="form.again" placeholder="请再次输入新密码"></el-input>
          </el-form-item>
          <el-button class="sub_btn" type="primary" @click="onSubmit" round>确认修改</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "SetPassword",
  data() {
    return{
      activeName: 'first',
      form: {
        new: '',
        again: '',
      }
    }
  },
  methods: {
    onSubmit() {
      router.push('login');
    }
  }
}
</script>

<style scoped lang="scss">
  .el-tabs{
    width: 30vw;
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translateX(-50%) translateY(-50%);
  }
  .sub_btn{
    display: block;
    width: 80%;
    margin: 0 auto;
    clear: both;
  }
</style>