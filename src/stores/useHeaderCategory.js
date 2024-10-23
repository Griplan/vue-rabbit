import { getCategoryAPI } from "@/apis/layout.js";
import { ref } from "vue";
import { defineStore } from 'pinia'




// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useCategoryStore = defineStore('category', ()=>{
    const categoryList = ref([]);
    async function getHeaderCategory() {
        categoryList.value = (await getCategoryAPI()).result;
        //console.log("store存储好了",categoryList.value);
    }
    return {
        categoryList,
        getHeaderCategory
    }
})