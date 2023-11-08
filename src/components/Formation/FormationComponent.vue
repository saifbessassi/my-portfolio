<template>
    <v-timeline  side="end">
      <v-timeline-item
        v-for="(formation, i) in formations"
        :key="i"
        :dot-color="formation.color"
        :icon="formation.icon"
        fill-dot
        class="text-left"
      >
        <template v-slot:opposite>
            <div class="text-right">
                <div class="text-subtitle-2 font-weight-bold">{{ formation.date }}</div>
                <div class="text-caption font-weight-medium text-capitalize text-info-lighten-1">{{ formation.degree }}</div>
                <v-avatar :image="'src/assets/images/'+formation.logo" size="x-large" class="rounded-lg"></v-avatar>
            </div>
        </template>
        <div>
          <div :class="`text-h6 font-weight-bold mb-3 text-${formation.color}`">
            {{ formation.degreeDetails }}
          </div>
          <div class="text-subtitle-1 font-weight-medium text-info">
            {{ formation.establishment }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </template>

  <script setup>
const formations = [
        {
          color: 'primary',
          date: '2014 - 2014',
          establishment: 'Lycée 9 Avril 1938 de Sfax - Tunisie',
          logo: 'school.png',
          degree: "Études secondaires",
          degreeDetails: "Baccalauréat mathématique",
          icon: 'mdi-school'
        },
        {
          color: 'primary',
          date: '2014 - 2017',
          establishment: 'Faculté des sciences de Sfax - Tunisie',
          logo: 'fss.png',
          degree: "Licence",
          degreeDetails: "Licence fondamentale en science informatique",
          icon: 'mdi-school'
        },
        {
          color: 'primary',
          date: '2019 - 2019',
          establishment: 'Université technique de Riga - Lettonie',
          logo: 'riga university.png',
          degree: 'ERASMUS+',
          degreeDetails: "Programme d'échange des étudiants ERASMUS+",
          icon: 'mdi-school'
        },
        {
          color: 'primary',
          date: '2017 - 2020',
          establishment: 'Institut supérieur d’informatique et de multimédia de Sfax - Tunisie',
          logo: 'isims.jpg',
          degree: "Cycle d'ingénieur",
          degreeDetails: "Diplôme national d'ingénieur en informatique, technologies web et multimédia",
          icon: 'mdi-school'
        }
      ]
</script>