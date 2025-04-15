<template>
  <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 w-full gap-5">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="bg-white shadow-sm rounded-2xl p-4 border-1 border-gray-100 hover:shadow-lg transition-all h-20"
    >
      <p class="text-sm text-gray-500">{{ stat.table_name }}</p>
      <h2 class="text-2xl font-semibold text-gray-800 mt-1">{{ stat.item_count }}</h2>
      <!-- <div class="mt-2 flex items-center space-x-2">
        <span
          :class="[
            stat.change.includes('-') ? 'text-red-600 bg-red-100' : 'text-green-600 bg-green-100',
            'text-xs px-2 py-0.5 rounded-full font-medium'
          ]"
        >
          {{ stat.change.includes('-') ? '↓' : '↑' }} {{ stat.change }}
        </span>
        <span class="text-xs text-gray-400">Compared to last month</span>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const stats = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/admin/get/baseInfo"); // Fetch stats data from your API

    stats.value = response.data.slice().reverse();
  } catch (error) {
    console.error("Error fetching stats:", error);
  }
});
</script>

<style scoped>
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}
</style>
