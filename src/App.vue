<template>
  <div class="page-wrapper chiller-theme toggled">
      <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
          <i class="fas fa-bars"></i>
      </a>
      <sidebar></sidebar>
      <main class="page-content">
          <div class="container-fluid">
              <router-view/>
          </div>
      </main>
  </div>
</template>

<script>
import Sidebar from './views/layout/Sidebar'
export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">

</style>
