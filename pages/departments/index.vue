<template>
  <v-row>
    <v-col>
      <DepartmentForm />
      <client-only>
        <v-data-table
          :headers="headers"
          :items="departments"
          :search="search"
        >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>Departments List</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search in Departments"
                hide-details
              />
              <v-spacer />
              <v-btn
                color="primary"
                dark
                class="mb-4"
                @click="onCreate"
              >
                New Department
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
import DepartmentForm from '@/components/Forms/Department/DepartmentForm.vue';
export default {
    components: {
        DepartmentForm
    },
    //   async asyncData ({ $content, params }) {
    //     const departments = await $content('departments', params.slug)
    //       .sortBy('createdAt', 'desc')
    //       .fetch();

    //     return { departments };
    //   },
    async asyncData ({ $axios }) {
        const departments = await $axios.$get('http://gladhouse_backend.local/api/departments');
        return { departments };
    },
    data: () => {
        return {
            search: '',
            headers: [
                { text: 'Name', value: 'name_mm' },
                { text: 'Name_En', value: 'name_en' },
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
