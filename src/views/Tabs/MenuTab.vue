<template>
  <ion-page>
    <ion-header>
      <MainHeader :title="'Menu'"/>
    </ion-header>
    <ion-content :fullscreen="true">
      <ExploreContainer name="Menu" />
    </ion-content>
  </ion-page>
</template>

<script>
  import ExploreContainer from '@/components/ExploreContainer.vue';

  import MainHeader from '@/components/MainHeader.vue'

  export default {
    name: 'MenuTab',
    components: {
      ExploreContainer,
      MainHeader
    }
  }
</script>