<template>
  <div>
    <NavBar> </NavBar>
    <!-- <todo-list list-name="My to-dos" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
   // TodoList,
    NavBar
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
