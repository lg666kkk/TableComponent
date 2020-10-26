<template>
<div id="userLayout" class="user-layout-wrapper">
  <a-layout class="container">
    <a-layout-header class="header">
      <a href="/">
        <img src="" class="logo" alt="logo">
      </a>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>
    <a-layout-footer>
    </a-layout-footer>
  </a-layout>
</div>
</template>

<script>
export default {
  name: 'UserLayout',
  data() {
    return {}
  },
  mounted() {
    document.body.classList.add('userLayout')
  },
  beforeDestroy() {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>
  
</style>
