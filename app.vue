<script>
import NavbarComponent from '~/components/navbar.vue';
import FooterComponent from '~/components/footer.vue';

export default defineComponent({
  components: {
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    useSeoMeta({
      title: 'Namix - Home',
      ogTitle: 'Namix',
      description: 'Дискорд сервер Namix',
      ogDescription: 'Дискорд сервер Namix',
      ogImage: '/logo.png'
    })
  }
})

</script>

<template>
  <NuxtExample dir="routing/pages" :nav="nav" current-route>
    <NavbarComponent/>
    <NuxtPage />
    <FooterComponent/>
  </NuxtExample>
</template>

