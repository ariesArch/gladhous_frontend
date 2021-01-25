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
                name="city_id"
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
                label="Name"
                name="name_mm"
                :error-messages="errors"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="name_en"
              rules="required"
            >
              <v-text-field
                v-model="branch.name_en"
                label="Name in English"
                name="name_en"
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
                v-validate="'required'"
                :error-messages="errors"
                label="Description"
                name="description"
                auto-grow
                outlined
                rows="3"
                shaped
              />
            </validation-provider>
            <v-card-actions>
              <v-spacer />
              <v-btn color="warning" @click="isOpenDialog = false">Cancel</v-btn>
              <v-btn color="info" :disabled="invalid" @click="SaveForm()">Save</v-btn>
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
            dialogTitle: 'Create new Branch',
            branch: {
                city_id: '',
                zone_id: '',
                name_mm: '',
                name_en: '',
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
        SaveForm () {
            this.isOpenDialog = false;
        }
    }
};
</script>
