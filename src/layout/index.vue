<template>
  <el-container direction="vertical">
    <navigation />
    <el-container class="warp">
      <slidebar />
      <el-main>
        <breadcrumb v-show="$route.meta.title"></breadcrumb>
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <router-view class="page" />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import navigation from './components/navigation'
import slidebar from './components/slidebar'
import breadcrumb from './components/breadcrumb'

export default {
  name: 'layout',

  components: {
    navigation,
    slidebar,
    breadcrumb
  }
}
</script>

<style lang="less" scoped>
.warp {
  height: calc(100vh - 60px);

  .el-main {
    display: flex;
    flex-direction: column;

    & > .el-scrollbar {
      flex: 1;
      background: #fafafa;

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