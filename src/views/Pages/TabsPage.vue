<template>
  <ion-page>
    <ion-tabs @ionTabsDidChange="onActive($event)">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="news-feed" href="/tabs/news-feed">
          <ion-icon v-if="active.home" name="home" />
          <ion-icon v-else name="home-outline" />
          <ion-label>News Feed</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="watch" href="/tabs/watch">
          <ion-icon v-if="active.watch" name="play-circle" />
          <ion-icon v-else name="play-circle-outline" />
          <ion-label>Watch</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="marketplace" href="/tabs/marketplace">
          <ion-icon v-if="active.marketplace" name="storefront" />
          <ion-icon v-else name="storefront-outline" />
          <ion-label>Marketplace</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="groups" href="/tabs/groups">
          <ion-icon v-if="active.groups" name="people-circle" />
          <ion-icon v-else name="people-circle-outline" />
          <ion-label>Groups</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="notifications" href="/tabs/notifications">
          <ion-icon v-if="active.notifications" name="notifications" />
          <ion-icon v-else name="notifications-outline" />
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
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet
  } from '@ionic/vue';
  import {
    reactive,
  } from '@vue/reactivity';

  export default {
    name: 'Tabs',
    components: {
      IonLabel,
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonPage,
      IonRouterOutlet
    },
    setup() {
      const active = reactive({
        home: false,
        watch: false,
        marketplace: false,
        groups: false,
        notifications: false,
      })

      function onActive(ev) {
        switch (ev.tab) {
          case 'news-feed': {
            active.home = true
            active.watch = false
            active.marketplace = false
            active.groups = false
            active.notifications = false
          }
          break
        case 'watch': {
          active.home = false
          active.watch = true
          active.marketplace = false
          active.groups = false
          active.notifications = false
        }
        break
        case 'marketplace': {
          active.home = false
          active.watch = false
          active.marketplace = true
          active.groups = false
          active.notifications = false
        }
        break
        case 'groups': {
          active.home = false
          active.watch = false
          active.marketplace = false
          active.groups = true
          active.notifications = false
        }
        break
        case 'notifications': {
          active.home = false
          active.watch = false
          active.marketplace = false
          active.groups = false
          active.notifications = true
        }
        break

        default:
          Object.keys(active).forEach(function (key) {
            active[key] = false
          })
        }
      }
      return {
        onActive,
        active
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  @import '@/assets/css/tabs.scss';
</style>