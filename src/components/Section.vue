<template>
  <section :id="id">
    <v-container class="justify-center d-flex flex-column align-center text-center">
      <div v-if="props.title" class="text-center text-uppercase text-info text-h3 font-weight-bold">
        <span class="border-b-lg">{{ title }}</span>
      </div>
      <slot></slot>
    </v-container>
  </section>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: String
})
</script>

<style></style>
