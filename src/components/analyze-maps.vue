<template>
  <div id="analyze-maps">
    <wordsMap :data="analyzeInfo.adjMap" showNum="8" map_title="重点词汇出现次数排名（形容词）"></wordsMap>
    <wordsMap :data="analyzeInfo.idiom" showNum="5" map_title="重点词汇出现次数排名（成语）"></wordsMap>
    <wordsMap :data="analyzeInfo.verbMap" showNum="8" map_title="重点词汇出现次数排名（动词）"></wordsMap>
    <wordsMap :data="analyzeInfo.nounMap" showNum="8" map_title="重点词汇出现次数排名（名词）"></wordsMap>
  </div>
</template>

<script>
import wordsMap from './words-map'
export default {
  props: ['analyzeInfo'],
  name: 'analyze-maps',
  components: { wordsMap }
}
</script>

<style lang="less" scoped>
  #analyze-maps{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content: center;
    box-sizing: border-box;
    background-color: #f6f4e6;
    padding: 10px 5px;
  }
</style>
