<template>
  <v-timeline side="end">
    <v-timeline-item v-for="(formation, i) in formations" :key="i" :dot-color="formation.color" :icon="formation.icon"
      fill-dot class="text-left">
      <template v-slot:opposite>
        <div class="text-right">
          <div class="text-subtitle-2 font-weight-bold">{{ formation.date }}</div>
          <div class="text-caption font-weight-medium text-capitalize text-info-lighten-1">{{ $t(formation.degree) }}
          </div>
          <v-avatar :image="'src/assets/images/' + formation.logo" size="x-large" class="rounded-lg"></v-avatar>
        </div>
      </template>
      <div>
        <div :class="`text-h6 font-weight-bold mb-3 text-${formation.color}`">
          {{ $t(formation.degreeDetails) }}
        </div>
        <div class="text-subtitle-1 font-weight-medium text-info">
          {{ $t(formation.establishment) }}
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
    establishment: 'formationSection.formation1.establishment',
    logo: 'school.png',
    degree: "formationSection.formation1.degree",
    degreeDetails: "formationSection.formation1.degreeDetails",
    icon: 'mdi-school'
  },
  {
    color: 'primary',
    date: '2014 - 2017',
    establishment: 'formationSection.formation2.establishment',
    logo: 'fss.png',
    degree: "formationSection.formation2.degree",
    degreeDetails: "formationSection.formation2.degreeDetails",
    icon: 'mdi-school'
  },
  {
    color: 'primary',
    date: '2019 - 2019',
    establishment: 'formationSection.formation3.establishment',
    logo: 'riga university.png',
    degree: 'formationSection.formation3.degree',
    degreeDetails: "formationSection.formation3.degreeDetails",
    icon: 'mdi-school'
  },
  {
    color: 'primary',
    date: '2017 - 2020',
    establishment: 'formationSection.formation4.establishment',
    logo: 'isims.jpg',
    degree: "formationSection.formation4.degree",
    degreeDetails: "formationSection.formation4.degreeDetails",
    icon: 'mdi-school'
  }
]
</script>