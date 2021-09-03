<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="news-feed" href="/tabs/news-feed">
          <ion-icon name="home-outline" />
          <ion-label>News Feed</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="watch" href="/tabs/watch">
          <ion-icon name="play-circle-outline" />
          <ion-label>Watch</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="marketplace" href="/tabs/marketplace">
          <ion-icon name="storefront-outline" />
          <ion-label>Marketplace</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="groups" href="/tabs/groups">
          <ion-icon name="people-circle-outline" />
          <ion-label>Groups</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="notifications" href="/tabs/notifications">
          <ion-icon name="notifications-outline" />
          <ion-label>Notifications</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="menu" href="/tabs/menu">
          <ion-icon name="menu-outline" />
          <ion-label>Menu</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/tabs.scss';
    @import '@/assets/css/variables.scss';
</style>