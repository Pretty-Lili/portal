<template>
  <div>
    <top-bar></top-bar>
    <!-- <menu-con></menu-con> -->
    <page-header></page-header>
  </div>
</template>
<script>
import TopBar from './TopBar'
import PageHeader from './PageHeader'
import MenuCon from './Menu'
export default {
  name: 'HeaderContainer',
  components: {
    TopBar,
    PageHeader,
    MenuCon
  }
}
</script>

<style scoped="scoped">

</style>
