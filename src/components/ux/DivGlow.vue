<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
}

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
})

const theme = useThemeStore()


// onUnmounted(() => {
//   window.removeEventListener('mousemove', handleMouseMove)
// })


</script>

<template>
    <div class="fixed md:block hidden h-130 w-130 blur-[250px] pointer-events-none z-0 bg-cyan-700/50"
     :style="{top: `${mouseY}px`, left: `${mouseX}px`, transform: `translate(-50%, -50%)`}" ></div>

    <div class="fixed md:hidden block h-100 w-100 blur-[250px] pointer-events-none z-0 left-2/3 top-2/12 bg-cyan-700/50"></div>
</template>

<style scoped>

</style>