<template>
  <div>
    <nav-header></nav-header>
    <HeaderProduct />
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from "../components/NavHeader";
import HeaderProduct from "../../src/components/header/HeaderProduct.vue";
import NavFooter from "../components/NavFooter";
export default {
  name: "nav-home",
  components: {
    NavHeader,
    HeaderProduct,
    NavFooter,
  },
  mounted() {},
  methods: {},
};
</script>
