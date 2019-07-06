<template>
    <div class="header">
       <div class="header-logo">
         <span class="iconfont">&#xe637;</span>
       </div>
       <div class="header-input">
         <span class="iconfont">&#xe6a2;</span>
         <p>搜索文档</p>
       </div>
       <div class="header-info">
         <span class="iconfont">&#xe6aa;</span>
       </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderContainer'
}
</script>

<style scoped="scoped">
  .header{
    font-size: 18px;
    display: flex;
    line-height: 60px;
    background: #25e8cf;
    color: #fff;
    text-align: center;
  }
  .header-logo{
    width: 200px;
    float: left;
  }
  .header-input{
    flex: 1;
    text-align: center;
  }
  .header-info{
    width: 200px;
    float: right;
  }
</style>
