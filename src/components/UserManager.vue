<template>
  <div>
    <div class="header">
      <div class="search_box">
        <el-input
            placeholder="请输入内容"
            v-model="search">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button type="primary">搜索</el-button>
      </div>
      <el-button type="primary" class="getDataBtn">同步学生数据</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserManager",
  data(){
    return {
      search: '',
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  display: flex;
  justify-content: flex-start;
}
.search_box{
  display: flex;
  justify-content: flex-start;
}
.getDataBtn{
  margin-left: 20px;
}
</style>