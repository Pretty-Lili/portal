<template>
  <div>
    <top-bar></top-bar>
    <menu-list></menu-list>
    <page-header></page-header>
  </div>
</template>
<script>
import TopBar from './TopBar'
import MenuList from './Menu'
import PageHeader from './PageHeader'
export default {
  name: 'HeaderContainer',
  components: {
    TopBar,
    MenuList,
    PageHeader
  }
}
</script>

<style scoped="scoped">

</style>
