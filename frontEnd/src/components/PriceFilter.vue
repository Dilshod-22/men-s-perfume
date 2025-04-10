// PriceFilter.vue
<template>
  <div class="filter-container">
    <!-- Price Range Section -->
    <div class="filter-section">
      <div>
        <h3 class="text-lg">search</h3>
        <input class="border border-black h-9 w-full mt-3 mb-5 rounded pl-2" type="text" v-model="prodcutName"  @input="updateNameFilter">
      </div>
      <div class="filter-header" @click="togglePriceFilter">
        <h3>Цена, BYN</h3>
        <span class="arrow" :class="{ 'arrow-up': showPriceFilter }">^</span>
      </div>
      
      <div v-if="showPriceFilter" class="price-inputs">
        <div class="price-range">
          <div class="price-input">
            <span>от</span>
            <input type="number" v-model="minPrice" @input="updatePriceFilter" />
          </div>
          <div class="separator">—</div>
          <div class="price-input">
            <span>до</span>
            <input type="number" v-model="maxPrice" @input="updatePriceFilter" />
          </div>
        </div>
        
        <div class="slider-container">
          <input 
            type="range" 
            class="slider" 
            :min="priceRange.min" 
            :max="priceRange.max" 
            v-model="minPrice" 
            @input="updatePriceFilter"
          />
          <input 
            type="range" 
            class="slider slider-right" 
            :min="priceRange.min" 
            :max="priceRange.max" 
            v-model="maxPrice" 
            @input="updatePriceFilter"
          />
        </div>
      </div>
    </div>
    
    <!-- Brand Filter Section -->
    <div class="filter-section">
      <div class="filter-header" @click="toggleBrandFilter">
        <h3>Category</h3>
        <span class="arrow" :class="{ 'arrow-up': showBrandFilter }">^</span>
      </div>
      
      <div v-if="showBrandFilter" class="brand-checkboxes">
        <div v-for="brand in brands" :key="brand.id" class="brand-checkbox">
          <input 
            type="checkbox" 
            :id="brand.id" 
            v-model="brand.selected" 
            @change="updateBrandFilter"
          />
          <label :for="brand.id">{{ brand.name }}</label>
        </div>
        
        <button class="show-all" @click="toggleShowAllBrands">
          {{ showAllBrands ? 'Скрыть' : 'Показать все' }}
        </button>
      </div>
    </div>
    
    <!-- Volume Filter Section -->
    <div class="filter-section">
      <div class="filter-header" @click="toggleVolumeFilter">
        <h3>Объем</h3>
        <span class="arrow" :class="{ 'arrow-up': showVolumeFilter }">^</span>
      </div>
      
      <div v-if="showVolumeFilter" class="volume-controls">
        <button class="reset-filter" @click="resetFilters">Сбросить фильтр</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PriceFilter',
  data() {
    return {
      // Filter visibility states
      showPriceFilter: true,
      showBrandFilter: true,
      showVolumeFilter: true,
      showAllBrands: false,
      
      // Price range values
      minPrice: 120,
      maxPrice: 450,
      priceRange: {
        min: 0,
        max: 1000
      },
      prodcutName:'',
      
      // Brand list
      brands: [
        { id: 'angel', name: 'ANGEL SCHLESSER', selected: false },
        { id: 'armand', name: 'ARMAND BASI', selected: false },
        { id: 'cacharel', name: 'CACHAREL', selected: false },
        { id: 'dolce', name: 'DOLCE&GABBANA', selected: true }
      ]
    };
    
  },
  async mounted(){
 
    const response = await axios.get('http://localhost:8000/api/product/get/categoriya');
    this.brands = response.data;
},
  
  methods: {

    // Toggle filter sections
    togglePriceFilter() {
      this.showPriceFilter = !this.showPriceFilter;
    },
    toggleBrandFilter() {
      this.showBrandFilter = !this.showBrandFilter;
    },
    toggleVolumeFilter() {
      this.showVolumeFilter = !this.showVolumeFilter;
    },
    
    // Toggle show all brands
    toggleShowAllBrands() {
      this.showAllBrands = !this.showAllBrands;
    },
    
    // Update filters
    updatePriceFilter() {
      // Ensure minPrice is not greater than maxPrice
      if (Number(this.minPrice) > Number(this.maxPrice)) {
        this.minPrice = this.maxPrice;
      }
      
      this.$emit('price-change', {
        min: this.minPrice,
        max: this.maxPrice
      });
    },
    updateNameFilter(){
        this.$emit('name-change',this.prodcutName);
    },
    
    updateBrandFilter() {
      const selectedBrands = this.brands
        .filter(brand => brand.selected)
        .map(brand => brand.id);
      
      this.$emit('brand-change', selectedBrands);
    },
    
    // Reset all filters
    resetFilters() {
      this.minPrice = this.priceRange.min;
      this.maxPrice = this.priceRange.max;
      
      this.brands.forEach(brand => {
        brand.selected = false;
      });
      
      this.$emit('reset-filters');
    }
  }
};
</script>

<style scoped>
.filter-container {
  font-family: Arial, sans-serif;
  max-width: 300px;
}

.filter-section {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.filter-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.arrow {
  transform: rotate(180deg);
  transition: transform 0.3s;
}

.arrow-up {
  transform: rotate(0deg);
}

/* Price Range Styles */
.price-inputs {
  margin-top: 15px;
}

.price-range {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.price-input {
  flex: 1;
  display: flex;
  align-items: center;
}

.price-input span {
  margin-right: 5px;
  color: #666;
}

.price-input input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.separator {
  margin: 0 10px;
  color: #666;
}

/* Slider Styles */
.slider-container {
  position: relative;
  height: 20px;
}

.slider {
  position: absolute;
  width: 100%;
  height: 5px;
  background: none;
  pointer-events: none;
}

.slider::-webkit-slider-thumb {
  pointer-events: auto;
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
}

/* Brand Filter Styles */
.brand-checkboxes {
  margin-top: 15px;
}

.brand-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.brand-checkbox input {
  margin-right: 10px;
}

.show-all {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0;
  margin-top: 5px;
  text-decoration: underline;
}

/* Volume Filter Styles */
.volume-controls {
  margin-top: 15px;
}

.reset-filter {
  width: 100%;
  padding: 10px;
  border: 1px solid #f06;
  border-radius: 3px;
  background: white;
  color: #f06;
  cursor: pointer;
  transition: background-color 0.3s;
}

.reset-filter:hover {
  background-color: #fff0f5;
}
</style>