<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col v-for="projet in projects" :key="projet.title" cols="12" sm="6" md="4">
        <ProjectOverview :project="projet" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ProjectOverview from './ProjectOverview.vue'

const projects = [
  {
    title: 'projectsSection.portfolio.title',
    description: 'projectsSection.portfolio.description',
    tasks: [
      'projectsSection.portfolio.tasks.task1',
      'projectsSection.portfolio.tasks.task2',
      'projectsSection.portfolio.tasks.task3'
    ],
    photos: ['portfolio-0.png', 'portfolio-1.png', 'portfolio-2.png'],
    framworks: 'Vue.js',
    technologies: ['Vue.js 3', 'Vuetify', 'Git', 'Github']
  },
  {
    title: 'projectsSection.hcub.title',
    description: 'projectsSection.hcub.description',
    tasks: [
      'projectsSection.hcub.tasks.task1',
      'projectsSection.hcub.tasks.task2',
      'projectsSection.hcub.tasks.task3',
      'projectsSection.hcub.tasks.task4',
      'projectsSection.hcub.tasks.task5',
      'projectsSection.hcub.tasks.task6',
      'projectsSection.hcub.tasks.task7',
      'projectsSection.hcub.tasks.task8',
      'projectsSection.hcub.tasks.task9'
    ],
    photos: ['hcub-0.png'],
    framworks: 'Laravel / Vue.js',
    technologies: [
      'Vue.js 2',
      'Vuetify',
      'Javascript',
      'Laravel 6+',
      'PHP 7+',
      'REST API',
      'PHPUnit',
      'Git',
      'Gitlab',
      'MySQL',
      'HTML5',
      'CSS3',
      'SASS',
      'JIRA'
    ]
  },
  {
    title: 'projectsSection.timesheets.title',
    description: 'projectsSection.timesheets.description',
    tasks: [
      'projectsSection.timesheets.tasks.task1',
      'projectsSection.timesheets.tasks.task2',
      'projectsSection.timesheets.tasks.task3',
      'projectsSection.timesheets.tasks.task4',
      'projectsSection.timesheets.tasks.task5',
      'projectsSection.timesheets.tasks.task6',
      'projectsSection.timesheets.tasks.task7',
      'projectsSection.timesheets.tasks.task8'
    ],
    photos: ['Hays-0.png', 'Hays-1.png', 'Hays-2.png', 'Hays-3.png'],
    framworks: 'Laravel / Vue.js',
    technologies: [
      'Vue.js 2',
      'Bootstrap-vue',
      'Javascript',
      'Jest',
      'Vue test utils',
      'Laravel 6',
      'PHP 7',
      'REST API',
      'SOAP API',
      'PHPUnit',
      'Git',
      'MySQL',
      'HTML5',
      'CSS3',
      'SASS',
      'Azure DevOps'
    ]
  },
  {
    title: 'projectsSection.starkB2b.title',
    description: 'projectsSection.starkB2b.description',
    tasks: [
      'projectsSection.starkB2b.tasks.task1',
      'projectsSection.starkB2b.tasks.task2',
      'projectsSection.starkB2b.tasks.task3',
      'projectsSection.starkB2b.tasks.task4',
      'projectsSection.starkB2b.tasks.task5'
    ],
    photos: [
      'stark-b2b-0.png'
    ],
    framworks: 'Laravel / Vue.js / Nuxt.js',
    technologies: [
      'Laravel 6',
      'Vue.js 2',
      'Nuxt.js 2',
      'PHP 7',
      'REST API',
      'Vuetify',
      'Git',
      'Gitlab',
      'MySQL',
      'Javascript',
      'HTML5',
      'CSS3',
      'SASS',
      'PhpUnit'
    ]
  },
  {
    title: 'projectsSection.starkSolution.title',
    description: 'projectsSection.starkSolution.description',
    tasks: [
      'projectsSection.starkSolution.tasks.task1',
      'projectsSection.starkSolution.tasks.task2',
      'projectsSection.starkSolution.tasks.task3',
      'projectsSection.starkSolution.tasks.task4',
      'projectsSection.starkSolution.tasks.task5',
      'projectsSection.starkSolution.tasks.task6',
      'projectsSection.starkSolution.tasks.task7',
      'projectsSection.starkSolution.tasks.task8'
    ],
    photos: [
      'stark-solutions-0.png',
      'stark-solutions-1.png',
      'stark-solutions-2.png',
      'stark-solutions-2.png'
    ],
    framworks: 'Symfony / API Platform / Vue.js',
    technologies: [
      'Vue.js 2',
      'Bootstrap-vue',
      'Javascript',
      'Symfony 4',
      'PHP 7',
      'REST API',
      'API Platform',
      'Git',
      'Gitlab',
      'MySQL',
      'HTML5',
      'CSS3',
      'SASS',
      'Azure DevOps'
    ]
  },
  {
    title: 'projectsSection.jobboard.title',
    description: 'projectsSection.jobboard.description',
    tasks: [
      'projectsSection.jobboard.tasks.task1',
      'projectsSection.jobboard.tasks.task2',
      'projectsSection.jobboard.tasks.task3',
      'projectsSection.jobboard.tasks.task4',
      'projectsSection.jobboard.tasks.task5',
      'projectsSection.jobboard.tasks.task6',
      'projectsSection.jobboard.tasks.task7'
    ],
    photos: [
      'job-board-0.png',
      'job-board-1.png',
      'job-board-2.png',
      'job-board-3.png',
      'job-board-4.png'
    ],
    framworks: 'Symfony / API Platform / Angular',
    technologies: [
      'Angular 8',
      'Bootstrap',
      'Typescript',
      'Karma',
      'Jasmine',
      'Symfony 4',
      'PHP 7',
      'REST API',
      'API Platform',
      'Git',
      'Github',
      'MySQL',
      'HTML5',
      'CSS3',
      'SASS',
      'Redmine'
    ]
  },
  {
    title: 'projectsSection.crmAjst.title',
    description: 'projectsSection.crmAjst.description',
    tasks: [
      'projectsSection.crmAjst.tasks.task1',
      'projectsSection.crmAjst.tasks.task2',
      'projectsSection.crmAjst.tasks.task3',
      'projectsSection.crmAjst.tasks.task4',
      'projectsSection.crmAjst.tasks.task5',
      'projectsSection.crmAjst.tasks.task6',
      'projectsSection.crmAjst.tasks.task7',
      'projectsSection.crmAjst.tasks.task8'
    ],
    photos: [
      'crm-ajst-0.png',
      'crm-ajst-1.png',
      'crm-ajst-2.png',
      'crm-ajst-3.png'
    ],
    framworks: 'Symfony',
    technologies: [
      'Symfony 3',
      'Php 5',
      'Doctrine',
      'Twig',
      'Bootstrap',
      'HTML/CSS',
      'jQuery',
      'MySql',
      'Git',
      'Github'
    ]
  },
]
</script>
