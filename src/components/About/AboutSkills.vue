<template>
  <div
    data-aos="flip-right"
    data-aos-ease="ease"
    data-aos-duration="1500"
    data-aos-delay="500"
  >
    <h4 class="text-left text-h4 font-weight-bold text-info text-capitalize mb-5">
      {{ $t('aboutSection.skillsTitle') }}
    </h4>
    <div class="text-left">
      <template v-for="item of skills">
        <h6 class="text-h6 font-weight-medium text-info-lighten-2 text-capitalize">
          {{ $t(item.label) }}
        </h6>
        <div class="mb-1">
          <v-chip
            v-for="skill of item.values"
            color="secondary"
            label
            class="ma-1 pa-3 font-weight-bold"
          >
            {{ skill }}
          </v-chip>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const skills = {
  languages: {
    label: 'aboutSection.languages',
    values: ['PHP 5+', 'Javascript(ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'SQL']
  },
  Framework: {
    label: 'framework',
    values: [
      'Laravel 6+',
      'Vue.js 2+',
      'Nuxt.js 2',
      'Symfony 4+',
      'API Platform',
      'Angular 2+',
      'Vuetify',
      'Bootstrap',
      'Bootstrap-vue 2'
    ]
  },
  management: {
    label: 'management',
    values: ['Azure DevOps', 'Jira', 'Redmine', 'Agile (Scrum, Kanban)']
  },
  bdd: {
    label: 'BDD',
    values: ['MySql', 'Sql Server']
  },
  versioning: {
    label: 'aboutSection.versioning',
    values: ['Git', 'GitLab', 'GitHub']
  },
  ide: {
    label: 'IDE',
    values: ['PhpStorm', 'WebStorm', 'Visual Studio Code']
  },
  others: {
    label: 'aboutSection.others',
    values: ['POO', 'REST', 'JSON', 'NPM', 'Shell', 'Composer']
  }
}
</script>
