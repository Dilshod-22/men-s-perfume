<!-- ProductPage.vue -->
<template>
    <div class="product-page">
      <!-- Product Detail Section -->
      <div class="product-detail">
        <!-- Product Images -->
        <div class="product-images">
          <div class="thumbnail-column">
            <img src="https://ik.imagekit.io/qk82mhvi8/2437915291_Q-greR5eL.jpg?updatedAt=1744577470440" alt="Thumbnail 1" class="thumbnail active" />
            <img src="https://ik.imagekit.io/qk82mhvi8/2437915291_Q-greR5eL.jpg?updatedAt=1744577470440" alt="Thumbnail 2" class="thumbnail" />
            <img src="https://ik.imagekit.io/qk82mhvi8/2437915291_Q-greR5eL.jpg?updatedAt=1744577470440" alt="Thumbnail 3" class="thumbnail" />
          </div>
          
          <div class="main-image-container">
            <img src="https://ik.imagekit.io/qk82mhvi8/%C3%90_%C3%90%C2%BD%C3%90_%C3%90%C2%BC%C3%90%C2%BE%C3%90%C2%BA_%C3%91_%C3%90%C2%BA%C3%91_%C3%90_%C3%90%C2%BD%C3%90__2025-04-09_133054_hJC9UwFSD.png?updatedAt=1744575230938" alt="FLOWERBOMB" class="main-image" />
            <button class="favorite-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Product Info -->
        <div class="product-info">
          <h1>FLOWERBOMB</h1>
          <p class="description">парфюмерная вода 30 мл</p>
          
          <div class="price">
            <span class="current-price">210,80 BYN</span>
          </div>
          
          <!-- Volume Selection -->
          <div class="volume-section">
            <div class="section-title">Объем:</div>
            <div class="volume-options">
              <button class="volume-btn active">30 мл</button>
              <button class="volume-btn">50 мл</button>
            </div>
          </div>
          
          <!-- Quantity Selection -->
          <div class="quantity-section">
            <div class="section-title">Количество:</div>
            <div class="quantity-selector">
              <button class="quantity-btn">-</button>
              <span class="quantity">1</span>
              <button class="quantity-btn">+</button>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="action-buttons">
            <button class="cart-btn">В корзину</button>
            <button class="wishlist-btn">Нажмите и купите</button>
          </div>
          
          <div class="brand">VIKTOR&ROLF</div>
        </div>
      </div>
      
      <!-- Product Tabs -->
      <div class="product-tabs">
        <div class="tabs">
          <button class="tab-btn active">О товаре</button>
          <button class="tab-btn">Бренд</button>
          <button class="tab-btn">Отзывы</button>
          <button class="tab-btn">Доставка и оплата</button>
          <button class="tab-btn">Гарантия и возврат</button>
        </div>
        
        <div class="tab-content">
          <div class="tab-pane active">
            <div class="product-attributes">
              <div class="attribute">
                <span class="attribute-name">Полное наименование:</span>
                <span class="attribute-value">FLOWERBOMB парфюмерная вода 30 мл</span>
              </div>
              
              <div class="attribute">
                <span class="attribute-name">Бренд:</span>
                <span class="attribute-value">VIKTOR&ROLF</span>
              </div>
              
              <div class="attribute">
                <span class="attribute-name">Объем:</span>
                <span class="attribute-value">30 мл</span>
              </div>
              
              <div class="attribute">
                <span class="attribute-name">Для кого:</span>
                <span class="attribute-value">женский</span>
              </div>
              
              <div class="attribute">
                <span class="attribute-name">Производитель:</span>
                <span class="attribute-value">"l'Oréale S.A.", (L'Oréale, 17008, Париж, Франция)</span>
              </div>
              
              <div class="attribute">
                <span class="attribute-name">Описание:</span>
                <div class="attribute-value description-text">
                  <p>Flowerbomb был выпущен в 2005. Flowerbomb был создан Olivier Polge, Carlos Benaim, Domitille Berthier Dominique Ropion. Верхние ноты: Бергамот, Чай и Османтус; ноты сердца: Жасмин, Африканский апельсиновый цвет, Белые орхидеи, Роза и Фрезия; ноты базы: Мускус и Пачули.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Similar Products -->
      <div class="similar-products">
        <h2>Похожие товары</h2>
        
        <div class="product-grid">
          <div v-for="(product, index) in similarProducts" :key="index" class="product-card">
            <div class="product-image-container">
              <img src="https://ik.imagekit.io/qk82mhvi8/%C3%90_%C3%90%C2%BD%C3%90_%C3%90%C2%BC%C3%90%C2%BE%C3%90%C2%BA_%C3%91_%C3%90%C2%BA%C3%91_%C3%90_%C3%90%C2%BD%C3%90__2025-04-09_133054_hJC9UwFSD.png?updatedAt=1744575230938" :alt="product.name" class="product-thumbnail" />
              <button class="card-favorite-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            
            <div class="product-card-info">
              <div class="product-card-brand">{{ product.brand }}</div>
              <div class="product-card-name">{{ product.name }}</div>
              <div class="product-card-description">{{ product.description }}</div>
              <div class="product-card-price">{{ product.price }}</div>
              
              <button class="buy-btn">Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
    const route = useRoute();
    const id = route.params.id;
  console.log(id);
  


const getProductInfo = async() => {
    try {
        console.log('keldi');
        
            const response = await axios.post(`http://localhost:8000/api/product/takeProductInfo/${id}`);
            console.log(response.data.rows[0]);
     
  } catch (err) {
    console.log("Ma'lumotlarni olishda xatolik!"+err);
     
  } 
}

onMounted(getProductInfo);


  // Similar products data
  const similarProducts = ref([
    {
      brand: 'CARTIER',
      name: 'BAISER VOLÉ',
      description: 'туалетная вода 100 мл',
      price: '258,40 BYN'
    },
    {
      brand: 'GIORGIO ARMANI',
      name: 'SI FIORI',
      description: 'парфюмерная вода 50 мл',
      price: '339,70 BYN'
    },
    {
      brand: 'NARCISO RODRIGUEZ',
      name: 'FOR HER',
      description: 'туалетная вода 50 мл',
      price: '174,60 BYN'
    },
    {
      brand: 'YVES SAINT LAURENT',
      name: 'LIBRE',
      description: 'туалетная вода 50 мл',
      price: '304,30 BYN'
    }
  ]);
  
  // Product data
  const product = ref({
    id: 1,
    name: 'FLOWERBOMB',
    description: 'парфюмерная вода 30 мл',
    price: '210,80 BYN',
    brand: 'VIKTOR&ROLF',
    volume: '30 мл',
    gender: 'женский',
    manufacturer: '"l\'Oréale S.A.", (L\'Oréale, 17008, Париж, Франция)',
    longDescription: 'Flowerbomb был выпущен в 2005. Flowerbomb был создан Olivier Polge, Carlos Benaim, Domitille Berthier Dominique Ropion. Верхние ноты: Бергамот, Чай и Османтус; ноты сердца: Жасмин, Африканский апельсиновый цвет, Белые орхидеи, Роза и Фрезия; ноты базы: Мускус и Пачули.'
  });
  
  // Quantity state
  const quantity = ref(1);
  
  // Active tab state
  const activeTab = ref('О товаре');
  </script>
  
  <style scoped>
  .product-page {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
  }
  
  /* Product Detail Section */
  .product-detail {
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
  }
  
  /* Product Images */
  .product-images {
    display: flex;
    gap: 15px;
    flex: 0 0 50%;
  }
  
  .thumbnail-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .thumbnail {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border: 1px solid #e0e0e0;
    cursor: pointer;
  }
  
  .thumbnail.active {
    border: 2px solid #e91e63;
  }
  
  .main-image-container {
    position: relative;
    flex-grow: 1;
  }
  
  .main-image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  
  .favorite-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #e0e0e0;
  }
  
  .favorite-btn:hover {
    color: #e91e63;
  }
  
  /* Product Info */
  .product-info {
    flex: 1;
  }
  
  h1 {
    font-size: 24px;
    margin: 0 0 8px 0;
    font-weight: 500;
  }
  
  .description {
    color: #666;
    margin-bottom: 20px;
  }
  
  .price {
    margin-bottom: 30px;
  }
  
  .current-price {
    font-size: 24px;
    font-weight: 600;
    color: #e91e63;
  }
  
  /* Volume & Quantity Sections */
  .volume-section, .quantity-section {
    margin-bottom: 20px;
  }
  
  .section-title {
    margin-bottom: 10px;
    font-weight: 500;
  }
  
  .volume-options {
    display: flex;
    gap: 10px;
  }
  
  .volume-btn {
    padding: 8px 16px;
    border: 1px solid #e0e0e0;
    background: white;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .volume-btn.active {
    border-color: #e91e63;
    color: #e91e63;
  }
  
  .quantity-selector {
    display: flex;
    align-items: center;
    width: fit-content;
  }
  
  .quantity-btn {
    width: 30px;
    height: 30px;
    background: white;
    border: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .quantity {
    padding: 0 15px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    height: 30px;
    display: flex;
    align-items: center;
  }
  
  /* Action Buttons */
  .action-buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
  }
  
  .cart-btn {
    padding: 12px 25px;
    background: #e91e63;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }
  
  .wishlist-btn {
    padding: 12px 25px;
    background: white;
    border: 1px solid #e91e63;
    color: #e91e63;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }
  
  .brand {
    font-size: 18px;
    font-weight: 500;
  }
  
  /* Product Tabs */
  .product-tabs {
    margin-bottom: 40px;
  }
  
  .tabs {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 20px;
    overflow-x: auto;
  }
  
  .tab-btn {
    padding: 12px 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    white-space: nowrap;
  }
  
  .tab-btn.active {
    font-weight: bold;
    border-bottom: 2px solid #e91e63;
  }
  
  .tab-pane {
    display: none;
  }
  
  .tab-pane.active {
    display: block;
  }
  
  /* Product Attributes */
  .product-attributes {
    font-size: 14px;
  }
  
  .attribute {
    display: flex;
    margin-bottom: 12px;
  }
  
  .attribute-name {
    flex: 0 0 150px;
    font-weight: 500;
  }
  
  .attribute-value {
    flex: 1;
  }
  
  .description-text {
    line-height: 1.5;
  }
  
  /* Similar Products */
  .similar-products h2 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    border: 1px solid #f0f0f0;
  }
  
  .product-image-container {
    position: relative;
  }
  
  .product-thumbnail {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-favorite-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #e0e0e0;
  }
  
  .card-favorite-btn:hover {
    color: #e91e63;
  }
  
  .product-card-info {
    padding: 15px;
  }
  
  .product-card-brand {
    font-size: 12px;
    margin-bottom: 5px;
  }
  
  .product-card-name {
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  .product-card-description {
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
  }
  
  .product-card-price {
    color: #e91e63;
    font-weight: 500;
    margin-bottom: 15px;
  }
  
  .buy-btn {
    width: 100%;
    padding: 8px;
    background: white;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    text-align: center;
  }
  
  .buy-btn:hover {
    background: #f9f9f9;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .product-detail {
      flex-direction: column;
    }
    
    .product-images {
      flex-direction: column-reverse;
    }
    
    .thumbnail-column {
      flex-direction: row;
      justify-content: center;
    }
  }
  </style>