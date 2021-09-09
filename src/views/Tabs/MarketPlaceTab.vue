<template>
  <ion-page mode="ios">
    <ion-header>
      <MainHeader :title="'Marketplace'" />
      <ion-toolbar>
        <ion-item lines="none">
          <ion-button expand="block">
            <ion-icon size="small" name="create-outline" />
            <ion-label>
              Sell
            </ion-label>
          </ion-button>
          <ion-button expand="block">
            <ion-icon name="list" />
            <ion-label>
              Categories
            </ion-label>
          </ion-button>
        </ion-item>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <NewForYou />
      <TodaysPick />
      <Posts />
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
    IonItem
  } from '@ionic/vue';

  import MainHeader from '@/components/MainHeader.vue'
  import Posts from '@/components/Posts'
  import TodaysPick from '@/components/marketplacetab/TodaysPick'
  import NewForYou from '@/components/NewForYou'
  import {
    ref
  } from '@vue/reactivity';

  export default {
    name: 'MarketPlaceTab',
    components: {
      IonHeader,
      IonContent,
      IonPage,
      IonToolbar,
      IonLabel,
      IonIcon,
      IonButton,
      IonItem,

      MainHeader,
      Posts,
      NewForYou,
      TodaysPick
    },
    setup() {
      let activeSegment = ref('sell')

      function onSegmentChange(ev) {
        activeSegment.value = ev.detail.value
      }

      return {
        onSegmentChange,
        activeSegment
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  @import '@/assets/css/market-place-tab.scss';
</style>