<template>
  <v-row>
    <v-col>
      <v-btn @click="onCreate">New Form</v-btn>
      <RoleForm />
    </v-col>
  </v-row>
</template>
<script>
import RoleForm from '@/components/Forms/Role/RoleForm.vue';
export default {
  components: {
    RoleForm
  },
  methods: {
    onCreate () {
      this.$emit('createForm');
    }
  }
};
</script>
