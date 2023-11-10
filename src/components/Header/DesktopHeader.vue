<template>
    <v-toolbar app color="background" class="d-none d-md-flex position-sticky px-10">
    <v-toolbar-items class="v-container py-0">
      <v-btn
        v-for="item in items"
        :key="item.id"
        :prepend-icon="item.icon"
        @click="scrollTo(item.id)"
        >{{ $t(item.text) }}</v-btn
      >
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <LanguageButton />
  </v-toolbar>
</template>

<script setup>
import LanguageButton from './LanguageButton.vue'
defineProps({
    items: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['click'])
function scrollTo(id) {
    emit('click', id)
}
</script>