<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>Create New Table</v-card-title>
      <v-form @submit.prevent="SaveForm">
        <v-card-text>
          <validation-provider
            v-slot="{ errors }"
            name="item_category_id"
            rules="required"
          >
            <v-autocomplete
              v-model="item.item_category_id"
              :items="itemcategories"
              item-text="name"
              item-value="id"
              label="Choose Item Category"
              name="item_category"
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
              v-model="item.name"
              :error-messages="errors"
              label="Name"
              required
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="normal_quantity"
            rules="required"
          >
            <v-text-field
              v-model="item.normal_quantity"
              :error-messages="errors"
              label="Normal_Quantity"
              required
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="special_quantity"
            rules="required"
          >
            <v-text-field
              v-model="item.normal_quantity"
              :error-messages="errors"
              label="Special_Quantity"
              required
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="normal_price"
            rules="required"
          >
            <v-text-field
              v-model="item.normal_quantity"
              :error-messages="errors"
              label="Normal_Price"
              required
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="special_price"
            rules="required"
          >
            <v-text-field
              v-model="item.normal_quantity"
              :error-messages="errors"
              label="Special_Price"
              required
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="is_available_d2d"
            rules="required"
          >
            <v-radio-group
              v-model="item.is_apply_special"
              :error-messages="errors"
              required
            >
              <template v-slot:label>
                <div>Is apply special?</div>
              </template>
              <v-radio :value="true">
                <template v-slot:label>
                  <div>
                    <strong>Yes</strong>
                  </div>
                </template>
              </v-radio>
              <v-radio :value="false">
                <template v-slot:label>
                  <div>
                    <strong>No</strong>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
          </validation-provider>
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
      dialogTitle: 'Create New Item',
      item: {
        name: '',
        name_mm: '',
        item_category_id: '',
        normal_quantity: '',
        special_quantity: '',
        normal_price: '',
        special_price: '',
        is_apply_special: false
      }
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
