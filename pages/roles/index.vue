<template>
  <v-row>
    <v-col>
      <RoleForm />
      <client-only>
        <v-data-table
          :headers="headers"
          :items="roles"
          :search="search"
        >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>Roles List</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search in Roles"
                hide-details
              />
              <v-spacer />
              <v-btn
                color="primary"
                dark
                class="mb-4"
                @click="onCreate"
              >
                New Role
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
import RoleForm from '@/components/Forms/Role/RoleForm.vue';
export default {
    components: {
        RoleForm
    },
    async asyncData ({ $content, params }) {
        const roles = await $content('roles', params.slug)
            .sortBy('createdAt', 'desc')
            .fetch();

        return { roles };
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
