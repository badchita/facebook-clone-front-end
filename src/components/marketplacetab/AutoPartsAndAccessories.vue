<template>
    <ion-grid class="todays-pick-grid">
        <ion-row class="title-row">
            <ion-col size="9">
                <ion-label>Auto Parts & Accessories</ion-label>
            </ion-col>
            <ion-col class="close-seeall-col">
                <ion-icon name="close-circle-outline" />
                <ion-text color="primary">See All</ion-text>
            </ion-col>
        </ion-row>

        <div v-for="(item, i) in 2" :key="i">
            <ion-row class="image-row">
                <ion-col><img src="@/assets/images/Posts/post1.jpg" /></ion-col>
                <ion-col><img src="@/assets/images/Posts/post2.jpg" /></ion-col>
            </ion-row>

            <ion-row class="price-row">
                <ion-col>
                    <ion-label>FREE • mountain bike</ion-label>
                </ion-col>
                <ion-col>
                    <ion-label>₱170,000 • Vellum Carbon</ion-label>
                </ion-col>
            </ion-row>
        </div>
    </ion-grid>
</template>

<script>
    export default {
        components: {},
        setup() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/market-place-tab.scss';
</style>