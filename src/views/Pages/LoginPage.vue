<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-icon name="logo-facebook" />
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-list>
                <ion-item lines="none">
                    <ion-input @ionChange="onChangeEmail($event)" v-model="login.email"
                        placeholder="Phone number or email" slot>
                    </ion-input>
                    <ion-button v-if="showClearEmail" @click="onClearEmail" fill="clear">
                        <ion-icon slot="end" name="close-circle-outline" />
                    </ion-button>
                </ion-item>
                <ion-item lines="none">
                    <ion-input @ionChange="onChangePassword($event)" v-model="login.password" placeholder="Password"
                        type="password">
                    </ion-input>
                    <ion-button v-if="showClearPassword" @click="onClearPassword" fill="clear">
                        <ion-icon slot="end" name="close-circle-outline" />
                    </ion-button>
                </ion-item>
            </ion-list>

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
        IonInput,
        IonButton,
        IonFooter,
        IonItem,
        IonList
    } from '@ionic/vue';
    import {
        ref
    } from '@vue/reactivity';
    import {
        useRouter
    } from 'vue-router';
    export default {
        name: 'LoginPage',
        components: {
            IonPage,
            IonHeader,
            IonContent,
            IonToolbar,
            IonIcon,
            IonInput,
            IonButton,
            IonFooter,
            IonItem,
            IonList
        },
        setup() {
            const login = ref({
                email: '',
                password: ''
            })

            let showClearEmail = ref(false)
            let showClearPassword = ref(false)

            const router = useRouter();

            function clearEmail() {
                login.value.email = ''
            }

            function clearPassword() {
                login.value.password = ''
            }

            function onClearEmail() {
                clearEmail()
                showClearEmail.value = false
            }

            function onClearPassword() {
                clearPassword()
                showClearPassword = false
            }

            function redirectToTabs() {
                router.push(`/tabs/`)
            }

            function onChangeEmail(ev) {
                ev.detail !== '' ? showClearEmail.value = true : showClearEmail.value = false
            }

            function onChangePassword(ev) {
                ev.detail !== '' ? showClearPassword.value = true : showClearPassword.value = false
            }

            return {
                login,
                redirectToTabs,
                onClearEmail,
                onClearPassword,
                showClearEmail,
                onChangeEmail,
                onChangePassword,
                showClearPassword
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/login.scss';
</style>