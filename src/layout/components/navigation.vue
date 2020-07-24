<template>
  <el-header class="flex-ce-bet">
    <h1 class="logo">
      <router-link :to="{ name: 'home' }">系统名</router-link>
    </h1>
    <el-dropdown trigger="click">
      <div class="user flex-ce-bet">
        <el-avatar :src="user.avatar">{{ user.name }}</el-avatar>
        <span class="user-name">{{ user.name }}</span>
      </div>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <svg-icon icon-class="password"></svg-icon>
          修改密码
        </el-dropdown-item>
        <el-dropdown-item>
          <svg-icon icon-class="exist"></svg-icon>
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navigation',

  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>

<style lang="less" scoped>
.el-header {
  line-height: 60px;
  background: #333;
  color: #fff;
  padding: 0 50px;

  .user {
    cursor: pointer;

    .user-name {
      margin-left: 10px;
      font-size: 14px;
    }
  }
}
</style>