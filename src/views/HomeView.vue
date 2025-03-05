<template>
  <main>
    <div class="home w-full h-screen flex flex-col justify-center">
      <div class="w-full pl-2 pt-2">
        <div class="w-1/5 h-10 max-md:w-2/5 max-md:h-10 bg-white rounded-lg flex justify-center items-center shadow-xl">
          <img src="../assets/images/greenline logo.svg" alt="" class="w-4/5 h-full">
        </div>
      </div>
      <div class="self-center pt-64 max-md:pt-48">
        <h1 class="h1-text rounded-xl text-4xl max-md:text-2xl flex flex-col items-center text-center">Need a quick financial hand? Apply with us where:
          <messages />
        </h1>
      </div>
      
      <div class="w-full h-full flex items-end">
        <homeNav />
      </div>
    
    </div>
  </main>
</template>

<script setup>
  import homeNav from '@/components/homeNav.vue';
  import messages from '@/components/messages.vue';
</script>