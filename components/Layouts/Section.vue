<template>
    <div class="xl:px-20 w-full left-0 border-b border-gray-200 pt-7">
      <div class="max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4">
        <p class="title mt-10 mb-5 font-bold text-3xl">BSection</p>
        <div class=" mb-3 grid grid-cols-2 md:grid-cols-3 gap-4">
          <LayoutsProductCard v-for="item in 10"/>
        </div>
        <a href="#" class="flex flex-grow justify-end hover:text-blue-400">See More</a>
      </div>
    </div>
  
  </template>
  
  <script lang="ts" setup>
  
  </script>
  
  <style>
  
  </style>