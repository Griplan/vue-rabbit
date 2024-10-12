import httpInstance from "@/utils/http";

//获取轮播图数据
export function getBannerAPI() {
    return httpInstance({
        url:'/home/banner'
    })
}

//获取新鲜好物
export function getNewAPI() {
    return httpInstance({
        url:'/home/new'
    })
}

//获取人气推荐
export function getHotAPI() {
    return httpInstance({
        url:'/home/hot'
    })
}

//获取商品列表
export function getGoodsAPI() {
    return httpInstance({
        url:'/home/goods'
    })
}