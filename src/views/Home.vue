<template>
  <div class="home">
    <table-component :columns="columns" :list="data"></table-component>
  </div>
</template>

<script>
import TableComponent from "../components/tableComponent/index"

let columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    customRender: (text, record, index) => index + 1,
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: '生日',
    dataIndex: 'birthday',
    key: 'birthday'
  },
  {
    title: '学习',
    dataIndex: 'school',
    key: 'school'
  },
  {
    title: "操作",
    dataIndex: 'operation',
    key: 'operation',
    scopedSlots: { customRender: 'operation' },
  }
]

let data = [
  {
    name: "111",
    age: 90,
    sex: "男",
    school: "dddd",
    birthday: "2222"
  }
]

export default {
  name: 'Home',
  components: {
    TableComponent
  },

  data(){
    return {
      columns,
      data
    }
  },

  methods:{
    next(){
      this.$router.push({name: "About3",query:{title:"子页面",showback:true}})
    }
  }
}
</script>
