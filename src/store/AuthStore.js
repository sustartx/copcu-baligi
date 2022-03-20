export const AuthStore = {
    prefix: "AuthStore",
    state: { user: null, token: null },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        unsetUser(state) {
            state.user = null;
        },
        setToken(state, token) {
            state.token = token;
        },
        unsetToken(state) {
            state.token = null;
        },
    },
    actions: {
        setUser({ commit }, { user }) {
            user.full_name = user.first_name + " " + user.last_name;
            commit("setUser", user);
        },
        unsetUser({ commit }) {
            commit("unsetUser");
        },
        setToken({ commit }, { token }) {
            commit("setToken", token);
        },
        unsetToken({ commit }) {
            commit("unsetToken");
        },
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        isLoggedIn(state) {
            return !!state.token;
        },
        getUser(state) {
            return state.user;
        },
        getPermissions(state) {
            return state.user ? state.user.permissions : [];
        },
    },
};
