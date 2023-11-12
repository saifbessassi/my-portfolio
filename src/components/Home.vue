<template>
  <Section id="home" class="text-white h-screen">
    <v-container fluid class="text-center">
      <div class="night">
        <div v-for="n in 15" class="shooting_star"></div>
      </div>
      <div class="text">
        {{ $t('home.hello') }} <span class="text-primary">Saif BESSASSI</span>.
        <br />
        {{ $t('home.myPost') }}
        <v-img id="badge" role="button" src="src/assets/images/vue-certification.png" width="100px"
          class="mt-4 pt-4 mx-auto" @click="openCertif">
          <v-tooltip content-class="bg-white" activator="parent" location="bottom">{{ $t('home.viewCertif') }}</v-tooltip>
        </v-img>

      </div>
    </v-container>
  </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'

function openCertif() {
  window.open('https://certificates.dev/c/9a7267eb-567a-4157-b511-846aacc3ecd1', "_blank")
}
</script>

<style lang="scss">
#home {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  overflow: hidden;
  display: flex;
  font-family: 'Anton', sans-serif;
  justify-content: center;
  align-items: center;
}

.text {
  z-index: 9999;
  font-size: 32pt;
  line-height: 36pt;
}

$shooting-time: 3000ms;

.night {
  width: 100%;
  height: 100%;
  transform: rotateZ(45deg);
}

.shooting_star {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(var(--v-theme-secondary)), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgba(var(--v-theme-secondary)));
  animation:
    tail $shooting-time ease-in-out infinite,
    shooting $shooting-time ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg,
        rgba(0, 0, 255, 0),
        rgba(var(--v-theme-secondary)),
        rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: shining $shooting-time ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg,
        rgba(0, 0, 255, 0),
        rgba(var(--v-theme-secondary)),
        rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: shining $shooting-time ease-in-out infinite;
    transform: translateX(50%) rotateZ(-45deg);
  }

  @for $i from 1 through 20 {
    &:nth-child(#{$i}) {
      $delay: random(9999)+0ms;
      top: calc(50% - #{random(400) - 200px});
      left: calc(50% - #{random(300) + 0px});
      animation-delay: $delay;

      &::before,
      &::after {
        animation-delay: $delay;
      }
    }
  }
}

@keyframes tail {
  0% {
    width: 0;
  }

  30% {
    width: 100px;
  }

  100% {
    width: 0;
  }
}

@keyframes shining {
  0% {
    width: 0;
  }

  50% {
    width: 30px;
  }

  100% {
    width: 0;
  }
}

@keyframes shooting {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(300px);
  }
}

@keyframes sky {
  0% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(45 + 360deg);
  }
}

#badge {
  animation: jump-shaking 1s infinite;
}

@keyframes jump-shaking {
  0% {
    transform: translateX(0)
  }

  25% {
    transform: translateY(-9px)
  }

  35% {
    transform: translateY(-9px) rotate(17deg)
  }

  55% {
    transform: translateY(-9px) rotate(-17deg)
  }

  65% {
    transform: translateY(-9px) rotate(17deg)
  }

  75% {
    transform: translateY(-9px) rotate(-17deg)
  }

  100% {
    transform: translateY(0) rotate(0)
  }
}</style>
