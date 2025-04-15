<template>
    <div
      class="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
      :class="active ? 'bg-gray-100 font-medium' : 'text-gray-600'"
    >
      <div class="flex items-center space-x-3">
        <span>{{ icon }}</span>
        <span>{{ label }}</span>
      </div>
      <span
        v-if="badge"
        class="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-semibold"
      >
        {{ badge }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: "SidebarItem",
    props: {
      icon: String,
      label: String,
      active: {
        type: Boolean,
        default: false,
      },
      badge: Number,
    },
  };
  </script>
  