<template>
    <div id="analyze">
      <el-button @click="$emit('backToItems')" type="primary" icon="el-icon-caret-left" circle></el-button>
      <h2 id="analyze-title">《{{movie.title}}》</h2>
      <analyzeNav :rcmdMap="movie.analyze.rcmdMap"></analyzeNav>
      <analyzeMaps :analyzeInfo="movie.analyze"></analyzeMaps>
      <analyzeComments :id="movie.id"></analyzeComments>
    </div>
</template>

<script>
import analyzeNav from './analyze-nav'
import analyzeMaps from './analyze-maps'
import analyzeComments from './analyze-comments'
export default {
  props: ['movie'],
  name: 'analyze',
  components: { analyzeNav, analyzeMaps, analyzeComments }
}
</script>

<style lang="less" scoped>
  #analyze{
    width: 80%;
    margin: 30px auto;
    padding: 10px;
    box-sizing: border-box;
    border-left: 1px solid black;
  }

  #analyze-title{
    margin: 10px 0;
    text-align: center;
    font-size: 22px;
  }


</style>
