<template>
  <div>用户列表</div>
</template>

<script>
import { getUserList } from '@/service/user'

export default {
  name: 'userList',

  data() {
    return {}
  },

  created() {
    getUserList({ key: 'value' }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style>
</style>