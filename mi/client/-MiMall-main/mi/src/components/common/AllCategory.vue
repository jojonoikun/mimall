<!--
 * @Author: JOJOcode
 * @Date: 2022-12-07 12:00:26
 * @LastEditTime: 2022-12-08 14:03:49
 * @FilePath: \client\-MiMall-main\mi\src\components\common\AllCategory.vue
-->
<template>
  <div>
    <div
      class="allCategory"
      @mouseenter="showCategoryTrue"
      @mouseleave="showCategoryFalse"
    >
      <div class="text">全部商品分类</div>
      <div class="header" v-if="showCategory">
        <CategoryList2 />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryList2 from "./CategoryList2.vue";
export default {
  data() {
    return {
      showCategory: false,
    };
  },
  methods: {
    showCategoryTrue() {
      this.showCategory = true;
    },
    showCategoryFalse() {
      this.showCategory = false;
    },
  },
  components: {
    CategoryList2,
  },
};
</script>

<style lang="scss" scoped>
.allCategory {
  position: absolute;
  width: 127px;
  height: 88px;
  top: 75px;
  left: 510px;
  cursor: pointer;

  .text {
    z-index: 100;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-family: "Helvetica Neue";
    position: absolute;
    top: -1px;
    left: -55px;
    width: 96px;
    height: 70px;
  }

  .header {
    width: 234px;
    position: absolute;
    top: 65px;
    left: -100px;
  }
}
</style>
