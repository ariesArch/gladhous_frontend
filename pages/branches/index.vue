<template>
  <v-row>
    <v-col>
      <v-btn @click="onCreate">New Branch</v-btn>
      <BranchForm />
    </v-col>
  </v-row>
</template>
<script>
import BranchForm from '@/components/Forms/Branch/BranchForm.vue';
export default {
  components: {
    BranchForm
  },
  methods: {
    onCreate () {
      this.$emit('createForm');
    }
  }
};
</script>
