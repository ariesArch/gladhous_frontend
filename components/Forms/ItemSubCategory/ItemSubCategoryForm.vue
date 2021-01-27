
<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>{{ dialogTitle }}</v-card-title>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="SaveForm">
          <v-card-text>
            <validation-provider
              v-slot="{ errors }"
              name="item_category_id"
              rules="required"
            >
              <v-autocomplete
                v-model="item_sub_categories.item_category_id"
                :items="itemcategories"
                item-text="name"
                item-value="id"
                label="Choose ItemCategoryName"
                name="item_category_id"
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
                v-model="item_sub_categories.name"
                :error-messages="errors"
                label="Name in English"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="name_mm"
              rules="required"
            >
              <v-text-field
                v-model="item_sub_categories.name_mm"
                :error-messages="errors"
                label="Name in Myanmar"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{errors}"
              name="desciption"
              rules="required"
            >
              <v-textarea
                v-model="item_sub_categories.description"
                :error-messages="errors"
                label="Description"
                required
                auto-grow
                outlined
                shaped
              />
            </validation-provider>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="warning" @click="isOpenDialog=false">Cancel</v-btn>
            <v-btn color="info" :disabled="invalid" @click="SaveItemSubCategory ()">Save</v-btn>
          </v-card-actions>
        </v-form>
      </validation-observer>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
    async fetch () {
        const itemcategories = await this.$api.getItemCategoriesList(this).then(response => response.data);
        this.itemcategories = itemcategories;
    },
    data () {
        return {
            isOpenDialog: false,
            dialogTitle: 'Create New Form',
            item_sub_categories: {
                item_category_id: '',
                name: '',
                name_mm: '',
                description: ''
            },
            itemcategories: []
        };
    },
    mounted () {
        this.$parent.$on('createForm', () => {
            this.isOpenDialog = true;
        });
        this.$parent.$on('editForm', (item) => {
            this.item_sub_categories = item;
            this.dialogTitle = `Edit ItemSubCategory (${item.name_mm})`;
            this.isOpenDialog = false;
        });
    },
    methods: {
        async SaveItemSubCategory () {
            const { data } = await this.$api.createNewItemSubCategory(this, this.item_sub_categories);
            this.$parent.itemsubcategories.push(data.data);
            // console.log(data);
            this.isOpenDialog = false;
        }
    }
};
</script>
