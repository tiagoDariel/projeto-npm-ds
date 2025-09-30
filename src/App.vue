<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <div class="title">Componentes</div>
      <RouterLink to="/list-icons">icones</RouterLink>
      <RouterLink to="/tabs">tabs</RouterLink>
    </nav>

    <RouterView />
    </div>
</template>

<style>
  .wrapper {
    display: flex;
  }

  nav {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #E1EAF3;
  }

  .title {
    text-align: center;
    width: 100%;
    padding: 15px 20px;
    font-size: 22px;
    font-weight: 600;
    cursor: default;
  }

  nav a {
    padding: 5px 30px;
    border-top: 1px solid #E1EAF3;
  }
</style>