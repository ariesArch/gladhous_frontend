<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>Create New Table</v-card-title>
      <v-form @submit.prevent="SaveForm">
        <v-card-text>
          <v-autocomplete
            v-model="category"
            v-validate="'required'"
            :items="items"
            label="Chose Items"
            name="category"
          />
          <v-text-field
            v-model="name"
            v-validate="'required'"
            label=" Name"
            name="name"
          />
          <v-text-field
            v-model="normal_qty"
            v-validate="'required'"
            label="Normal_Quantity"
            name="normal_qty"
          />
          <v-text-field
            v-model="special_qty"
            v-validate="'required'"
            label="Special_Quantity"
            name="special_qty"
          />
          <v-text-field
            v-model="normal_price"
            v-validate="'required'"
            label="Normal_Price"
            name="normal_price"
          />
          <v-text-field
            v-model="special_price"
            v-validate="'required'"
            label="Special_Price"
            name="special_price"
          />
          <v-radio-group v-model="radios">
            <template v-slot:label>
              <div>Is apply special?</div>
            </template>
            <v-radio>
              <template v-slot:label>
                <div>
                  <strong class="success--text">Yes</strong>
                </div>
              </template>
            </v-radio>
            <v-radio>
              <template v-slot:label>
                <div>
                  <strong class="success--text">No</strong>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
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
