<script setup>
import { ref, computed } from 'vue';

// Sample product data
const products = ref([
  { id: 1, name: 'Парфюм 1', brand: 'DOLCE&GABBANA', price: 240 },
  { id: 2, name: 'Парфюм 2', brand: 'ANGEL SCHLESSER', price: 180 },
  { id: 3, name: 'Парфюм 3', brand: 'ARMAND BASI', price: 320 },
  { id: 4, name: 'Парфюм 4', brand: 'CACHAREL', price: 150 },
  { id: 5, name: 'Парфюм 5', brand: 'DOLCE&GABBANA', price: 480 },
  { id: 6, name: 'Парфюм 6', brand: 'ANGEL SCHLESSER', price: 110 }
]);

// Reactive filter criteria
const filters = ref({
  name: '',
  brand: '',
  price: { min: 0, max: 500 }
});

// Computed filtered products
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    return (
      product.name.toLowerCase().includes(filters.value.name.toLowerCase()) &&
      product.brand.toLowerCase().includes(filters.value.brand.toLowerCase()) &&
      product.price >= filters.value.price.min &&
      product.price <= filters.value.price.max
    );
  });
});

// Method to reset filters
const resetFilters = () => {
  filters.value = {
    name: '',
    brand: '',
    price: { min: 0, max: 500 }
  };
};
</script>

<template>
  <div>
    <h3>Filtered Table</h3>

    <!-- Filter Inputs -->
    <div class="filters">
      <label>
        Product Name:
        <input type="text" v-model="filters.name" />
      </label>
      <label>
        Brand:
        <input type="text" v-model="filters.brand" />
      </label>
      <label>
        Price Range:
        <input type="number" v-model="filters.price.min" placeholder="Min Price" />
        <input type="number" v-model="filters.price.max" placeholder="Max Price" />
      </label>
      <button @click="resetFilters">Reset Filters</button>
    </div>

    <!-- Table -->
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.brand }}</td>
          <td>{{ product.price }} BYN</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.filters {
  margin-bottom: 15px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
  text-align: left;
}
</style>
