<template>
  <el-aside :width="isCollapse ? '64px' : '300px'">
    <div class="btn-collpase"
         @click="isCollapse = !isCollapse">{{ isCollapse ? '展开' : '折叠' }}</div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu router
               unique-opened
               :collapse="isCollapse"
               :collapse-transition="false"
               :default-active="$route.path">
        <el-menu-item index="/">
          <svg-icon icon-class="home"></svg-icon>
          <span slot="title">首页</span>
        </el-menu-item>
        <sidebar-item v-for="(menu, index) in menu"
                      :key="index"
                      :item="menu" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import sidebarItem from './slidebarItem'
import { mapGetters } from 'vuex'

export default {
  name: 'sidebar',

  components: {
    sidebarItem
  },

  data() {
    return {
      isCollapse: false
    }
  },

  computed: {
    ...mapGetters({
      menu: 'menu'
    })
  }
}
</script>

<style lang="less" scoped>
.el-aside {
  // box-sizing: border-box;
  display: flex;
  flex-direction: column;
  // background: #a0cfff;

  .btn-collpase {
    height: 30px;
    line-height: 30px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    background: #a0cfff;
  }

  .el-scrollbar {
    flex: 1;

    /deep/.el-scrollbar__wrap {
      overflow: auto;
    }

    /deep/.scrollbar-wrapper {
      overflow-x: hidden !important;
    }

    /deep/.el-scrollbar__bar.is-vertical {
      right: 0px;
    }

    /deep/.el-scrollbar__bar.is-horizontal {
      display: none;
    }
  }

  .el-menu {
    border: 0 none;
    max-width: 300px;
  }
}
</style>