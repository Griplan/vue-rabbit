//封装所有和用户相关的函数

import request from '@/utils/http'

export function loginAPI({account,password}){
    return request({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}