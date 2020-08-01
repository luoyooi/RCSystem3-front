<template>
  <div id="main-mid">
    <div class="movie-items">
      <a href="#" @click="$emit('midViewChange', item)" class="movie-item" v-for="item in moviesShow" :key="item.id">
        <img :src="item.cover" alt="poster">
        <p class="scores">
          <span><i class="el-icon-coin">综合:</i>{{item.score}}</span>
          <span><i class="el-icon-potato-strips">豆瓣:</i>{{item.rate}}</span>
        </p>
        <p class="title">{{item.title}}</p>
      </a>
    </div>
    <a id="more" href="#" @click="showMore">{{moreText}}</a>
  </div>
</template>

<script>
export default {
  name: 'main-mid',
  data () {
    return {
      moreText: '更多>>',
      movies: '',
      moviesShow: '',
      clicked: false
    }
  },
  methods: {
    showMore () {
      if (!this.clicked) {
        this.moviesShow = this.movies
        this.moreText = '收起<<'
        this.clicked = !this.clicked
      } else {
        this.moviesShow = this.movies.slice(0, 5)
        this.moreText = '更多>>'
        this.clicked = !this.clicked
      }
    }
  },
  mounted () {
    this.$http.get('/analyze').then(res => {
      this.movies = res.data
      this.moviesShow = this.movies.slice(0, 5)
    })
  }
}
</script>

<style lang="less" scoped>
  #main-mid{
    width: 80%;
    margin: 30px auto;
    padding: 10px;
  }

  #more{
    margin-right: 5px;
    float: right;
    color: #666;
  }

  .movie-items{
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding: 10px;
    border-left: 1px solid #00005c;
  }

  .movie-item{
    box-sizing: border-box;
    background-color: #e4e4e4;
    width: 18.2%;
    text-align: center;
    display: block;
    padding: 5px;
    margin: 10.5px;
    border-radius: 30px 0 30px 0;
    position: relative;
    color: #30475e;

    .scores{
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      padding: 6px 0;
      span{
        padding: 0 5px;
        &:nth-of-type(1){
          background-color: #fff;
        }
        &:nth-of-type(2){
          background-color: #cceabb;
        }
      }
    }

    .title{
      font-size: 16px;
      padding: 5px 0;
    }

    img{
      width: 95%;
      height: 275px;
      border-radius: 30px 0 30px 0;
    }
  }

</style>
