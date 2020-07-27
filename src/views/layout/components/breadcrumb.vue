<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="item in breadcrumbList"
                        :key="item.path"
                        :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb',

  data() {
    return {
      breadcrumbList: []
    }
  },

  watch: {
    $route: {
      handler() {
        this.getBreadcrumb()
      },
      immediate: true
    }
  },

  methods: {
    getBreadcrumb() {
      const matched = this.$route.matched.filter(item => item.name)
      this.breadcrumbList = matched
    }
  }
}
</script>

<style lang="less" scoped>
.el-breadcrumb {
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 10px;
    background: #fafafa;
}
</style>