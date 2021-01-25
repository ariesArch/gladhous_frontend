<template>
  <v-row>
    <v-col>
      <StaffForm />
      <client-only>
        <v-data-table :headers="headers" :items="staffs" :search="search">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Staff List</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search in staffs"
                hide-details
              />
              <v-spacer />
              <v-btn color="primary" dark class="mb-4" @click="onCreate">New Staff</v-btn>
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
import StaffForm from '@/components/Forms/Staff/StaffForm.vue';
export default {
    components: {
        StaffForm
    },
    //   async asyncData ({ $content }) {
    //     const cities = await $content('cities')
    //       .sortBy('name_mm', 'asc')
    //       .fetch();
    //     const zones = await $content('zones')
    //       .sortBy('name_mm', 'asc')
    //       .fetch();
    //     const departments = await $content('departments')
    //       .sortBy('name_mm', 'asc')
    //       .fetch();
    //     const roles = await $content('roles')
    //       .sortBy('name_mm', 'asc')
    //       .fetch();
    //     const branches = await $content('branches')
    //       .sortBy('name_mm', 'asc')
    //       .fetch();
    //     const staffs = await $content('staffs')
    //       .sortBy('name_mm', 'asc')
    //       .fetch();
    //     return { staffs, cities, zones, departments, roles, branches };
    //   },
    async asyncData ({ $axios }) {
        const staffs = await $axios.$get('http://gladhouse_backend.local/api/staffs ');
        return { staffs };
    },
    data: () => {
        return {
            search: '',
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'User name', value: 'username' },
                { text: 'City Name', value: 'city.city_name' },
                { text: 'Zone Name', value: 'zone.zone_name' },
                { text: 'Branch Name', value: 'branch.branch_name' },
                { text: 'Department Name', value: 'department.department_name' },
                { text: 'Role Name', value: 'role.role_name' },
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
