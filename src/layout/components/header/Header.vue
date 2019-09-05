<template>
  <div>
    <top-bar></top-bar>
    <page-header></page-header>
  </div>
</template>
<script>
import TopBar from './TopBar'
import PageHeader from './PageHeader'
export default {
  name: 'HeaderContainer',
  components: {
    TopBar,
    PageHeader
  }
}
</script>

<style scoped="scoped">

</style>
