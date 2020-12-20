<template>
  <v-row>
    <v-col>
      <v-btn @click="onCreate">New StaffType</v-btn>
      <StaffTypeForm />
    </v-col>
  </v-row>
</template>
<script>
import StaffTypeForm from '@/components/Forms/StaffType/StaffTypeForm.vue';
export default {
  components: {
    StaffTypeForm
  },
  methods: {
    onCreate () {
      this.$emit('createForm');
    }
  }
};
</script>
