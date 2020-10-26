<template>
  <div>
    <a-layout :style="{ position: 'relative'}" >
      <a-layout-header class="header"
        :style="{ background: '#fff', padding: 0 }"
      >
        <h2>{{title}}</h2>
        <a-icon type="rollback" v-if="showback" :style="{ fontSize: '28px'}" @click="goback"/>
      </a-layout-header>
      <a-layout-content :style="{ background: '#fff',height:'780px', minHeight: '654px',overflow: 'auto' }" >
        <slot>
          <!-- keep-alive  -->
          <keep-alive v-if="keepAlive">
            <router-view />
          </keep-alive>
          <router-view v-else />
        </slot>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'PageView',
  components: {},
  data () {
    return {
      keepAlive:true,
      title:'fff'
    }
  },
  computed: {
    showback(){
      return this.$route.query.showback
    }
  },
  watch:{
    '$route'(value){
      console.log('value',value)
      this.keepAlive = value.query.keepAlive || false
      this.title = value.query.title
    },
  },
  mounted () {
    this.keepAlive = this.$route.query.keepAlive
    this.title = this.$route.query.title
  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>
