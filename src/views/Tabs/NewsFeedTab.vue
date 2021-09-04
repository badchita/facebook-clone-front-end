<template>
  <ion-page>
    <ion-header>
      <MainHeader :title="'facebook'" />
    </ion-header>

    <ion-content>
      <ion-grid class="create-status-grid">
        <ion-row>
          <ion-col size="1.2">
            <ion-avatar>
              <img src="@/assets/images/profile-picture.jpg" />
            </ion-avatar>
          </ion-col>
          <ion-col>
            <ion-button class="whats-on-your-mind-button" fill="clear">What's on your mind?</ion-button>
          </ion-col>
        </ion-row>

        <ion-row class="button-row">
          <ion-col>
            <ion-button fill="clear">
              <ion-icon name='videocam' color="danger" />Live</ion-button>
          </ion-col>
          <ion-col>
            <ion-button fill="clear">
              <ion-icon name='images' color="success" />Photo</ion-button>
          </ion-col>
          <ion-col>
            <ion-button fill="clear">
              <ion-icon name='videocam' color="tertiary" />Room</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid class="audio-video-rooms">
        <ion-row class="audio-video-rooms-title">
          <ion-label>Audio & Video Rooms</ion-label>
        </ion-row>
        <ion-row>
          <ion-slides :options="slideOption">
            <ion-button>Create Room</ion-button>
            <ion-slide v-for="(item,i) in 10" :key="i">
              <ion-avatar>
                <ion-img src="https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png" />
              </ion-avatar>
            </ion-slide>
          </ion-slides>
        </ion-row>
      </ion-grid>

      <ion-grid class="stories">
        <ion-row>
          <ion-slides :options="slideOptionStories">
            <ion-slide>
              <ion-card class="create-story" button>
                <img src="@/assets/images/profile-picture.jpg" />
                <ion-card-content>
                  <div class="ion-icon-container">
                    <ion-icon name="add-circle" slot="icon-only" size="large" />
                  </div>
                  <ion-label>Create Story</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-slide>
            <ion-slide v-for="(item,i) in 10" :key="i">
              <ion-card class="friends-stories" button>
                <ion-card-content>
                  <div class="ion-icon-container">
                    <ion-icon name="add-circle" slot="icon-only" size="large" />
                  </div>
                  <ion-label>Create Story</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-slide>
          </ion-slides>
        </ion-row>
      </ion-grid>

      <ion-grid class="posts">
        <ion-row class="post-details">
          <ion-col>
            <ion-avatar><img src="@/assets/images/profile-picture.jpg" /></ion-avatar>
          </ion-col>
          <ion-col>
            <ion-label>Vr Bachita</ion-label>
          </ion-col>
          <ion-col>
            <ion-label>
              <ion-icon name="ellipsis-horizontal" />
            </ion-label>
          </ion-col>
          <ion-col>
            <ion-label>13m</ion-label>
          </ion-col>
          <ion-col>
            <ion-label>
              <ion-icon name="people" />
            </ion-label>
          </ion-col>
        </ion-row>
        <ion-row class="post-image">
          <img src="@/assets/images/profile-picture.jpg" />
        </ion-row>
        <ion-row class="reacts-comments">
          <ion-col>
            <ion-icon name="thumbs-up-sharp" />
          </ion-col>
          <ion-col>
            <ion-icon name="heart-circle-sharp" />
          </ion-col>
          <ion-col>3 Comments</ion-col>
        </ion-row>
        <ion-row class="react-comment-share">
          <ion-col>
            <ion-icon name="thumbs-up-outline" />
            Like
          </ion-col>
          <ion-col>
            <ion-icon name="chatbox-outline" />
            Comment
          </ion-col>
          <ion-col>
            <ion-icon name="arrow-redo-outline" />
            Share
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonPage,
    IonHeader,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonImg,
    IonButton,
    IonIcon,
    IonLabel,
    IonSlide,
    IonSlides,
    IonCard,
    IonCardContent
  } from '@ionic/vue';

  import MainHeader from '@/components/MainHeader.vue'
  import {
    onMounted
  } from '@vue/runtime-core';

  export default {
    name: 'NewsFeedTab',
    components: {
      IonHeader,
      IonContent,
      IonPage,
      IonGrid,
      IonRow,
      IonCol,
      IonAvatar,
      IonImg,
      IonButton,
      IonIcon,
      IonLabel,
      IonSlide,
      IonSlides,
      IonCard,
      IonCardContent,

      MainHeader
    },
    setup() {
      onMounted(() => {
        slideOption
      })
      const slideOption = {
        initialSlide: 0,
        slidesPerView: 6,
        speed: 400,
      }
      const slideOptionStories = {
        slidesPerView: 3,
        speed: 400,
      }

      return {
        slideOption,
        slideOptionStories
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  @import '@/assets/css/news-feed-tab.scss';
  @import '@/assets/css/global.scss';
</style>