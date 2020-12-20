<template>
  <v-row>
    <v-col>
      <v-btn @click="onCreate">New Zone</v-btn>
      <ZoneForm />
    </v-col>
  </v-row>
</template>
<script>
import ZoneForm from '@/components/Forms/Zone/ZoneForm.vue';
export default {
  components: {
    ZoneForm
  },
  async asyncData ({ $content, params }) {
    const cities = await $content('cities', params.slug).sortBy('name_mm', 'asc').fetch();
    return { cities };
  },
  methods: {
    onCreate () {
      this.$emit('createForm');
    }
  }
};
</script>
