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
    closeCircleOutline
  } from 'ionicons/icons';

  addIcons({
    'logo-facebook': logoFacebook,
    'close-circle-outline': closeCircleOutline
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