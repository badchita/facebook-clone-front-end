<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
  import {
    IonApp,
    IonRouterOutlet
  } from '@ionic/vue';
  import {
    defineComponent
  } from 'vue';

  import {
    addIcons
  } from 'ionicons';

  import {
    logoFacebook,
    closeCircleOutline,
    homeOutline,
    playCircleOutline,
    storefrontOutline,
    peopleCircleOutline,
    menuOutline,
    notificationsOutline,
    searchOutline,
    chatbubbleEllipsesOutline,
    chatbubbleEllipses,
    search,
    person,
    settings,
    addCircle,
    home,
    playCircle,
    storefront,
    peopleCircle,
    notifications,
    videocam,
    images,
    ellipsisHorizontal,
    people,
    thumbsUpSharp,
    heartCircleSharp,
    thumbsUpOutline,
    chatboxOutline,
    arrowRedoOutline,
    list,
    createOutline,
    locationSharp,
  } from 'ionicons/icons';

  addIcons({
    'logo-facebook': logoFacebook,
    'close-circle-outline': closeCircleOutline,
    'home-outline': homeOutline,
    'play-circle-outline': playCircleOutline,
    'storefront-outline': storefrontOutline,
    'people-circle-outline': peopleCircleOutline,
    'menu-outline': menuOutline,
    'notifications-outline': notificationsOutline,
    'search-outline': searchOutline,
    'chatbubble-ellipses-outline': chatbubbleEllipsesOutline,
    'chatbubble-ellipses': chatbubbleEllipses,
    'search': search,
    'person': person,
    'settings': settings,
    'add-circle': addCircle,
    'home': home,
    'play-circle': playCircle,
    'storefront': storefront,
    'people-circle': peopleCircle,
    'notifications': notifications,
    'videocam': videocam,
    'images': images,
    'ellipsis-horizontal': ellipsisHorizontal,
    'people': people,
    'thumbs-up-sharp': thumbsUpSharp,
    'heart-circle-sharp': heartCircleSharp,
    'thumbs-up-outline': thumbsUpOutline,
    'chatbox-outline': chatboxOutline,
    'arrow-redo-outline': arrowRedoOutline,
    'list': list,
    'create-outline': createOutline,
    'location-sharp': locationSharp,
  })

  export default defineComponent({
    name: 'App',
    components: {
      IonApp,
      IonRouterOutlet
    }
  });
</script>

<style lang="scss">
  @import '@/assets/css/variables.scss';
  * {
    font-family: Helvetica, sans-serif;
  }
</style>