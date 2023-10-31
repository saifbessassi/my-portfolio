<template>
    <h4 class="text-left text-h4 font-weight-bold text-info text-capitalize mb-5">my skills</h4>
    <div class="text-left">
        <template v-for="(values, key) of skills">
            <h6 class="text-h6 font-weight-medium text-info-lighten-2 text-capitalize">{{ key }}</h6>
            <div class="mb-1">
                <v-chip v-for="skill of values" color="secondary" label class="ma-1 pa-3 font-weight-bold">
                    {{ skill }}
                </v-chip>
            </div>
        </template>
    </div>
</template>

<script setup>
const skills = {
    languages: ["PHP 5+", "Javascript(ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS", "SQL"],
    Framework: ["Laravel 6+", "Vue.js 2+", "Nuxt.js 2", "Symfony 4+", "API Platform", "Angular 2+", "Vuetify", "Bootstrap", "Bootstrap-vue 2"],
    management: ["Azure DevOps", "Jira", "Redmine", "Agile (Scrum, Kanban)"],
    bdd: ["MySql", "Sql Server"],
    versioning: ["Git", "GitLab", "GitHub"],
    ide: ["PhpStorm", "WebStorm", "Visual Studio Code"],
    others: ["POO", "REST", "JSON", "NPM", "Shell", "Composer"]
}
</script>