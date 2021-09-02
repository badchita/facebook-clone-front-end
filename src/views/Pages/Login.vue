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
                    <ion-col>
                        <ion-input v-model="login.email" placeholder="Phone number or email">
                        </ion-input>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-input placeholder="Password">
                        </ion-input>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <ion-button class="ion-button-login" expand="block" @click="redirectToTabs">Log In</ion-button>
            <ion-button class="ion-button-forget-password" fill="clear" expand="full">Forgot Password?</ion-button>
            <ion-button class="ion-button-back" fill="clear" expand="full">Back</ion-button>
        </ion-content>

        <ion-footer class="ion-no-border">
            <h5><span>OR</span></h5>
            <ion-button class="ion-button-create-account" expand="block">Create New Account</ion-button>
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
    } from '@ionic/vue';
    import {
        ref
    } from '@vue/reactivity';
    import {
        useRouter
    } from 'vue-router';
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
        },
        setup() {
            const login = ref({
                email: '',
                password: ''
            })

            const router = useRouter();

            function onClear() {
                login.value.email = ''
                login.value.password = ''
            }

            function clear() {
                console.log('clear');
                onClear()
            }

            function redirectToTabs() {
                router.push(`/tabs/`)
            }

            return {
                login,
                redirectToTabs,
                clear
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/login.scss';
    @import '@/assets/css/variables.scss';
</style>