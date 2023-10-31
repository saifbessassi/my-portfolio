<template>
    <v-toolbar app color="background" class="d-none d-sm-flex position-sticky">
    <v-toolbar-items class="v-container py-0">
      <v-btn
        v-for="item in items"
        :key="item.id"
        :prepend-icon="item.icon"
        @click="scrollTo(item.id)"
        >{{ item.text }}</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup>
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