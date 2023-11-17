<template>
  <Section
    id="formation"
    :title="$t('formationSection.title')"
    class="bg-white py-15"
    data-aos="slide-right"
    data-aos-ease="ease"
    data-aos-duration="1500"
    data-aos-delay="500"
    data-aos-anchor-placement="top-center"
  >
    <v-container>
      <FormationComponent />
    </v-container>
  </Section>
</template>

<script setup>
import Section from '../Section.vue'
import FormationComponent from './FormationComponent.vue'
</script>
