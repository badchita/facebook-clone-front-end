<template>
  <ion-page>
    <ion-header>
      <MainHeader :title="'facebook'"/>
    </ion-header>

    <ion-content :fullscreen="true">

      <ExploreContainer name="News Feed" />
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonPage,
    IonHeader,
    IonContent
  } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';

  import MainHeader from '@/components/MainHeader.vue'

  export default {
    name: 'NewsFeedTab',
    components: {
      ExploreContainer,
      IonHeader,
      IonContent,
      IonPage,

      MainHeader
    }
  }
</script>