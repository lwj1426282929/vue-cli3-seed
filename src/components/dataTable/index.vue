<template>
  <div>
    <el-table :data="data">
      <slot></slot>
    </el-table>
    <el-pagenation></el-pagenation>
  </div>
</template>

<script>
export default {
  name: 'dataTable',

  props: {
    fetchMethod: Function,
    params: Object
  },

  data() {
    return {
      data: []
    }
  },

  watch: {
    params: {
      handler() {
        if (this.fetchMethod) this.fetchMethod()
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
</style>