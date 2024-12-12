<script setup>
import homeNav from '@/components/homeNav.vue';
</script>

<template>
  <main>
    <body class="home w-full h-screen grid grid-cols-1 grid-rows-3">

      <div></div>

      <div class="self-center">
        <h1 class="text-4xl flex flex-col items-center text-center">Need a quick financial hand? Apply with us 
          <span class="text-5xl">Greenline Financial CC</span>
          <div class="line"></div>
        </h1>
        
      </div>
      
      <div class="w-full h-full">
        <homeNav />
      </div>
    
    </body>
  </main>
</template>
