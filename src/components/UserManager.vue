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
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          label="用户名"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="姓名"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.realname }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="学号"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.num }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="联系方式"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.telephone }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="微信号"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.wx }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="密码"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.password }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "UserManager",
  data() {
    return {
      currentPage: '',
      search: '',
      tableData: [{
        username: '懒猪',
        realname: '王小虎',
        num: '20189890990',
        telephone: '12345850868',
        wx: 'sjaknndksfna',
        password: '1danbdj'
      }, {
        username: '懒猪',
        realname: '王小虎',
        num: '20189890990',
        telephone: '12345850868',
        wx: 'sjaknndksfna',
        password: '1danbdj'
      }, {
        username: '懒猪',
        realname: '王小虎',
        num: '20189890990',
        telephone: '12345850868',
        wx: 'sjaknndksfna',
        password: '1danbdj'
      }, {
        username: '懒猪',
        realname: '王小虎',
        num: '20189890990',
        telephone: '12345850868',
        wx: 'sjaknndksfna',
        password: '1danbdj'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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