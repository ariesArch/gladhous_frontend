<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>{{ dialogTitle }}</v-card-title>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="SaveForm">
          <v-card-text class="mt-0 bg-info">
            <v-row>
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="table_name"
                  rules="required"
                >
                  <v-text-field
                    v-model="table.name"
                    :error-messages="errors"
                    required
                    label="Table Name"
                    name="table_name"
                  />
                </validation-provider>
              </v-col>
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="table_no"
                  rules="required"
                >
                  <v-text-field
                    v-model="table.table_no"
                    :error-messages="errors"
                    required
                    label="Table Number"
                    name="table_no"
                  />
                </validation-provider>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="capacity"
                  rules="required"
                >

                  <v-text-field
                    v-model="table.max_capacity"
                    :error-messages="errors"
                    required
                    label="Max Capacity"
                    name="capacity"
                    type="number"
                  />
                </validation-provider>
              </v-col>
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="staff_id"
                  rules="required"
                >
                  <v-autocomplete
                    v-model="table.staff_id"
                    :items="staffs"
                    item-text="name"
                    item-value="id"
                    label="Choose Waiter"
                    name="staff_id"
                    :error-messages="errors"
                    required
                  />
                </validation-provider>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="branch_id"
                  rules="required"
                >
                  <v-autocomplete
                    v-model="table.branch_id"
                    :items="branches"
                    item-text="name_mm"
                    item-value="id"
                    label="Choose Branch"
                    name="branch_id"
                    :error-messages="errors"
                    required
                  />
                </validation-provider>
              </v-col>
              <v-col>

                <validation-provider
                  v-slot="{ errors }"
                  name="city_id"
                  rules="required"
                >
                  <v-autocomplete
                    v-model="table.city_id"
                    :items="cities"
                    item-text="name_mm"
                    item-value="id"
                    label="Choose City"
                    name="city_id"
                    :error-messages="errors"
                    required
                  />
                </validation-provider>
              </v-col>
            </v-row>

            <validation-provider
              v-slot="{ errors }"
              name="zone_id"
              rules="required"
            >
              <v-autocomplete
                v-model="table.zone_id"
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
              name="description"
              rules="required"
            >
              <v-textarea
                v-model="table.description"
                :error-messages="errors"
                label="Description"
                name="description"
                flat
                height="30"
                outlined
                rows="3"
                shaped
                required
              />
            </validation-provider>

          </v-card-text>
          <v-card-actions class="mt-0">
            <v-spacer />
            <v-btn color="warning" @click="isOpenDialog=false">Cancel</v-btn>
            <v-btn color="info" :disabled="invalid" @click="SaveForm()">Save</v-btn>
          </v-card-actions>
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
      dialogTitle: 'Create new Table',
      table: {
        name: '',
        table_no: '',
        max_capacity: '',
        staff_id: '',
        branch_id: '',
        city_id: '',
        zone_id: '',
        description: ''
      },
      staffs: [],
      branches: [],
      cities: [],
      zones: []
    };
  },
  mounted () {
    this.staffs = this.$parent.staffs;
    this.branches = this.$parent.branches;
    this.cities = this.$parent.cities;
    this.zones = this.$parent.zones;
    this.$parent.$on('createForm', () => {
      this.isOpenDialog = true;
    });
    this.$parent.$on('editForm', (item) => {
      this.table = item;
      this.dialogTitle = `Edit Table (${item.name})`;
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
