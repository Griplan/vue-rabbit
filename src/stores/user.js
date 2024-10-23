//管理用户数据相关

import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";

/* export function useUserStore() {
    defineStore('user', () => {
        const userInfo = ref({});
        async function getUserInfo({account,password}) {
            const res = await loginAPI({ account, password });
            userInfo.value = res.result;
        }
        return {
            userInfo,
            getUserInfo
        }
    })
} */

export const useUserStore = defineStore('user', () => {
    //定义管理用户数据的state
    const userInfo = ref({});
    //定义获取接口数据的action函数
    const getUserInfo=async ({ account, password }) => {
        const res = await loginAPI({ account, password });
        userInfo.value = res.result;
    }
    //以对象形式把state和action return出去
    return {
        userInfo,
        getUserInfo
    }
}, {
    persist: true,
},
)
  