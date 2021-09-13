<template>
  <ion-page>
    <ion-header>
      <MainHeader :title="'Notifications'"/>
    </ion-header>
    <ion-content :fullscreen="true">
      <ExploreContainer name="Notifications" />
    </ion-content>
  </ion-page>
</template>

<script>
  import ExploreContainer from '@/components/ExploreContainer.vue';

  import MainHeader from '@/components/MainHeader.vue'

  export default {
    name: 'NotificationsTab',
    components: {
      ExploreContainer,

      MainHeader
    }
  }
</script>