<template>
  <ion-page>
    <ion-header>
      <MainHeader :title="'facebook'" />
    </ion-header>

    <ion-content>
      <ion-grid class="create-status-grid">
        <ion-row>
          <ion-col size="1.7">
            <ion-avatar>
              <ion-img src="https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png" />
            </ion-avatar>
          </ion-col>
          <ion-col>
            <ion-button fill="clear">What's on your mind?</ion-button>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-button fill="clear">Live</ion-button>
          </ion-col>
          <ion-col>
            <ion-button fill="clear">Photo</ion-button>
          </ion-col>
          <ion-col>
            <ion-button fill="clear">Room</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonPage,
    IonHeader,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonImg,
    IonButton,
  } from '@ionic/vue';

  import MainHeader from '@/components/MainHeader.vue'

  export default {
    name: 'NewsFeedTab',
    components: {
      IonHeader,
      IonContent,
      IonPage,
      IonGrid,
      IonRow,
      IonCol,
      IonAvatar,
      IonImg,
      IonButton,

      MainHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  @import '@/assets/css/news-feed-tab.scss';
</style>