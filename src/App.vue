<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="mt-1 mb-3">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark px-5">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item pr-4 py-2">
            <router-link to="/">Inicio</router-link>
          </li>
          <li class="nav-item pr-4 py-2">
            <router-link to="/busqueda">Búsquedas</router-link>  
          </li>
          <li class="nav-item pr-4 py-2">
            <router-link to="/ventas">Ventas</router-link>  
          </li>
          <li class="nav-item pt-2">
            <router-link to="/total">Total</router-link>  
          </li>
        </ul>
      </div>
    </nav>
    
    <transition name="vista" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
 
}
</script>

<style>
  #app {
    font-family: Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  img {
    width: 13rem;
  }
  nav a {
    color: white;
  }
  nav a:hover {
    text-decoration: none;
    color: gray;
    transition: all 0.4s ease;
  }
  nav a.router-link-exact-active {
  color: lightgray;
}
  .vista-enter-active, .vista-leave-active {
    transition: opacity .3s;
  }
  .vista-enter, .vista-leave-to{
    opacity: 0;
  }
</style>
