<template>
  <v-row>
    <v-col>
      <ItemCategoryForm />
      <client-only>
        <v-data-table
          :headers="headers"
          :items="itemcategories"
          :search="search"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>ItemCategory List</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search in item_categories"
                hide-details
              />
              <v-spacer />
              <v-btn color="primary" dark class="mb-4" @click="onCreate">New ItemCategory</v-btn>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon color="info" @click="onEdit(item)">mdi-pencil</v-icon>
            <v-icon color="red" class="mr-4" @click="onDelete(item)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </client-only>
    </v-col>
  </v-row>
</template>
<script>
import ItemCategoryForm from '@/components/Forms/ItemCategory/ItemCategoryForm.vue';
export default {
    components: {
        ItemCategoryForm
    },
    // async asyncData ({ $axios }) {
    //   const itemcategories = await $axios.$get('http://gladhouse_backend.test/api/itemcategories');
    //   return { itemcategories };
    // },
    async fetch () {
        const itemcategories = await this.$api.getItemCategoriesList(this).then(response => response.data);
        this.itemcategories = itemcategories;
    },
    data: () => {
        return {
            search: '',
            itemcategories: '',
            headers: [
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
