<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
  import {
    IonApp,
    IonRouterOutlet
  } from '@ionic/vue';
  import {
    defineComponent
  } from 'vue';

  import {
    addIcons
  } from 'ionicons';

  import {
    logoFacebook,
    closeCircleOutline,
    homeOutline,
    playCircleOutline,
    storefrontOutline,
    peopleCircleOutline,
    menuOutline,
    notificationsOutline,
  } from 'ionicons/icons';

  addIcons({
    'logo-facebook': logoFacebook,
    'close-circle-outline': closeCircleOutline,
    'home-outline': homeOutline,
    'play-circle-outline': playCircleOutline,
    'storefront-outline': storefrontOutline,
    'people-circle-outline': peopleCircleOutline,
    'menu-outline': menuOutline,
    'notifications-outline': notificationsOutline
  })

  export default defineComponent({
    name: 'App',
    components: {
      IonApp,
      IonRouterOutlet
    }
  });
</script>

<style lang="scss">
  * {
    font-family: Helvetica, sans-serif;
  }
</style>