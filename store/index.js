// /* eslint-disable camelcase */
// import Vue from 'vue';
// import Vuex from 'vuex';
// const cookieparser = process.server ? require('cookieparser') : undefined;

// Vue.use(Vuex);

// // const store = () => {
// //   return new Vuex.Store({
// //     state: {
// //       Sidebar_drawer: null,
// //       Customizer_drawer: false,
// //       SidebarColor: 'white',
// //       SidebarBg: ''
// //     },
// //     mutations: {
// //       SET_SIDEBAR_DRAWER (state, payload) {
// //         state.Sidebar_drawer = payload;
// //       },
// //       SET_CUSTOMIZER_DRAWER (state, payload) {
// //         state.Customizer_drawer = payload;
// //       },
// //       SET_SIDEBAR_COLOR (state, payload) {
// //         state.SidebarColor = payload;
// //       }
// //     },
// //     actions: {

// //     }
// //   });
// // };
// // export default store;
// export const state = () => ({
//     Sidebar_drawer: null,
//     Customizer_drawer: false,
//     SidebarColor: 'white',
//     SidebarBg: '',
//     jwt: null
// });

// export const mutations = {
//     // eslint-disable-next-line space-before-function-paren
//     setJwt(state, jwt) {
//         state.auth = jwt;
//     },
//     SET_SIDEBAR_DRAWER (state, payload) {
//         state.Sidebar_drawer = payload;
//     },
//     SET_CUSTOMIZER_DRAWER (state, payload) {
//         state.Customizer_drawer = payload;
//     },
//     SET_SIDEBAR_COLOR (state, payload) {
//         state.SidebarColor = payload;
//     }
// };
// export const actions = {
//     nuxtServerInitn ({ commit }, { req }) {
//         let jwt = null;
//         if (req.headers.cookie) {
//             const parsed = cookieparser.parse(req.headers.cookie);
//             try {
//                 jwt = JSON.parse(parsed.auth);
//             } catch (err) {
//                 // No valid cookie found
//             }
//         }
//         commit('setJwt', jwt);
//     }
// };
