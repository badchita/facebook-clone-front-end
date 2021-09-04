<template>
    <ion-grid class="posts" v-for="(item,i) in 10" :key="i">
        <ion-row class="post-details">
            <ion-col size="1.8">
                <ion-avatar><img src="@/assets/images/profile-picture.jpg" /></ion-avatar>
            </ion-col>
            <ion-col size="9.2" class="post-name">
                <ion-label class="name">Vr Bachita</ion-label><br />
                <ion-label class="time">13m
                    <ion-icon name="people" />
                </ion-label>
            </ion-col>
            <ion-col size="1">
                <ion-label>
                    <ion-icon size="small" slot="icon-only" name="ellipsis-horizontal" />
                </ion-label>
            </ion-col>
        </ion-row>
        <!-- <ion-row class="description">
          <ion-col>
          <p>Bike Bike</p>
          </ion-col>
        </ion-row> -->
        <ion-row class="post-image">
            <img src="@/assets/images/profile-picture.jpg" />
        </ion-row>
        <ion-row class="reacts-comments">
            <ion-col size=".4">
                <ion-icon color="primary" src="thumbs-up-sharp" />
            </ion-col>
            <ion-col size=".6">
                <ion-icon color="danger" name="heart-circle-sharp" />
            </ion-col>
            <ion-col size="7.8">
                Maria Pico and 33 others
            </ion-col>
            <ion-col>3 Comments</ion-col>
        </ion-row>
        <ion-row class="react-comment-share">
            <ion-col>
                <div class="like">
                    <ion-icon name="thumbs-up-outline" />
                    Like
                </div>
            </ion-col>
            <ion-col>
                <div class="comment">
                    <ion-icon name="chatbox-outline" />
                    Comment
                </div>
            </ion-col>
            <ion-col>
                <div class="share">
                    <ion-icon name="arrow-redo-outline" />
                    Share
                </div>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script>
    import {
        IonGrid,
        IonRow,
        IonCol,
        IonAvatar,
        IonIcon,
        IonLabel,
    } from '@ionic/vue';
    export default {
        components: {
            IonGrid,
            IonRow,
            IonCol,
            IonAvatar,
            IonIcon,
            IonLabel,
        },
        setup() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/posts.scss';
</style>