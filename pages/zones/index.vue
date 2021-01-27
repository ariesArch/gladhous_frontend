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
          <!-- <template v-slot:[`item.name_mm`]="{ item }">
            {{ item.name_mm }}({{ item.name_en }})
          </template>
          <template v-slot:[`item.city.name_mm`]="{ item }">
            {{ item.city.name_mm }}({{ item.city.name_en }})
          </template> -->
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon color="info" @click="onEdit(item)">mdi-pencil</v-icon>
            <v-icon color="red" class="mr-4" @click="onDelete(item)">mdi-delete</v-icon>
          </template>
          <!-- <template v-slot:[`item`]="{ item }">
            <tr>
              <td>{{ item.name_mm }}({{ item.name_en }})</td>
              <td>{{ item.city.name_mm }}({{ item.city.name_en }})</td>
              <td>
                <v-icon color="info" @click="onEdit(item)">mdi-pencil</v-icon>
                <v-icon color="red" class="mr-4" @click="onDelete(item)">mdi-delete</v-icon></td>
            </tr>
          </template> -->
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
    // async asyncData ({ $content }) {
    //   const cities = await $content('cities')
    //     .sortBy('name_mm', 'asc')
    //     .fetch();
    //   const zones = await $content('zones')
    //     .sortBy('name_mm', 'asc')
    //     .fetch();
    //   return { cities, zones };
    // },
    // async asyncData ({ $axios }) {
    //   const zones = await $axios.$get('http://gladhouse_backend.test/api/zones');
    //   return { zones };
    // },
    async fetch () {
        const zones = await this.$api.getZonesList(this).then(response => response.data);
        this.zones = zones;
    },
    data: () => {
        return {
            zones: [],
            search: '',
            headers: [
                { text: 'Name', value: 'name_mm' },
                { text: 'City Name', value: 'city.name_mm' },
                { text: 'Actions', value: 'actions' }
            ]
        };
    },
    methods: {
        onCreate () {
            this.$emit('createForm');
        },
        // async asyncData ({ $content }) {
        //   const cities = await $content('cities')
        //     .sortBy('name_mm', 'asc')
        //     .fetch();
        //   const zones = await $content('zones')
        //     .sortBy('name_mm', 'asc')
        //     .fetch();
        //   return { cities, zones };
        // },
        // async asyncData ({ $axios }) {
        //   const zones = await $axios.$get('http://gladhouse_backend.test/api/zones');
        //   return { zones };
        // },
        async fetch () {
            const zones = await this.$api.getZonesList(this);
            this.zones = zones;
        },
        data: () => {
            return {
                zones: [],
                search: '',
                headers: [
                    { text: 'Name', value: 'name_mm' },
                    { text: 'City Name', value: 'city.name_mm' },
                    { text: 'Actions', value: 'actions' }
                ]
            };
        },
        onEdit (item) {
            this.$emit('editForm', item);
        }
    }
};
</script>
