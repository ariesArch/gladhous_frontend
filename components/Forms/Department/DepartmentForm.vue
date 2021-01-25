<template>
  <v-dialog v-model="isOpenDialog" max-width="600px">
    <v-card>
      <v-card-title>{{ dialogTitle }}</v-card-title>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="SaveForm">
          <v-card-text>
            <validation-provider
              v-slot="{ errors }"
              name="name"
              rules="required"
            >
              <v-text-field
                v-model="department.name"
                :error-messages="errors"
                label="Name"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="name_mm"
              rules="required"
            >
              <v-text-field
                v-model="department.name_mm"
                :error-messages="errors"
                label="Name in Myanmar"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="description"
              rules="required"
            >
              <v-textarea
                v-model="department.description"
                :error-messages="errors"
                label="Description"
                required
                auto-grow
                outlined
                shaped
              />
            </validation-provider>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="warning" @click="isOpenDialog = false">Cancel</v-btn>
            <v-btn color="info" :disabled="invalid" @click="saveDepartment ()">Save</v-btn>
          </v-card-actions>
        </v-form>
      </validation-observer>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
    data () {
        return {
            isOpenDialog: false,
            dialogTitle: 'Create New Department',
            department: {
                name: '',
                name_mm: '',
                description: ''
            }
        };
    },
    mounted () {
        this.$parent.$on('createForm', () => {
            this.isOpenDialog = true;
        });
        this.$parent.$on('editForm', (item) => {
            this.department = item;
            this.dialogTitle = `Edit Department (${item.name_mm})`;
            this.isOpenDialog = true;
        });
    },
    methods: {
        async saveDepartment () {
            const { data } = await this.$api.createNewDepartment(this, this.department);
            console.log(data);
            this.isOpenDialog = false;
        }
    }
};
</script>
