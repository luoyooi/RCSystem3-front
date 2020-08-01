<template>
  <header id="main-top">
    <div id="introduction">
      <img src="../assets/img/logo.png" alt="logo">
      <div>
        <h1>Recommendation system 3</h1>
        <span>Committed to solving the tedious problem of reading comments.</span>
      </div>
    </div>
    <div id="author">
      <p>作者: luoyooi</p>
      <p>CSDN: luoyooi</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'main-top'
}
</script>

<style lang="less" scoped>
  header{
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    background-color: skyblue;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    #introduction{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      img{
        width: 50px;
        height: 50px;
      }
      div{
        padding: 0 10px;
        h1{
          font-size: 28px;
        }
        span{
          font-size: 13px;
          margin-left: 40px;
          color: #666;
        }
      }
    }
    #author{
      padding: 5px;
      margin-right: 10px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      font-size: 15px;
    }
  }
</style>
