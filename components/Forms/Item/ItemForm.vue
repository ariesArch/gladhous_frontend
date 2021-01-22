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
              :items="itemcagetories"
              item-text="name"
              item-value="id"
              label="Choose ItemCategoryName"
              name="item_category_id"
              :error-messages="errors"
              required
            />
          </validation-provider>
          <v-card-text>
            <validation-provider
              v-slot="{ errors }"
              name="item_sub_category_id"
              rules="required"
            >
              <v-autocomplete
                v-model="item.item_sub_category_id"
                :items="itemcagetories"
                item-text="name"
                item-value="id"
                label="Choose ItemSubCategoryName"
                name="item_sub_category_id"
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
              name="name_mm"
              rules="required"
            >
              <v-text-field
                v-model="item.name_mm"
                :error-messages="errors"
                label="Name in Myanmar"
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
                v-model="item.special_quantity"
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
                v-model="item.normal_price"
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
                v-model="item.special_price"
                :error-messages="errors"
                label="Special_Price"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="is_apply_special"
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
            <v-btn color="info" @click="saveItem ()">Save</v-btn>
          </v-card-actions>
        </v-card-text></v-form>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  async fetch () {
    const itemcagetories = await this.$api.getItemCategoriesList(this).then(response => response.data);
    this.itemcagetories = itemcagetories;
    const itemsubcategories = await this.$api.getItemSubCategoriesList(this).then(response => response.data);
    this.itemsubcategories = itemsubcategories;
    // console.log(itemcagetories);
  },
  data () {
    return {
      isOpenDialog: false,
      dialogTitle: 'Create New Item',
      item: {
        name: '',
        name_mm: '',
        item_category_id: '',
        item_sub_category_id: '',
        normal_quantity: '',
        special_quantity: '',
        normal_price: '',
        special_price: '',
        is_apply_special: false
      },
      itemcagetories: [],
      itemsubcategories: []
    };
  },
  mounted () {
    this.$parent.$on('createForm', () => {
      this.isOpenDialog = true;
    });
  },
  methods: {
    async saveItem () {
      const { data } = await this.$api.createNewItem(this, this.item);
      console.log(data);
      this.isOpenDialog = true;
    }
  }
};
</script>
