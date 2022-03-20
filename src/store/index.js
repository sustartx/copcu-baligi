import { createStore } from "vuex";
import { AuthStore } from "./AuthStore";

export default createStore({
    state: {
        sidebarToggled: true,
    },
    mutations: {
        updateSidebarToggledStatus(state, status) {
            state.sidebarToggled = status;
        },
    },
    actions: {
        updateSidebarToggledStatus(context, status) {
            context.commit("updateSidebarToggledStatus", status);
        },
    },
    getters: {
        getSidebarToggledStatus(state) {
            return state.sidebarToggled;
        },
    },
    modules: {
        AuthStore,
    },
});
