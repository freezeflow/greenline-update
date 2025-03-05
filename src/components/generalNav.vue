<template>
    <nav class="fixed overflow-hidden z-50 w-full h-10 bg-white shadow-lg flex flex-row justify-between items-center">
      <div class="w-40 p-2">
        <img src="../assets/images/greenline logo.svg" alt="" class="h-8">
      </div>
      <div class="p-6">
        <ul class="flex flex-row gap-8 justify-center items-center" v-if="width >= 768">
          <router-link to="/info"><il :class="route === 'info'? 'nav-routsBG transition-all': ''">More info</il></router-link>
          <router-link to="/apply"><il :class="route === 'apply'? 'nav-routsBG transition-all': ''">Apply</il></router-link>
          <router-link to="/"><il><font-awesome-icon icon="sign-out"/></il></router-link>
        </ul>
        <ul class="flex flex-row gap-4 justify-center items-center" v-else>
          <router-link to="/info"><font-awesome-icon icon="info-circle" class="text-lg" :class="route === 'info'? 'nav-routsBG transition-all': 'text-blue-600'"/></router-link>
          <router-link to="/apply"><font-awesome-icon icon="pen" class="text-blue-600 text-lg" :class="route === 'apply'? 'nav-routsBG transition-all': 'text-blue-600'" /></router-link>
          <router-link to="/"><font-awesome-icon icon="sign-out" class="text-blue-600 text-lg"/></router-link>
        </ul>
      </div>
    </nav>
</template>

<script setup>
    import { useWindowSize } from '@vueuse/core';
    import { useRoute, RouterLink} from 'vue-router';

    let {width, height } = useWindowSize()

    const router = useRoute()
    let route = router.name
</script>











1
1q
q 
aqaqwqqwa