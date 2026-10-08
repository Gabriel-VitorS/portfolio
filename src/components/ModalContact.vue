<script lang="ts" setup>
import { X, Images, ChevronRight, ChevronLeft, Code, ExternalLink, Mail } from '@lucide/vue';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import IconGitHub from './icons/IconGitHub.vue';
import IconLinkedIn from './icons/IconLinkedIn.vue';

const emit = defineEmits(['close'])


const currentImageIndex = ref(0)

onMounted(()=>{
    document.getElementsByTagName('body')[0]!.classList.add('overflow-hidden')
})

onBeforeUnmount(()=>{
    document.getElementsByTagName('body')[0]!.classList.remove('overflow-hidden')
})

</script>

<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center sm:p-4 p-2 dark:text-white">
        <!-- backtrop -->
        <div class="absolute inset-0 bg-neutral-950/65 backdrop-blur-sm" @click="emit('close')"></div>

        <!-- modal -->
        <div class="relative w-full max-w-2xs rounded-3xl overflow-hidden shadow-2xl z-10  bg-white dark:bg-neutral-950">
            
            <!-- top -->
            <section class="relative w-full flex justify-between items-center mt-2">

                <h1 class="ml-5 mt-2">Contato</h1>

                <button
                @click="emit('close')"
                class=" mr-5 p-2 rounded-full borderbg-white bg-white dark:bg-neutral-800 border-neutral-200 dark:border-0 hover:bg-neutral-100 hover:dark:bg-neutral-600 transition-colors duration-300 z-20">
                 <X :size="16"/>
                </button>


            </section>

            <!-- content -->
            <section class="grid grid-cols-1 pt-5 ps-5 pe-5 pb-5 gap-y-2">
                <a class="section-links" target="_blank" href="https://github.com/Gabriel-VitorS">
                    <IconGitHub :h="25" :w="25" />
                    <p>GitHub</p>
                </a>

                <a class="section-links" target="_blank" href="https://www.linkedin.com/in/gabriel-vitors/">
                    <IconLinkedIn :h="25" :w="25"  />
                    <p>LinkedIn</p>
                </a>

                <a class="section-links" href="mailto:gabrielvitordasilva@gmail.com">
                    <Mail :size="25" class="text-gray-950 dark:text-gray-50" />
                    <p>E-mail</p>
                </a>

            </section>

            <section class="grid md:grid-cols-2 grid-cols-1 pe-3 ps-3 gap-x-5 mb-1">

            </section>


        </div>
    </div>
</template>

<style scoped>
@reference '@/css/main.css';

.external-links{
    @apply min-w-30 flex-1 min-w-[120px] text-center mb-3 flex justify-center gap-5 rounded-xl py-2.5 px-4 font-bold text-sm items-center 
    bg-neutral-300 dark:bg-neutral-900 hover:bg-cyan-700 transition-colors duration-300 hover:text-white
}

h1{
   @apply font-bold text-2xl text-cyan-700 mb-3.5 
}

button, a{
    @apply cursor-pointer
}

.btn-change-index{
    @apply absolute top-1/2 rounded-full bg-white dark:bg-neutral-800 p-1 hover:dark:bg-neutral-600 transition-colors duration-300 
}

.section-links{
    @apply cursor-pointer w-full rounded-md h-10 flex items-center justify-normal gap-3 ps-2
    bg-neutral-300 dark:bg-neutral-900 hover:bg-cyan-700 transition-colors duration-300 hover:text-white
}

p{
    @apply font-semibold
}
</style>