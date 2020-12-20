
<template>
  <v-row>
    <v-col>
      <v-btn @click="onCreate">New Staff</v-btn>
      <StaffForm />
    </v-col>
  </v-row>
</template>
<script>
import StaffForm from '@/components/Forms/Staff/StaffForm.vue';
export default {
  components: {
    StaffForm
  },
  methods: {
    onCreate () {
      this.$emit('createForm');
    }
  }
};
</script>
