<template>
  <div class="flex">
    <div id="nav">
      <router-link to="/segmented_control">Segmented Control</router-link>
      <br>
      <router-link to="/progress_navigation">Progress Navigation</router-link>
      <br>
      <router-link to="/random_switches"> Random Switches
      </router-link>
      <br>

      <router-link to="/previous_next_nav"> Previous Next Navigation</router-link>
      <br>
      <router-link to="/typing_cursor"> Typing Cursor</router-link>
    </div>
    <div>
      <router-view/>
    </div>




  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.flex {
  display: flex;
}
</style>
