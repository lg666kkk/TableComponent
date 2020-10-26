module.exports = {
    lintOnSave: false,  
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#1890ff', // 全局主色
                        'link-color': '#1DA57A',    // 链接色
                        'border-radius-base': '2px'  // 组件/浮层圆角
                    },
                    javascriptEnabled: true,
                },
            },
        },
    }
    
}