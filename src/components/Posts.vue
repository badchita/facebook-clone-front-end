<template>
    <ion-grid class="posts" v-for="(item,i) in data.post_details" :key="i">
        <ion-row class="post-details">
            <ion-col size="1.7">
                <ion-avatar><img v-bind:src="item.ProfilePictureURL" /></ion-avatar>
            </ion-col>
            <ion-col size="9.3" class="post-name">
                <ion-label class="name">{{item.FullName}}</ion-label><br />
                <ion-label class="time" v-if="item.TimeType === 'minutes'">{{item.Time}}m
                    <ion-icon name="people" />
                </ion-label>
                <ion-label class="time" v-else>{{item.Time}}h
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
            <img :src="item.PostImageURL" />
        </ion-row>
        <ion-row class="reacts-comments">
            <ion-col size=".4">
                <ion-icon color="primary" name="thumbs-up-sharp" />
            </ion-col>
            <ion-col size=".6">
                <ion-icon color="danger" name="heart-circle-sharp" />
            </ion-col>
            <ion-col size="7.8">
                Maria Pico and {{item.NumberOfReacts}}
            </ion-col>
            <ion-col>{{item.NumberOfComments}} Comments</ion-col>
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
    import {
        reactive
    } from '@vue/reactivity';

    import profile_picture1 from '@/assets/images/ProfilePictures/profile-picture.jpg'
    import profile_picture2 from '@/assets/images/ProfilePictures/friend-picture.jpg'
    import post_image1 from '@/assets/images/Posts/post1.jpg'
    import post_image2 from '@/assets/images/Posts/post2.jpg'
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
            const data = reactive({
                post_details: [{
                    FullName: 'Vr Bachita',
                    Time: '20',
                    TimeType: 'minutes',
                    ProfilePictureURL: profile_picture1,
                    PostImageURL: post_image1,
                    NumberOfComments: 10,
                    NumberOfReacts: 2
                },
                {
                    FullName: 'Maria Pico',
                    Time: '14',
                    TimeType: 'hours',
                    ProfilePictureURL: profile_picture2,
                    PostImageURL: post_image2,
                    NumberOfComments: 70,
                    NumberOfReacts: 589
                }]
            })

            return {
                data,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/posts.scss';
</style>