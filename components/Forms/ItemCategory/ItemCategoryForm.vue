
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
                v-model="item_category.name"
                label="Name"
                name="name"
                :error-messages="errors"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="name_mm"
              rules="required"
            >
              <v-text-field
                v-model="item_category.name_mm"
                label="Name_mm"
                name="name_mm"
                :error-messages="errors"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="description"
              rules="required"
            >
              <v-textarea
                v-model="item_category.description"
                :error-messages="errors"
                label="Description"
                required
                auto-grow
                outlined
                shaped
              />
            </validation-provider>
            <v-card-actions>
              <v-spacer />
              <v-btn color="warning" @click="isOpenDialog = false">Cancel</v-btn>
              <v-btn color="info" :disabled="invalid" @click="saveItemCategory ()">Save</v-btn>
            </v-card-actions>
          </v-card-text>
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
      dialogTitle: 'Create new ItemCategory',
      item_category: {
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
      this.item_category = item;
      this.isOpenDialog = true;
    });
  },
  methods: {
    async saveItemCategory () {
      const { data } = await this.$api.createNewItemCategory(this, this.item_category);
      console.log(data);
      this.isOpenDialog = false;
    }
  }
};
</script>
