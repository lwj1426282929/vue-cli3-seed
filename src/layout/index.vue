<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container class="warp">
      <slidebar />
      <el-container>
        <el-main>
          <nav-bar v-if="$route.meta.title"></nav-bar>
          <el-scrollbar wrap-class="scrollbar-wrapper">
            <router-view class="page" />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import navBar from './components/navBar'
import slidebar from './components/slidebar'

export default {
  name: 'layout',

  components: {
    navBar,
    slidebar
  }
}
</script>

<style lang="less" scoped>
.el-header {
  height: 60px;
  background: #333;
  line-height: 60px;
  padding: 0 100px;
  color: #fff;
}

.warp {
  height: calc(100vh - 60px);

  .el-aside {
    height: 100%;
  }

  .el-main {
    display: flex;
    flex-direction: column;

    & > .el-scrollbar {
      flex: 1;
      // background: #a0cfff;
      border-radius: 5px;

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

    .page {
      padding: 5px;
    }
  }
}
</style>