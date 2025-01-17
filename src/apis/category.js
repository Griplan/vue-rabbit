import request from '@/utils/http'

export function getCategoryAPI(id) {
    return request({
        url: '/category',
        params:{
            id,
        }
    })
}

export function getCategoryFilterAPI(id) {//获取面包屑二级导航
    return request({
        url: '/category/sub/filter',
        params: {
            id,
        }
    })
}


export function getSubCategoryAPI(data) {
    return request({
        url: '/category/goods/temporary',
        method: 'POST',
        data
    })
}
/* export const getCategoryFilterAPI = (id) => {
  return request({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
} */