<!-- Header.vue -->
<template>
    <header class="bg-white py-3 px-6 mb-5 rounded-lg shadow-md border">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/home" class="flex items-center">
            <span class="text-pink-500 text-2xl font-bold">Men</span>
            <span class="text-green-700 text-xl font-medium">Parfum</span>
          </router-link>
        </div>
  
        <!-- Contact Info -->
        <div class="hidden md:flex flex-col text-sm text-gray-700">
          <a href="tel:+375296222425" class="font-medium">+998 94 025 04 35</a>
          <span class="text-gray-500">с 10:00 до 21:00</span>
        </div>
  
        <!-- Search Bar -->
        <div class="flex-grow mx-4 max-w-lg">
          <div class="relative">
            <input
              type="text"
              placeholder="Поиск товаров"
              class="w-full py-2 px-4 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-pink-200 text-sm"
            />
            <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Icon Navigation -->
        <div class="flex items-center space-x-4">
          <!-- Cart -->
            <router-link to="/karzinka">     
 
    
          <button class="text-gray-500 hover:text-pink-500 relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span class="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>
        </router-link>
  
          <!-- Wishlist -->
          <button class="text-gray-500 hover:text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
  
          <!-- Account -->
          <button class="text-gray-500 hover:text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  // No additional setup needed for this component
  </script>