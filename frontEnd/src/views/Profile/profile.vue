<template>
  <div class="container mx-auto px-4 py-6 max-w-6xl">
    <!-- User Header -->
    <h1 class="text-3xl font-bold mb-6">Mahammadjonov Dilshodbek</h1>

    <!-- Sidebar Navigation -->
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-48">
        <ul class="space-y-4 flex flex-col items-start">
          <li>
            <button 
              class="px-5 py-2 rounded-md w-40 transition" 
              :class="activeBar === 'orders' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
              @click="changeActiveVar('orders')"
            >
              Buyurtmalar
            </button>
          </li>
          <li>
            <button
              class="px-5 py-2 rounded-md w-40 transition"
              :class="activeBar === 'profile' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
              @click="changeActiveVar('profile')"
            >
              Malumotlarim
            </button>
          </li>
        </ul>
      </div>

      <!-- Content Section -->
      <div class="flex-1">
        <orderCard v-if="activeBar === 'orders'" />
        <profielinfo v-if="activeBar === 'profile'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import orderCard from "./orders.vue"
import profielinfo from "./profielinfo.vue"
import { ref } from "vue"

const activeBar = ref("orders");

const changeActiveVar = (itemChange) => {
  activeBar.value = itemChange;
}
</script>

<style scoped>

</style>