<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="box">
      <!-- <router-link to="/login">到login</router-link> -->
      <!-- <a href="" @click="this.$router.push({ path: '/login' })">thisis</a> -->
      <!-- <router-view></router-view> -->
      <el-row type="flex" class="row-one">
        <el-col :span="24">
          <!-- <el-button-group>
          <el-button type="primary" size="mini">时</el-button>
          <el-button type="primary" size="mini">日</el-button>
          <el-button type="primary" size="mini">月</el-button>
          <el-button type="primary" size="mini">累计</el-button>
        </el-button-group> -->
          <el-radio-group v-model="selectTab" style="margin-bottom: 10px;">
            <el-radio-button label="now">实</el-radio-button>
            <el-radio-button label="day">日</el-radio-button>
            <el-radio-button label="week">周</el-radio-button>
            <el-radio-button label="month">月</el-radio-button>
            <el-radio-button label="cumulative">累计</el-radio-button>
          </el-radio-group>
          <el-time-select
            v-model="currentTime"
            disabled
            align="right"
            placeholder="选择时间"
          />
        </el-col>
      </el-row>
      <el-row type="flex" class="row-two">
        <el-col :span="24">
          <ul>
            <li v-for="(data,index) in mockdata" :key="index" :class="{tabActive: index == currentTab }" @click="changeTab(index,$event)">
              <div v-if="data.zs_number>0" class="count">{{ data.zs_number }} &nbsp;<span>笔</span></div>
              <div v-else class="count" style="display: none;">{{ " " }} &nbsp;<span /></div>
              <div class="attribute">{{ data.task_class }}</div>
              <div v-if="data.score > 0" class="total">得分：&nbsp;{{ data.score > 0 ? data.score : 0 }}</div>
              <div v-else class="total" style="display: none;">&nbsp;{{ }}</div>
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row class="row-five">
        <Title title="数据对比" />
        <div id="showLine" ref="showLine" />
      </el-row>
      <el-row class="row-four">
        <Title title="区县PK赛" />
        <!-- <el-table
          :data="pkData"
          stripe
          border
          style="width: 100%">
          <el-table-column
            align="center"
            fixed
            prop="county"
            label="区县"
            width="100">
          </el-table-column>
          <el-table-column
            prop="aim"
            label="目标"
            width="80">
          </el-table-column>
          <el-table-column
            prop="number"
            label="数量"
            width="80">
          </el-table-column>
          <el-table-column
            prop="discount"
            label="折算量"
            width="80">
          </el-table-column>
          <el-table-column
            prop="progress"
            label="进度"
            width="80">
          </el-table-column>
          <el-table-column
            prop="score"
            label="得分"
            width="80">
          </el-table-column>
        </el-table> -->
        <refactorTable
          :table-data="pkData"
          :table-columns-config="tableColumns"
        />
      </el-row>
      <el-row class="row-three">
        <Title title="区县营销" />
        <!-- <el-table
          :data="tableData"
          stripe
          border
          style="width: 100%">
          <el-table-column
            align="center"
            fixed
            prop="county"
            label="区县"
            width="100">
          </el-table-column>
          <el-table-column
            prop="aim"
            label="目标"
            width="80">
          </el-table-column>
          <el-table-column
            prop="number"
            label="数量"
            width="80">
          </el-table-column>
          <el-table-column
            prop="discount"
            label="折算量"
            width="80">
          </el-table-column>
          <el-table-column
            prop="progress"
            label="进度"
            width="80">
          </el-table-column>
          <el-table-column
            prop="score"
            label="得分"
            width="80">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table> -->
        <refactorTable
          :table-data="tableData"
          :table-columns-config="tableColumns2"
        />
      </el-row>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import Title from './components/title'
import refactorTable from './components/refactor_table'
// import qs from 'qs'
// import * as echarts from 'echarts'
import showCharts from '@/api/echart.js'
import request from '@/api/request.js'
import { Loading } from 'element-ui'

