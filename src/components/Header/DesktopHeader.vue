<template>
  <v-toolbar app color="background" class="d-none d-md-flex position-sticky px-10">
    <v-toolbar-items class="v-container py-0">
      <RouterLink
        v-for="item in items"
        :key="item.id"
        :to="`#${item.id}`"
        custom
        v-slot="{ href, navigate }"
      >
        <v-btn
          :prepend-icon="item.icon"
          :href="href"
          :class="{ 'bg-primary': isActive(item.id) }"
          @click="navigate"
        >
          {{ $t(item.text) }}
        </v-btn>
      </RouterLink>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <LanguageButton />
  </v-toolbar>
</template>

<script setup>
import { computed } from 'vue'
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
</script>
