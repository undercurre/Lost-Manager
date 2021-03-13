<template>
  <div>
    <div class="header">
      <label>发布时间:</label>
      <el-date-picker
          v-model="date"
          type="daterange"
          size="mini"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间">
      </el-date-picker>
      <el-radio v-model="checkList" :label="((historyType === 'lost') ? '未认领' : '寻找中' )">{{ (historyType === 'lost') ? '未认领' : '寻找中'  }}</el-radio>
      <el-radio v-model="checkList" :label="((historyType === 'lost') ? '已认领' : '已归还' )">{{ (historyType === 'lost') ? '已认领' : '已归还'  }}</el-radio>
      <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
    </div>
    <div class="list">
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="item in list" :key="item.id" class="infinite-list-item">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" class="image">
            <div style="padding: 14px;" class="card_text">
              <div class="card_header">
                <span class="title">{{ item.name }}</span>
                <span :class=" item.status ? 'gray' : '' ">{{ item.status ? ((historyType === 'lost') ? '已认领' : '已归还' ) : ((historyType === 'lost') ? '等待认领' : '寻找中' ) }}</span>
              </div>
              <div class="clearfix">
                <ul>
                  <li>
                    <label>{{ (historyType === 'lost') ? '拾物' : '丢失'  }}地点：</label>
                    <span class="weight">{{ item.place }}</span>
                  </li>
                  <li>
                    <label>{{ (historyType === 'lost') ? '拾物' : '丢失'  }}时间：</label>
                    <span class="weight">{{ item.time }}</span>
                  </li>
                  <li>
                    <label>{{ (historyType === 'lost') ? '拾物' : '失物'  }}描述：</label>
                    <span class="weight">{{ item.detail }}</span>
                  </li>
                  <li>
                    <label>{{ (historyType === 'lost') ? '拾物者' : '失主'  }}联系方式：</label>
                    <span class="weight">{{ item.telephone }}</span>
                  </li>
                  <li class="lastLine">
                    <i>
                      <label>发布时间：</label>
                      <span class="weight">{{ item.publish }}</span>
                    </i>
                    <i>
                      <el-button type="primary" size="mini" @click="updateVisable = true" :disabled=" item.status ">修改</el-button>
                      <el-button type="primary" size="mini" :disabled=" item.status ">撤销</el-button>
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
        :title="'修改发布的' + ((historyType === 'lost') ? '寻物启事' : '失物招领' )"
        :visible.sync="updateVisable"
        width="80%"
        :before-close="handleClose">
      <fill-form></fill-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateVisable = false">确 定 修 改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import FillForm from "@/components/FillForm";
export default {
  name: "lostHistory",
  components: {FillForm},
  props: {
    historyType: {
      type: String,
      default: "lost"
    }
  },
  data(){
    return {
      date: '',
      checkList: [],
      count: 0,
      list: [{
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        id: 1,
        name: '学生卡',
        place: '菊园一楼',
        time: '2021.1.31 10:00:00',
        detail: '学生卡的名字为吴叉叉，为计算机院的叉叉叉班学生',
        telephone: 15771234496,
        publish: '2021.2.28 14:33',
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
        status: 0,
      }],
      updateVisable: false,
    }
  },
  methods: {
    load () {
    },
    update(){
    },
    handleClose(done) {
      this.$confirm('填写数据即将丢失，确认关闭？')
          .then( () => {
            done();
          })
          .catch( () => {});
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  display: flex;
  justify-content: space-around;
  white-space: nowrap;
  align-items: center;
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
</style>