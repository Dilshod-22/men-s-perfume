<template>
  <div>
    <div class="flex justify-between">
      <h1>SUNNY SCHOOLS</h1>

      <div>
        <button
          @click="toggleTheme"
          class="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all"
        >
          <!-- Sun Icon (Right) -->
          <Sun
            class="w-5 h-5 text-yellow-500 absolute right-1 transition-all"
            v-if="theme === 'light'"
          />
          <!-- Moon Icon (Left) -->
          <Moon
            class="w-5 h-5 text-gray-200 absolute left-1 transition-all"
            v-else
          />

          <!-- Slider (Moving Circle) -->
          <!-- <span
        class="absolute w-6 h-6 bg-transparent rounded-full transition-all"
        :class="theme === 'light' ? 'translate-x-8' : 'translate-x-0'"
      ></span> -->
        </button>
        <button></button>
        <button></button>
        <div class="relative">
    <!-- Profile Button -->
    <button @click="toggleDropdown" class="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
      <img src="https://via.placeholder.com/40" alt="User" class="w-10 h-10 rounded-full">
      <ChevronDownIcon class="w-5 h-5 text-gray-500 dark:text-gray-300" />
    </button>

    <!-- Dropdown Menu -->
    <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
      <a href="#" class="flex items-center gap-2 px-4 py-2 ">
        <UserIcon class="w-5 h-5 text-gray-500 dark:text-gray-300" />
        Profile
      </a>
      <a href="#" class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 ">
        <Cog6ToothIcon class="w-5 h-5 text-gray-500 dark:text-gray-300" />
        Settings
      </a>
      <hr class="border-gray-200 ">
      <a href="#" class="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 ">
        <ArrowRightOnRectangleIcon class="w-5 h-5" />
        Logout
      </a>
    </div>
  </div>
      </div>
    </div>

      <div
        class="h-screen flex items-center justify-center transition-all"
        :class="theme === 'light' ? 'bg-white' : 'bg-black'"
      ></div>

  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { Moon, Sun } from "lucide-vue-next"; // Icons
import { ChevronDownIcon, UserIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from "@heroicons/vue/24/solid";

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
const theme = ref(localStorage.getItem("theme") || "light");

// Apply theme on component mount
watchEffect(() => {
  if (theme.value === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme.value);
});

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
};
</script>

<style lang=""></style>
