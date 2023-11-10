<template>
  <section :id="id">
    <v-container v-if="props.title" class="justify-center d-flex flex-column align-center text-center">
      <div class="text-center text-uppercase text-info text-h3 font-weight-bold">
        {{ title }}
        <hr width="40%" class="mx-auto my-5 bg-info rounded-pill" style="height: 5px;"/>
      </div>
    </v-container>
      <slot></slot>
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
