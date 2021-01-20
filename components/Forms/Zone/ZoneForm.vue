<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>{{ dialogTitle }}</v-card-title>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="SaveForm">
          <v-card-text>
            <validation-provider
              v-slot="{ errors }"
              name="name"
              rules="required"
            >
              <v-text-field
                v-model="zone.name"
                label="Name"
                name="name"
                :error-messages="errors"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="name_mm"
              rules="required"
            >
              <v-text-field
                v-model="zone.name_mm"
                label="Name in Myanmar"
                name="name_mm"
                :error-messages="errors"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="city_id"
              rules="required"
            >
              <v-autocomplete
                v-model="zone.city_id"
                :items="cities"
                item-text="name_mm"
                item-value="id"
                label="Choose City"
                name="city_id"
                :error-messages="errors"
                required
              />
            </validation-provider>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="warning" @click="isOpenDialog = false">Cancel</v-btn>
            <v-btn color="info" :disabled="invalid" @click="saveZone ()">Save</v-btn>
          </v-card-actions>
        </v-form>
      </validation-observer>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  async fetch () {
    const cities = await this.$api.getCitiesList(this).then(response => response.data);
    this.cities = cities;
  },
  data () {
    return {
      isOpenDialog: false,
      dialogTitle: 'Create New Zone',
      zone: {
        name: '',
        name_mm: '',
        city_id: '',
        description: ''
      },
      cities: []
    };
  },
  mounted () {
    this.cities = this.$parent.cities;
    this.$parent.$on('createForm', () => {
      this.isOpenDialog = true;
    });
    this.$parent.$on('editForm', (item) => {
      this.zone = item;
      this.dialogTitle = `Edit Zone (${item.name_mm})`;
      this.isOpenDialog = true;
    });
  },
  methods: {
    async saveZone () {
      const { data } = await this.$api.createNewZone(this, this.zone);
      console.log(data);
      this.isOpenDialog = false;
    }
  }
};
</script>
