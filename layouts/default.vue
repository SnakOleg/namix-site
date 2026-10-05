<template>
  <div class="wrapper">
    <NavbarComponent/>
    <nuxt class="main-app"/>
    <FooterComponent/>
  </div>
</template>

<script>
import NavbarComponent from '~/components/navbar.vue';
import FooterComponent from '~/components/footer.vue';

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
}
</script>

<style scoped>

:root {
  --main-background-color: #040404 !important;
}

body {
  background-color: var(--main-background-color);
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 98vh;
  color: white;
}

.main-app {
  flex: 1 0 auto;
}

</style>
