<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      default-active="activeMenu"
      :collapse="true"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in menu"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      >
      </sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import { GetMenuTree } from '@/api/menu'
import { initMenu } from '@/utils/transMenu'
import { constantRouterMap } from '@/router'
export default {
  data () {
    return {
      menu: {}
    }
  },
  components: { SidebarItem },
  computed: {
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables () {
      return variables
    }
  },
  methods: {
    GetMenuTree () {
      GetMenuTree().then(
        this.GetMenuTreeSucc)
    },
    GetMenuTreeSucc (res) {
      const data = res.data
      if (data.code === 200 && data.data) {
        console.log(data)
        let meunTree = constantRouterMap.concat(
          initMenu(this.$router, data.data.funcNode))
        this.menu = meunTree
      }
    }
  },
  mounted () {
    this.GetMenuTree()
  }
}
</script>

<style>

</style>
