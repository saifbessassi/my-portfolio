<template>
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
          <v-list-item v-for="item in items" :key="item.text" @click="scrollTo(item.id)">
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
import { ref } from 'vue';

defineProps({
    items: {
        type: Array,
        required: true
    }
})

const dialog = ref(false)

const emit = defineEmits(['click'])
function scrollTo(id) {
    emit('click', id)
    dialog.value = false
}
</script>