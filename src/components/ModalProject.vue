<script lang="ts" setup>
import { X, Images, ChevronRight, ChevronLeft, Code, ExternalLink } from '@lucide/vue';
import type { Project } from '@/interfaces';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const emit = defineEmits(['close'])

const props = defineProps<{
    project: Project
}>()

const currentImageIndex = ref(0)

function changeIndex(n : number){
    const index = computed(()=> currentImageIndex.value + 1)
    const total = props.project.imagesProject.length

    if(n == 1 && index.value < total )
        currentImageIndex.value += 1
    
    if(n == -1 && index.value > 1)
        currentImageIndex.value -= 1    
    
}

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
        <div class="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl z-10 min-h-96 bg-white dark:bg-neutral-950">
            
            <!-- imagem -->
            <section class="relative h-56 md:h-64 w-full bg-neutral-900 overflow-hidden shrink-0 group/banner select-none">

                <button
                @click="emit('close')"
                class="absolute top-4 right-4 p-2 rounded-full borderbg-white bg-white dark:bg-neutral-800 border-neutral-200 dark:border-0 hover:bg-neutral-100 hover:dark:bg-neutral-600 transition-colors duration-300 z-20">
                 <X :size="16"/>
                </button>
                <img :src="project.imagesProject[currentImageIndex]" alt="" class=" absolute inset-0 w-full h-full object-cover">

                <!-- <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 pointer-events-none"> </div> -->

                <div class="absolute top-3 left-3 flex items-center gap-2 z-20">
                    <div class="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white dark:bg-neutral-800 backdrop-blur-md text-xs font-medium">
                        <Images :size="16" class="text-cyan-700" />
                        <span> {{ currentImageIndex + 1 }} / {{ project.imagesProject.length }}</span>
                    </div>

                    <!-- <div class="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white dark:bg-neutral-800 backdrop-blur-md text-xs font-medium">
                        <Images :size="16" class="text-cyan-700" />
                        <span> {{ currentImageIndex + 1 }} / {{ project.imagesProject.length }}</span>
                    </div> -->
                </div>

                
                <button v-if="project.imagesProject.length" @click="changeIndex(1)"
                class="btn-change-index right-3 ">
                    <ChevronRight />
                </button>

                <button v-if="project.imagesProject.length" @click="changeIndex(-1)"
                class="btn-change-index left-3">
                    <ChevronLeft />
                </button>
                
            </section>

            <!-- content -->
            <section class="grid grid-cols-1 pt-5 ps-5 pe-5 pb-5 gap-y-5">
                <section>
                    <small class="uppercase font-medium text-xs text-neutral-500" >{{ project.category }}</small>
                    <h1 class="text-cyan-700 font-bold text-xl">{{ project.title }}</h1>

                </section>

                <section>
                    <p>
                        {{ project.description }}
                    </p>

                </section>

                <section v-if="project.tags">
                    <h4 class="font-semibold text-xs text-neutral-400 dark:text-neutral-500 mb-2 uppercase tracking-wide">
                        Tecnologias Utilizadas
                    </h4>

                    <div class="flex flex-wrap gap-1.5">
                        <span v-for="tag in project.tags"
                        class="text-[10px] border px-2.5 py-1 rounded-lg dark:bg-neutral-900 dark:border-neutral-800"
                        >
                        {{ tag }}
                    </span>
                    </div>
                </section>

            </section>

            <section class="grid md:grid-cols-2 grid-cols-1 pe-3 ps-3 gap-x-5 mb-1">
                    <a v-if="project.links.project" 
                    :href="project.links.project"
                    target="_blank"
                    class="external-links ">
                        <Code :size="18"/>
                        Repositório
                    </a>
                    <a v-if="project.links.demo" 
                    :href="project.links.demo"
                    target="_blank"
                    class="external-links">

                        <ExternalLink :size="18"/>
                        Demo
                    </a>
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


button, a{
    @apply cursor-pointer
}

.btn-change-index{
    @apply absolute top-1/2 rounded-full bg-white dark:bg-neutral-800 p-1 hover:dark:bg-neutral-600 transition-colors duration-300 
}
</style>