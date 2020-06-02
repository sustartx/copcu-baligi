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
            <input type="text" class="form-control search-menu" placeholder="Ara..." v-model="criteria">
            <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fa fa-search" aria-hidden="true" v-if="criteria.length === 0"></i>
                  <i class="fa fa-times" aria-hidden="true" v-else v-on:click.prevent="criteria = ''"></i>
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
          <li v-for="(item, key) in menuItems">
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
      criteria: '',
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
          title: 'Services',
          class: 'fa fa-cogs',
          link: '/services'
        },
        {
          title: 'Processes',
          class: 'fa fa-cogs',
          link: '/processes'
        },
        {
          title: 'Uninstaller',
          class: 'fa fa-cogs',
          link: '/uninstaller'
        },
        {
          title: 'Disk Utilities',
          class: 'fa fa-cogs',
          link: '/disk-utilities'
        },
        {
          title: 'Resources',
          class: 'fa fa-cogs',
          link: '/resources'
        },
        {
          title: 'APT Repository Manager',
          class: 'fa fa-cogs',
          link: '/apt-repository-manager'
        },
        {
          title: 'Gnome Settings',
          class: 'fa fa-cogs',
          link: '/gnome-settings'
        },
        {
          title: 'KDE Settings',
          class: 'fa fa-cogs',
          link: '/kde-settings'
        },
        {
          title: 'Cinnamon Settings',
          class: 'fa fa-cogs',
          link: '/cinnamon-settings'
        },
        {
          title: 'Host File Editor',
          class: 'fa fa-cogs',
          link: '/host-file-editor'
        },
        {
          title: 'Settings',
          class: 'fa fa-cogs',
          link: '/settings'
        },
        {
          title: 'Feedback',
          class: 'fa fa-cogs',
          link: '/feedback'
        },
        {
          title: 'Donate',
          class: 'fa fa-cogs',
          link: '/donate'
        }
      ]
    }
  },
  computed: {
    menuItems: function () {
      if (this.criteria.trim().length > 0) {
        const regex = new RegExp(this.criteria, 'gi')
        return this.menu.filter(function (item) {
          if (item.title.match(regex) !== null) {
            return true
          }
        })
      } else {
        return this.menu
      }
    }
  }
}
</script>

<style scoped>

</style>
