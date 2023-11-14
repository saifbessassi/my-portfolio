<template>
  <v-btn class="h-100">
    <v-img :src="flagPath" width="40px" @click="changeLocale" />
  </v-btn>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Tr from '@/i18n/translation'

const { locale } = useI18n()
const router = useRouter()

const flagPath = computed(() => {
  if (locale.value === 'en') {
    return 'images/flags/fr.png'
  } else {
    return 'images/flags/en.png'
  }
})

async function changeLocale() {
  let newLocale = locale.value === 'en' ? 'fr' : 'en'
  try {
    Tr.switchLanguage(newLocale).then(() => {
      router.replace(`/${newLocale}`)
    })
  } catch (e) {
    router.push('/')
  }
}
</script>
