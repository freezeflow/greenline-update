<template>
    <nav class="w-full h-full flex flex-row justify-center items-center gap-5">
        <div class="bg-white w-20 h-20 rounded-full shadow-lg flex justify-center items-center cursor-pointer">
            <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="bg-white w-20 h-20 rounded-full shadow-lg flex justify-center items-center cursor-pointer">
            <RouterLink to="/about"><font-awesome-icon icon="calculator" class="text-blue-600 text-2xl"/></RouterLink>
        </div>
        <div class="bg-white w-20 h-20 rounded-full shadow-lg flex justify-center items-center cursor-pointer">
            <RouterLink to="/about"><font-awesome-icon icon="calculator" class="text-blue-600 text-2xl"/></RouterLink>
        </div>
    </nav>
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>