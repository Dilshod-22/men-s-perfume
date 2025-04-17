<template>
  <div class="app flex w-[1200px]">
    <!-- Only show navbar if current route starts with /admin -->
     <div class="pt-5">
      <navbarDesign v-if="!showNavbar" class="fixed w-[1160px]"/>
     </div>
    
    <!-- Render the current route view -->
    <router-view class="mt-32 w-full"/>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import navbarDesign from '../navbar.vue';
import "./homePage.css"

const route = useRoute();

const showNavbar = computed(() => {
  return route.path.startsWith('/DashKT');
});
</script>

<style>
</style>