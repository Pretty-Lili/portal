<template>
  <el-container>
    <el-header>
      <header-container></header-container>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <aside-container></aside-container>
      </el-aside>
      <el-container class="main-warp">
        <el-main>
          <main-container></main-container>
        </el-main>
        <el-footer>
         <footer-container></footer-container>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { HeaderContainer, AsideContainer, MainContainer, FooterContainer } from './components'
export default {
  name: 'Layout',
  components: {
    HeaderContainer,
    AsideContainer,
    MainContainer,
    FooterContainer
  }
}
</script>

<style>
  #app > .el-container{
    height: 100%;
  }
  .el-header{
    background: #25e8cf;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    position: fixed;
    width: 100%;
    bottom: 0px;
    height: 40px !important;
  }
  .el-aside {
    text-align: center;
    background-color: #D3DCE6;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 160px;
    overflow-y: scroll;
  }
  .main-warp{
    height: calc(100% - 40px);
  }
</style>
