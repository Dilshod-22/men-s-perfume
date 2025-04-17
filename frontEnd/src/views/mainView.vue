<template>
  <div class="app-container mt-8">
    <div class="filter-sidebar fixed w-60">
      <PriceFilter
        @price-change="handlePriceChange"
        @reset-filters="resetAllFilters"
        @typeProdcut-change="changeTypeProduct"
      />
    </div>

    <div class="products-section ml-72">
      <div v-if="loading" class="loading">
        <p>Yuklanmoqda...</p>
      </div>
      
      <div v-else-if="error" class="error">
        <p>{{ error }}</p>
      </div>

      <div v-else-if="filteredProducts.length > 0" class="products-grid">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card"
        >
          <img class="product-image" :src="product.main_image" />
          <h3>{{ product.productname }}</h3>
          <p class="brand">{{ product.brand }}</p>
          <p class="price">{{ product.price }} BYN</p>
        </div>
      </div>

      <div v-else class="no-products">
        <p>Нет товаров, соответствующих заданным фильтрам</p>
      </div>

      <!-- Pagination Controls -->
      <div class="pagination-controls mt-6 flex justify-center">
        <button 
          @click="changePage(currentPage - 1)" 
          :disabled="currentPage === 1"
          class="pagination-button mr-2 px-4 py-2 rounded"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
        >
          Олдинги
        </button>
        
        <div class="page-numbers flex">
          <button
            v-for="pageNum in displayedPageNumbers"
            :key="pageNum"
            @click="changePage(pageNum)"
            class="pagination-number-button mx-1 px-4 py-2 rounded"
            :class="{ 'active-page': currentPage === pageNum }"
          >
            {{ pageNum }}
          </button>
        </div>
        
        <button 
          @click="changePage(currentPage + 1)" 
          :disabled="currentPage === totalPages"
          class="pagination-button ml-2 px-4 py-2 rounded"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
        >
          Кейинги
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import axios from "axios";
import PriceFilter from "../components/PriceFilter.vue";

const filters = ref({
  price: {
    min: 10,
    max: 450,
  },
  brands: [],
  productName: "",
});

const products = ref([]);
const loading = ref(false);
const error = ref(null);
const currentPage = ref(1);
const totalPages = ref(1);
const itemsPerPage = 20; // Server returns 20 items per page

// Calculate which page numbers to show
const displayedPageNumbers = computed(() => {
  const pageNumbers = [];
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages.value, startPage + maxVisiblePages - 1);
  
  // Adjust if we're near the end
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  
  return pageNumbers;
});

const fetchProducts = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get(`http://localhost:8000/api/product/get/ProdcutsMix/${currentPage.value}`);
    
    // Assuming the API returns the total pages in the response
    // If not, you'll need to adjust this accordingly
    products.value = response.data.products || response.data;
    
    // If the API returns total pages or total items, set it here
    // This is an example - adjust according to your API response structure
    if (response.data.meta) {
      totalPages.value = response.data.meta.totalPages || 1;
    } else {
      // If your API doesn't return total pages, you might need to estimate
      // or make a separate request to get the total count
      totalPages.value = 10; // Default fallback or estimate
    }
  } catch (err) {
    error.value = "Ma'lumotlarni olishda xatolik!";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

// Watch for page changes
watch(currentPage, () => {
  fetchProducts();
});

// Initial fetch
onMounted(fetchProducts);

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const priceMatch =
      product.price >= filters.value.price.min &&
      product.price <= filters.value.price.max;

    if (filters.value.brands.length > 0) {
      const brandMatch = filters.value.brands.some(
        (item) => item.name === product.category
      );
      return priceMatch && brandMatch;
    }

    return priceMatch;
  });
});

// Handlers
const handlePriceChange = (priceRange) => {
  filters.value.price = priceRange;
  currentPage.value = 1; // Reset to first page when filters change
};

const changeTypeProduct = (selectedTypes) => {
  filters.value.brands = selectedTypes;
  currentPage.value = 1; // Reset to first page when filters change
};

const resetAllFilters = () => {
  filters.value = {
    price: {
      min: 0,
      max: 1000,
    },
    brands: [],
    productName: "",
  };
  currentPage.value = 1; // Reset to first page when filters are reset
};

// Pagination handler
const changePage = (pageNum) => {
  if (pageNum < 1 || pageNum > totalPages.value) return;
  currentPage.value = pageNum;
};
</script>

<style scoped>
.pagination-button {
  background-color: #f0f0f0;
  transition: background-color 0.3s;
}

.pagination-button:not([disabled]):hover {
  background-color: #e0e0e0;
}

.pagination-number-button {
  background-color: #f0f0f0;
  transition: background-color 0.3s;
}

.pagination-number-button:hover {
  background-color: #e0e0e0;
}

.active-page {
  background-color: #3490dc;
  color: white;
}

.loading, .error, .no-products {
  text-align: center;
  padding: 2rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.product-card {
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.25rem;
}

@media (max-width: 768px) {
  .filter-sidebar {
    position: relative;
    width: 100%;
  }
  
  .products-section {
    margin-left: 0;
    margin-top: 2rem;
  }
}
</style>