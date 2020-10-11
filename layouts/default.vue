<template>
  <div class="l-container">
    <the-header />
    <main class="l-main">
      <Nuxt />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/organisms/TheHeader.vue';
import TheFooter from '~/components/organisms/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>
