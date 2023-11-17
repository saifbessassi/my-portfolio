<template>
  <Section id="about" :title="$t('aboutSection.title')" class="bg-surface py-15">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <p class="mb-10 text-center text-info-lighten-3" data-aos="fade-up">
            {{ $t('aboutSection.subtitle') }}
          </p>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col md="6" cols="12" class="pr-md-10 mb-5 mb-md-0">
          <AboutDescription />
        </v-col>
        <v-col md="6" cols="12" class="pl-md-10">
          <AboutSkills />
        </v-col>
      </v-row>
    </v-container>
  </Section>
</template>

<script setup>
import Section from '../Section.vue'
import AboutSkills from './AboutSkills.vue'
import AboutDescription from './AboutDescription.vue'
</script>
