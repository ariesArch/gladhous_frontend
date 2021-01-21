<template>
  <v-row>
    <v-col>
      <ItemForm />
      <client-only>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Items List</v-toolbar-title>
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search in items"
            hide-details
          />
          <v-spacer />
          <v-btn
            color="primary"
            dark
            class="mb-4"
            @click="onCreate"
          >
            New Item
          </v-btn>
        </v-toolbar>

        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="onEdit(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
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
import ItemForm from '@/components/Forms/Item/ItemForm.vue';

export default {
  components: {
    ItemForm
  },
  // async asyncData ({ $content, params }) {
  //   const cities = await $content('cities', params.slug)
  //     .sortBy('createdAt', 'desc')
  //     .fetch();
  //   console.log(cities);
  //   return { cities };
  // },
  // async asyncData ({$$axios}) {
  //   const cities = await $axios.$get('http://gladhouse_backend.local/api/cities');
  //   return { cities };
  // },
  async fetch () {
    const items = await this.$api.getItemsList(this).then(response => response.data);
    this.items = items;
  },
  data: () => {
    return {
      items: [],
      search: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Name_En', value: 'name_mm' },
        { text: 'ItemCategory', value: 'item_category.name' },
        { text: 'ItemSubCategory', value: 'item_sub_category.name' },
        { text: 'Normal_Qu', value: 'normal_quantity' },
        { text: 'Special_Qu', value: 'special_quantity' },
        { text: 'Normal_Price', value: 'normal_price' },
        { text: 'Special_Qu', value: 'normal_price' },
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
