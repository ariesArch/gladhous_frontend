
<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>Create New Staff</v-card-title>
      <v-form @submit.prevent="SaveForm">
        <v-card-text>
          <v-autocomplete
            v-model="city_id"
            v-validate="'required'"
            :items="items"
            label="Choose City"
            name="city_id"
          />
          <v-autocomplete
            v-model="zone_id"
            v-validate="'required'"
            :items="items"
            label="Choose Zone"
            name="zone_id"
          />
          <v-autocomplete
            v-model="city_id"
            v-validate="'required'"
            :items="items"
            label="Choose City"
            name="city_id"
          />
          <v-autocomplete
            v-model="department_id"
            v-validate="'required'"
            :items="items"
            label="Choose Department"
            name="department_id"
          />
          <v-autocomplete
            v-model="branch_id"
            v-validate="'required'"
            :items="items"
            label="Choose Branch"
            name="branch_id"
          />
          <v-autocomplete
            v-model="role_id"
            v-validate="'required'"
            :items="items"
            label="Choose Role"
            name="role_id"
          />
          <v-autocomplete
            v-model="stafftype_id"
            v-validate="'required'"
            :items="items"
            label="Choose Stafftype"
            name="stafftype_id"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="warning">Cancel</v-btn>
          <v-btn color="info" @click="SaveForm()">Save</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      isOpenDialog: false
    };
  },
  mounted () {
    this.$parent.$on('createForm', () => {
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
