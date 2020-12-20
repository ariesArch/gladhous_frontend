
<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>Create New Table</v-card-title>
      <v-form @submit.prevent="SaveForm">
        <v-card-text>
          <v-text-field
            v-model="name"
            v-validate="'required'"
            label="Name"
            name="name"
          />
          <v-text-field
            v-model="unit"
            v-validate="'required'"
            label="Unit"
            name="unit"
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
