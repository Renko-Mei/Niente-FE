<template>
  <div>
    <the-header @sidenavToggle="displaySidenav = !displaySidenav"/>
    <the-side-nav
      :show="displaySidenav"
      @close="displaySidenav = false"/>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader'
import TheSideNav from '@/components/header/TheSideNav'

export default {
  components: {
    TheHeader,
    TheSideNav
  },
  data() {
    return {
      displaySidenav: false,
    }
  }
}
</script>


<style>
html {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: blanchedalmond;
  padding: 0;
  margin: 0;
}
</style>
