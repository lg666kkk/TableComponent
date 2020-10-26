<template>
  <div class="table">
    <a-table
      :columns="columns"
      :data-source="list"
      :pagination="pagination"
      class="table"
      :rowKey="(row) => row.id"
    >
      <div slot="operation" slot-scope="text, record, index">
        <a-button type="link">编辑</a-button>
        <a-button type="link">删除</a-button>
      </div>
    </a-table>
  </div>
</template>

<script>
import { Table } from "ant-design-vue"
import Vue from "vue"
Vue.use(Table)

export default {
  name: '',
  props: {
    columns: {
      type: Array
    },
    pagination: {
      type: Object
    },
    list: {
      type: Array
    }
  },

  data(){
    return {
      //list: []
    }
  },

  created() {
    this.requestList()
  },

  mounted() {
    this.createElem()
  },

  methods: {
    // --------------------------- 事件 --------------------------

    // --------------------------- 方法 --------------------------
    createElem () {
      // 动态创建slot标签在table下
    },
    // --------------------------- 接口 --------------------------
    requestList () {

    }
    // --------------------------- 回调 --------------------------
  },
}
</script>

<style scoped>

</style>
