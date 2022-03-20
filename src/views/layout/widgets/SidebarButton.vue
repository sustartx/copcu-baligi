<template>
    <a
        href="#"
        @click.prevent="toggleSidebar"
        data-bs-target="#sidebar"
        data-bs-toggle="collapse"
        class="nav-toggle"
        :class="dynamicClass"
        style="width: 30px"
    >
        <span v-if="getSidebarToggledStatus">
            <i class="fa fa-bars"></i>
        </span>
        <span v-else><i class="fa fa-times"></i></span>
    </a>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "SidebarButton",
    props: {
        className: {
            default: "",
            required: false,
        },
    },
    computed: {
        ...mapGetters(["getSidebarToggledStatus"]),
        dynamicClass() {
            return this.getSidebarToggledStatus
                ? this.className + " active"
                : this.className;
        },
    },
    methods: {
        toggleSidebar() {
            this.$store.dispatch(
                "updateSidebarToggledStatus",
                !this.getSidebarToggledStatus
            );
        },
    },
};
</script>

<style scoped>
#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
    transition: all 500ms ease-in-out;
}
#nav-toggle.active span {
    background-color: transparent;
}
#nav-toggle.active span:before,
#nav-toggle.active span:after {
    top: 0;
}
#nav-toggle.active span:before {
    transform: rotate(45deg);
}
#nav-toggle.active span:after {
    transform: rotate(-45deg);
}
</style>
