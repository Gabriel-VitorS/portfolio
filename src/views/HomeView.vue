<script setup lang="ts">
import DivGlow from '@/components/ux/DivGlow.vue';
import { useThemeStore } from '@/stores/theme';
import { Folder, Mail, Moon, Sun, User, PenTool, ArrowRight } from '@lucide/vue';
import { ref } from 'vue';
import IconAngular from '@/components/icons/IconAngular.vue';
import IconAdonis from '@/components/icons/IconAdonis.vue';
import IconCorel from '@/components/icons/IconCorel.vue';
import IconFigma from '@/components/icons/IconFigma.vue';
import IconJs from '@/components/icons/IconJs.vue';
import IconLaravel from '@/components/icons/IconLaravel.vue';
import IconPs from '@/components/icons/IconPs.vue';
import IconPhp from '@/components/icons/IconPhp.vue';
import IconTs from '@/components/icons/IconTs.vue';
import IconVue from '@/components/icons/IconVue.vue';
import Container from '@/components/Container.vue';
import ModalContact from '@/components/ModalContact.vue';

const theme = useThemeStore()

const iconSize = ref(35)
const enabled = ref(false)

const openModal = ref(false)



const skills = [
    {name: 'Typescript', icon: IconTs, w: 30, h:30},
    {name: 'Javascript', icon: IconJs, w: 30, h:30},
    {name: 'VueJS', icon: IconVue, w: 30, h:30},
    {name: 'Angular', icon: IconAngular, w: 30, h:30},
    {name: 'Adonis', icon: IconAdonis, w: 30, h:30},
    {name: 'Laravel', icon: IconLaravel, w: 30, h:30},
    {name: 'PHP', icon: IconPhp, w: 30, h:30},
    {name: 'Photoshop', icon: IconPs, w: 30, h:30},
    {name: 'Figma', icon: IconFigma, w: 30, h:30},
    {name: 'Corel', icon: IconCorel, w: 30, h:30},
]


</script>

<template>
    <Container>
        <RouterLink to="/projetos" class="card md:col-span-8 col-span-full transition-all ease-in h-100 text-neutral-500 flex flex-col flex-nowrap justify-between">
            <div>
                
                <Folder :size="iconSize" class="text-cyan-700 mb-3.5" />
                <h1>Projetos Recentes</h1>
                <small class="text-xs">Um pouco do que ando brincando e estudando</small>

            </div>

            <div class="flex justify-between">
                <small class="text-xs ">Um pouco do que ando brincando e estudando</small>
                <ArrowRight :size="14" />
            </div>
        </RouterLink>
        
        <div class="md:col-span-4 col-span-full z-20 grid grid-cols-4 gap-x-6 gap-y-6"> 
            <div class="card h-47 md:col-span-full sm:col-span-2 col-span-full" @click="openModal = true">
                <Mail :size="iconSize" class="text-cyan-700 mb-3.5" />
                <h1>Contato</h1>
            </div>

            <div class="card h-47 md:col-span-full sm:col-span-2 col-span-full" @click="theme.toggle">
                <div class="flex justify-between">
                    <Moon :size="iconSize" class="text-cyan-700 mb-3.5" />

                    <div class=" h-6 w-12 rounded-full bg-neutral-500 relative" :class="{'bg-cyan-700!': theme.isDark}" @click="theme.toggle">
                        <div class="bg-white rounded-full w-5 h-5 absolute top-0.5 left-0.5 transition-all duration-300" :class="{'translate-x-6': theme.isDark}"></div>
                    </div>
                </div>

                <h1>Modo Escuro</h1>
            </div>
        </div>

        <RouterLink to="/sobre" class="card md:col-span-6 col-span-full z-20 transition-all ease-in h-100 text-neutral-500 flex flex-col flex-nowrap justify-between">
            <div>

                <User :size="iconSize" class="text-cyan-700 mb-3.5" />
                <h1>Sobre mim</h1>
                <small class="text-xs">Sonho, experiências e hobbies</small>
                
            </div>

            <div class="flex justify-between">
                <small class="text-xs ">Um pouco do que ando brincando e estudando</small>
                <ArrowRight :size="14" />
            </div>
        </RouterLink>

        <div class="card md:col-span-6 col-span-full  z-20 transition-all ease-in h-100 overflow-auto cursor-auto!">

            <PenTool :size="iconSize" class="text-cyan-700 mb-3.5" />
            <h1>Habilidades</h1>

            <section class="flex flex-wrap gap-x-4 gap-y-4">

                <div class="w-18.25 h-20.25 bg-cyan-700/10 rounded-lg flex flex-col justify-center items-center" v-for="skill in skills">

                    <component :is="skill.icon" :w="skill.w" :h="skill.h" />
                    
                    <p class="text-xs text-neutral-700 font-semibold dark:text-neutral-500 mt-2">{{ skill.name }}</p>
                </div>

            </section>
        </div>
        
    </Container>
    <DivGlow />

    <ModalContact v-if="openModal" @close="openModal = false" />
</template>

<style scoped>
@reference '@/css/main.css';

.card {
    @apply border rounded-3xl bg-white/30 dark:bg-black/40 border-neutral-200 dark:border-neutral-800 hover:scale-[102%] cursor-pointer
     duration-200 hover:bg-cyan-700/5 hover:border-cyan-700 py-10 px-7 z-20
}

h1{
   @apply font-bold text-2xl text-cyan-700 mb-3.5 
}

</style>
