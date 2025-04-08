<template>
    <div class="bg-white rounded-lg shadow-md p-4 relative">
      <div class="absolute top-2 right-2">
        <button class="text-gray-400 hover:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <!-- <img :src="product.productimage[0]" :alt="product.productname" class="w-full h-48 object-cover mb-4"> -->
      <div class="text-sm text-gray-500 mb-2">{{ product.category }}</div>
      <h3 class="font-bold mb-2">{{ product.productname }}</h3>
      <div class="flex justify-between items-center">
        <div>
          <div class="text-lg font-bold text-purple-600">{{ product.price }} сум</div>
          <div class="text-sm text-gray-400 line-through">сум</div>
        </div>
        <button class="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
          В корзину
        </button>
      </div>
      <div class="mt-2 flex items-center">
        <div class="text-yellow-500">★</div>
        <span class="ml-1 text-gray-600">{{ product.ratingproduct }} </span>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    product: {
      type: Object,
      required: true
    }
  })
  </script>