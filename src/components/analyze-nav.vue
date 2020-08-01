<template>
  <div class="top">
    <div class="level" v-for="(value, key, index) in levels" :key="index">
      <span><i class="el-icon-coffee"></i>{{key}}</span>
      <span>{{value}}(≈{{getProportion(value)}}%)</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rcmdMap'],
  name: 'analyze-nav',
  data () {
    return {
      levels: {}
    }
  },
  methods: {
    getProportion (num) {
      return Math.round(1000 * num / (this.levels['力荐'] + this.levels['推荐'] + this.levels['还行'] + this.levels['较差'] + this.levels['很差'])) / 10
    }
  },
  mounted () {
    const demo = {}
    this.rcmdMap['力荐'] !== undefined ? demo['力荐'] = this.rcmdMap['力荐'] : demo['力荐'] = 0
    this.rcmdMap['推荐'] !== undefined ? demo['推荐'] = this.rcmdMap['推荐'] : demo['推荐'] = 0
    this.rcmdMap['还行'] !== undefined ? demo['还行'] = this.rcmdMap['还行'] : demo['还行'] = 0
    this.rcmdMap['较差'] !== undefined ? demo['较差'] = this.rcmdMap['较差'] : demo['较差'] = 0
    this.rcmdMap['很差'] !== undefined ? demo['很差'] = this.rcmdMap['很差'] : demo['很差'] = 0
    this.levels = demo
  }
}
</script>

<style lang="less" scoped>
  .top{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    width: 100%;
    margin: 10px 0;
    box-sizing: border-box;
    background-color: #f6f4e6;
    padding: 10px 5px;
    .level{
      width: 24%;
      height: 50px;
      margin: 0 10px;
      padding: 7px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      transition: all .8s;
      &:nth-of-type(-n + 2){
        background-color: #fe346e;
        span:nth-of-type(2){
          color: white;
        }
      }
      &:nth-of-type(3){
        background-color: #5b8c85;
        span:nth-of-type(2){
          color: white;
        }
      }
      &:nth-of-type(n + 4){
        background-color: #8f8290;
        span:nth-of-type(2){
          color: white;
        }
      }
      span{
        &:nth-of-type(1){
          font-size: 20px;
        }
        &:nth-of-type(2){
          font-size: 20px;
        }
      }
      &:hover{
        transform: scale(1.05);
        font-size: 22px;
      }
    }
  }
</style>
