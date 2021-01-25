export const strict = false;

export const state = () => ({
    jwt: '',
    user: null,
    auth: null
});

export const mutations = {
    setJwt (state, jwt) {
        state.jwt = jwt;
    },
    setUser (state, user) {
        state.user = user;
    }
};

export const actions = {
    setJwt ({ commit }, jwt) {
        commit('setJwt', jwt);
    },
    setUser ({ commit }, user) {
        commit('setUser', user);
    },
    nuxtServerInit ({ commit }, { req }) {
        console.log(req.session.cookie.expires);
        if (req.session && req.session.authUser) {
            commit('SET_USER', req.session.authUser);
        }
    }
};

export const getters = {
    jwt: ({ jwt }) => jwt,
    user: ({ user }) => user,
    isAuthenticated: ({ jwt }) => !!jwt

};
