<template>
    <div class="text-white text-center relative w-full max-w-md mx-auto overflow-hidden">
        <transition-group name="slide" tag="div" class="relative h-16 flex items-center justify-center w-full">
            <p :key="currentIndex" class="text-2xl max-md:text-lg font-semibold absolute w-full">
                {{ messages[currentIndex] }}
            </p>
        </transition-group>

        <!-- Dots Indicator -->
        <div class="flex justify-center mt-4">
            <span 
                v-for="(message, index) in messages" 
                :key="index" 
                class="w-3 h-3 mx-1 rounded-full cursor-pointer"
                :class="index === currentIndex ? 'bg-white' : 'bg-gray-500'"
                @click="setMessage(index)">
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Messages array
const messages = ref([
    'Interest rates are as low as 25%',
    'You get your answer within 48 hours',
    'The loan process is quick and secure'
]);

// Reactive index for the displayed message
const currentIndex = ref(0);
let interval = null;

// Next message function
const nextMessage = () => {
    currentIndex.value = (currentIndex.value + 1) % messages.value.length;
};

// Set message manually using dots
const setMessage = (index) => {
    currentIndex.value = index;
};

// Start auto-slide
const startAutoSlide = () => {
    interval = setInterval(nextMessage, 3000);
};

// Stop auto-slide
const stopAutoSlide = () => {
    clearInterval(interval);
};

// Start auto-slide when component is mounted
onMounted(() => {
    startAutoSlide();
});

// Cleanup interval when component unmounts
onUnmounted(() => {
    stopAutoSlide();
});
</script>

<style scoped>
/* Transition Animation */
.slide-enter-active, .slide-leave-active {
    transition: transform 0.5s ease-in-out, opacity 0.5s;
}
.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}
.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>
