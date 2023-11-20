<template>
  <v-toolbar
    app
    color="background"
    class="d-flex d-md-none"
    :class="dialog ? 'position-absolute' : 'position-sticky'"
  >
    <v-app-bar-nav-icon slot="activator" @click="dialog = true"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <LanguageButton />
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card color="background">
        <v-toolbar flat color="background">
          <v-btn @click="dialog = false" icon>
            <v-icon icon="mdi-close" />
          </v-btn>
        </v-toolbar>

        <v-list>
          <RouterLink
            v-for="item in items"
            :key="item.id"
            :to="`#${item.id}`"
            custom
            v-slot="{ href, navigate }"
          >
            <v-list-item
              :href="href"
              :class="{ 'bg-primary': isActive(item.id) }"
              @click="
                () => {
                  dialog = false
                  navigate
                }
              "
            >
              <template #prepend>
                <v-icon :icon="item.icon" />
              </template>
              <v-list-item-title class="text-uppercase">{{ $t(item.text) }}</v-list-item-title>
            </v-list-item>
          </RouterLink>
        </v-list>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script setup>
import { ref, computed } from 'vue'
import LanguageButton from './LanguageButton.vue'
import { useActive } from 'vue-use-active-scroll'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
const targets = computed(() => props.items.map(({ id }) => id))
const { isActive } = useActive(targets)

const dialog = ref(false)
</script>
