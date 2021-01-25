<template>
  <v-container fluid>
    <v-row>
      <v-col md="8" offset-md="2">
        <LoginForm formTitle="Login to GladHouse" :postLogin="loginUser" buttonText="Login" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LoginForm from '@/components/Auth/LoginForm';
import { mapActions } from 'vuex';
export default {
    components: {
        LoginForm
    },
    methods: {
        ...mapActions({
            setUser: 'authenticate/setUser',
            setJwt: 'authenticate/setJwt'
        }),
        async loginUser (userInfo) {
            try {
                const response = await this.$auth.loginWith('laravelJWT', { data: userInfo });
                console.log(response.data.status);
                if (response.data.status === 1) {
                    // const jwt = response.data.data.access_token;
                    // this.setJwt(jwt);
                    // this.setUser(response.data.data.user);
                    // this.$auth.strategy.token.set(jwt);
                    console.log(this.$auth.token);
                    // this.$router.push({ name: 'cities' });
                    this.$router.push({ name: 'profile' });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
};
</script>
