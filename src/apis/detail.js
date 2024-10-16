import request from '@/utils/http'

export function getGoodsDetailsAPI(id) {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}