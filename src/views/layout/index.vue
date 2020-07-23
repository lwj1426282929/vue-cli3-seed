<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container class="warp">
      <slidebar />
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import slidebar from './components/slidebar'

export default {
  name: 'layout',

  components: {
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
}
</style>