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
    text: 'header.home',
    icon: 'mdi-home'
  },
  {
    id: 'about',
    text: 'header.about',
    icon: 'mdi-account'
  },
  {
    id: 'formation',
    text: 'header.formation',
    icon: 'mdi-account-school'
  },
  {
    id: 'experiences',
    text: 'header.experiences',
    icon: 'mdi-briefcase-variant'
  },
  {
    id: 'projects',
    text: 'header.projects',
    icon: 'mdi-laptop'
  },
  {
    id: 'references',
    text: 'header.references',
    icon:'mdi-account-search'
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
  z-index: 1000;
}
</style>
