<template>
    <div class="p-4 h-[725px] overflow-auto">
      <table class="min-w-full divide-y divide-gray-200 shadow rounded-xl overflow-hidden">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Brand</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-100">
          <tr v-for="(product, index) in productsX" :key="index" class="hover:bg-gray-50 transition-colors">
            <td class="px-2 py-2 flex items-center space-x-4">
              <img :src="product.main_image ? product.main_image : defaultImageLink" alt="Product" class="w-10 h-10 rounded-lg object-cover shadow-sm" />
              <span class="font-medium text-gray-900 text-[12px]">{{ product.productname }}</span>
            </td>
            <td class="px-6 py-4 text-gray-700 text-[12px]">{{ product.brand }}</td>
            <td class="px-6 py-4 text-green-600 font-semibold text-[12px]">${{ product.price }}</td>
            <td class="px-6 py-4">
              <div class="flex items-center space-x-1">
                <template v-for="n in 5">
                  <svg
                    v-if="n <= product.ratingproduct"
                    :key="'full' + n"
                    class="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.377 2.454a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.376 2.454c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.63 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                  <svg
                    v-else
                    :key="'empty' + n"
                    class="w-3 h-3 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.377 2.454a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.376 2.454c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.63 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                </template>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex space-x-2">
                <button 
                  class="flex text-[12px] items-center px-2 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors" 
                  @click="viewProduct(product)"
                >
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  View
                </button>
                <button 
                  class="flex text-[12px] items-center px-3 py-1 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition-colors" 
                  @click="updateProduct(product)"
                >
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  Update
                </button>
                <button 
                  class="flex text-[12px] items-center px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 focus:ring-2 focus:ring-red-300 focus:outline-none transition-colors" 
                  @click="deleteProduct(index)"
                >
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch } from 'vue';
  import axios from 'axios';
  import defaultImageLink from "../image/box.svg"
  
  const productsX = ref([
    {
      image: '',
      name: 'Smartphone X',
      brand: 'TechBrand',
      price: 899.99,
      rating: 4,
    },
    {
      image: '',
      productname: 'Wireless Headphones',
      brand: 'SoundPro',
      price: 199.99,
      rating: 5,
    },
    {
      image: '',
      name: 'Fitness Watch',
      brand: 'HealthCorp',
      price: 149.99,
      rating: 3,
    },
  ]);

  const fetchProductsMix = async () => {
//   loading.value = true;
  try {
    const response = await axios.get('http://localhost:8000/api/product/get/ProdcutsMix');
    console.log(response.data);
    
    productsX.value = response.data; 
  } catch (err) {
    // error.value = "Ma'lumotlarni olishda xatolik!";
  } finally {
    // loading.value = false;
  }
};

// Komponent yuklanganda ma'lumotlarni olish
onMounted(fetchProductsMix);
  
  function viewProduct(product) {
    alert(`Viewing: ${product.name}`);
  }
  
  function updateProduct(product) {
    alert(`Update product: ${product.name}`);
  }
  
  function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
      products.value.splice(index, 1);
    }
  }
  </script>
  
  <style scoped>
  /* Bu yerga qo'shimcha stillar kiritishingiz mumkin */
  </style>