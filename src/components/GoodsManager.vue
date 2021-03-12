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
      <div class="type_box">物品类型：
        <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in typeOption"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" class="add">添加</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsManager",
  data(){
    return{
      typeOption:[{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
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
.type_box{
  margin-left: 20px;
}
.add{
  margin-left: 20px;
}
</style>