<template>
  <v-row>
    <v-col>
      <BranchForm />
      <client-only>
        <v-data-table :headers="headers" :items="branches" :search="search">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Branch List</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search in branches"
                hide-details
              />
              <v-spacer />
              <v-btn color="primary" dark class="mb-4" @click="onCreate">New Branch</v-btn>
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
import BranchForm from '@/components/Forms/Branch/BranchForm.vue';
export default {
  components: {
    BranchForm
  },
  // async asyncData ({ $content }) {
  //   const cities = await $content('cities')
  //     .sortBy('name_mm', 'asc')
  //     .fetch();
  //   const zones = await $content('zones')
  //     .sortBy('name_mm', 'asc')
  //     .fetch();
  //   const branches = await $content('branches')
  //     .sortBy('name_mm', 'asc')
  //     .fetch();
  //   return { branches, cities, zones };
  // },
  // async asyncData ({ $axios }) {
  //   const branches = await $axios.$get('http://gladhouse_backend.local/api/branches');
  //   return { branches };
  // },
  async fetch () {
    const branches = await this.$api
      .getBranchesList(this).then(response => response.data);
    this.branches = branches;
  },
  data: () => {
    return {
      search: '',
      branches: [],
      headers: [
        { text: 'Zone Name', value: 'zone.name_mm' },
        { text: 'City Name', value: 'city.name_mm' },
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
