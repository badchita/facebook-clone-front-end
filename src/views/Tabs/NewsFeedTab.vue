<template>
  <ion-page mode="ios">
    <ion-header>
      <MainHeader :title="'facebook'" />
    </ion-header>

    <ion-content :scroll-events="true" @ionScroll="onScroll($event)">
      <ion-grid class="create-status-grid">
        <ion-row>
          <ion-col size="1.2">
            <ion-avatar>
              <img src="@/assets/images/ProfilePictures/profile-picture.jpg" />
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
                <img src="@/assets/images/ProfilePictures/profile-picture.jpg" />
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

      <Posts />
    </ion-content>
  </ion-page>
</template>

<script>
  import MainHeader from '@/components/MainHeader.vue'
  import Posts from '@/components/Posts.vue'
  import {
    onMounted,
    ref
  } from '@vue/runtime-core';

  export default {
    name: 'NewsFeedTab',
    components: {
      MainHeader,
      Posts
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

      let scrolling = ref(false)

      function onScroll(ev) {
        ev.detail.scrollTop > 0 ? scrolling.value = true : scrolling.value = false
      }

      return {
        slideOption,
        slideOptionStories,
        onScroll,
        scrolling
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  @import '@/assets/css/news-feed-tab.scss';
</style>