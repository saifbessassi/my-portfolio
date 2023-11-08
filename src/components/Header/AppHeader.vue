<template>
  <DesktopHeader :items="nav" @click="scrollTo" />
  <PhoneHeader :items="nav" @click="scrollTo" />
</template>

<script setup>
import PhoneHeader from './PhoneHeader.vue';
import DesktopHeader from './DesktopHeader.vue';
const nav = [
  {
    id: 'home',
    text: 'home',
    icon: 'mdi-home'
  },
  {
    id: 'about',
    text: 'about me',
    icon: 'mdi-account'
  },
  {
    id: 'formation',
    text: 'formation',
    icon: 'mdi-account-school'
  },
  {
    id: 'experiences',
    text: 'experiences',
    icon: 'mdi-briefcase-variant'
  }
]
function scrollTo(id) {
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
}
</script>

<style scoped lang="scss">
header {
  border-bottom: 3px solid rgb(var(--v-theme-secondary)) !important;
  top: 0;
  z-index: 9999;
}
</style>
