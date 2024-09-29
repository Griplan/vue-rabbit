<template>
  <RouterView></RouterView>
  <div class="test">试一下var.scss能否正常工作</div>
</template>

<script setup></script>

<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
