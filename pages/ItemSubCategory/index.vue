<template>
  <v-row>
    <v-col>
      <ItemSubCategoryForm />
      <client-only>
        <v-data-table
          :headers="headers"
          :items="itemsubcategories"
          :search="search"
        >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>ItemSubCategory List</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search in itemsubcategories"
                hide-details
              />
              <v-spacer />
              <v-btn
                color="primary"
                dark
                class="mb-4"
                @click="onCreate"
              >
                New ItemSubCategory
              </v-btn>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon

              class="mr-2"
              @click="onEdit(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              color="warning"
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </client-only>
    </v-col>
  </v-row>
</template>
<script>
import ItemSubCategoryForm from '@/components/Forms/ItemSubCategory/ItemSubCategoryForm.vue';
export default {
  components: {
    ItemSubCategoryForm
  },
  // async asyncData ({ $content, params }) {
  //   const item_sub_categories = await $content('itemsubcategories', params.slug)
  //     .sortBy('createdAt', 'desc')
  //     .fetch();

  //   return { itemsubcategories };
  // },
  async fetch () {
    const itemsubcategories = await this.$api.getItemSubCategoriesList(this).then(response => response.data);
    this.itemsubcategories = itemsubcategories;
    console.log(itemsubcategories);
  },
  data: () => {
    return {
      itemsubcategories: [],
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Item_Category_Name', value: 'item_category.name_mm' },
        { text: 'Name', value: 'name' },
        { text: 'Name_mm', value: 'name_mm' },
        { text: 'Description', value: 'description' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    };
  },
  methods: {
    onCreate () {
      this.$emit('createForm');
    },
    onEdit (item) {
      this.$emit('editForm', item);
    }
  }
};
</script>
