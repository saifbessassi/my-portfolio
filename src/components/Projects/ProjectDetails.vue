<template>
    <v-dialog transition="dialog-bottom-transition" width="50%" v-model="show" eager>
        <v-card class="mx-auto" min-width="50%">
            <v-toolbar dark color="primary">
                <v-toolbar-title>{{ project.title }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-title class="pt-2 text-capitalize">
                Description
            </v-card-title>

            <v-card-text class="text-info">
                {{ project.description }}
            </v-card-text>

            <v-card-title class="pt-2 text-capitalize">
                tasks
            </v-card-title>

            <v-card-text class="text-info">
                <ul class="pl-5">
                    <li v-for="task in project.tasks" :key="task">
                        {{ task }}
                    </li>
                </ul>
            </v-card-text>

            <v-card-title class="pt-4 text-capitalize">
                Technologies & outils
            </v-card-title>

            <v-card-text>
                <v-chip label size="small" variant="outlined" color="primary" class="mr-2 mb-2"
                    v-for="tech in project.technologies">{{ tech }}</v-chip>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps(['modelValue', 'project'])
const emit = defineEmits(['update:modelValue'])

const show = ref(false)
watchEffect(() => {
    show.value = props.modelValue
})

function close() {
    show.value = false
    emit('update:modelValue', false)
}
</script>