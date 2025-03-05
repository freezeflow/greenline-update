<template>
  <generalNav />
  <div>
    <div class="how-to w-full overflow-x-hidden pt-20 flex flex-col justify-between items-center">
      <h1 class="text-center text-white text-4xl max-md:text-xl">How to apply</h1>
      <div class="w-full h-full flex flex-row gap-5 max-md:flex-col md:justify-between items-center">
        <div class="info_div max-md:pb-3 max-md:w-4/5 max-md:border max-md:border-x-0 max-md:border-t-0 md:mt-5 md:ml-5 md:w-2/6 md:flex flex-col justify-center items-center">
          <div class="md:mb-3" v-if="width >= 786" >
              <div class="shadow-xl w-20 h-20 bg-white rounded-full flex justify-center items-center"><font-awesome-icon :icon="['fas', 'calculator']" class="text-blue-500 lg:text-lg" /></div>
          </div>

          <div class="flex flex-row gap-1 lg:text-2xl">
              <h2 class="max-md:text-center max-md:w-full">Loan <span class="text-white">calculator</span></h2>
          </div>
          <div class="md:w-full w-4/5 flex flex-row justify-between items-center gap-2 ml-5 md:ml-10">
              
              <div class="w-full min-h-32">
                  <div class="flex flex-row">
                      <ul class="flex flex-col gap-2 mt-3 list-disc">
                          <li class="text-sm"><p>Feel free to use the loan calculator on our apply page to guage how much is convenient for you</p></li>
                          <div v-if="width < 785 ">
                            <li><div class="shadow-xl w-10 h-10 bg-white rounded-full flex justify-center items-center"><font-awesome-icon :icon="['fas', 'calculator']" class="text-blue-500 text-sm" /></div></li>
                          </div>
                      </ul>
                  </div>
              </div>
          </div>
        </div>

        <div class="info_div max-md:pb-3 max-md:w-4/5 max-md:border max-md:border-x-0 max-md:border-t-0 md:mt-5 md:ml-5 md:w-2/6 md:flex flex-col justify-center items-center">
          <div class="md:mb-3" v-if="width >= 786" >
              <div class="shadow-xl w-20 h-20 bg-white rounded-full flex justify-center items-center"><font-awesome-icon :icon="['fas', 'id-card']" class="text-blue-500 lg:text-lg" /></div>
          </div>

          <div class="flex flex-row gap-1 lg:text-2xl">
              <h2 class="max-md:text-center max-md:w-full">What You Need <span class="text-white">To Apply</span></h2>
          </div>
          <div class="md:w-full w-4/5 flex flex-row justify-between items-center gap-2 ml-5 md:ml-10">
              
              <div class="w-full md:h-32">
                  <div class="flex flex-row">
                      <ul class="flex flex-col gap-2 mt-3 list-disc">
                          <li class="text-sm"><p>3 Months latest bank statement for 1st time clients</p></li>
                          <li class="text-sm"><p>1 Month latest bank statement for existing clients</p></li>
                          <li class="text-sm"><p>Id copy</p></li>
                          <li class="text-sm"><p>Latest payslip</p></li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>

        <div class="info_div max-md:pb-3 max-md:w-4/5 max-md:border max-md:border-x-0 max-md:border-t-0 md:ml-0 md:w-2/6 ml-5 md:flex flex-col justify-center items-center md:mt-5">
          <div class="mb-3" v-if="width > 786">
              <div class="shadow-xl w-20 h-20 bg-white rounded-full flex justify-center items-center"><font-awesome-icon :icon="['fas', 'pen']" class="text-blue-500 text-lg md:tex-2xl" /></div>
          </div>

          <div class="flex flex-row gap-1 lg:text-2xl">
              <h2 class="md:ml-6 max-md:text-center max-md:w-full">After You <span class="text-white">Apply</span></h2>
          </div>
          
          <div class="flex flex-row md:h-32 justify-between max-md:items-center ml-5">
              <div class="md:w-full md:mt-4 w-3/5">
                  <div class="flex flex-row">
                      <ul class="flex flex-col gap-3 list-disc">
                          <li class="text-sm"><p>Loan approval within 24 hours</p></li>
                          <li class="text-sm"><p>We will contact you via email or message</p></li>
                      </ul>
                  </div>
              </div>
          </div> 
        </div>
      </div>
    </div>
    <div class="info-background absolute w-full h-screen flex items-center">
      <h1 class="absolute top-28 max-md:top-14 text-center w-full text-4xl max-md:text-xl">Why apply with us?</h1>
      <div class="info w-full h-screen flex flex-row max-md:flex-col md:justify-center items-center max-md:gap-6 max-md:pt-32 gap-10">
        <div class="gap-4 border w-1/3 md:h-52 max-md:w-full max-md:border-0 border-y-0 border-l-0 border-white flex flex-col justify-start items-center px-4">
          <div class="shadow-lg max-md:w-14 max-md:h-14 w-20 h-20 rounded-lg bg-white flex justify-center items-center">
            <font-awesome-icon :icon="['fas', 'clock']" class="text-blue-500 text-2xl" />
          </div>
          <h1 class="text-lg">Quick process</h1>
          <h2 class="text-center max-md:text-sm">We have a <span class="text-green-500">quick</span> and <span class="text-green-500">secure</span> loan process</h2>
        </div>
        <div class="gap-4 border w-1/3 md:h-52 max-md:w-full max-md:border-0 border-y-0 border-l-0 border-white flex flex-col justify-start items-center px-4">
          <div class="shadow-lg max-md:w-14 max-md:h-14 w-20 h-20 rounded-lg bg-white flex justify-center items-center">
            <font-awesome-icon :icon="['fas', 'coins']" class="text-blue-500 text-2xl" />
          </div>
          <h1 class="text-lg">Affordable rate</h1>
          <h2 class="text-center max-md:text-sm">An advantage of applying with us is the low rate at <span class="text-green-500">25%</span></h2>
        </div>
        <div class="gap-4 w-1/3 md:h-52 max-md:w-full flex flex-col justify-start items-center px-4">
          <div class="shadow-lg max-md:w-14 max-md:h-14 w-20 h-20 rounded-lg bg-white flex justify-center items-center">
            <font-awesome-icon :icon="['fas', 'handshake']" class="text-blue-500 text-2xl" />
          </div>
          <h1 class="text-lg">Trust</h1>
          <h2 class="text-center max-md:text-sm">We pride ourselves on the <span class="text-green-500">trust</span> our customers have in our services</h2>
        </div>
      </div>
      <div class="applyNow-btn absolute rounded-lg">
        
        <button class="p-2 max-md:text-xs rounded-lg">
          <RouterLink to="/apply">
            Apply now
          </RouterLink>
        </button>
      </div>
    </div>
  </div>
  
  <div class="contact overflow-x-hidden w-full flex flex-row max-md:flex-col justify-between absolute md:pl-10">
    <div class="contact-links flex flex-col justify-center md:items-center max-md:pl-2">
      <h1 class="lg:text-4xl text-lg text-white md:text-3xl md:flex flex-col max-md:text-center absolute max-md:top-16 top-28 w-full max-md:left-0 max-md:px-2 left-14">For more information please send us an email <span>or:</span></h1>
      <div class="flex flex-col max-md:gap-10 gap-20 items-start">
        <div class="flex flex-row justify-center items-center gap-3">
          <div class="max-md:w-10 max-md:h-10 w-16 h-16 bg-white rounded-lg flex justify-center items-center">
            <font-awesome-icon :icon="['fa', 'phone']" class="text-blue-500 text-2xl max-sm:text-lg" />
          </div>
          <h3 class="text-white text-2xl max-md:text-lg">081 866 9984</h3>
        </div>
        <div class="flex flex-row justify-center items-center gap-3">
          <div class="max-md:w-10 max-md:h-10 w-16 h-16 bg-white rounded-lg flex justify-center items-center">
            <font-awesome-icon :icon="['fa', 'envelope']" class="text-blue-500 text-2xl max-sm:text-lg" />
          </div>
          <h3 class="text-white text-2xl max-md:text-lg">greenlinefin@gmail.com</h3>
        </div>
      </div>
    </div>
    
    <div class="contact-email w-3/5 bg-blue-500 max-md:w-full md:rounded-l-full flex justify-center items-center">
      <form action="" class="w-3/5 flex flex-col gap-4">
        <div class="flex flex-col">
          <label for="email" class="text-white text-lg">Email:</label>
          <input type="email" id="email" placeholder="expample@gmail.com" class="p-1 rounded-lg">
        </div>

        <div class="flex flex-col ">
          <label for="subject" class="text-white text-lg">Subject:</label>
          <textarea name="subject" id="subject" class="rounded-lg h-20"></textarea>
        </div>
        
        <div class="w-full">
          <button class="bg-white p-1 w-20 rounded-lg">Send</button>
        </div>
        
      </form>
    </div>
  </div>
</template>

<script setup>
  import generalNav from '@/components/generalNav.vue';
  import { useWindowSize } from '@vueuse/core';
  import { RouterLink } from 'vue-router';

  let {width, height} = useWindowSize()

</script>