export default {
  name: 'App',
  components: {
    Title,
    refactorTable
  },
  data() {
    return {
      // data: '',
      currentTab: 0,
      currentTime: 0,
      selectTab: 'now',
      tableData: [],
      pkData: [],
      mockdata: '',
      tableColumns: [],
      tableColumns2: [],
      titleData: {}
    }
  },
  created() {
    this.getDataList()
    this.getBusi()
    this.getpkData()
  },
  mounted() {
    this.showCharts()
    this.getTime()
  },
  methods: {
    // tableOperateHandle(row,type){
    //     console.log(row,type)
    // },
    handleClick(row) {
      console.log(row)
    },
    changeTab(index, event) {
      this.currentTab = index
      console.log(event)
    },
    getDataList() {
      const data = JSON.stringify({ 'time_class': 'total', 'county_name': '修水', 'phone': '13979282121' })
      request(data, 'score_single.php').then(res => {
        this.mockdata = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    getBusi() {
      const data = JSON.stringify({ 'time_class': 'total', 'county_name': '修水', 'buzi_class': '总计' })
      const loadinginstace = Loading.service({ text: '正在加载中' })
      request(data, 'score_group_var.php')
        .then(response => {
          loadinginstace.close()
          const data = response.data.data
          const title = response.data.title
          for (var i of data) {
            const obj = {}
            for (let j = 0; j < title.length; j++) {
              obj[title[j]] = i[j]
            }
            this.tableData.push(obj)
          }
          for (const key in this.tableData[0]) {
            this.tableColumns2.push({
              prop: key,
              label: key,
              align: 'center'
            })
          }
          this.tableColumns2[0].fixed = 'fixed'
          this.tableColumns2[0].width = '100'
        })
    },
    getpkData() {
      const data = JSON.stringify({ 'time_class': 'total', 'county_name': '修水', 'buzi_class': '宽带' })
      request(data, 'score_pk_var.php')
        .then(response => {
          const data = response.data.data
          const title = response.data.title
          for (var i of data) {
            const obj = {}
            for (let j = 0; j < title.length; j++) {
              obj[title[j]] = i[j]
            }
            this.pkData.push(obj)
            // console.log(i);
          }
          for (const key in this.pkData[0]) {
            this.tableColumns.push({
              prop: key,
              label: key,
              align: 'center'
            })
          }
          console.log(this.tableColumns)
          this.tableColumns[0].fixed = 'fixed'
          this.tableColumns[0].width = '100'
          console.log(this.pkData)
        })
    },
    getTime() {
      const time = new Date()
      this.currentTime = time.getHours() + ':00:00'
    },
    showCharts() {
      showCharts()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 2.6rem !important;
  margin-left: .3rem;
}
.el-input--suffix .el-input__inner {
    padding-right: 0px !important;
}
.el-radio-button__inner{
  padding: 15px 12px !important;
}
.row-one .el-input__inner{
  height: .7rem!important;
}
.row-one .el-input__icon{
  line-height: .7rem!important;
}
.row-one .el-radio-group{
  margin-bottom: 4px!important;
}
body{
  height: auto;
  margin: 0;
  margin-bottom: 0!important;
  /* overflow: hidden; */
}
.box{
  width: 750px;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items:center;
}
.box .el-row{
  width: 750px;
}
/* .row-three{
  height: 100%;
} */
.row-two ul{
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  justify-items: start;
  padding: 10px 6px !important;
  background-color: rgba(204, 204, 204, 0.3);
}
.row-two ul>li{
  width: 23%;
  height: 1.6rem;
  line-height: .5rem;
  box-sizing: border-box;
  border-radius: 20px 20px;
  /* border: 1px black solid; */
  background-color: #FFF;
  padding: 5px 5px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: center;
}
.row-two ul>li div{
  width: 100%;
}
.row-two ul>li .count{
  font-size: .43rem !important;
  color: rgb(56, 199, 151);
}
.row-two ul>li .total{
  color: rgb(226, 90, 48);
}
.row-two ul>.tabActive{
  background-color: #359aff86;
    width: 23%;
  /* height: 30px; */
  line-height: .5rem;
  box-sizing: border-box;
  border-radius: 20px 20px;
    padding: 5px 5px;
  margin-top: 10px;
  /* border: 3px rgba(248, 149, 18, 0.884) solid; */
}
.row-two ul>.tabActive .count{
  color: rgb(255, 115, 0);
}
.row-two ul>.tabActive .total{
  color: tomato;
}
.row-two ul>li .count>span{
  font-size: .3rem !important;
}
.row-five>#showLine{
  height: 5.6rem;
  /* background-color: wheat; */
}
</style>
