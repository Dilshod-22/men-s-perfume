<template>
  <div class="app-container">
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
          <div class="flex justify-between">
            <p class="price">{{ product.price }} BYN</p>
            <router-link :to='`/product/${product.id}`'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 394.688"><path fill="#FB5541" fill-rule="nonzero" d="M133.644 228.234L91.993 77.405a14.395 14.395 0 01-.878-4.967c0-7.964 6.458-14.422 14.422-14.422h204.83c-11.002 18.116-17.336 39.38-17.336 62.121 0 30.672 11.704 61.347 35.11 84.753 19.126 19.126 43.112 30.437 67.98 33.935h-248.62v-.043c-6.307.003-12.096-4.175-13.857-10.548z"/><path fill="#333" d="M352.424 324.199c19.464 0 35.244 15.779 35.244 35.245 0 19.464-15.78 35.244-35.244 35.244-19.466 0-35.245-15.78-35.245-35.244 0-19.466 15.779-35.245 35.245-35.245zm-154.518 0c19.464 0 35.244 15.779 35.244 35.245 0 19.464-15.78 35.244-35.244 35.244-19.466 0-35.245-15.78-35.245-35.244 0-19.466 15.779-35.245 35.245-35.245z"/><path fill="#B73E30" fill-rule="nonzero" d="M189.2 122.517c-.372-5.575 3.846-10.397 9.422-10.769 5.575-.371 10.397 3.847 10.768 9.423l3.625 53.87c.372 5.576-3.846 10.397-9.422 10.769-5.575.371-10.397-3.847-10.769-9.422l-3.624-53.871zm66.294-.673c0-5.598 4.539-10.137 10.137-10.137 5.597 0 10.136 4.539 10.136 10.137v53.87c0 5.598-4.539 10.137-10.136 10.137-5.598 0-10.137-4.539-10.137-10.137v-53.87z"/><path fill="#484848" fill-rule="nonzero" d="M14.419 28.838C6.457 28.838 0 22.381 0 14.419 0 6.457 6.457 0 14.419 0h37.525l1.44.072C66.493.311 78.423 2.88 88.457 9.125c10.982 6.833 19.18 17.493 23.507 33.407 14.579 62.52 34.659 125.138 49.666 187.674 6.259 24.738 11.416 37.474 19.525 42.922 7.077 4.754 18.794 5.766 37.235 5.701 7.5-.023 14.812-.177 22.309-.177h154.328c7.962 0 14.419 6.457 14.419 14.419 0 7.962-6.457 14.419-14.419 14.419H240.022c-7.128 0-14.122.051-21.246.065-24.323.065-40.425-1.683-53.62-10.547-15.288-10.268-23.342-27.714-31.448-59.821l-49.57-187.11c-2.241-8.246-6.016-13.475-10.887-16.505-5.222-3.249-12.178-4.617-20.226-4.775l-1.081.041H14.419z"/><path fill="#333" fill-rule="nonzero" d="M0 14.419C0 6.457 6.457 0 14.419 0h37.525l1.44.072C66.493.311 78.423 2.88 88.457 9.125c10.982 6.833 19.18 17.493 23.507 33.407 14.579 62.52 34.659 125.138 49.666 187.674 6.259 24.738 11.416 37.474 19.525 42.922 7.087 4.761 18.828 5.77 37.317 5.701 7.463-.023 14.74-.177 22.2-.177h154.355c7.962 0 14.419 6.457 14.419 14.419H229.231c-55.159.971-67.194-2.524-81.555-59.376L98.05 46.305c-6.57-24.167-23.913-31.756-46.106-31.886H0z"/><path fill="#333" d="M342.817 50.059c38.702-38.703 101.452-38.703 140.155 0 38.704 38.703 38.704 101.453 0 140.156-38.703 38.703-101.453 38.703-140.155 0-38.704-38.703-38.704-101.453 0-140.156z"/><path fill="#fff" d="M366.922 104.016h29.851V74.164a4.644 4.644 0 014.634-4.633h22.975c2.55 0 4.634 2.124 4.634 4.633v29.852h29.85c2.547 0 4.633 2.108 4.633 4.633v22.975c0 2.525-2.107 4.634-4.633 4.634h-29.85v29.85c0 2.53-2.104 4.633-4.634 4.633h-22.975c-2.53 0-4.634-2.083-4.634-4.633v-29.85h-29.851c-2.529 0-4.634-2.083-4.634-4.634v-22.975c0-2.549 2.088-4.633 4.634-4.633z"/></svg>
          </router-link>
          <!-- </rou> -->
          </div>
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