<template>
    <h4 class="text-left text-h4 font-weight-bold text-info text-capitalize mb-5">Get to know me!</h4>
    <v-avatar class="align-center mb-2" size="250" rounded="0">
        <v-img max-height="250" src="src/assets/images/me.png" alt="me">
            <template #placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                </div>
            </template>
        </v-img>
    </v-avatar>
    <div class="text-info-lighten-3 text-justify">
        <p class="mb-3">Je suis un <b>développeur fullstack</b> passionné, spécialisé dans les
            technologies <b>Laravel</b> et <b>Vue.js</b>.</p>
        <p class="mb-3">Mon parcours dans le monde du développement a débuté il y a
            <b>plus que {{ experience }} ans</b>, et depuis, j'ai eu l'opportunité de travailler sur une
            variété de projets, allant
            des applications web complexes aux sites web élégants. Mon amour pour la programmation m'a
            conduit à
            explorer constamment de nouvelles technologies et à chercher des solutions innovantes pour
            résoudre
            des problèmes.
        </p>
        <p class="mb-3">En dehors du codage, j'apprécie également <b>la musique</b>, <b>le sport</b> et
            <b>la découverte de nouvelles cultures</b>.
        </p>
        <p class="mb-3">Je suis convaincu que la technologie peut améliorer notre quotidien,
            et je suis toujours enthousiaste à l'idée de participer à des projets qui font une différence
            dans
            le monde numérique.</p>
    </div>
</template>

<script setup>
const experience = new Date().getFullYear() - 2019
</script>