<template>
  <div>
    <div class="search_box">
      <el-input
          placeholder="请输入内容"
          v-model="search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button type="primary">搜索</el-button>
      <el-button type="primary" class="add">发布{{ ((isLost === 'lost') ? '失物招领' : '寻物启事' ) }}</el-button>
    </div>
    <div class="flex_start">
      <label>已选条件：</label>
      <el-checkbox-group v-model="checkedGroup" @change="groupChange">
        <el-checkbox-button v-for="condition in conditions" :label="condition" :key="condition">{{condition}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div class="flex_start">
      <label>分类：</label>
      <el-checkbox-group v-model="typeGroup" @change="groupChange">
        <el-checkbox-button v-for="type in types" :label="type" :key="type">{{type}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div class="flex_start">
      <label>拾获时间：</label>
      <el-checkbox-group v-model="timeGroup" @change="groupChange">
        <el-checkbox-button v-for="time in times" :label="time" :key="time">{{time}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div class="list">
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="item in list" :key="item.id" class="infinite-list-item">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" class="image">
            <div style="padding: 14px;" class="card_text">
              <div class="card_header">
                <span class="title">{{ item.name }}</span>
                <span :class=" item.status ? 'gray' : '' ">{{ item.status ? ((isLost === 'lost') ? '已认领' : '已归还' ) : ((isLost === 'lost') ? '等待认领' : '寻找中' ) }}</span>
              </div>
              <div class="clearfix">
                <ul>
                  <li>
                    <label>{{ (isLost === 'lost') ? '拾物' : '丢失'  }}地点：</label>
                    <span class="weight">{{ item.place }}</span>
                  </li>
                  <li>
                    <label>{{ (isLost === 'lost') ? '拾物' : '丢失'  }}时间：</label>
                    <span class="weight">{{ item.time }}</span>
                  </li>
                  <li>
                    <label>{{ (isLost === 'lost') ? '拾物' : '失物'  }}描述：</label>
                    <span class="weight">{{ item.detail }}</span>
                  </li>
                  <li>
                    <label>{{ (isLost === 'lost') ? '拾物者' : '失主'  }}联系方式：</label>
                    <span class="weight">{{ item.telephone }}</span>
                  </li>
                  <li>
                    <label>发布人：</label>
                    <span class="weight">{{ item.user }}</span>
                  </li>
                  <li class="lastLine">
                    <i>
                      <label>发布时间：</label>
                      <span class="weight">{{ item.publish }}</span>
                    </i>
                    <i>
                      <el-button type="primary" size="mini" @click="dialogVisable = true" :disabled=" item.status ">认领</el-button>
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
    <el-dialog
        :visible.sync="dialogVisable"
        width="60%">
      <img :src="form.img">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="联系方式:">
          <el-input v-model="form.telephone"></el-input>
        </el-form-item>
        <el-form-item label="学号:">
          <el-input v-model="form.num"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码:">
          <el-input v-model="form.identity"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="evidence">认 证</el-button>
        <el-button type="primary" @click="confirm">确 定 归 还</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "LostCard",
  data(){
    return{
      isLost: this.$route.query.cardType,
      search: '',
      checkedGroup: [],
      typeGroup: [],
      timeGroup: [],
      conditions: [],
      types: ['全部','手机','学生卡','衣服','钱包'],
      times: ['全部','今天','3天内','7天内'],
      list: [{
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        id: 1,
        name: '学生卡',
        place: '菊园一楼',
        time: '2021.1.31 10:00:00',
        detail: '学生卡的名字为吴叉叉，为计算机院的叉叉叉班学生',
        telephone: 15771234496,
        publish: '2021.2.28 14:33',
        user: '好人',
        status: 1,
      },{
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        id: 1,
        name: '学生卡',
        place: '菊园一楼',
        time: '2021.1.31 10:00:00',
        detail: '学生卡的名字为吴叉叉，为计算机院的叉叉叉班学生',
        telephone: 15771234496,
        publish: '2021.2.28 14:33',
        user: '好人',
        status: 0,
      }],
      dialogVisable: false,
      form: {
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        name: '',
        telephone: '',
        num: '',
        identity: ''
      }
    }
  },
  methods: {
    groupChange(){
      this.conditions = this.typeGroup.concat(this.timeGroup);
      this.checkedGroup = this.typeGroup.concat(this.timeGroup);
    },
    load () {
    },
    evidence(){
    },
    confirm(){
    }
  },
  created() {
    console.log(this.$route.query.cardType);
  }
}
</script>

<style scoped lang="scss">
.search_box{
  display: flex;
  justify-content: flex-start;
}
.flex_start{
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  label{
    display: inline-block;
    width: 100px;
    text-align: right;
  }
  /deep/.el-checkbox-button__inner{
    border-radius: 6px;
    border: 1px solid #DCDFE6;
  }
}
/deep/.el-card__body{
  display: flex;
  justify-content: flex-start;
  .card_text{
    width: 70%;
  }
  img{
    width: 30%;
  }
  .card_text{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lastLine{
    display: flex;
    justify-content: space-between;
    i{
      display: block;
      font-style: normal;
    }
  }
  .title{
    font-size: 20px;
    font-weight: 700;
  }
}
.gray{
  color: gray;
}
.el-dialog__body{
  font-size: 16px;
  .el-form-item__label{
    
  }
  img{
    display: block;
    width: 80%;
    margin: 10px auto;
  }
}
</style>