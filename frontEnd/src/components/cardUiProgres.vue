<template>
    <div class="bg-gray-50 rounded-md shadow-sm p-4">
      <h2 class="text-lg font-semibold text-gray-700 mb-3">Active Admins</h2>
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="member in teamMembers" :key="member.name" class="py-3 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <div>
              <p class="text-sm font-medium text-gray-900">{{ member.name }}</p>
              <p class="text-sm text-gray-500">{{ member.status }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const teamMembers = ref([
        { name: 'John Michael', status: 'Online' },
        { name: 'Alex Smith', status: 'In a meeting' },
        { name: 'Samantha Ivy', status: 'Offline' },
        { name: 'John Michael', status: 'Online' },
        { name: 'John Doe', status: 'Ofline' },
      ]);
  
      return {
        teamMembers,
      };
    },
  };
  </script>