<template>
  <div>
    <el-form :label-position='left' label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名:">
        <span v-if="!inputLock.name">{{ formLabelAlign.name }}</span>
        <el-input v-model="formLabelAlign.name" v-if="inputLock.name"></el-input>
        <el-button type="primary" icon="el-icon-edit" circle @click="openLock('name')"></el-button>
      </el-form-item>
      <el-form-item label="真实姓名:">
        <span v-if="!inputLock.realname">{{ formLabelAlign.realname }}</span>
        <el-input v-model="formLabelAlign.realname" v-if="inputLock.realname"></el-input>
      </el-form-item>
      <el-form-item label="学号:">
        <span v-if="!inputLock.num">{{ formLabelAlign.num }}</span>
        <el-input v-model="formLabelAlign.num" v-if="inputLock.num"></el-input>
      </el-form-item>
      <el-form-item label="微信:">
        <span v-if="!inputLock.wx">{{ formLabelAlign.wx }}</span>
        <el-input v-model="formLabelAlign.wx" v-if="inputLock.wx"></el-input>
        <el-button type="primary" icon="el-icon-edit" circle @click="openLock('wx')"></el-button>
      </el-form-item>
      <el-form-item label="联系方式:">
        <span v-if="!inputLock.telephone">{{ formLabelAlign.telephone }}</span>
        <el-input v-model="formLabelAlign.telephone" v-if="inputLock.telephone"></el-input>
        <el-button type="primary" icon="el-icon-edit" circle @click="openLock('telephone')"></el-button>
      </el-form-item>
      <el-form-item label="密码:">
        <span v-if="!inputLock.password">{{ formLabelAlign.password }}</span>
        <el-input v-model="formLabelAlign.password" v-if="inputLock.password"></el-input>
        <el-button type="primary" icon="el-icon-edit" circle @click="openLock('password')"></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "PersonalData",
  data() {
    return {
      formLabelAlign: {
        name: 'Apple',
        realname: '苹果',
        num: '20180240330',
        wx: 'weixin',
        telephone: '1223344650',
        password: '88888888',
      },
      inputLock: {
        name: false,
        realname: false,
        num: false,
        wx: false,
        telephone: false,
        password: false,
      }
    }
  },
  methods: {
    openLock(member){
      this.inputLock[member] = !this.inputLock[member];
    }
  }
}
</script>

<style scoped lang="scss">
/deep/.el-form-item__content{
  display: flex;
  justify-content: flex-start;
}
.el-button{
  margin-left: 10px;
}
</style>