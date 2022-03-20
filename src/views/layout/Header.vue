<template>
    <nav class="bg-light border-bottom">
        <div class="container-fluid d-flex flex-wrap">
            <ul class="nav me-auto">
                <li class="nav-item">
                    <SidebarButton className="nav-link link-dark px-2" />
                </li>
                <li class="nav-item px-2">
                    <span class="nav-item-divider-vl"></span>
                </li>
            </ul>
            <ul class="nav">
                <template v-if="isLoggedIn">
                    <li class="nav-item d-flex align-items-center">
                        <SidebarAccountDropdown />
                    </li>
                </template>
                <template v-else>
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'Auth.Login' }"
                            class="nav-link link-dark px-2"
                            >Giriş Yap</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'Auth.Register' }"
                            class="nav-link link-dark px-2"
                            >Kayıt Ol</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'Auth.PasswordReset' }"
                            class="nav-link link-dark px-2"
                            >Parola Yenile</router-link
                        >
                    </li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script>
import SidebarAccountDropdown from "./widgets/SidebarAccountDropdown";
import SidebarButton from "./widgets/SidebarButton";
import { mapGetters } from "vuex";
export default {
    name: "HeaderTop",
    components: {
        SidebarAccountDropdown,
        SidebarButton,
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
    },
};
</script>

<style scoped></style>
