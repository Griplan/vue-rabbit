<script setup>
/* console.log("homeindex"); */
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import homeProduct from "./components/HomeProduct.vue";
import HomePannal from "./components/HomePannal.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomePannal title="新鲜好物" subtitle="好新好新好新"></HomePannal>
  <HomePannal title="人气推荐" subtitle="我推我推我推"></HomePannal>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>
