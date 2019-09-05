<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        default-active="3"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航一</span>
          </template>
          <el-submenu index="1-1">
            <template slot="title">选项1</template>
            <el-menu-item index="1-1-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">选项2</template>
            <el-menu-item index="1-2-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="1-3">
            <template slot="title">选项3</template>
            <el-menu-item index="1-3-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'AsideContainer',
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      this.$router.push('/table')
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

</style>
