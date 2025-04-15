<script>
import panelVueInfo from "../../components/infoPanel.vue";
import sideBar from "../../components/sideBar.vue";
import productList from "../../components/productList.vue"
import { RouterView } from "vue-router";
export default {
  components: {
    panelVueInfo,
    sideBar,
    productList
  },
};
</script>

<template>
  <div class="flex border shadow-sm rounded-xl overflow-hidden w-[1440px] mx-auto">
    <!-- Sidebar -->
    <sideBar class="fixed"/>

    <!-- Main Panel -->
    <div class="flex-1 p-6 bg-gray-50 ml-64">
      <panelVueInfo class="mb-5"/>
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
/* You can add custom styling here if needed */
</style>
