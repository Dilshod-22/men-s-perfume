<template>
    <div class="max-w-5xl mx-auto p-4 font-sans">
      <div class="mb-4">
        <h2 class="text-lg font-medium">Savatingiz, <span class="text-gray-500">2 mahsulot</span></h2>
      </div>
  
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow">
            <div class="flex items-center justify-between p-4 border-b">
              <div class="flex items-center">
                <input type="checkbox" v-model="selectAll" class="h-5 w-5 rounded border-gray-300 text-indigo-600" />
                <span class="ml-2 text-sm font-medium text-blue-600">Hammasini yechish</span>
              </div>
              <div class="flex items-center text-sm">
                <span class="text-gray-500">Yetkazib berishning eng yaqin sanasi:</span>
                <span class="ml-2 bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs">19-aprel</span>
              </div>
            </div>
  
            <!-- First Product -->
            <div class="p-4 border-b flex">
              <div class="flex items-start">
                <input type="checkbox" v-model="products[0].selected" class="mt-8 h-5 w-5 rounded border-gray-300 text-indigo-600" />
              </div>
              
              <div class="ml-3">
                <img src="https://ik.imagekit.io/qk82mhvi8/mySkill_yRtgP378c.jpg?updatedAt=1744011576973" alt="T-shirt" class="w-24 h-24 object-cover border rounded" />
              </div>
              
              <div class="ml-4 flex-1">
                <div class="flex justify-between">
                  <h3 class="text-blue-800 font-medium">TERRA PRO erkaklar futbolkasi, qisqa yengil SS24BS2-25-19954</h3>
                  <button class="text-gray-400 ml-2" id="deleteProduct">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div class="mt-1 text-sm text-gray-500">
                  <p>Sotuvchi: <span class="text-gray-700">Terra Pro</span></p>
                </div>
                
                <div class="mt-4 flex justify-between items-center">
                  <div class="flex border rounded">
                    <button @click="decrementQuantity(products[0])" class="px-3 py-1 text-gray-600">−</button>
                    <input type="text" v-model="products[0].quantity" class="w-10 text-center border-x" />
                    <button @click="incrementQuantity(products[0])" class="px-3 py-1 text-gray-600">+</button>
                  </div>
                  
                  <div class="text-right">
                    <p class="text-lg font-bold">69 990 so'm</p>
                    <p class="text-sm text-gray-400 line-through">80 000 so'm</p>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Second Product -->
            <div class="p-4 flex">
              <div class="flex items-start">
                <input type="checkbox" v-model="products[1].selected" class="mt-8 h-5 w-5 rounded border-gray-300 text-indigo-600" />
              </div>
              
              <div class="ml-3">
                <img src="https://ik.imagekit.io/qk82mhvi8/mySkill_yRtgP378c.jpg?updatedAt=1744011576973" alt="Phone holder" class="w-24 h-24 object-cover border rounded" />
              </div>
              
              <div class="ml-4 flex-1">
                <div class="flex justify-between">
                  <h3 class="text-blue-800 font-medium">Velosiped, motosikl va bolar aravachasi uchun universal telefon ushlagichi</h3>
                  <button class="text-gray-400 ml-2" id="deleteProduct">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div class="mt-1 text-sm text-gray-500">
                  <p>Sotuvchi: <span class="text-gray-700">YasinChina</span></p>
                </div>
                
                <div class="mt-4 flex justify-between items-center">
                  <div class="flex border rounded">
                    <button @click="decrementQuantity(products[1])" class="px-3 py-1 text-gray-600">−</button>
                    <input type="text" v-model="products[1].quantity" class="w-10 text-center border-x" />
                    <button @click="incrementQuantity(products[1])" class="px-3 py-1 text-gray-600">+</button>
                  </div>
                  
                  <div class="text-right">
                    <p class="text-lg font-bold">59 000 so'm</p>
                    <p class="text-sm text-gray-400 line-through">120 000 so'm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow p-4">
            <h3 class="text-lg font-medium mb-4">Buyurtmangiz</h3>
            
            <div class="flex justify-between mb-2">
              <span class="text-gray-600">Mahsulotlar (2):</span>
              <span class="font-medium">200 000 so'm</span>
            </div>
            
            <div class="bg-blue-50 text-blue-600 p-2 rounded text-center text-sm my-3">
              Yetkazib berish 19-aprel
            </div>
            
            <div class="flex justify-between items-center py-3 border-t border-gray-200">
              <span class="text-lg font-medium">Jami:</span>
              <span class="text-xl font-bold">128 990 so'm</span>
            </div>
            
            <button class="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded font-medium mt-2">
              Rasmiylashtirshga o'tish
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectAll: true,
        products: [
          {
            id: 1,
            name: 'TERRA PRO erkaklar futbolkasi, qisqa yengil SS24BS2-25-19954',
            seller: 'Terra Pro',
            size: 'M',
            color: 'Oq',
            price: 69990,
            originalPrice: 80000,
            quantity: 1,
            selected: true,
            image: 'tshirt.jpg'
          },
          {
            id: 2,
            name: 'Velosiped, motosikl va bolar aravachasi uchun universal telefon ushlagichi',
            seller: 'YasinChina',
            price: 59000,
            originalPrice: 120000,
            quantity: 1,
            selected: true,
            image: 'phone-holder.jpg'
          }
        ],
        deliveryDate: '19-aprel'
      }
    },
    methods: {
      incrementQuantity(product) {
        product.quantity++;
      },
      decrementQuantity(product) {
        if (product.quantity > 1) {
          product.quantity--;
        }
      },
      removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
      },
      toggleSelectAll() {
        const newValue = !this.selectAll;
        this.selectAll = newValue;
        this.products.forEach(product => {
          product.selected = newValue;
        });
      }
    },
    computed: {
      totalOriginalPrice() {
        return this.products
          .filter(p => p.selected)
          .reduce((sum, p) => sum + p.originalPrice * p.quantity, 0);
      },
      totalDiscountedPrice() {
        return this.products
          .filter(p => p.selected)
          .reduce((sum, p) => sum + p.price * p.quantity, 0);
      },
      selectedCount() {
        return this.products.filter(p => p.selected).length;
      }
    },
    watch: {
      'products': {
        handler(products) {
          this.selectAll = products.every(p => p.selected);
        },
        deep: true
      }
    }
  }
  </script>