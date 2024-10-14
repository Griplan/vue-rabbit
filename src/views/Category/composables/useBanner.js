//轮播图


import { ref, onMounted } from "vue";
import { getBannerAPI } from "@/apis/home";

export function useBanner() {
  const bannerList = ref([]);
  async function getBanner() {
    
    bannerList.value = (
      await getBannerAPI({
        distributionSite: "2",
      })
    ).data.result;//闭包
    //debugger
  }

  onMounted(() => {//多个onMounted怎么先后
    getBanner();
  });
  return {
    bannerList
  }
}