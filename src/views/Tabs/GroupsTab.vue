<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <MainHeader :title="'Groups'" />
      <ion-toolbar class="marketplace-groups-toolbar">
        <ion-slides>
          <ion-slide lines="none">
            <ion-button expand="block">
              <ion-icon size="small" name="people" />
              <ion-label>
                You Groups
              </ion-label>
            </ion-button>
            <ion-button expand="block">
              <ion-icon size="small" name="compass" />
              <ion-label>
                Discover
              </ion-label>
            </ion-button>
            <ion-button expand="block">
              <ion-icon size="small" name="person-add" />
              <ion-label>
                Invites
              </ion-label>
            </ion-button>
          </ion-slide>
        </ion-slides>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonLabel,
    IonIcon,
    IonButton,
    IonSlides,
    IonSlide,
  } from '@ionic/vue';

  import MainHeader from '@/components/MainHeader.vue'

  export default {
    name: 'GroupsTab',
    components: {
      IonHeader,
      IonContent,
      IonPage,
      IonToolbar,
      IonLabel,
      IonIcon,
      IonButton,
      IonSlides,
      IonSlide,

      MainHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  @import '@/assets/css/global.scss';
</style>