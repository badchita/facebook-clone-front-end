<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <MainHeader :title="'Groups'" />
      <ion-toolbar class="marketplace-groups-toolbar">
        <ion-slides>
          <ion-slide>
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
    <ion-content>
      <ion-slides>
        <ion-slide class="group-slide">
          <ion-row><ion-col><ion-label></ion-label></ion-col></ion-row>
        </ion-slide>
      </ion-slides>
    </ion-content>
  </ion-page>
</template>

<script>
  import MainHeader from '@/components/MainHeader.vue'

  export default {
    name: 'GroupsTab',
    components: {
      MainHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  @import '@/assets/css/groups-tab.scss';
  @import '@/assets/css/global.scss';
</style>