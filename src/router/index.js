import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: () =>
            import(
                /* webpackChunkName: "dashboard" */ "../views/pages/Dashboard.vue"
            ),
    },
    {
        path: "/startup-applications",
        name: "StartupApplications",
        component: () =>
            import(
                /* webpackChunkName: "startup-applications" */ "../views/pages/StartupApplications.vue"
            ),
    },
    {
        path: "/system-clean",
        name: "SystemClean",
        component: () =>
            import(
                /* webpackChunkName: "system-clean" */ "../views/pages/SystemClean.vue"
            ),
    },
    {
        path: "/services",
        name: "Services",
        component: () =>
            import(
                /* webpackChunkName: "services" */ "../views/pages/Services.vue"
            ),
    },
    {
        path: "/processes",
        name: "Processes",
        component: () =>
            import(
                /* webpackChunkName: "processes" */ "../views/pages/Processes.vue"
            ),
    },
    {
        path: "/uninstaller",
        name: "Uninstaller",
        component: () =>
            import(
                /* webpackChunkName: "uninstaller" */ "../views/pages/Uninstaller.vue"
            ),
    },
    {
        path: "/disk-utilities",
        name: "DiskUtilities",
        component: () =>
            import(
                /* webpackChunkName: "disk-utilities" */ "../views/pages/DiskUtilities.vue"
            ),
    },
    {
        path: "/resources",
        name: "Resources",
        component: () =>
            import(
                /* webpackChunkName: "resources" */ "../views/pages/Resources.vue"
            ),
    },
    {
        path: "/apt-repository-manager",
        name: "APTRepositoryManager",
        component: () =>
            import(
                /* webpackChunkName: "apt-repository-manager" */ "../views/pages/APTRepositoryManager.vue"
            ),
    },
    {
        path: "/gnome-settings",
        name: "GnomeSettings",
        component: () =>
            import(
                /* webpackChunkName: "gnome-settings" */ "../views/pages/GnomeSettings.vue"
            ),
    },
    {
        path: "/kde-settings",
        name: "KDESettings",
        component: () =>
            import(
                /* webpackChunkName: "kde-settings" */ "../views/pages/KDESettings.vue"
            ),
    },
    {
        path: "/cinnamon-settings",
        name: "CinnamonSettings",
        component: () =>
            import(
                /* webpackChunkName: "cinnamon-settings" */ "../views/pages/CinnamonSettings.vue"
            ),
    },
    {
        path: "/host-file-editor",
        name: "HostFileEditor",
        component: () =>
            import(
                /* webpackChunkName: "host-file-editor" */ "../views/pages/HostFileEditor.vue"
            ),
    },
    {
        path: "/settings",
        name: "Settings",
        component: () =>
            import(
                /* webpackChunkName: "settings" */ "../views/pages/Settings.vue"
            ),
    },
    {
        path: "/feedback",
        name: "Feedback",
        component: () =>
            import(
                /* webpackChunkName: "feedback" */ "../views/pages/Feedback.vue"
            ),
    },
    {
        path: "/donate",
        name: "Donate",
        component: () =>
            import(
                /* webpackChunkName: "donate" */ "../views/pages/Donate.vue"
            ),
    },
    {
        path: "/auth",
        name: "Auth",
        redirect: "/auth/login",
        component: () =>
            import(
                /* webpackChunkName: "auth--auth-layout" */ "../views/pages/Auth/AuthLayout.vue"
            ),
        children: [
            {
                path: "/auth/login",
                name: "Auth.Login",
                component: () =>
                    import(
                        /* webpackChunkName: "auth--login" */ "../views/pages/Auth/Login.vue"
                    ),
            },
            {
                path: "/auth/register",
                name: "Auth.Register",
                component: () =>
                    import(
                        /* webpackChunkName: "auth--register" */ "../views/pages/Auth/Register.vue"
                    ),
            },
            {
                path: "/auth/password-reset",
                name: "Auth.PasswordReset",
                component: () =>
                    import(
                        /* webpackChunkName: "auth--password-reset" */ "../views/pages/Auth/PasswordReset.vue"
                    ),
            },
        ],
    },
];

const router = createRouter({
    history: process.env.IS_ELECTRON
        ? createWebHashHistory()
        : createWebHistory(),
    routes,
    // linkExactActiveClass: 'active',
});

export default router;
