<script setup>
import { ref } from "vue";
import HomePage from "./views/homePage/HomePage.vue";
import AdminDashboard from "./views/dashboard/adminDashboard.vue";
import AuthPage from "./views/Auth/Auth.vue";

const authUser = ref(true);
const userRole = ref("customer");
const activeUser = ()=>{
  let gg = localStorage.getItem('userId')

  
  let ggR = localStorage.getItem('userRole')

  if(gg){    
    authUser.value = !authUser.value; 
    userRole.value = ggR;
  } 

  
}

activeUser();

const updateAuthUser = (act) => {
  authUser.value = !authUser.value;
  userRole.value = act;
  console.log(act);
};
</script>

<template>
  <div class="h-screen">
    <AuthPage v-if="authUser" @update-auth-user="updateAuthUser" />
    <HomePage v-if="!authUser && userRole === 'customer'" />
    <AdminDashboard v-if="!authUser && userRole === 'admin'" />
  </div>
</template>

<style scoped></style>
