<!--
 * @Author: JOJOcode
 * @Date: 2022-12-07 12:00:26
 * @LastEditTime: 2022-12-07 17:01:14
 * @FilePath: \client\-MiMall-main\mi\src\components\NavHeader.vue
-->
<!--
 * @Author: JOJOcode
 * @Date: 2022-12-07 12:00:26
 * @LastEditTime: 2022-12-07 16:57:01
 * @FilePath: \client\-MiMall-main\mi\src\components\NavHeader.vue
-->
<template>
  <div>
    <Topbar />
    <!-- <HeaderProduct /> -->
  </div>
</template>
<script>
import Topbar from "./header/Topbar";
// import HeaderProduct from "./header/HeaderProduct";
export default {
  name: "nav-header",
  data() {
    return {};
  },
  methods: {},
  components: {
    Topbar,
    // HeaderProduct,
  },
};
</script>

<style lang="scss" scoped></style>
