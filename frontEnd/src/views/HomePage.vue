
<template>
  <div class="app">
      <navbarDesign/>
    <!-- <h2>Фильтр товаров</h2> -->
    <router-view /> 
    <!-- <router-link to="/korzinka">     
      <korzinka/>
    </router-link>
    <router-link to="/home">     
      <korzinka/>
    </router-link> -->
    
  </div>
</template>

<script setup>

import navbarDesign from './navbar.vue';


// Data (using reactive references)

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