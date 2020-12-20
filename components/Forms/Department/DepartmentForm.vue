<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>Create New Departmment</v-card-title>
      <v-form @submit.prevent="SaveForm">
        <v-card-text>
          <v-text-field
            v-model="name_mm"
            v-validate="'required'"
            label="Name"
            name="name_mm"
          />
          <v-text-field
            v-model="name_en"
            v-validate="'required'"
            label="Name"
            name="name_en"
          />
          <v-textarea
            v-model="description"
            v-validate="'required'"
            label="Description"
            name="description"
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
