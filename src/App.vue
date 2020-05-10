<template>
  <div class="page-wrapper chiller-theme toggled">
      <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
          <i class="fas fa-bars"></i>
      </a>
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
                      <li>
                          <router-link to="/">
                              <i class="fa fa-tachometer-alt"></i>
                              Anasayfa
                          </router-link>
                      </li>
                      <li>
                          <router-link to="/settings">
                            <i class="fa fa-cogs"></i>
                            Ayarlar
                          </router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <main class="page-content">
          <div class="container-fluid">
              <router-view/>
          </div>
      </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
