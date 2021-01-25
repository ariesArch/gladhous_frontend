
<template>
  <v-row>
    <v-col>
      <v-btn @click="onCreate">New Item</v-btn>
      <ItemForm />
    </v-col>
  </v-row>
</template>
<script>
import ItemForm from '@/components/Forms/Item/ItemForm.vue';
export default {
    components: {
        ItemForm
    },
    methods: {
        onCreate () {
            this.$emit('createForm');
        }
    }
};
</script>
