<template>

    <nav class="homeNav w-full h-4/5 flex flex-row justify-center items-center gap-14">
        <div class="flex flex-col justify-center items-center" @mouseover="infoClass = 'translate-y-1 opacity-100 transition-all'" @mouseleave="infoClass = '-translate-y-1 opacity-0 transition-all'">
            <div class="bg-white w-20 max-md:w-14 max-md:h-14 h-20 rounded-full shadow-lg flex justify-center items-center cursor-pointer">
                <RouterLink to="/info"><font-awesome-icon icon="info-circle" class="text-blue-600 text-4xl max-md:text-2xl"/></RouterLink>
            </div>
            <p class="text-xl text-white transition-all hover:" :class="infoClass">More info</p>
        </div>
        
        <div class="flex flex-col justify-center items-center overflow-y-hidden">
            <div class="bg-white w-20 max-md:w-14 max-md:h-14 h-20 overflow-y-hidden rounded-full shadow-lg flex justify-center items-center cursor-pointer" @mouseover="applyClass = 'translate-y-1 opacity-100 transition-all'" @mouseleave="applyClass = '-translate-y-1 opacity-0 transition-all'">
                <RouterLink to="/apply"><font-awesome-icon icon="pen" class="text-blue-600 text-2xl max-md:text-lg"/></RouterLink>
            </div>
            <p class="text-xl text-white" :class="applyClass">Apply now</p>
        </div>
    </nav>
    
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue';

    let infoClass = ref("translate-y-1 opacity-100 transition-all")
    let applyClass = ref("-translate-y-1 opacity-0 transition-all")
</script>