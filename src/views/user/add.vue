<template>
  <div>
    <el-select v-model="data">
      <el-option v-for="(value, key) in status"
                 :key="key"
                 :label="value"
                 :value="key"></el-option>
    </el-select>
  </div>
</template>

<script>
import { status } from '../../utils/enum'

export default {
  data() {
    return {
      status,
      data: ''
    }
  }
}
</script>

<style>
</style>