<template>
    <generalNav />
    <div class="apply w-full h-screen flex justify-center items-center">
        <div class="form-container h-4/5 w-3/5 max-md:w-4/5 rounded-2xl">
            <form action="" class="apply-form border overflow-x-hidden shadow-xl w-full h-full flex flex-row justify-center items-center rounded-2xl">
                <div class="apply-general flex flex-col gap-5 w-3/5 max-md:w-4/5 pb-9 transition-all" v-show="formInputStage === 'general'">
                    <div class="flex flex-col">
                        <label for="" class="text-white max-md:text-sm">Name</label>
                        <input v-model="formInput.name" type="text" class="h-8 max-md:h-6 bg-white rounded-lg max-md:rounded outline-none p-2">
                        <p v-if="formError.name" class="text-red-500 text-sm text-center">*{{ formError.name }}</p>
                    </div>
                    <div class="flex flex-col">
                        <label for="" class="text-white max-md:text-sm">Email</label>
                        <input v-model="formInput.email" type="text" class="h-8 max-md:h-6 bg-white rounded-lg max-md:rounded outline-none p-2" placeholder="example@gmail.com">
                        <p v-if="formError.email" class="text-red-500 text-sm text-center">*{{ formError.email }}</p>
                    </div>
                    <div class="flex flex-col">
                        <label for="" class="text-white max-md:text-sm">Mobile Number</label>
                        <input v-model="formInput.mobileNumber" type="text" class="h-8 max-md:h-6 bg-white rounded-lg max-md:rounded outline-none p-2" placeholder="081 / 264 81">
                        <p v-if="formError.mobileNumber" class="text-red-500 text-sm text-center">*{{ formError.mobileNumber }}</p>              
                    </div>
                    <div class="flex flex-col">
                        <label for="" class="text-white max-md:text-sm">Amount</label>
                        <input v-model="formInput.amount" type="number" class="h-8 max-md:h-6 bg-white rounded-lg max-md:rounded outline-none p-2" placeholder="N$ 500-3000">
                        <p v-if="formError.amount" class="text-red-500 text-sm text-center">*{{ formError.amount }}</p>
                    </div>
                    <div class="flex flex-col">
                        <label for="" class="text-white max-md:text-sm">Installments</label>
                        <input v-model="formInput.installments" type="number" class="h-8 max-md:h-6 bg-white rounded-lg max-md:rounded outline-none p-2" placeholder="1-5 Months">
                        <p v-if="formError.installments" class="text-red-500 text-sm text-center">*{{ formError.installments }}</p>
                    </div>
                </div>
                <div class="apply-files flex flex-col gap-5 w-3/5" v-show="formInputStage === 'files'">
                    <div class="inputDivfile">
                        <label for="id" class="border border-white rounded text-center h-8 max-md:h-6 flex flex-row gap-3 justify-center items-center text-white"><font-awesome-icon icon="upload" class="text-blue-600"/> {{ idLabel }}</label>
                        <input class="w-full h-full opacity-0 cursor-pointer" type="file" id="id" @change="validateFile($event, 'id')">
                        <p v-if="formError.id" class="text-red-500 text-sm text-center">{{ formError.id }}</p>
                    </div>
                    <div class="inputDivfile">
                        <label for="bankStatement" class="border border-white rounded text-center h-8 max-md:h-6 flex flex-row gap-3 justify-center items-center text-white"><font-awesome-icon icon="upload" class="text-blue-600"/> {{ bankStatementLabel }}</label>
                        <input class="w-full opacity-0 cursor-pointer" type="file" id="bankStatement" @change="validateFile($event, 'bankStatement')">
                        <p v-if="formError.bankStatement" class="text-red-500 text-sm text-center">{{ formError.bankStatement }}</p>
                    </div>
                    <div class="inputDivfile">
                        <label for="payslip" class="border border-white rounded text-center h-8 max-md:h-6 flex flex-row gap-3 justify-center items-center text-white"><font-awesome-icon icon="upload" class="text-blue-600"/> {{ payslipLabel }}</label>
                        <input class="w-full h-full opacity-0 cursor-pointer" type="file" id="payslip" @change="validateFile($event, 'payslip')">
                        <p v-if="formError.payslip" class="text-red-500 text-sm text-center">{{ formError.payslip }}</p>
                    </div>
                </div>
                <div v-if="formInputStage === 'loading'" class="form-loader flex flex-row gap-28">
                    <div class="circle1 w-16 h-16 rounded-full border-2 border-white"></div>
                    <div class="circle2 w-16 h-16 rounded-full border-2 border-white"></div>
                    <div class="circle3 w-16 h-16 rounded-full border-2 border-white"></div>
                </div>
                <div v-show="formInputStage === 'message'" class="">
                    <p class="flex flex-col justify-center items-center"><span class="text-xl">Thank you for applying for a loan with us</span> We will contact you within 48 hours, and feel free to send us an email: <span class="text-blue-900">greenline@gmail.com <span class="text-black">or dail our number:</span> 081 866 9984 <span class="text-black">if you need any help</span></span></p>
                </div>
            </form>
        </div>
        
        <div class="apply-control absolute w-2/5 max-md:w-4/5 px-9 flex flex-row justify-between items-center">
            <div v-show="formInputStage === 'general' || formInputStage === 'files'" class="flex flex-row gap-5 max-md:gap-2">
                <div class="general-ind w-6 h-6 max-md:w-4 max-md:h-4 rounded-full border-2 border-blue-500" :class="formInputStage === 'general'? 'bg-blue-500' : ''"></div>
                <div class="files-ind w-6 h-6 max-md:w-4 max-md:h-4 rounded-full border-2 border-blue-500" :class="formInputStage === 'files'? 'bg-blue-500' : ''"></div>
            </div>
            <div v-show="formInputStage === 'general' || formInputStage === 'files' || formInputStage === 'message'">
                <button v-show="formInputStage === 'general'" class="w-40 max-md:w-20 cursor-pointer bg-blue-500 text-white rounded" @click="validateGeneral">Next</button>
                <div v-show="formInputStage === 'files' || formInputStage === 'message'" class="w-40 flex flex-row max-md:flex-col justify-between max-md:items-end max-md:px-4 max-md:gap-2">
                    <button class="w-16 max-md:w-28 cursor-pointer bg-blue-500 text-white rounded" v-if="formInputStage === 'files'" @click="formInputStage = 'general'">Prev</button>
                    <button class="w-16 max-md:w-28 cursor-pointer bg-green-500 text-white rounded" v-if="formInputStage === 'files'" @click="validateFile">Apply</button>
                    <button class="w-full cursor-pointer bg-green-500 text-white rounded" v-if="formInputStage === 'message'" @click="formInputStage = 'general'">Re-apply</button>
                </div>
            </div>
        </div>
        <div class="absolute calc-openBtn top-20 left-20 z-10" @click="openCalculator = true" v-if="!openCalculator">
            <button class="bg-white rounded-full w-10 h-10 max-md:w-7 max-md:h-7 text-center shadow-xl">
                <font-awesome-icon icon="calculator" class="text-blue-600 text-xl max-md:text-sm"/>
            </button>
        </div>
        <loanCalculator 
        :navOpen="openCalculator" @close="openCalculator = false"
        />
    </div>
