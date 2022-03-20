<template>
    <div class="dropdown">
        <a
            href="#"
            class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="sidebarAccountDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            <img
                src="@/assets/img/user.png"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
            />
            <strong v-if="showUserName">Kullanıcı</strong>
        </a>
        <ul
            class="dropdown-menu text-small shadow dropdown-menu-end"
            aria-labelledby="sidebarAccountDropdown"
        >
            <li><a class="dropdown-item" href="#">Hesap Bilgileri</a></li>
            <li><a class="dropdown-item" href="#">Parola Değiştir</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Çıkış Yap</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        showUserName: {
            default: true,
            required: false,
        },
    },
    name: "SidebarAccountDropdown",
};
</script>
