<template>
  <div>{{ time }}</div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'home',

  data() {
    return {
      time: ''
    }
  },

  created() {
    setInterval(() => {
      this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    })
  }
}
</script>

<style>
</style>