</template>

<script setup>
    import generalNav from '@/components/generalNav.vue';
    import loanCalculator from '@/components/loanCalculator.vue';
    import {ref, reactive} from 'vue'

    let formInput = reactive({
        name: '',
        email: '',
        mobileNumber: '',
        amount: '',
        installments: '',
        id: '',
        bankStatement: '',
        payslip: ''
    })

    let formError = reactive({
        name: '',
        email: '',
        mobileNumber: '',
        amount: '',
        installments: '',
        id: '',
        bankStatement: '',
        payslip: ''
    })

    let formInputStage = ref('general')
    let idLabel = ref('Id Copy')
    let bankStatementLabel = ref('Bankstatement')
    let payslipLabel = ref('Payslip')
    let openCalculator = ref(false)

    function validateGeneral(){
        let isValid = true;

        if (!formInput.name) {
            formError.name = 'Field required';
            isValid = false;
        } else {
            formError.name = '';
        }

        if (!formInput.mobileNumber) {
            formError.mobileNumber = 'Field required';
            isValid = false;
        } else if (!isValidMobileNum(formInput.mobileNumber)) {
            formError.mobileNumber = 'Invalid mobile number.';
            isValid = false;
        } else {
            formError.mobileNumber = '';
        }

        if (formInput.email && !isValidEmail(formInput.email)) {
            formError.email = 'Invalid email address.';
            isValid = false;
        } else {
            formError.email = '';
        }

        if (!formInput.amount) {
            formError.amount = 'Field required';
            isValid = false;
        } else if(formInput.amount > 3000 || formInput.amount < 500){
            formError.amount = 'Amount must be between 500 and 3000';
            isValid = false;
        }else{
            formError.amount = '';
        }

        if (!formInput.installments) {
            formError.installments = 'Field required';
            isValid = false;
        } else if(formInput.installments > 5 || formInput.installments < 0){
            formError.installments = 'Installments between 1 and 5';
            isValid = false;
        }else{
            formError.installments = '';
        }

        if(isValid === true){
            formInputStage.value = 'files'
        }

        return isValid;
    }

    const validateFile = (event, field) => {
        const file = event.target.files[0];
        const maxSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes

        if (file) {
            if (file.type === "application/pdf" && file.size <= maxSizeInBytes) {
                switch (field) {
                    case 'id':
                        formInput.id = file;
                        idLabel.value = file.name;
                        formError.id = '';
                        break;
                    case 'bankStatement':
                        formInput.bankStatement = file;
                        bankStatementLabel.value = file.name;
                        formError.bankStatement = '';
                        break;
                    case 'payslip':
                        formInput.payslip = file;
                        payslipLabel.value = file.name;
                        formError.payslip = '';
                        break;
                }
            } else {
                // File is not a PDF or exceeds the size limit
                let errorMessage = '';
                if (file.type !== "application/pdf") {
                    errorMessage = '*File not in PDF format.';
                } else if (file.size > maxSizeInBytes) {
                    errorMessage = 'File size exceeds 2MB.';
                }

                switch (field) {
                    case 'id':
                        formInput.id = null;
                        idLabel.value = 'Id copy';
                        formError.id = errorMessage;
                        break;
                    case 'bankStatement':
                        formInput.bankStatement = null;
                        bankStatementLabel.value = 'Bankstatement';
                        formError.bankStatement = errorMessage;
                        break;
                    case 'payslip':
                        formInput.payslip = null;
                        payslipLabel.value = 'Payslip';
                        formError.payslip = errorMessage;
                        break;
                }
            }
        }else{
            switch (field) {
                case 'id':
                    formError.id = 'Please upload your id copy';
                    break;
                case 'bankStatement':
                    formError.bankStatement = 'Please upload your bankstatement';
                    break;
                case 'payslip':
                    formError.payslip = 'Please upload your payslip';
                    break;
            }
        }
    };

    const isValidMobileNum = (value) => {
        if (value.startsWith('+')) {
            value = value.substring(1);
        }
        const digits = value.replace(/\D/g, '');
        return (digits.length === 10 && digits.startsWith('081')) ||
            (digits.length === 13 && digits.startsWith('26481')) ||
            (digits.length === 10 && digits.startsWith('085')) ||
            (digits.length === 13 && digits.startsWith('26485'));
    };

    const isValidEmail = (value) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(value).toLowerCase());
    };
</script>