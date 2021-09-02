<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-icon name="logo-facebook" />
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col><ion-input placeholder="Phone number or email"></ion-input></ion-col>
                </ion-row>
                <ion-row>
                    <ion-col><ion-input placeholder="Password"></ion-input></ion-col>
                </ion-row>
            </ion-grid>
            <ion-button expand="full">Log In</ion-button>
            <ion-button fill="clear" expand="full">Forgot Password?</ion-button>
            <ion-button fill="clear" expand="full">Back</ion-button>
        </ion-content>

        <ion-footer class="ion-no-border">
                <ion-label>OR</ion-label>
                <ion-button expand="full">Create New Account</ion-button>
        </ion-footer>
    </ion-page>
</template>

<script>
    import {
        IonPage,
        IonHeader,
        IonToolbar,
        IonContent,
        IonIcon,
        IonGrid,
        IonRow,
        IonCol,
        IonInput,
        IonButton,
        IonFooter,
        IonLabel
    } from '@ionic/vue';
    export default {
        components: {
            IonPage,
            IonHeader,
            IonContent,
            IonToolbar,
            IonIcon,
            IonGrid,
            IonRow,
            IonCol,
            IonInput,
            IonButton,
            IonFooter,
            IonLabel
        },
        setup() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/login.scss';
    @import '@/assets/css/variables.scss';
</style>