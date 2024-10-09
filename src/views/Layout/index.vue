<template>
  <!-- 二级路由出口 -->
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>

<script setup>
import { onMounted } from "vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import { useCategoryStore } from "@/stores/useHeaderCategory";
onMounted(() => {
  const categoryStore = useCategoryStore();
  categoryStore.getHeaderCategory();
});
</script>

<style scoped></style>
