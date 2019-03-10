<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput v-model="username" type="username">Username</AppControlInput>
        <AppControlInput v-model="password" type="password">Password</AppControlInput>
        <AppButton type="submit">Login</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  name: "AdminAuthPage",
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      isLogin: true,
      username: "",
      password: "",
      rememberMe: true
    };
  },
  methods: {
    onSubmit() {
      // this.$store.dispatch('login', {
      //   Username: this.username,
      //   Password: this.password,
      //   RememberMe: this.rememberMe
      // })
      // .then(() => {
      //   this.$router.push('/admin/');
      // });
      this.$auth.loginWith("local", {
        data: {
          Username: this.username,
          Password: this.password,
          RememberMe: this.rememberMe
        }
      })
    }
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
