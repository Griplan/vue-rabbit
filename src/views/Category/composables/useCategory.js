
import { onMounted,ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getCategoryAPI } from "@/apis/category";




export function useCategory() {
    const categoryList = ref({});
    const route = useRoute();
    async function getCategory(id = route.params.id) {
        const res = (await getCategoryAPI(id)).data.result;
        categoryList.value = res;
    }

    //另一种方法尝试解决路由跳转时复用问题
    onBeforeRouteUpdate(async (to) => {
    await getCategory(to.params.id);
    });
    
    onMounted(() => {
        getCategory();
    });
    return {
        categoryList
    }
}