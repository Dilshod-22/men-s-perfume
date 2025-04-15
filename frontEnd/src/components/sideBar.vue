<template>
    <div class="h-screen w-64 bg-white border-r px-4 py-6 space-y-6 shadow-sm">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">⚙️</div>
        <span class="font-semibold text-lg">Workspace</span>
      </div>
  
      <nav class="mt-3 px-2">
        <router-link 
          v-for="(item, index) in menuItems" 
          :key="index"
          :to="item.link"
          custom
          v-slot="{ isActive, navigate }"
        >
          <div 
            @click="navigate"
            :class="[
              'flex items-center px-4 py-3 rounded-lg cursor-pointer mb-1 transition-all duration-200',
              isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
            ]"
          >
            <div class="mr-3">{{ item.icon }}</div>
            <div class="font-medium">{{ item.name }}</div>
            <div 
              v-if="item.badge" 
              class="ml-auto bg-blue-100 text-blue-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ item.badge }}
            </div>
          </div>
        </router-link>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const menuItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: '🏠',
      link: '/homeX'
    },
    {
      id: 'products',
      name: 'Products',
      icon: '📦',
      link: '/admin/productList'
    },
    {
      id: 'customers',
      name: 'Customers',
      icon: '👥',
      link: '/customers'
    },
    {
      id: 'orders',
      name: 'Orders',
      badge: '5',
      icon: '📬',
      link: '/orders'
    }
  ];
  </script>