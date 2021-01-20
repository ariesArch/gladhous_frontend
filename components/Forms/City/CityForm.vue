<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>Create New City</v-card-title>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="SaveForm">
          <v-card-text>
            <validation-provider
              v-slot="{ errors }"
              name="name"
              rules="required"
            >
              <v-text-field
                v-model="city.name"
                :error-messages="errors"
                label="Name"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="name_mm"
              rules="required"
            >
              <v-text-field
                v-model="city.name_mm"
                :error-messages="errors"
                label="Name in Myanmar"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="is_available_d2d"
              rules="required"
            >
              <v-radio-group
                v-model="city.is_available_d2d"
                :error-messages="errors"
                required
              >
                <template v-slot:label>
                  <div>Is available door to door?</div>
                </template>
                <v-radio :value="true">
                  <template v-slot:label>
                    <div>
                      <strong>Yes</strong>
                    </div>
                  </template>
                </v-radio>
                <v-radio :value="false">
                  <template v-slot:label>
                    <div>
                      <strong>No</strong>
                    </div>
                  </template>
                </v-radio>
              </v-radio-group>
            </validation-provider>
            <v-card-actions>
              <v-spacer />
              <v-btn color="warning" @click="isOpenDialog = false">Cancel</v-btn>
              <v-btn color="info" :disabled="invalid" @click="saveCity()">Save</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-form>
      </validation-observer>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      isOpenDialog: false,
      city: {
        name: '',
        name_mm: '',
        description: '',
        is_available_d2d: false
      }
    };
  },
  mounted () {
    this.$parent.$on('createForm', () => {
      this.isOpenDialog = true;
    });
    this.$parent.$on('editForm', (item) => {
      this.city = item;
      this.isOpenDialog = true;
    });
  },
  methods: {
    async saveCity () {
      const { data } = await this.$api.createNewCity(this, this.city);
      console.log(data);
      this.isOpenDialog = false;
    }
  }
};
</script>
