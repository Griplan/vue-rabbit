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