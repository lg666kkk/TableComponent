import {message} from 'ant-design-vue'; 
//手机号码验证规则
export function checkPhone(str){
    const reg = /^1(2|3|4|5|6|7|8|9)\d{9}$/
    const off = reg.test(str)
    if(!off){
        message.error({
            content: '手机号码格式验证错误'
        })
    }
    return off
}
//数字和-_验证规则
export function checkTel(str){
    const reg =/^((\d{3,4})|(0\d{2,3})-)?\d{7,8}$/
    const off = reg.test(str)
    if(!off){
        message.error({
            content: '电话号码格式验证错误'
        })
    }
    return off
}
//邮箱验证规则
export function checkMail(str){
    const reg = /^[0-9a-zA-Z.-_]+@[0-9a-zA-Z.-_]+(\.[a-zA-Z]+){1,2}$/
    const off = reg.test(str)
    if(!off){
        message.error({
            content: '邮箱格式验证错误'
        })
    }
    return off
}

//整数验证规则
export function checkNum(str){
    const reg =/^\d*$/
    const off = reg.test(str)
    if(!off){
        message.error('输入格式不是数字')
    }
    return off
}