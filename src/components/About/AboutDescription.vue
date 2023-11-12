<template>
  <h4 class="text-left text-h4 font-weight-bold text-info text-capitalize mb-5">
    {{ $t('aboutSection.descriptionTitle') }}
  </h4>
  <v-avatar class="d-flex mx-auto mb-2" size="250" rounded="0">
    <v-img max-height="250" src="images/me.png" alt="me">
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img>
  </v-avatar>
  <div class="text-info-lighten-3 text-justify">
    <p class="mb-3" v-html="$t('aboutSection.description1')"></p>
    <p class="mb-3" v-html="$t('aboutSection.description2', { experience })"></p>
    <p class="mb-3" v-html="$t('aboutSection.description3')"></p>
    <p class="mb-3" v-html="$t('aboutSection.description4')"></p>
  </div>
</template>

<script setup>
const experience = new Date().getFullYear() - 2019
</script>
