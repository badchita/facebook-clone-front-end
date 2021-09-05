<template>
  <ion-page>
    <ion-header>
      <MainHeader :title="'Watch'" />
      <ion-toolbar class="watch-toolbar">
        <ion-segment :value="activeSegment" scrollable mode="md" @ionChange="onSegmentChange($event)">
          <ion-segment-button v-for="(category, i) in categories" :key="i" :value="category.value" mode="ios"
            @click="onSegmentButtonClick($event)">
            <ion-label>{{category.value}}</ion-label>
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
    // IonGrid,
    // IonRow,
    //     IonCol
    IonLabel,
    IonToolbar,
  } from '@ionic/vue';

  import MainHeader from '@/components/MainHeader.vue'
  import {
    ref
  } from '@vue/reactivity';

  export default {
    name: 'WatchTab',
    components: {
      IonHeader,
      IonContent,
      IonPage,
      IonSegment,
      IonSegmentButton,
      IonToolbar,
      // IonGrid,
      // IonRow,
      // IonCol
      IonLabel,

      MainHeader
    },
    setup() {
      const categories = ([{
          value: 'For You',
        }, {
          value: 'Live'
        }, {
          value: 'Following'
        }, {
          value: 'Saved'
        }, {
          value: 'Food'
        },
        {
          value: 'Gaming'
        }
      ])

      console.log(categories)

      let activeSegment = ref('For You')

      function onSegmentChange(ev) {
        activeSegment.value = ev.detail.value
      }

      function onSegmentButtonClick(ev) {
        ev.target.scrollIntoView({
          behavior: 'smooth', //  smooth value triggers smooth scroll.
          inline: 'center'
        });
      }

      return {
        categories,
        activeSegment,
        onSegmentChange,
        onSegmentButtonClick
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  @import '@/assets/css/watch-tab.scss';
</style>