<template>
  <div>
    <el-form>
      <el-form-item label="账号">
        <el-input v-model="form.acount"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"
                  type="password"></el-input>
      </el-form-item>
      <el-button @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      form: {}
    }
  },

  methods: {
    // 登录
    login() {
      let token = '123456789'
      this.$store.commit('SET_TOKEN', token)
      this.$router.push({ path: this.$route.query.redirect || '/' })
    }
  }
}
</script>

<style>
</style>