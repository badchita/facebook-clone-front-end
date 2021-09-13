<template>
  <ion-page mode="ios">
    <ion-header>
      <MainHeader :title="'Marketplace'" />
      <ion-toolbar class="marketplace-groups-toolbar">
        <ion-slides>
          <ion-slide>
            <ion-button expand="block">
              <ion-icon size="small" name="create-outline" />
              <ion-label>
                Sell
              </ion-label>
            </ion-button>
            <ion-button expand="block">
              <ion-icon size="small" name="list" />
              <ion-label>
                Categories
              </ion-label>
            </ion-button>
          </ion-slide>
        </ion-slides>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <NewForYou />
      <TodaysPick />
      <AutoPartsAndAccessories />
      <NewlyListed />
      <HomeDecor />
    </ion-content>
  </ion-page>
</template>

<script>
  import MainHeader from '@/components/MainHeader.vue'
  import NewForYou from '@/components/NewForYou'
  import TodaysPick from '@/components/marketplacetab/TodaysPick'
  import AutoPartsAndAccessories from '@/components/marketplacetab/AutoPartsAndAccessories'
  import NewlyListed from '@/components/marketplacetab/NewlyListed'
  import HomeDecor from '@/components/marketplacetab/HomeDecor'
  import {
    ref
  } from '@vue/reactivity';

  export default {
    name: 'MarketPlaceTab',
    components: {
      MainHeader,
      TodaysPick,
      AutoPartsAndAccessories,
      NewForYou,
      NewlyListed,
      HomeDecor,
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
  @import '@/assets/css/global.scss';
</style>