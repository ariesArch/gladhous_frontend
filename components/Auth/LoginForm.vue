<template>
  <v-card>
    <v-card-title>{{ formTitle }}</v-card-title>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <v-form @submit.prevent="postLogin">
        <v-card-text>
          <validation-provider
            v-slot="{ errors }"
            name="username"
            rules="required"
          >
            <v-text-field
              v-model="loginInfo.username"
              :error-messages="errors"
              label="username"
              required
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="password"
            rules="required"
          >
            <v-text-field
              v-model="loginInfo.password"
              :error-messages="errors"
              label="password"
              required
            />
          </validation-provider>
          <v-card-actions>
            <v-spacer />
            <v-btn color="warning" @click="isOpenDialog = false">Cancel</v-btn>
            <v-btn color="info" :disabled="invalid" @click="postLogin(loginInfo)">{{ buttonText }}</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-form>
    </validation-observer>
  </v-card>
</template>
<script>
export default {
    // props: ['formTitle', 'postLogin', 'buttonText'],
    props: {
        formTitle: { type: String, required: true },
        buttonText: { type: String, required: true },
        postLogin: { type: Function, required: true }
    },
    data () {
        return {
            loginInfo: {
                username: '',
                password: ''
            }
        };
    }
};
</script>
