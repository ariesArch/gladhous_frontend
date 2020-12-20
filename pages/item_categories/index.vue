<template>
  <v-row>
    <v-col>
      <v-btn @click="onCreate">New Category</v-btn>
      <ItemCategoryForm />
    </v-col>
  </v-row>
</template>
<script>
import ItemCategoryForm from '@/components/Forms/ItemCategory/ItemCategoryForm.vue';
export default {
  components: {
    ItemCategoryForm
  },
  methods: {
    onCreate () {
      this.$emit('createForm');
    }
  }
};
</script>
