<template>
  <v-row>
    <v-col>
      <ZoneForm />
      <client-only>
        <v-data-table :headers="headers" :items="zones" :search="search">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Zones List</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search in zones"
                hide-details
              />
              <v-spacer />
              <v-btn color="primary" dark class="mb-4" @click="onCreate">New Zone</v-btn>
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
import ZoneForm from '@/components/Forms/Zone/ZoneForm.vue';
export default {
  components: {
    ZoneForm
  },
  async asyncData ({ $content }) {
    const cities = await $content('cities')
      .sortBy('name_mm', 'asc')
      .fetch();
    const zones = await $content('zones')
      .sortBy('name_mm', 'asc')
      .fetch();
    console.log(zones);
    return { cities, zones };
  },
  data: () => {
    return {
      search: '',
      headers: [
        { text: 'Name', value: 'name_mm' },
        { text: 'Name in English', value: 'name_en' },
        { text: 'City Name', value: 'city.name' },
        { text: 'Actions', value: 'actions' }
      ]
    };
  },
  methods: {
    onCreate () {
      this.$emit('createForm');
    }
  }
};
</script>
