<template>
  <v-toolbar app color="background" class="d-none d-sm-flex position-sticky">
    <v-toolbar-items class="v-container py-0">
      <v-btn
        v-for="item in nav"
        :key="item.id"
        :prepend-icon="item.icon"
        @click="scrollTo(item.id)"
        >{{ item.text }}</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>

  <v-toolbar app color="background" class="d-flex d-sm-none position-sticky">
    <v-app-bar-nav-icon slot="activator" @click="dialog = true"></v-app-bar-nav-icon>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card color="background">
        <v-toolbar flat color="background">
          <v-btn @click="dialog = false" icon>
            <v-icon icon="mdi-close" />
          </v-btn>
        </v-toolbar>

        <v-list>
          <v-list-item v-for="item in nav" :key="item.text" @click="scrollTo(item.id)">
            <template #prepend>
              <v-icon :icon="item.icon" />
            </template>
            <v-list-item-title v-text="item.text" class="text-uppercase"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script setup>
import { ref } from 'vue'
const dialog = ref(false)
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
  }
]
function scrollTo(id) {
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  dialog.value = false
}
</script>

<style scoped lang="scss">
header {
  border-bottom: 3px solid rgb(var(--v-theme-secondary)) !important;
  top: 0;
  z-index: 1;
}
</style>
