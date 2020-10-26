const user = {
    namespaced: true,
    state: {
        leftMenu:[
            {title:'首页',name:'Home',mId:1, icon:'home'},
            {title:'表格页',name:'About1',mId:2, icon:'search'},
            {title:'tab页2',name:'About2',mId:3, icon:'search'},
            {title:'tab页3',name:'About3',mId:4, icon:'search'}
        ]
    },
    mutations: {
      
    },
    actions: {
        // 获取左侧列表
        getLeftMenu({ commit }, data) {
            console.log('commit',commit)
            console.log('data',data)
        }
    }
}

export default user