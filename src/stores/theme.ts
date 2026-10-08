import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(true)

  function applyTheme() {
    
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  function init() {
    const theme = localStorage.getItem('theme')
    
    if(theme == null)
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')  
    else
      isDark.value = theme === 'dark' ? true : false

    applyTheme()
  }

  function toggle() {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  return { isDark,init, toggle }
})
