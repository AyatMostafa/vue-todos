<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top bg-light" >
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link id="todo" class="nav-link" to="/"> Todos <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item active">
          <router-link id="done" class="nav-link" to="/done">Done Todos</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>
