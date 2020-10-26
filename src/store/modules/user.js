import {ACCESS_TOKEN} from '@/plugins/axios'
const user = {
    namespaced: true,
    state: {
      
    },
    mutations: {
      
    },
    actions: {
        // 登录
        Login({ commit }, userInfo) {
            localStorage.setItem(ACCESS_TOKEN,7 * 24 * 60 * 60 * 1000)
            console.log('commit',commit)
            console.log('userInfo',userInfo)
        },
        // 获取用户信息
        GetInfo({ commit }) {
            console.log('commit',commit)
        },

        // 登出
        Logout({ commit, state }) {
            console.log('commit',commit)
            console.log('state',state)
        }
    }
}

export default user