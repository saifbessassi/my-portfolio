<template>
  <Section id="projects" :title="$t('projectsSection.title')" class="bg-white py-15">
    <v-container>
      <ProjectsList />
    </v-container>
  </Section>
</template>

<script setup>
import Section from '../Section.vue'
import ProjectsList from './ProjectsList.vue'
</script>
