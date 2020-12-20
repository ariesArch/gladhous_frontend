<template>
  <v-row>
    <v-col>
      <v-btn @click="onCreate">New Table</v-btn>
      <TableForm />
    </v-col>
  </v-row>
</template>
<script>
import TableForm from '@/components/Forms/Table/TableForm.vue';
export default {
  components: {
    TableForm
  },
  methods: {
    onCreate () {
      this.$emit('createForm');
    }
  }
};
</script>
