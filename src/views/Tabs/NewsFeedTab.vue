<template>
  <ion-page>
    <ion-header>
      <MainHeader :title="'facebook'" />
    </ion-header>

    <ion-content>
      <ion-grid class="create-status-grid">
        <ion-row>
          <ion-col size="1.2">
            <ion-avatar>
              <ion-img src="https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png" />
            </ion-avatar>
          </ion-col>
          <ion-col>
            <ion-button class="whats-on-your-mind-button" fill="clear">What's on your mind?</ion-button>
          </ion-col>
        </ion-row>

        <ion-row class="button-row">
          <ion-col>
            <ion-button fill="clear">
              <ion-icon name='videocam' color="danger" />Live</ion-button>
          </ion-col>
          <ion-col>
            <ion-button fill="clear">
              <ion-icon name='images' color="success" />Photo</ion-button>
          </ion-col>
          <ion-col>
            <ion-button fill="clear">
              <ion-icon name='videocam' color="tertiary" />Room</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid class="audio-video-rooms">
        <ion-row>
          <ion-label>Audio & Video Rooms</ion-label>
        </ion-row>
        <ion-row>
          <ion-slides :options="slideOption">
            <ion-button>Create Room</ion-button>
            <ion-slide v-for="(item,i) in 7" :key="i">
              <ion-avatar>
                <ion-img src="https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png" />
              </ion-avatar>
            </ion-slide>
          </ion-slides>
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
    IonIcon,
    IonLabel,
    IonSlide,
    IonSlides,
  } from '@ionic/vue';

  import MainHeader from '@/components/MainHeader.vue'
import { onMounted } from '@vue/runtime-core';

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
      IonIcon,
      IonLabel,
      IonSlide,
      IonSlides,

      MainHeader
    },
    setup() {
      onMounted(() => {
        slideOption
      })
      const slideOption = {
          slidesPerView: 6,
          speed: 400,
        }

        return {
          slideOption
        }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  @import '@/assets/css/news-feed-tab.scss';
</style>