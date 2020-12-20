<template>
  <v-row>
    <v-col>
      <v-btn @click="onCreate">New Department</v-btn>
      <DepartmentForm />
    </v-col>
  </v-row>
</template>
<script>
import DepartmentForm from '@/components/Forms/Department/DepartmentForm.vue';
export default {
  components: {
    DepartmentForm
  },
  methods: {
    onCreate () {
      this.$emit('createForm');
    }
  }
};
</script>
