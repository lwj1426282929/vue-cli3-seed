<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container class="warp">
      <slidebar />
      <el-container>
        <el-main>
          <nav-bar></nav-bar>
          <router-view class="page" />
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

    .page {
      margin-top: 20px;
      flex: 1;
      border-radius: 5px;
      background: #a0cfff;
    }
  }
}
</style>