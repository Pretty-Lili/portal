<template>
<div class="topBar-wrapper">
  <div class="topBar-logo">
    <img src="@/assets/logo_sp.png" class="logo"/>
    <p>计量生产管理平台</p>
  </div>
  <div class="topBar-menu menu-btn" style="flex: 1;">
    <i class="el-icon-s-home">
      <span>首页</span>
    </i>
    <i class="el-icon-star-on">
      <span>收藏</span>
    </i>
  </div>
  <div class="topBar-menu">
    <el-input size="mini" v-show="inputShow" placeholder="请输入内容"></el-input>
    <i class="el-icon-search" @click="inputShowClick"></i>
    <li>2019年7月31号</li>
    <li>星期三</li>
    <el-badge :value="12" class="item">
      <i class="el-icon-message"></i>
    </el-badge>
    <i class="el-icon-user-solid">测试</i>
    <li>退出</li>
  </div>
</div>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      inputShow: false
    }
  },
  methods: {
    inputShowClick () {
      this.inputShow = !this.inputShow
    }
  }
}
</script>

<style scoped>
  .topBar-wrapper{
    color: #ffffff;
    display: flex;
    padding: 0 20px;
  }
  .topBar-wrapper p{
    display: inline-block;
    height: 60px;
    vertical-align: top;
    line-height: 60px;
    font-size: 20px;
  }
  .topBar-logo{
    width: 400px;
  }
  img.logo{
    background-repeat: no-repeat;
    margin-top: 5px;
  }
  .topBar-menu > *{
    margin-left: 15px;
    margin-top: 22px;
    cursor: pointer;
  }
  .topBar-menu > .el-badge{
    margin-top: 0;
  }
  .topBar-menu:last-child{
    text-align: right;
    width: 600px;
  }
  li{
    display: inline-block;
  }
  .topBar-menu > .el-input{
    width: 180px;
    margin: 0;
    position: absolute;
    top: 18px;
    right: 400px;
  }
  .el-icon-search{
    margin: 0;
  }
  .menu-btn i{
    font-size: 22px;
  }
  .menu-btn>i>span{
    font-size: 18px;
  }
</style>
