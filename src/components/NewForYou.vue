<template>
    <ion-grid class="new-for-you-grid">
        <ion-row>
            <ion-col class="new-for-you-title" size="9.5">New for You</ion-col>
            <ion-col>
                <ion-text>See All (2)</ion-text>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="1.8">
                <ion-avatar>
                    <img src="@/assets/images/ProfilePictures/friend-picture.jpg" />
                </ion-avatar>
            </ion-col>
            <ion-col class="name-col" size="8">
                <ion-label>Maria Pico and others shared videos.</ion-label>
            </ion-col>
            <ion-col>
                <ion-button fill="clear">
                    <ion-icon slot="icon-only" size="small" name="ellipsis-horizontal" />
                </ion-button>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script>
    import {
        IonAvatar,
        IonButton,
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
            IonCol,
            IonRow,
            IonLabel,
            IonAvatar,
            IonText,
            IonButton,
            IonIcon,
        },
        setup() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/new-for-you.scss';
</style>