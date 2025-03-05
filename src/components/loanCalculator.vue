<template>
    <div class="calculator-nav absolute left-0 top-8 w-96 max-md:w-full" 
        :class="navOpen? 'translate-x-0 transition-all' : '-translate-x-full transition-all'">
        <div class="absolute rounded-full top-10 md:left-80 max-md:right-3 z-10" @click="$emit('close')">
            <button class="bg-gray-100 rounded-full w-10 h-10 text-center shadow-xl">
                <font-awesome-icon icon="arrow-left" class="text-blue-600 text-xl"/>
            </button>
        </div>
        <div class="w-full h-full flex flex-col justify-center items-center gap-2 pt-28">
            <div class="flex flex-col gap-6 justify-center items-center w-full">
                <div class="bg-gray-100 w-4/5 h-32 mt-5 shadow-xl rounded-xl flex justify-center items-center flex-col">
                    <p class="text-center mt-4 text-md">
                        Loan Amount: N${{ amount1 }}
                    </p>
                    <input
                        type="range"
                        min="500"
                        max="3000"
                        step="50"
                        v-model="amount1"
                        class="slider1 w-4/5 mt-12 appearance-none h-2 bg-gray-300 rounded-lg outline-none "
                    />
                </div>
                <div class="bg-gray-100 flex flex-col justify-center items-center w-4/5 h-32 rounded-xl lg:mt-5">
                    <div>
                        <p class="text-center mt-4 text-lg">
                        Repayment terms:
                        </p>
                        <p class="text-center mt-2">
                        {{ months }} Month/s
                        </p>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="5"
                        step="1"
                        v-model="months"
                        class="slider2 w-4/5 mt-5 appearance-none h-2 bg-gray-300 rounded-lg outline-none"
                    />
                </div>
            </div>
            
            <div class="w-screen rounded-md h-20 flex flex-col justify-center items-center">
                <p class="ml-1 text-white">Monthly Installments</p>
                
                <div class="border border-black w-1/6 max-md:w-3/5 h-10 flex items-center rounded-lg">
                    <p class="ml-1 lg:text-lg text-white">N$ {{ installments }}</p>
                </div>
            </div>
            <div class=" flex flex-row">
                <p class="text-white text-center w-full px-3">*Please note, this amount might change once your loan is approved</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, defineProps, defineEmits } from 'vue';

    const amount1 = ref(500);
    const months = ref(1);
    const rate = 0.3;

    const installments = computed(() => {
        if (months.value <= 0) {
            return amount1.value;
        } else {
            const interest = parseFloat(amount1.value) * rate;
            const totalAmount = parseFloat(amount1.value) + interest;
            return  Math.floor(totalAmount / months.value);
        }
    });

    defineEmits(['close'])
    const props = defineProps({
        navOpen: Boolean
    })
</script>