<template>
  <ion-page mode="ios">
    <ion-header>
      <MainHeader :title="'Marketplace'" />
      <ion-toolbar>
        <ion-segment>
          <ion-segment-button>
            <ion-label>
              <ion-icon name="create-outline" />
            </ion-label>
          </ion-segment-button>
          <ion-segment-button>
            <ion-label>
              <ion-icon name="list" />
            </ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonPage,
    IonHeader,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonToolbar,
    IonLabel,
    IonIcon
  } from '@ionic/vue';

  import MainHeader from '@/components/MainHeader.vue'

  export default {
    name: 'MarketPlaceTab',
    components: {
      IonHeader,
      IonContent,
      IonPage,
      IonSegment,
      IonSegmentButton,
      IonToolbar,
      IonLabel,
      IonIcon,

      MainHeader
    },
    setup() {}
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  @import '@/assets/css/market-place-tab.scss';
</style>