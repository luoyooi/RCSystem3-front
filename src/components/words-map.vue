<template>
  <div id="words-map">
    <div id="chartDiv">
      <div ref="myChart"></div>
    </div>
    <div class="btns">
      <el-button round @click="startAnimation">开始动画</el-button>
      <el-button round @click="stopAnimation" :disabled="isStart">停止动画</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'showNum', 'map_title'],
  name: 'words-map',
  data () {
    return {
      isStart: true,
      timer: '',
      dataBackUp: '',
      keys: this.data.keyList.slice(0, this.showNum),
      values: this.data.valueList.slice(0, this.showNum)
    }
  },
  watch: {
    keys () {
      this.init()
    }
  },
  methods: {
    // 停止动画
    stopAnimation () {
      // 停止定时器
      clearInterval(this.timer)
      // 恢复数据
      this.data = this.dataBackUp
      this.keys = this.data.keyList.slice(0, this.showNum)
      this.values = this.data.valueList.slice(0, this.showNum)

      // 禁用停止动画按钮
      this.isStart = true
    },
    // 开始动画
    startAnimation () {
      // 备份原始数据
      this.dataBackUp = JSON.parse(JSON.stringify(this.data))
      this.timer = setInterval(() => {
        this.data.keyList.push(this.data.keyList.shift())
        this.data.valueList.push(this.data.valueList.shift())
        this.keys = this.data.keyList.slice(0, this.showNum)
        this.values = this.data.valueList.slice(0, this.showNum)
      }, 1500)
      // 开启停止动画按钮
      this.isStart = false
    },
    // 初始化
    init () {
      const myChart = this.$refs.myChart
      myChart.style.width = '100%'
      myChart.style.height = '100%'
      this.$echarts.init(myChart).setOption({
        title: {
          show: true,
          text: this.map_title
        },
        grid: {
          left: 70,
          top: 70
        },
        xAxis: {
          type: 'category',
          data: this.keys
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          show: true
        },
        series: [{
          type: 'bar',
          data: this.values,
          itemStyle: {
            color: '#7c3c21'
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          backgroundStyle: {
            color: '#fff'
          }
        }]
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
  #words-map{
    background-color: #ffffdd;
    width: 49%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
  #chartDiv{
    width: 100%;
    height: 350px;
  }
  .btns{
    padding: 0 5px 10px;
  }
</style>
