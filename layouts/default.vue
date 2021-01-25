<template>
  <v-app id="inspire">
    <Header v-model="expandOnHover" />
    <!-- <Sidebar :expand-on-hover.sync="expandOnHover" /> -->
    <v-content>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-content>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import Header from '@/components/BaseUI/Header';
// import Sidebar from '@/components/BaseUI/Sidebar';
// import Footer from '@/components/BaseUI/Footer';

import { mapState, mapMutations } from 'vuex';
export default {
    name: 'Layout',

    components: {
        Header
    // Sidebar,
    // Footer
    },

    data: () => ({
        expandOnHover: false
    }),
    computed: {
        ...mapState(['Customizer_drawer'])
    },

    methods: {
        ...mapMutations({
            setCustomizerDrawer: 'SET_CUSTOMIZER_DRAWER'
        })
    }
};
</script>
<style>
  html { overflow-y: hidden  !important }
</style>
