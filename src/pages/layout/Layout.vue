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

<style scoped>
  #app > .el-container{
    height: 100%;
  }
  .el-header{
    background: #003c78;
    height: auto !important;
    padding: 0;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 40px;
    position: fixed;
    width: 100%;
    bottom: 0px;
    height: 40px !important;
  }
  .el-main {
    color: #333;
    padding: 14px;
    height: 100%;
  }
  .el-main>div {
    min-height: 100%;
    background-color: #ffffff;
    box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.13);
  }
  .main-warp{
    height: calc(100% - 40px);
    background-color: #f9f9f9;
  }
</style>
