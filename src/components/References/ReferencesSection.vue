<template>
  <Section id="references" :title="$t('referencesSection.title')" class="bg-surface py-15">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col class="text-center" cols="12" sm="6" md="4" lg="3" v-for="companie in companies">
          <a :href="companie.link" target="_blank">
            <img :src="photoPath + companie.logo" class="logo" />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </Section>
</template>

<script setup>
import Section from '../Section.vue'

const photoPath = 'src/assets/images/companies/'
const companies = [
  {
    logo: 'sparkit-logo.png',
    link: 'https://www.spark-it.fr/'
  },
  {
    logo: 'stark-logo.png',
    link: 'https://stark-solutions.online/'
  },
  {
    logo: 'hays-logo.png',
    link: 'https://www.hays.fr/'
  },
  {
    logo: 'infopro-logo.png',
    link: 'https://www.infopro-digital.com/fr/'
  }
]
</script>

<style lang="scss" scoped>
.logo {
  object-fit: contain;
  width: 200px;
  aspect-ratio: 3/2;
}
</style>
