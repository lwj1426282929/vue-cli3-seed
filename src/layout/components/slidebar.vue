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
        <sidebar-item v-for="(menu, index) in menus"
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
      menus: 'menus'
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
  border-right: 1px solid;

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

  /deep/ .el-menu--collapse > div > .el-submenu > .el-submenu__title span {
    display: none;
  }

  /deep/
    .el-menu--collapse
    > div
    > .el-submenu
    > .el-submenu__title
    .el-submenu__icon-arrow {
    display: none;
  }

  /deep/.el-submenu > .el-submenu__title .el-submenu__icon-arrow {
    right: 20px;
  }
}
</style>