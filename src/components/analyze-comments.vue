<template>
    <div id="comments">
      <h3>用户评论<span>(共{{comments.length}}条)</span></h3>
      <div class="comment" v-for="item in showComments" :key="item.id">
        <div class="info">
          <p>时间: <span>{{item.comment_time}}</span></p>
          <p>推荐等级: <span>{{item.recommend_level}}</span></p>
          <p>有用: <span>{{item.votes}}</span></p>
        </div>
        <p class="content">{{item.comment}}</p>
      </div>
      <p class="loading" @click="load">{{showText}}</p>
    </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'comments',
  data () {
    return {
      baseShow: 10, // 每次增加10个
      showNum: 10, // 初始显示10个
      comments: [],
      showComments: [],
      showText: '加载更多>>'
    }
  },
  methods: {
    load () {
      // 如果原始数组多于展示的数组，每次展示baseShow个
      if (this.comments.length - this.showComments.length > 0) {
        this.showNum += this.baseShow
        this.showComments = this.comments.slice(0, this.showNum)
      } else {
        this.showText = '已经到底了...'
      }
    }
  },
  mounted () {
    this.$http.get('/comments/' + this.id).then(res => {
      this.comments = res.data
      this.showComments = this.comments.slice(0, this.showNum)
    })
  }
}
</script>

<style lang="less" scoped>
  #comments{
    background-color: #f6f4e6;
    margin: 10px 0;
    padding: 10px;
    h3{
      font-size: 18px;
      margin: 5px 0;
      padding: 0 0 0 5px;
      vertical-align: middle;
      span{
        padding: 0 5px;
        font-size: 15px;
        color: #666;
      }
    }
  }
  .comment{
    margin-top: 15px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    &::before{
      /*解决外边距重叠问题*/
      content: '';
      display: table;
    }
  }
  .info{
    padding: 5px 0;
    background-color: #b9ac92;
    /*清除浮动*/
    &::before,
    &::after{
      content: '';
      display: table;
      clear: both;
    }
    p{
      float: left;
      color: #3b2e5a;
      font-weight: bold;
      font-size: 15px;
      &:nth-of-type(1){
        margin-left: 5px;
      }
      &:nth-of-type(n+2){
        margin-left: 20px;
      }
    }
  }
  .content{
    background-color: #e7dfd5;
    font-size: 14px;
    line-height: 25px;
    padding: 5px 10px;
  }
  .loading{
    text-align: center;
    cursor: pointer;
    padding: 10px 0 0;
    font-style: italic;
  }
</style>
