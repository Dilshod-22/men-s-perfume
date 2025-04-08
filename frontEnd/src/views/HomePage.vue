// main.js
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

// App.vue
<template>
  <div class="app">
    <h2>Фильтр товаров</h2>
    <div class="app-container">
      <div class="filter-sidebar">
        <PriceFilter 
          @price-change="handlePriceChange"
          @brand-change="handleBrandChange"
          @reset-filters="resetAllFilters"
        />
      </div>
      <div class="products-section">
        <!-- <div v-if="filteredProducts.length > 0" class="products-grid"> -->
          <div  class="products-grid">
          <div 
            v-for="productm in products" 
            :key="productm.id" 
            class="product-card"
          >
            <div class="product-image"></div>
            <h3>{{ productm.productname }}</h3>
            <p class="brand">{{ productm.brand }}</p>
            <p class="price">{{ productm.price }} BYN</p>
          </div>
        </div>
        <!-- <div v-else class="no-products">
          <p>Нет товаров, соответствующих заданным фильтрам</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import PriceFilter from '../components/PriceFilter.vue';
import axios from 'axios';

// Data (using reactive references)
const filters = ref({
  price: {
    min: 120,
    max: 450
  },
  brands: ['dolce']
});
const error = ref(null);
const loading = ref(false);
const products = ref([
  // { id: 1, name: 'Парфюм 1', brand: 'DOLCE&GABBANA', price: 240 },
  // { id: 2, name: 'Парфюм 2', brand: 'ANGEL SCHLESSER', price: 180 },
  // { id: 3, name: 'Парфюм 3', brand: 'ARMAND BASI', price: 320 },
  // { id: 4, name: 'Парфюм 4', brand: 'CACHAREL', price: 150 },
  // { id: 5, name: 'Парфюм 5', brand: 'DOLCE&GABBANA', price: 480 },
  // { id: 6, name: 'Парфюм 6', brand: 'ANGEL SCHLESSER', price: 110 }
]);

const fetchProducts = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get('http://localhost:8000/api/product/get/ProdcutsMix');

    
    products.value = response.data; 
    console.log(products.value);
    // console.log(products.);
    // API dan kelgan ma'lumotlar
  } catch (err) {
    error.value = "Ma'lumotlarni olishda xatolik!";
  } finally {
    loading.value = false;
  }
};

// Komponent yuklanganda ma'lumotlarni olish
onMounted(fetchProducts);



// Computed properties
const filteredProducts = computed(() => {
  return products.value.filter(product => {
    // Price filter
    const priceInRange = product.price >= filters.value.price.min && 
                         product.price <= filters.value.price.max;
    
    // Brand filter
    const brandMatch = filters.value.brands.length === 0 || 
                      filters.value.brands.some(brand => {
                        if (brand === 'angel') return product.brand === 'ANGEL SCHLESSER';
                        if (brand === 'armand') return product.brand === 'ARMAND BASI';
                        if (brand === 'cacharel') return product.brand === 'CACHAREL';
                        if (brand === 'dolce') return product.brand === 'DOLCE&GABBANA';
                        return false;
                      });
    
    return priceInRange && brandMatch;
  });
});

// Methods
const handlePriceChange = (priceRange) => {
  filters.value.price = priceRange;
};

const handleBrandChange = (selectedBrands) => {
  filters.value.brands = selectedBrands;
};

const resetAllFilters = () => {
  filters.value = {
    price: {
      min: 0,
      max: 1000
    },
    brands: []
  };
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

.app-container {
  display: flex;
  gap: 30px;
}

.filter-sidebar {
  flex: 0 0 260px;
}

.products-section {
  flex: 1;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 150px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
}

.product-card h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.brand {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
  color: #f06;
}

.no-products {
  background: white;
  padding: 30px;
  text-align: center;
  border-radius: 5px;
  color: #666;
}
</style>