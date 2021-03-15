<template>
  <div>
    <el-menu
        :default-active="activeNav"
        class="el-menu-demo nav"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
      <el-menu-item index="1" v-if="!isManager">首页</el-menu-item>
      <el-menu-item index="/LostCard?cardType=search" v-if="!isManager">寻物启事</el-menu-item>
      <el-menu-item index="/LostCard?cardType=lost" v-if="!isManager">招领启事</el-menu-item>
      <el-menu-item index="/personal" v-if="!isManager">个人中心</el-menu-item>
      <el-menu-item index="/login">登录</el-menu-item>
    </el-menu>
    <el-tabs tab-position='left'
             stretch>
      <el-tab-pane label="个人信息" v-if="!isManager">
        <PersonalData></PersonalData>
      </el-tab-pane>
      <el-tab-pane label="查询失物招领发布历史" v-if="!isManager">
        <lost-history historyType='lost'></lost-history>
      </el-tab-pane>
      <el-tab-pane label="查询寻物启事发布历史" v-if="!isManager">
        <lost-history historyType='search'></lost-history>
      </el-tab-pane>
      <el-tab-pane label="留言管理" v-if="!isManager">
        <message-manager></message-manager>
      </el-tab-pane>
      <el-tab-pane label="用户管理" v-if="isManager">
        <user-manager></user-manager>
      </el-tab-pane>
      <el-tab-pane label="物品管理" v-if="isManager">
        <goods-manager></goods-manager>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PersonalData from "@/components/PersonalData";
import LostHistory from "@/components/lostHistory";
import MessageManager from "@/components/messageManager";
import UserManager from "@/components/UserManager";
import GoodsManager from "@/components/GoodsManager";
export default {
  name: "Personal",
  components: {GoodsManager, UserManager, MessageManager, LostHistory, PersonalData},
  data(){
    return {
      activeNav: this.$route.params.nav,
      activeContent: this.$route.params.content,
      isManager: this.$store.state.identity,
    }
  },
  methods: {
    handleSelect(e){
      console.log(e);
    },
  },
  created() {
  }
}
</script>
<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: flex-end;
}
/deep/.el-tabs--left .el-tabs__item{
  text-align: center;
  border-bottom: 1px solid #fff;
  background-color: #545C64;
  color: #fff;
}
/deep/.el-tabs__item.is-active{
  background-color: #FFD064;
  color: #333;
}
/deep/.el-tabs__active-bar{
  display: none;
}
/deep/.el-tabs__content{
  margin: 10px;
}
/deep/.el-tabs__item{
  font-weight: 700;
}
</style>