<template>
    <ion-toolbar>
        <ion-item lines="none">
            <ion-label>facebook</ion-label>
            <ion-button>
                <ion-icon name="search-outline"></ion-icon>
            </ion-button>
            <ion-button>
                <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
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

</style>