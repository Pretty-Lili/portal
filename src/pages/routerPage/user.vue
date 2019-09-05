<template>
  <div>this is user
    <br>
    User {{ $route.params.id }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'User',
  mounted () {
    console.log(this.$router)
  },
  //  复用组件时组件的生命周期钩子不会再被调用，watch (监测变化) $route 对象
  watch: {
    '$route' (to, from) {
      console.log(from.params.id + '--->' + to.params.id)
    }
  },
  //  导航守卫
  beforeRouteUpdate (to, from, next) {
    console.log(from.params.id + '--11->' + to.params.id)
  }
}
</script>

<style>

</style>
