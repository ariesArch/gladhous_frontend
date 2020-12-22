
<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>{{ dialogTitle }}</v-card-title>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="SaveForm">
          <v-card-text>
            <validation-provider
              v-slot="{ errors }"
              name="city_id"
              rules="required"
            >
              <v-autocomplete
                v-model="staff.city_id"
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
                v-model="staff.zone_id"
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
              name="department_id"
              rules="required"
            >
              <v-autocomplete
                v-model="staff.department_id"
                :items="departments"
                item-text="name_mm"
                item-value="id"
                label="Choose Departments"
                name="department_id"
                :error-messages="errors"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="role_id"
              rules="required"
            >
              <v-autocomplete
                v-model="staff.role_id"
                :items="roles"
                item-text="name_mm"
                item-value="id"
                label="Choose Role"
                name="role_id"
                :error-messages="errors"
                required
              />
            </validation-provider>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="warning" @click="isOpenDialog = false">Cancel</v-btn>
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
      dialogTitle: 'Create New Staff',
      staff: {
        city_id: '',
        zone_id: '',
        branch_id: '',
        department_id: '',
        role_id: '',
        stafftype_id: ''
      }
    };
  },
  mounted () {
    this.cities = this.$parent.cities;
    this.zones = this.$parent.zones;
    this.departments = this.$parent.departments;
    this.branches = this.$parent.branches;
    this.roles = this.$parent.roles;
    this.staff_types = this.$parent.$parent.staff_types;
    this.$parent.$on('createForm', () => {
      this.isOpenDialog = true;
    });
    this.$parent.$on('editForm', (item) => {
      this.staff = item;
      this.dialogTitle = `Edit staff  (${item.name})`;
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
