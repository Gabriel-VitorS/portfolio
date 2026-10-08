<script setup lang="ts">
import BtnBack from '@/components/BtnBack.vue';
import DivGlow from '@/components/ux/DivGlow.vue';
import Container from '@/components/Container.vue';
import { Building2 } from '@lucide/vue';

import {EXPERIENCES} from '@/data/experiences'

</script>

<template>

    <Container>

        <div class="md:col-start-2 md:col-span-10 col-span-full flex flex-wrap justify-between items-center content-center z-10">
            <BtnBack class="sm:mb-0 mb-5" />

            <div>
                <h1 class="font-bold text-2xl text-cyan-700 mb-0.5 ">Sobre mim</h1>
                <small class="text-neutral-500 text-sm">Sonho, experiências e hobbies</small>
            </div>
        </div>
        
        <section class="col-span-full gap-x-3.5 mb-7 mt-7 grid grid-cols-12 gap-y-5 max-w-5xl mx-auto">

            <div class="px-5 md:col-span-6 col-span-full">

                <div class="border-t uppercase mb-2 pt-1 border-neutral-400 text-neutral-400">
                    resumo
                </div>
                <p class="text-xl font-light">
                    Com 26 anos (e contando) formado em Técnico em Design Gráfico, hoje em busca da minha formação em Análise e Desenvolvimento de Sistemas. 
                    Acredito que a tecnologia e a estética devem caminhar juntas para criar boas experiências digitais.
                    Sou movido pela curiosidade e buscando sempre pelo novo.
                    Quando não estou programando ou criando layouts/posts, estou em cima da uma bicicleta ou registrando o mundo através do meu celular. 
                    Meu objetivo é unir minha carreira e o meu sonho de viajar pelo mundo, explorando novas culturas e paisagens.
                </p>
            </div>

            <div class="px-5 md:col-span-6 col-span-full">
                <div class="border-t border-neutral-400 text-neutral-400 uppercase mb-2 pt-1">
                    Experiência
                </div>

                <div v-for="experience in EXPERIENCES" class="border rounded-xl bg-white/30 dark:bg-black/40 border-neutral-200 dark:border-neutral-800 duration-200 hover:bg-cyan-700/5 hover:border-cyan-700 p-6 mb-4">
                    <h2 class="mb-2 font-display text-lg font-bold text-cyan-700">
                        {{ experience.job }}
                    </h2>

                    <p class="flex items-center justify-normal text-sm mb-2 text-neutral-700 dark:text-neutral-300">
                        <Building2 :size="18" class="me-2" /> <span> {{ experience.company }} - {{ experience.time }} </span> 
                    </p>

                    <p class="text-sm text-neutral-700 dark:text-neutral-300">
                        {{ experience.resume }}
                    </p>
                </div>

            </div>
        </section>
    </Container>


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