<template>
    <ion-toolbar mode="ios">
        <ion-item mode="ios" lines="none">
            <ion-label v-if="title === 'facebook'" class="news-feed-title" mode="ios">{{title}}</ion-label>
            <ion-label v-else class="other-title">{{title}}</ion-label>

            <ion-button v-if="title === 'Groups'" class="add-circle-button" mode="ios">
                <ion-icon slot="icon-only" name="add-circle"></ion-icon>
            </ion-button>
            <ion-button v-if="title === 'Groups'" class="settings-button" mode="ios">
                <ion-icon slot="icon-only" name="settings"></ion-icon>
            </ion-button>
            <ion-button v-if="title === 'Watch' || title === 'Marketplace'" class="person-button" mode="ios">
                <ion-icon slot="icon-only" name="person"></ion-icon>
            </ion-button>
            <ion-button
                v-if="title === 'facebook' || title === 'Watch' || title === 'Marketplace' || title === 'Groups' || title === 'Notifications'"
                class="search-button" mode="ios">
                <ion-icon slot="icon-only" name="search"></ion-icon>
            </ion-button>
            <ion-button v-if="title === 'facebook'" class="message-button" mode="ios">
                <ion-icon slot="icon-only" name="chatbubble-ellipses"></ion-icon>
            </ion-button>
        </ion-item>
    </ion-toolbar>
</template>

<script>
    export default {
        name: 'MainHeader',
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        components: {},
        setup() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/main-header.scss';
</style>