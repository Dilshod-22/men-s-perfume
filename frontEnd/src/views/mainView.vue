<template lang="">
    <div class="app-container mt-8">
     <div class="filter-sidebar">
        <PriceFilter 
          @price-change="handlePriceChange"
          @brand-change="handleBrandChange"
          @name-change="changeProductName"
          @reset-filters="resetAllFilters"
        />
      </div>
      <div class="products-section">
        <div v-if="filteredProducts.length > 0" class="products-grid">
          <div 
            v-for="productm in filteredProducts" 
            :key="productm.id" 
            class="product-card"
          >
            <div class="product-image"></div>
            <h3>{{ productm.productname }}</h3>
            <p class="brand">{{ productm.brand }}</p>
            <p class="price">{{ productm.price }} BYN</p>
          </div>
        </div>
        <div v-else class="no-products">
          <p>Нет товаров, соответствующих заданным фильтрам</p>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';


import axios from 'axios';
    import PriceFilter from '../components/PriceFilter.vue';
    const filters = ref({
  price: {
    min: 120,
    max: 450
  },
  brands: ['Gucci'],
  productName:''
});
const error = ref(null);
const loading = ref(false);

const products = ref([
  { id: 1, productname: 'Парфюм 1', brand: 'DOLCE&GABBANA', price: 240 },
  { id: 2, productname: 'Парфюм 2', brand: 'ANGEL SCHLESSER', price: 180 },
  { id: 3, productname: 'Парфюм 3', brand: 'ARMAND BASI', price: 320 },
  { id: 4, productname: 'Парфюм 4', brand: 'CACHAREL', price: 150 },
  { id: 5, productname: 'Парфюм 5', brand: 'DOLCE&GABBANA', price: 480 },
  { id: 6, productname: 'Парфюм 6', brand: 'ANGEL SCHLESSER', price: 110 }
]);

const fetchProducts = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get('http://localhost:8000/api/product/get/ProdcutsMix');
    products.value = response.data; 
  } catch (err) {
    error.value = "Ma'lumotlarni olishda xatolik!";
  } finally {
    loading.value = false;
  }
};

// Komponent yuklanganda ma'lumotlarni olish
onMounted(fetchProducts);

const filteredProducts = computed(() => {
  
  return products.value.filter((product) => {
    let priceFilt = product.price >= filters.value.price.min &&
      product.price <= filters.value.price.max
    let nameFilter = product.productname.includes(filters.value.productName);

    return priceFilt && nameFilter;
  });
});

// Methods
const handlePriceChange = (priceRange) => {
  filters.value.price = priceRange;
};

const changeProductName = (productName) => {
1  
  filters.value.productName = productName
}

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

<style lang="">
    
</style>