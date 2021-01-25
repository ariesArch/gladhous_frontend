<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title> {{ dialogTitle }}</v-card-title>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="SaveForm">
          <v-card-text>
            <validation-provider
              v-slot="{ errors }"
              name="city_id"
              rules="required"
            >
              <v-autocomplete
                v-model="branch.city_id"
                :items="cities"
                item-text="name_mm"
                item-value="id"
                label="Choose City"
                name="city_id"
                :error-messages="errors"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="zone_id"
              rules="required"
            >
              <v-autocomplete
                v-model="branch.zone_id"
                :items="zones"
                item-text="name_mm"
                item-value="id"
                label="Choose Zone"
                name="zone_id"
                :error-messages="errors"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="name"
              rules="required"
            >
              <v-text-field
                v-model="branch.name"
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
                v-model="branch.name_mm"
                label="Name in English"
                name="name_mm"
                :error-messages="errors"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="description"
              rules="required"
            >
              <v-textarea
                v-model="branch.description"
                :error-messages="errors"
                label="Description"
                required
                auto-grow
                outlined
                shaped
              />
            </validation-provider>
            <v-card-actions>
              <v-spacer />
              <v-btn color="warning" @click="isOpenDialog = false">Cancel</v-btn>
              <v-btn color="info" :disabled="invalid" @click="saveBranch ()">Save</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-form>
      </validation-observer>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
    async fetch () {
        const zones = await this.$api.getZonesList(this).then(response => response.data);
        this.zones = zones;
        const cities = await this.$api.getCitiesList(this).then(response => response.data);
        this.cities = cities;
    },
    data () {
        return {
            isOpenDialog: false,
            dialogTitle: 'Create new Branch',
            branch: {
                city_id: '',
                zone_id: '',
                name: '',
                name_mm: '',
                description: ''
            },
            cities: [],
            zones: []
        };
    },
    mounted () {
        this.cities = this.$parent.cities;
        this.zones = this.$parent.zones;
        this.$parent.$on('createForm', () => {
            this.isOpenDialog = true;
        });
        this.$parent.$on('editForm', (item) => {
            this.branch = item;
            this.dialogTitle = `Edit Branch (${item.name_mm})`;
            this.isOpenDialog = true;
        });
    },
    methods: {
        async saveBranch () {
            const { data } = await this.$api.createNewBranch(this, this.branch);
            console.log(data);
            this.isOpenDialog = false;
        }
    }
};
</script>
