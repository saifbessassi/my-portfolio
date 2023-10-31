<template>
    <Section id="about" title="about me" class="bg-surface py-15">
        <v-container>
            <v-row justify="center">
                <v-col cols="8">
                    <p class="mb-10 text-center text-info-lighten-3">Here you will find more information about me, what I
                        do, and my current skills mostly in terms of programming and technology</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col class="pr-10" cols="6">
                    <AboutDescription />
                </v-col>
                <v-col cols="6" class="pl-10">
                    <AboutSkills />
                </v-col>
            </v-row>
        </v-container>
    </Section>
</template>

<script setup>
import Section from '../Section.vue';
import AboutSkills from './AboutSkills.vue';
import AboutDescription from './AboutDescription.vue';
</script>