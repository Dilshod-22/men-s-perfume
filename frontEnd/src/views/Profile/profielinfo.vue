<template>
    <div class="p-6 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-medium text-gray-800 mb-6">Personal Information</h2>
      
      <form @submit.prevent="updateInformation">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- First Name -->
          <div>
            <label for="firstName" class="block text-sm text-gray-600 mb-2">First Name</label>
            <div class="relative">
              <input
                type="text"
                id="firstName"
                v-model="form.firstName"
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your first name"
              />
            </div>
          </div>
          
          <!-- Last Name -->
          <div>
            <label for="lastName" class="block text-sm text-gray-600 mb-2">Last Name</label>
            <div class="relative">
              <input
                type="text"
                id="lastName"
                v-model="form.lastName"
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          
          <!-- Date of Birth -->
          <div>
            <label for="dateOfBirth" class="block text-sm text-gray-600 mb-2">Date of Birth</label>
            <div class="relative">
              <input
                type="text"
                id="dateOfBirth"
                v-model="form.dateOfBirth"
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="DD/MM/YYYY"
              />
              <span class="absolute right-3 top-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
          </div>
          
          <!-- Mobile Phone -->
          <div>
            <label for="mobilePhone" class="block text-sm text-gray-600 mb-2">Mobile Phone</label>
            <div class="relative">
              <input
                type="tel"
                id="mobilePhone"
                v-model="form.mobilePhone"
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
        
        <!-- Email -->
        <div class="mb-6">
          <label for="email" class="block text-sm text-gray-600 mb-2">Email</label>
          <div class="relative">
            <span class="absolute left-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <!-- New Password -->
          <div>
            <label for="newPassword" class="block text-sm text-gray-600 mb-2">Password</label>
            <div class="relative">
              <span class="absolute left-3 top-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                :type="showPassword ? 'text' : 'password'"
                id="newPassword"
                v-model="form.newPassword"
                class="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter new password"
              />
              <button 
                type="button" 
                class="absolute right-3 top-3 text-gray-400"
                @click="showPassword = !showPassword"
              >
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </button>
            </div>
          </div>
          

        </div>
        
        <!-- Update Button -->
        <button
          type="submit"
          class="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-200"
        >
          Update
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  // Form data
  const form = reactive({
    firstName: 'Alexa',
    lastName: 'Andriana',
    dateOfBirth: '07/05/2022',
    mobilePhone: '+12 3456 7890',
    email: 'alexaandriana@gmail.com',
    newPassword: '******',
    confirmPassword: '123456'
  });
  
  // Toggle password visibility
  const showPassword = ref(false);
  const showConfirmPassword = ref(false);
  
  // Form submission
  const updateInformation = () => {
    // Validate passwords match
    if (form.newPassword !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Handle form submission - would typically send to an API
    console.log('Form submitted:', form);
    alert('Personal information updated successfully!');
  };
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  input::placeholder {
    color: #d1d5db;
  }
  </style>