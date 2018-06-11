<template>
  <div class="header-container">

    <header @mouseover="showHeader = true" @mouseleave="showHeader = false" class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <transition name="el-zoom-in-top">
      <div v-show="showHeader" class="navigation-items">
        <ul class="nav-list">
          <li class="left-blank"></li>
          <li class="nav-item"><nuxt-link to="/articles">Blog</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/">Niente</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/">Commentary</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/">Life</nuxt-link></li>
          <li class="right-blank"></li>
        </ul>
      </div>
    </transition>
    </header>
    
    <transition name="el-fade-in">
      <i v-show="!showHeader" class="el-icon-d-arrow-right"></i>
    </transition>

  </div>
</template>

<script>
import TheSideNavToggle from "@/components/header/TheSideNavToggle";

export default {
  name: "TheHeader",

  data: () => ({
    showHeader: false
  }),

  components: {
    TheSideNavToggle
  },

  methods: {
  }
};
</script>


<style scoped>
.header-container {
  padding: 0;
  height: 80px;
  text-align: center;
}

.the-header {
  width: 100%;
  position: fixed;
  z-index: 100;
  box-sizing: border-box;
  display: flex;
  height: 80px;
}

.el-icon-d-arrow-right {
  position: absolute;
  top: -20px;
  -webkit-transform: scale(1.5, 0.5) rotate(90deg);
  -moz-transform: scale(1.5, 0.5) rotate(90deg);
  -ms-transform: scale(1.5, 0.5) rotate(90deg);
  -o-transform: scale(1.5, 0.5) rotate(90deg);
  transform: scale(1.5, 0.5) rotate(90deg);
  font-size: 5rem;
}

.el-zoom-in-top-leave-active {
  transition: 0.5s;
}

.el-fade-in-leave-active {
  transition: 0s;
}

.el-fade-in-enter-active {
  transition: 2s;
  transition-delay: 3s;
}


.navigation-items {
  width: 100%;
  display: none;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0 20px;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.nav-item a {
  font-size: 18px;
  color: black;
  text-decoration: none;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}
</style>
