<template>
  <section :id="id">
    <v-container class="justify-center d-flex flex-column align-center text-center">
      <div v-if="props.title" class="text-center text-uppercase text-info text-h3 font-weight-bold">
        {{ title }}
        <hr width="40%" class="mx-auto my-5 bg-info rounded-pill" style="height: 5px;"/>
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
