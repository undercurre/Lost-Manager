<template>
  <div>
    <el-tabs v-model="activeName" type="border-card" stretch>
      <el-tab-pane label="用户登录" name="first">
        <el-form ref="form" v-model="form" label-width="80px">
          <el-form-item label="学号：">
            <el-input v-model="form.username" placeholder="请输入学号"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <router-link to="/setPassword" class="forget">忘了密码？</router-link>
          <el-button class="sub_btn" type="primary" @click="onSubmit" round>登录</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="管理员登录" name="second">
        <el-form ref="form" v-model="form" label-width="80px">
          <el-form-item label="账号：">
            <el-input v-model="form.username" placeholder="请输入学号"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <router-link to="/setPassword" class="forget">忘了密码？</router-link>
          <el-button class="sub_btn" type="primary" @click="onSubmit" round>登录</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Login",
  data() {
    return {
      activeName: 'first',
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      router.push({name: 'personal', params: {nav: '/personal', content: '/personalData'}});
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
  .forget{
    color: #f22;
    font-size: 10px;
    float: right;
    margin-bottom: 6px;
  }
</style>