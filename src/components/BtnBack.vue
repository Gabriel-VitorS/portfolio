<script lang="ts" setup>
import { ArrowLeft } from '@lucide/vue';
</script>

<template>
    <RouterLink to="/"
        class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-0 px-2 py-2 rounded-3xl pe-7 ps-7 text-sm flex hover:bg-neutral-100 hover:dark:bg-neutral-600 transition-colors duration-300">
        <ArrowLeft :size="16" class="me-2 mt-0.5 group-hover:-translate-x-1.5 transition-transform duration-300" />                
        Voltar
    </RouterLink>
    
</template>