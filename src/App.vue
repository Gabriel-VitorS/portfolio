<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme.ts';
import { onMounted } from 'vue';

const theme = useThemeStore()

onMounted(()=>{
  theme.init()
})


</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
