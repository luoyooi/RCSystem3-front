<template>
    <div id="main-page">
      <mainTop></mainTop>
      <mainMid v-if="showItems" @midViewChange="midViewChange($event)"></mainMid>
      <analyze :movie="analyzeMovie" v-if="!showItems" @backToItems="showItems=true"></analyze>
    </div>
</template>

<script>
import mainTop from './main-top'
import mainMid from './main-mid'
import analyze from './analyze'
export default {
  name: 'main-page',
  data () {
    return {
      showItems: true,
      analyzeMovie: ''
    }
  },
  methods: {
    midViewChange (movie) {
      // 展示数据分析界面
      this.showItems = false
      this.analyzeMovie = movie
    }
  },
  components: {
    mainTop, mainMid, analyze
  }
}
</script>
