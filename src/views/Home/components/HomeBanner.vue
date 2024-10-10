<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { getBannerAPI } from "@/apis/layout";

onMounted(() => getBanner()); //挂载时就调用

const bannerList = ref([]);
async function getBanner() {
  bannerList.value = (await getBannerAPI()).data.result;
}
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <img :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
