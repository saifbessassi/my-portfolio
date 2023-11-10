<template>
    <v-dialog transition="dialog-bottom-transition" width="50%" v-model="show">
        <v-card class="mx-auto" min-width="50%">
            <v-toolbar dark color="primary">
                <v-toolbar-title>{{ $t(project.title) }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-title class="pt-2 text-capitalize">
                {{ $t('projectsSection.description') }}
            </v-card-title>

            <v-card-text class="text-info">
                {{ $t(project.description) }}
            </v-card-text>

            <v-card-title class="pt-2 text-capitalize">
                {{ $t('projectsSection.tasks') }}
            </v-card-title>

            <v-card-text class="text-info">
                <ul class="pl-5">
                    <li v-for="task in project.tasks" :key="task">
                        {{ $t(task) }}
                    </li>
                </ul>
            </v-card-text>

            <v-card-title class="pt-4 text-capitalize">
                {{ $t('projectsSection.techAndTools') }}
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