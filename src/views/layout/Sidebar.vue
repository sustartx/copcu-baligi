<template>
    <div
        class="d-flex flex-column align-items-stretch flex-shrink-0 p-3 bg-light"
        style="width: 280px; height: 100%"
    >
        <div class="input-group">
            <input
                id="criteria-input"
                type="text"
                class="form-control"
                placeholder="Menüde ara.."
                aria-label="Menüde ara.."
                aria-describedby="criteria-icon"
                v-model="criteria"
            />
            <span class="input-group-text" id="criteria-icon">
                <template v-if="criteria.length === 0">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </template>
                <template v-else>
                    <i
                        class="fa fa-times"
                        aria-hidden="true"
                        v-on:click.prevent="criteria = ''"
                    ></i>
                </template>
            </span>
        </div>

        <hr />

        <div class="list-group list-group-flush scrollarea">
            <ul class="nav nav-pills flex-column mb-auto list-unstyled ps-0">
                <li
                    class="mb-1"
                    v-for="(item, key) in menuItems"
                    :key="'menu_item_' + key"
                >
                    <template
                        v-if="
                            item.hasOwnProperty('items') &&
                            item.items.length > 0
                        "
                    >
                        <!-- TODO : Burası alt menü öğelerini 3 kademe aşağı inecek kadar yazdırılabilmeli. -->
                        <a
                            class="align-items-center rounded collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#account-collapse"
                            aria-expanded="false"
                        >
                            Account
                        </a>
                        <div class="collapse" id="account-collapse">
                            <ul
                                class="btn-toggle-nav list-unstyled fw-normal pb-1 small"
                            >
                                <li>
                                    <a href="#" class="link-dark rounded"
                                        >New...</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="link-dark rounded"
                                        >Profile</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="link-dark rounded"
                                        >Settings</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="link-dark rounded"
                                        >Sign out</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </template>
                    <template v-else>
                        <router-link :to="item.link" :key="key">
                            <i :class="item.class"></i>
                            {{ item.title }}
                        </router-link>
                    </template>
                </li>
            </ul>
        </div>

        <div style="margin-top: auto">
            <template v-if="isLoggedIn">
                <hr />
                <SidebarAccountDropdown />
            </template>
        </div>
    </div>
</template>

<script>
import SidebarAccountDropdown from "./widgets/SidebarAccountDropdown";
import { mapGetters } from "vuex";
export default {
    name: "Sidebar",
    components: {
        SidebarAccountDropdown,
    },
    data() {
        return {
            criteria: "",
            menu: [
                {
                    title: "Dashboard",
                    class: "fa fa-tachometer-alt",
                    link: "/",
                },
                {
                    title: "Startup Applications",
                    class: "fa fa-cogs",
                    link: "/startup-applications",
                },
                {
                    title: "System Clean",
                    class: "fa fa-cogs",
                    link: "/system-clean",
                },
                {
                    title: "Services",
                    class: "fa fa-cogs",
                    link: "/services",
                },
                {
                    title: "Processes",
                    class: "fa fa-cogs",
                    link: "/processes",
                },
                {
                    title: "Uninstaller",
                    class: "fa fa-cogs",
                    link: "/uninstaller",
                },
                {
                    title: "Disk Utilities",
                    class: "fa fa-cogs",
                    link: "/disk-utilities",
                },
                {
                    title: "Resources",
                    class: "fa fa-cogs",
                    link: "/resources",
                },
                {
                    title: "APT Repository Manager",
                    class: "fa fa-cogs",
                    link: "/apt-repository-manager",
                },
                {
                    title: "Gnome Settings",
                    class: "fa fa-cogs",
                    link: "/gnome-settings",
                },
                {
                    title: "KDE Settings",
                    class: "fa fa-cogs",
                    link: "/kde-settings",
                },
                {
                    title: "Cinnamon Settings",
                    class: "fa fa-cogs",
                    link: "/cinnamon-settings",
                },
                {
                    title: "Host File Editor",
                    class: "fa fa-cogs",
                    link: "/host-file-editor",
                },
                {
                    title: "Settings",
                    class: "fa fa-cogs",
                    link: "/settings",
                },
                {
                    title: "Feedback",
                    class: "fa fa-cogs",
                    link: "/feedback",
                },
                {
                    title: "Donate",
                    class: "fa fa-cogs",
                    link: "/donate",
                },
            ],
        };
    },
    computed: {
        ...mapGetters(["getSidebarToggledStatus", "isLoggedIn"]),
        menuItems: function () {
            if (this.criteria.trim().length > 0) {
                const regex = new RegExp(this.criteria, "gi");
                return this.menu.filter(function (item) {
                    if (item.title.match(regex) !== null) {
                        return true;
                    }
                });
            } else {
                return this.menu;
            }
        },
    },
};
</script>

<style scoped></style>
