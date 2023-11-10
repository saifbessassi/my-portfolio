<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto" color="grey-lighten-4" max-width="600" v-bind="props">
            <v-carousel cycle interval="3000" height="100%" hide-delimiter-background hide-delimiters :show-arrows="false"
                color="secondary">
                <v-carousel-item v-for="(photo, i) in project.photos" :key="i">
                    <v-img :aspect-ratio="16 / 9" cover :src="photoPath + photo" />
                </v-carousel-item>
            </v-carousel>
            <v-expand-transition>
                <div v-if="isHovering" class="d-flex flex-column transition-fast-in-fast-out bg-white v-card--reveal">
                    <div class="text-h4 font-weight-bold mb-1">
                        {{ $t(project.title) }}
                    </div>
                    <div class="text-body-1 text-primary">
                        {{ project.framworks }}
                    </div>
                    <v-hover v-slot="{ isHovering, props }">
                        <v-btn v-bind="props" class="mt-10" color="primary" :variant="isHovering ? 'elevated' : 'outlined'"
                            @click="showDetails = true">
                            {{ $t('projectsSection.learnMore') }}
                        </v-btn>
                    </v-hover>
                </div>
            </v-expand-transition>
        </v-card>
    </v-hover>
    <ProjectDetails v-model="showDetails" :project="project" />
</template>

<script setup>
import { ref } from 'vue';
import ProjectDetails from './ProjectDetails.vue';

const photoPath = 'src/assets/images/projects/'
const showDetails = ref(false);

defineProps({
    project: {
        type: Object,
        required: true,
        validator(project) {
            return (
                project.title &&
                project.framworks &&
                project.photos &&
                project.photos.length > 0
            );
        }
    }
})
</script>

<style lang="scss" scoped>
.show-btn {
    transition: all 0.5s ease-in-out;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .95;
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>