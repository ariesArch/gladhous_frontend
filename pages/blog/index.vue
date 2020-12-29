<template>
  <article>
    {{ cities }}
  </article>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    const cities = await $axios.$get('http://localhost:8000/api/cities');
    return { cities };
  }
};
</script>
