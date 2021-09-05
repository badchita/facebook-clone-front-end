<template>
    <ion-toolbar>
        <ion-item lines="none">
            <ion-label v-if="title === 'facebook'" class="news-feed-title">{{title}}</ion-label>
            <ion-label v-else class="other-title">{{title}}</ion-label>
            
            <ion-button v-if="title === 'Groups'" class="add-circle-button">
                <ion-icon slot="icon-only" name="add-circle"></ion-icon>
            </ion-button>
            <ion-button v-if="title === 'Groups'" class="settings-button">
                <ion-icon slot="icon-only" name="settings"></ion-icon>
            </ion-button>
            <ion-button v-if="title === 'Watch' || title === 'Marketplace'" class="person-button">
                <ion-icon slot="icon-only" name="person"></ion-icon>
            </ion-button>
            <ion-button
                v-if="title === 'facebook' || title === 'Watch' || title === 'Marketplace' || title === 'Groups' || title === 'Notifications'"
                class="search-button">
                <ion-icon slot="icon-only" name="search"></ion-icon>
            </ion-button>
            <ion-button v-if="title === 'facebook'" class="message-button">
                <ion-icon slot="icon-only" name="chatbubble-ellipses"></ion-icon>
            </ion-button>
        </ion-item>
    </ion-toolbar>
</template>

<script>
    import {
        IonIcon,
        IonButton,
        IonToolbar,
        IonItem,
        IonLabel
    } from '@ionic/vue';
    export default {
        name: 'MainHeader',
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        components: {
            IonToolbar,
            IonItem,
            IonButton,
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
    @import '@/assets/css/main-header.scss';
</style>