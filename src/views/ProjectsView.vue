<script setup lang="ts">
import BtnBack from '@/components/BtnBack.vue';
import DivGlow from '@/components/ux/DivGlow.vue';
import { ref } from 'vue';
import { ALL_PROJECTS_DESIGN } from '@/data/projects-design';
import { ALL_PROJECTS_WEB } from '@/data/projects-code';
import Container from '@/components/Container.vue';
import ModalProject from '@/components/ModalProject.vue';
import type { Project } from '@/interfaces';

const selectedCategory = ref<'all' |'code' | 'design'>('all')

const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'code', label: 'Programação' },
    { id: 'design', label: 'Design' }
]

const projects = ref([...ALL_PROJECTS_WEB])

function selectFilter(id: string){
    selectedCategory.value = id as any

    if(selectedCategory.value == 'code')
        projects.value = [...ALL_PROJECTS_WEB]
    else if (selectedCategory.value == 'design')
        projects.value = [...ALL_PROJECTS_DESIGN]
    else
        projects.value = [...ALL_PROJECTS_WEB, ...ALL_PROJECTS_DESIGN]
}

const selectedProject = ref<null | Project>(null)

function closeModal(){

    selectedProject.value = null
}

</script>

<template>

    <Container>

        <div class="md:col-start-2 md:col-span-10 col-span-full flex flex-wrap justify-between items-center content-center z-10">
            <BtnBack class="sm:mb-0 mb-5" />

            <div>
                <h1 class="font-bold text-2xl text-cyan-700 mb-0.5 ">Projetos recentes</h1>
                <small class="text-neutral-500 text-sm">Um pouco do que ando brincando e estudando</small>
            </div>
        </div>
        
        <!-- <section class="md:col-start-2 md:col-span-10 col-span-full text-sm flex gap-x-3.5 mb-7 flex-wrap">

            <button v-for="category in categories" @click="selectFilter(category.id)" :class="{'selected-filter': selectedCategory == category.id}">{{ category.label }}</button>
        </section> -->

        <section class="sm:col-start-2 sm:col-span-10 col-span-full grid grid-cols-1 md:grid-cols-2 gap-6">

            <div @click="selectedProject = project" class="group border border-neutral-200 dark:border-neutral-800 hover:scale-[102%] hover:border-cyan-700 z-10 rounded-3xl cursor-pointer transition-all duration-300 " v-for="project in projects">
                <div class="h-59 overflow-hidden relative rounded-t-3xl" >
                    <img :src="project.imageThumb" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">

                </div>
                <div class="h-23.25 rounded-b-3xl dark:bg-black/40 ps-6 pe-6 pt-4">
                    <small class="uppercase text-xs text-neutral-500 font-bold">{{ project.category }}</small> <br>
                    <p class="text-cyan-700 font-bold text-xl"> {{ project.title }}</p>

                </div>
            </div>
        </section>
    </Container>

    <ModalProject v-if="selectedProject" @close="closeModal" :project="selectedProject" />

    <DivGlow /> 
</template>

<style lang="css" scoped>
@reference '@/css/main.css';

.selected-filter{
    @apply bg-cyan-700 text-white hover:bg-cyan-600! dark:hover:bg-cyan-600! border-cyan-700!
}

button{
    @apply cursor-pointer bg-white text-neutral-950 dark:bg-neutral-800 dark:text-white border border-neutral-200 dark:border-0 z-10 ps-5 pe-5 py-2 px-2
    hover:bg-neutral-100 hover:dark:bg-neutral-600 transition-colors duration-300 rounded-xl font-semibold sm:mb-0 mb-5;
}
</style>