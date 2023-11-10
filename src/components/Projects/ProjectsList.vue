<template>
    <v-container fluid>
      <v-row justify="center">
        <v-col
          v-for="projet in projects"
          :key="projet.title"
          cols="12"
          sm="6"
          md="4"
        >
          <ProjectOverview
            :project="projet"
          />
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import ProjectOverview from './ProjectOverview.vue'

const projects = [
        { 
            title: 'Portfolio',
            description: "Explorez l'essence de mon expertise en développement fullstack à travers mon portfolio. Plongez dans une collection soigneusement élaborée de projets qui mettent en lumière ma maîtrise tant du front-end que du back-end. Chaque ligne de code et chaque interface utilisateur sont des témoignages de mon engagement envers l'excellence technique et la créativité fonctionnelle. Bienvenue dans mon univers digital, où chaque projet raconte l'histoire de mon parcours en tant que développeur fullstack passionné.",
            tasks: [
                "Conception et développement de l'interface utilisateur en utilisant Vue.js, Vuetify, HTML, CSS et JavaScript pour garantir une expérience utilisateur fluide et intuitive.",
                "Création des composants Vue.js.",
                "Assurance de l’internationalisation des interfaces avec Vue I18n."
            ],
            photos: [
                'Portfolio-0.png',
                'Portfolio-1.png',
                'Portfolio-2.png',
            ],
            framworks: 'Vue.js',
            technologies: [
                'Vue.js 3',
                'Vuetify',
                'Git',
                'Github'
            ]
        },
        { 
            title: 'HCUB',
            description: "J'ai été mandaté pour la participation au développement d'une solution de gestion des identités et des accès (IAM) aident l’entreprise à s’assurer que seuls des utilisateurs disposant des autorisations appropriées peuvent accéder à des ressources du système d’information en utilisant Laravel et Vue.js.",
            tasks: [
            "Création du tableau de bord utilisateur personnalisé avec un UI/UX designer.",
                "Création des composants Vue.js réutilisable.",
                "Intégration des maquettes via Vue.js et Vuetify.",
                "Assurance de l’internationalisation des interfaces avec Vue I18n.",
                "Évaluation des besoins d'évolutivité et mise en place de solutions.",
                "Création et consommations des APIs Rest.",
                "Intégration de fonctionnalités d'exportation des données en fichier excel.",
                "Mise à niveau des versions de Laravel (de 6 à 8) et PHP (de 5.6 à 8.1).",
                "Analyse et résolution des anomalies et des bogues signalés.",
                "Implémentation des tests unitaires."
            ],
            photos: [
                'hcub-0.png'
            ],
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
            title: 'Timesheets',
            description: "En tant que développeur Laravel/Vue.js, j'ai été chargé de concevoir et de développer un outil de gestion de temps de travail. Il permet aux employés d’enregistrer le temps passé sur diverses tâches ou projets et il permet aux employeurs de réviser et soumettre les feuilles de temps.",
            tasks: [
                "Analyse des besoins du client et rédaction de spécifications techniques.",
                "Intégration des maquettes via VueJs et Bootstrap-Vue.",
                "Assurance de la réactivité, la bonne ergonomie et l'optimalité de navigation du site web.",
                "Conception et développement de fonctionnalités frontend et backend.",
                "Création et consommations des APIs RESTful.",
                "Développement des modules de gestion des utilisateurs, autorisations et permissions, des scopes, des factures et de profil.",
                "Analyse et résolution des anomalies et des bugs signalés.",
                "Implémentation des tests unitaires."
            ],
            photos: [
                'Hays-0.png',
                'Hays-1.png',
                'Hays-2.png',
                'Hays-3.png',
            ],
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
            title: 'Stark Solutions',
            description: "En tant que développeur Vue.js, j'ai été chargé de concevoir et de développer une plateforme permettant la création des comptes, la gestion des organisations, des clients, des packs et de parrainage.",
            tasks: [
                "Conception et développement de l'interface utilisateur en utilisant Vue.js, Bootstrap-vue, HTML, CSS et JavaScript pour garantir une expérience utilisateur fluide et intuitive.",
                "Assurance de la réactivité, la bonne ergonomie et l'optimalité de navigation du site web.",
                "Assurance de l’internationalisation des interfaces avec Vue I18n.",
                "Mettre en place un système complet d'authentification, y compris l'inscription, la connexion et la réinitialisation de mot de passe.",
                "Consommation des API RESTful.",
                "Développement d’un module de gestion des rôles, des clients et des commerciaux.",
                "Développement d’un module de parrainage et de configuration des codes promos.",
                "Collaboration étroite avec l'équipe pour comprendre les besoins et les exigences de l'entreprise, ainsi que pour apporter des améliorations continues."
            ],
            photos: [
                'stark-solutions-0.png',
                'stark-solutions-1.png',
                'stark-solutions-2.png',
                'stark-solutions-2.png',
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
            title: 'Job board',
            description: "J'ai conçu et développé un Job Board complet qui permet aux demandeurs d'emploi de rechercher et postuler à des offres d'emploi, et aux recruteurs de publier des offres et de gérer leurs processus de recrutement.",
            tasks: [
                "Analyse des besoins du client et rédaction de spécifications techniques.",
                "Mise en place de l'architecture pour gérer les utilisateurs, les candidatures et les offres d'emploi.",
                "Conception de l'interface utilisateur responsive en utilisant Angular.",
                "Conception et développement de fonctionnalités frontend et backend.",
                "Création et consommations des APIs Rest.",
                "Mise en place de notifications par email.",
                "Implémentation des tests unitaires."
            ],
            photos: [
                'job-board-0.png',
                'job-board-1.png',
                'job-board-2.png',
                'job-board-3.png',
                'job-board-4.png',
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
        }
      ]
</script>