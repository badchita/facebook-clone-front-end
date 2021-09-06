<template>
  <ion-page mode="ios">
    <ion-header>
      <MainHeader :title="'Marketplace'"/>
    </ion-header>
    <ion-content :fullscreen="true">
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonPage,
    IonHeader,
    IonContent
  } from '@ionic/vue';

  import MainHeader from '@/components/MainHeader.vue'

  export default {
    name: 'MarketPlaceTab',
    components: {
      IonHeader,
      IonContent,
      IonPage,

      MainHeader
    }
  }
</script>