<template>
<div>
  <div>hello world</div>
  <p>
    <router-link to="/foo">
      <button> Go to foo</button>
    </router-link>
    <router-link to="/bar">
      <button> Go to bar</button>
    </router-link>
  </p>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'page1',
  methods: {
    goBack () {
      console.log(window.history.length)
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style>

</style>
