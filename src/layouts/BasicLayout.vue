<template>
<a-layout id="basiclayout">
  <!-- 左侧列表 -->
  <a-layout-sider width="256" v-model="collapsed" :trigger="null" collapsible :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
    <div class="logo">
      <img src="" />
      <h1 v-if="!collapsed">{{ deftitle }}</h1>
    </div>
    <a-menu theme="dark" mode="inline" :selected-keys="[current]" @click="handleMenuClick">
      <template v-for="item in mainMenu">
        <a-menu-item v-if="!item.children" :key="item.name" :title="item.title">
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.name" :menu-info="item" />
      </template>
    </a-menu>
  </a-layout-sider>
  <!-- 右侧内容 -->
  <a-layout :style="{ position: 'relative',marginLeft: collapsed ? '80px' : '256px'}">
    <a-layout-header class="header" :style="{ background: '#fff', padding:'0 24px 0 0' }">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <a-avatar style="backgroundColor:#87d068" icon="user" /> 姓名
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay" @click="handleMenuClick">
          <a-menu-item key="1">
            个人信息
          </a-menu-item>
          <a-menu-item key="2">
            退出登录
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-layout-header>
    <a-layout-content :style="{ margin: '16px', padding: '0 24px', background: '#fff', minHeight: '780px',overflow: 'auto' }">
      <router-view />
    </a-layout-content>
  </a-layout>
</a-layout>
</template>
<script>
  import {
    mapState
  } from 'vuex'
  import {
    Menu
  } from 'ant-design-vue'
  const SubMenu = {
      template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.key" :title="item.title">
            <a-icon type="pie-chart" />
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.key" :menu-info="item" />
        
</template>

      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
}
export default {
  components: {
    'sub-menu': SubMenu,
  },
  data() {
    return {
      collapsed: false,
      current: 'Home',
      deftitle:'合同管理系统',
    }
  },
  computed:{
    ...mapState({
      // 动态主路由
      mainMenu: state =>{ 
        return state.publics.leftMenu
      }
    })
  },
  mounted(){
    console.log('this',this)
  },
  methods:{
    handleMenuClick(e) {
      // console.log('click', e);
      this.current = e.key
      //左侧导航
      this.$router.replace({name: e.key,query:{title:e.item.title}})
    }
  }
};
</script>
