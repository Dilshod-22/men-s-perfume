<script setup>
import { ref } from 'vue';
  let authUser = ref(true);
  // import mainView from "./views/mainView.vue"
  import HomePage from "./views/HomePage.vue";
  import adminDashboard from './views/dashboard/adminDashboard.vue';
  import AuthPage from "./views/Auth.vue";
  const updateAuthUser = (act) => {
    authUser.value = !act;
    console.log(act);
    
  };
</script>

<template>
  <div class="h-screen">
    <AuthPage v-if='authUser' @update-auth-user="updateAuthUser"/>
    
    <!-- <adminDashboard v-if='!authUser'/> -->
    <HomePage v-if='!authUser'/>    
  </div>
</template>

<style scoped>
  
</style>
