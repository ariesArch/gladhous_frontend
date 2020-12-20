<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>Create New Table</v-card-title>
      <v-form @submit.prevent="SaveForm">
        <v-card-text>
          <v-text-field
            v-model="table_name"
            v-validate="'required'"
            label="Table Name"
            name="table_name"
          />
          <v-text-field
            v-model="table_no"
            v-validate="'required'"
            label="Table Number"
            name="table_no"
          />
          <v-text-field
            v-model="capacity"
            v-validate="'required'"
            label="Max Capacity"
            name="capacity"
            type="number"
          />
          <v-autocomplete
            v-model="waiter"
            v-validate="'required'"
            :items="items"
            label="Waiter"
            name="waiter"
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
      isOpenDialog: false,
      table_name: '',
      table_no: '',
      capacity: ''
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
