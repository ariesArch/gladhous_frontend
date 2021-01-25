<template>
  <v-row>
    <v-col>
      <article>
        <!-- <nuxt-content :document="city" /> -->
        {{ city.name_en }}
      </article>
    </v-col>
  </v-row>
</template>
<script>
export default {
    async asyncData ({ $content, params }) {
        const city = await $content('cities', params.slug).fetch();
        console.log(city);
        return { city };
    }
};
</script>
