<template>
  <Section id="experiences" :title="$t('experiencesSection.title')" class="bg-surface py-15">
    <v-container>
      <ExperienceComponent />
    </v-container>
  </Section>
</template>

<script setup>
import Section from '../Section.vue'
import ExperienceComponent from './ExperienceComponent.vue'
</script>
