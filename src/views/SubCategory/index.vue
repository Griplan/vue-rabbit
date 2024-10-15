<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import GoodsItem from "../Home/components/GoodsItem.vue";
//获取面包屑导航数据
const route = useRoute();
const cateFilterDataList = ref({}); //根据二级导航id获取数据
async function getCateFilterDataList() {
  cateFilterDataList.value = (
    await getCategoryFilterAPI(route.params.id)
  ).data.result;
}
onMounted(() => {
  getCateFilterDataList();
});

//获取基础列表数据渲染
const subGoodList = ref();
const postData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
async function getSubCategory() {
  subGoodList.value = (
    await getSubCategoryAPI(postData.value)
  ).data.result.items;
}
onMounted(() => {
  getSubCategory();
});

//获取激活标签内容
function tabChange() {
  //console.log("tab切换了", postData.value.sortField);
  postData.value.page = 1;
  getSubCategory();
}

//无限滚动
async function load() {
  //console.log("daodile");
  postData.value.page++;
  const res = await getSubCategoryAPI(postData.value);
  subGoodList.value = [...subGoodList.value, ...res.data.result.items];
  if (res.data.result.items.length === 0) {
    disabled.value = true;
  }
}

//1【】可以这样拼接新老数组，
//2 :infinite-scroll-disabled="disabled" disabled可以是函数也可以是变量

const disabled = ref(false);
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: `/category/${cateFilterDataList.parentId}` }"
          >{{ cateFilterDataList.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ cateFilterDataList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="postData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <GoodsItem
          v-for="goods in subGoodList"
          :key="goods.id"
          :goods="goods"
        ></GoodsItem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
