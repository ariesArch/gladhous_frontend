<template>
  <v-row>
    <v-col>
      <StaffTypeForm />
      <client-only>
        <v-data-table :headers="headers" :items="stafftypes" :search="search">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Stafttype List</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search in stafftype"
                hide-details
              />
              <v-spacer />
              <v-btn color="primary" dark class="mb-4" @click="onCreate">New Stafftype</v-btn>
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
import StaffTypeForm from '@/components/Forms/StaffType/StaffTypeForm.vue';
export default {
  components: {
    StaffTypeForm
  },
  async asyncData ({ $content }) {
    const stafftypes = await $content('staff_types')
      .sortBy('type_mm', 'asc')
      .fetch();
    return { stafftypes };
  },
  data: () => {
    return {
      search: '',
      headers: [
        { text: 'Name', value: 'type_mm' },
        { text: 'Name in English', value: 'type_en' },
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
