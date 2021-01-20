<template>
  <v-row>
    <v-col>
      <CityForm />
      <client-only>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Cities List</v-toolbar-title>
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search in cities"
            hide-details
          />
          <v-spacer />
          <v-btn
            color="primary"
            dark
            class="mb-4"
            @click="onCreate"
          >
            New City
          </v-btn>
        </v-toolbar>

        <v-data-table
          :headers="headers"
          :items="cities"
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
import CityForm from '@/components/Forms/City/CityForm.vue';

export default {
  components: {
    CityForm
  },
  // async asyncData ({ $content, params }) {
  //   const cities = await $content('cities', params.slug)
  //     .sortBy('createdAt', 'desc')
  //     .fetch();
  //   console.log(cities);
  //   return { cities };
  // },
  // async asyncData ({ $axios }) {
  //   const cities = await $axios.$get('http://gladhouse_backend.test/api/v1//cities');
  //   return { cities };
  // },
  async fetch () {
    const cities = await this.$api.getCitiesList(this).then(response => response.data);
    this.cities = cities;
  },
  data: () => {
    return {
      cities: [],
      search: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Name_mm', value: 'name_mm' },
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
