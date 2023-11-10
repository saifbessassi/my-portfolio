<template>
  <v-timeline side="end">
    <v-timeline-item v-for="(exp, i) in experiences" :key="i" dot-color="secondary" :icon="exp.icon" fill-dot
      class="text-left">
      <template #icon>
        <v-icon class="text-white">{{ exp.icon }}</v-icon>
      </template>
      <template #opposite>
        <div class="text-center">
          <div class="text-subtitle-2 font-weight-bold">{{ exp.date }}</div>
          <div class="text-caption font-weight-medium text-capitalize text-info-lighten-1">{{ exp.company }}</div>
          <v-avatar size="x-large" class="rounded-lg">
            <v-img :src="'src/assets/images/' + exp.logo" />
          </v-avatar>
        </div>
      </template>
      <div>
        <div class="text-h6 font-weight-bold mb-3 text-secondary">
          {{ $t(exp.post) }}
        </div>
        <div class="font-weight-bold text-info-darken-3 mb-3">Missions:</div>
        <ul class="text-info ml-10 mb-5">
          <li v-for="mission in exp.missions">{{ $t(mission) }}</li>
        </ul>
        <div class="font-weight-bold text-info-darken-3 mb-3">{{ $t('experiencesSection.technologyAndEnv') }}:</div>
        <v-chip label size="small" variant="outlined" color="primary" class="mr-2 mb-2"
          v-for="tech in exp.technologies">{{ tech }}</v-chip>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup>
const experiences = [
  {
    date: '2019 - 2022',
    company: 'Spark-it Tunisie',
    logo: 'sparkit.png',
    post: "experiencesSection.experiences1.post",
    missions: [
    "experiencesSection.experiences1.mission1",
      "experiencesSection.experiences1.mission2",
      "experiencesSection.experiences1.mission3",
      "experiencesSection.experiences1.mission4",
      "experiencesSection.experiences1.mission5",
      "experiencesSection.experiences1.mission6",
      "experiencesSection.experiences1.mission7",
      "experiencesSection.experiences1.mission8",
      "experiencesSection.experiences1.mission9"
    ],
    technologies: [
      'PHP',
      'API Platform',
      'Symfony',
      'Laravel',
      'REST',
      'SOAP',
      'MySQL',
      'Angular',
      'Vue.js',
      'Nuxt.js',
      'HTML/CSS',
      'SASS',
      'JavaScript',
      'Typescript',
      'Bootstrap',
      'Bootstrap-vue',
      'GIT',
      'PHPUnit',
      'Karma',
      'Jasmine',
      'Jest',
      'Vue Test Utils',
      'Azure DevOps'
    ],
    icon: 'mdi-briefcase'
  },
  {
    date: '2022 - présent',
    company: 'Spark-it France',
    logo: 'sparkit.png',
    post: "experiencesSection.experiences2.post",
    missions: [
      "experiencesSection.experiences2.mission1",
      "experiencesSection.experiences2.mission2",
      "experiencesSection.experiences2.mission3",
      "experiencesSection.experiences2.mission4",
      "experiencesSection.experiences2.mission5",
      "experiencesSection.experiences2.mission6",
      "experiencesSection.experiences2.mission7",
      "experiencesSection.experiences2.mission8",
      "experiencesSection.experiences2.mission9"
    ],
    technologies: [
      'PHP',
      'Laravel',
      'REST',
      'MySQL',
      'Vue.js',
      'HTML/CSS',
      'SASS',
      'JavaScript',
      'Typescript',
      'Vuetify',
      'GIT',
      'PHPUnit',
      'JIRA'
    ],
    icon: 'mdi-briefcase'
  }
]
</script>