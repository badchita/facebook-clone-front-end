<template>
    <ion-grid class="todays-pick-grid">
        <ion-row class="title-row">
            <ion-col>
                <ion-label>Today's Picks</ion-label>
            </ion-col>
            <ion-col>
                <ion-icon name="location-sharp" />
                <ion-text>Kabankalan</ion-text>
            </ion-col>
        </ion-row>

        <div v-for="(item, i) in 2" :key="i">
        <ion-row class="image-row">
            <ion-col><img src="@/assets/images/Posts/post1.jpg" /></ion-col>
            <ion-col><img src="@/assets/images/Posts/post2.jpg" /></ion-col>
        </ion-row>

        <ion-row class="price-row">
            <ion-col>
                <ion-label>₱10 • Notebook</ion-label>
            </ion-col>
            <ion-col>
                <ion-label>₱250 • Cake</ion-label>
            </ion-col>
        </ion-row>
        </div>
    </ion-grid>
</template>

<script>
    import {
        IonCol,
        IonGrid,
        IonIcon,
        IonLabel,
        IonRow,
        IonText
    } from '@ionic/vue'
    export default {
        components: {
            IonGrid,
            IonRow,
            IonCol,
            IonIcon,
            IonText,
            IonLabel,
        },
        setup() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/market-place-tab.scss';
</style>