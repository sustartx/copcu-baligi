<template>
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <a href="#">Çöpçü Balığı</a>
        <div id="close-sidebar">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="sidebar-search">
        <div>
          <div class="input-group">
            <input type="text" class="form-control search-menu" placeholder="Ara...">
            <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </span>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li class="header-menu">
            <span>General</span>
          </li>
          <li v-for="(item, key) in menu">
            <router-link :to="item.link" :key="key">
              <i :class="item.class"></i>
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      menu: [
        {
          title: 'Dashboard',
          class: 'fa fa-tachometer-alt',
          link: '/'
        },
        {
          title: 'Startup Applications',
          class: 'fa fa-cogs',
          link: '/startup-applications'
        },
        {
          title: 'System Clean',
          class: 'fa fa-cogs',
          link: '/system-clean'
        },
        {
          title: 'Settings',
          class: 'fa fa-cogs',
          link: '/settings'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
