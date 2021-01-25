<template>
  <v-row>
    <v-col>
      <TableForm />
      <client-only>
        <v-data-table :headers="headers"
                      :items="tables"
                      :search="search"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Tables List</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search in Tables"
                hide-details
              />
              <v-spacer />
              <v-btn color="primary" dark class="mb-4" @click="onCreate">New Table</v-btn>
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
import TableForm from '@/components/Forms/Table/TableForm.vue';
export default {
    components: {
        TableForm
    },
    async asyncData ({ $content }) {
        const tables = await $content('tables')
            .sortBy('name_mm', 'asc')
            .fetch();
        const cities = await $content('cities')
            .sortBy('name_mm', 'asc')
            .fetch();
        const zones = await $content('zones')
            .sortBy('name_mm', 'asc')
            .fetch();
        const branches = await $content('branches')
            .sortBy('name_mm', 'asc')
            .fetch();
        const staffs = await $content('staffs')
            .sortBy('name_mm', 'asc')
            .fetch();

        return { tables, branches, cities, zones, staffs };
    },
    data: () => {
        return {
            search: '',
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'Number', value: 'table_no' },
                { text: 'Max_Capacity', value: 'max_capacity' },
                { text: 'Waiter', value: 'staff.staff_name' },
                { text: 'Branch', value: 'branch.branch_name' },
                { text: 'City', value: 'city.city_name' },
                { text: 'Zone', value: 'zone.zone_name' },
                { text: 'Description', value: 'description' },
                { text: 'Actions', value: 'actions' }
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
