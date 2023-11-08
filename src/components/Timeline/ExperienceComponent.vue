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
          {{ exp.post }}
        </div>
        <div class="font-weight-bold text-info-darken-3 mb-3">Missions:</div>
        <ul class="text-info ml-10 mb-5">
          <li v-for="mission in exp.missions">{{ mission }}</li>
        </ul>
        <div class="font-weight-bold text-info-darken-3 mb-3">Technologie/Environnement:</div>
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
    post: 'Développeur web Full Stack PHP & Javascript',
    missions: [
      'Collaboration pour créer des interfaces utilisateur attractives et conviviales.',
      'Intégration des maquettes',
      'Conception et développement Front-End et Back-End pour des applications Web.',
      "Développement de fonctionnalités essentielles et de modules personnalisés.",
      'Intégration de services tiers.',
      "Implémentation des tests unitaires.",
      'Maintenance évolutive et corrective.',
      "Participation active à des réunions d'équipe et à la planification de projets.",
      'Veille technologique constante.'
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
    post: 'Développeur web Full Stack Laravel & Vue.js',
    missions: [
      'Collaboration pour créer des interfaces utilisateur attractives et conviviales.',
      'Intégration des maquettes',
      'Conception et développement Front-End et Back-End pour des applications Web.',
      "Développement de fonctionnalités essentielles et de modules personnalisés.",
      "Implémentation des tests unitaires.",
      'Maintenance évolutive et corrective.',
      'Résolution rapide des problèmes et des bugs pour maintenir une expérience utilisateur sans faille.',
      "Participation active à des réunions d'équipe et à la planification de projets.",
      'Veille technologique constante.'
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