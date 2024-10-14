<template>
  <!-- 二级路由出口 -->
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <!-- <RouterView :key="route.fullPath"></RouterView> 加上key解决带路由跳转时候组件会复用问题 -->
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>

<script setup>
/* console.log("layooutindex"); */
import { onMounted } from "vue";
//import { useRoute } from "vue-router";
import LayoutFixed from "./components/LayoutFixed.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import { useCategoryStore } from "@/stores/useHeaderCategory";
onMounted(() => {
  const categoryStore = useCategoryStore();
  categoryStore.getHeaderCategory();
});
//const route = useRoute();
</script>

<style scoped></style>
