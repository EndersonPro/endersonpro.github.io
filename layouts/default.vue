<template>
  <div>
    <div class="sidebar">
      <div class="logo">
        Enderson
        <span>Vizcaino</span>
      </div>
      <nav>
        <!-- <a href class="nav-item">Inicio</a> -->
        <nuxt-link class="nav-item" to="/home">Home</nuxt-link>
        <!-- <NuxtLink class="nav-item" :to="'/home'">Inicio</NuxtLink> -->
        <!-- <a href class="nav-item">About</a> -->
        <!--  <a href class="nav-item active">Portfolio</a>
        <a href class="nav-item">Contact</a>-->
      </nav>
    </div>
    <nuxt/>
  </div>
</template>

<style>
.sidebar {
  background: #4f4f4f;
  flex: 1 1 20%;
  min-width: 300px;
  padding: 3em;
  text-align: center;
}
.logo {
  text-transform: uppercase;
  /* margin-bottom: 2em; */
}
@media (min-width: 1500px) {
  .logo {
    margin-bottom: 5em;
  }
}
.logo span {
  font-weight: 700;
}
.nav-item {
  color: #737373;
  text-decoration: none;
  font-size: 1.7rem;
  display: inline-block;
  margin: 0 1em 0 1em;
}
@media (min-width: 1500px) {
  .nav-item {
    display: block;
    margin: 7vh 0;
  }
}
.nav-item.active {
  color: #c4c4c4;
}
.nav-item:hover{
  color: #c4c4c4;
}

</style>
