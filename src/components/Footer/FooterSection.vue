<template>
  <footer
    class="bg-background"
    data-aos="slide-up"
    data-aos-ease="easy"
    data-aos-duration="2000"
    data-aos-delay="500"
    data-aos-anchor-placement="bottom-center"
  >
    <v-container class="pa-0">
      <v-row justify="space-between" align="center" class="pa-15">
        <v-col sm="6" md="4" cols="12">
          <p class="mb-3">{{ $t('footer.message') }} 😉</p>
          <p class="text-center">
            <v-btn
              href="https://www.linkedin.com/in/saifbessassi"
              target="_blanc"
              class="mr-1"
              icon="mdi-linkedin"
              variant="text"
            />
            <v-btn
              href="https://github.com/saifbessassi"
              target="_blanc"
              icon="mdi-github"
              variant="text"
            />
          </p>
        </v-col>

        <v-col sm="6" md="4" cols="12">
          <h3 class="text-uppercase mb-5">saif bessassi</h3>
          <p class="mb-3"><v-icon class="mr-2">mdi-email</v-icon>sa.bessassi@gmail.com</p>
          <p class="mb-3"><v-icon class="mr-2">mdi-phone</v-icon>+33 6 38 01 14 77</p>
          <p class="text-capitalize"><v-icon class="mr-2">mdi-map-marker</v-icon>paris, france</p>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <p class="pa-10 text-center">Made by me © Copyright {{ new Date().getFullYear() }}</p>
    </v-container>
  </footer>
</template>
