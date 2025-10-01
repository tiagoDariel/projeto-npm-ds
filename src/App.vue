<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { uiIconFacilita } from 'facilita-ds/icons';
</script>

<template>
  <div class="wrapper">
    <nav>
      <h1><uiIconFacilita />Facilita Ds</h1>
      <RouterLink to="/guia">Instalação</RouterLink>

      <div class="title">Componentes</div>
      <RouterLink to="/button">button</RouterLink>
      <RouterLink to="/input">Input</RouterLink>
      <RouterLink to="/tabs">tabs</RouterLink>

      <div class="title">Templates</div>
      <RouterLink to="/guia">login</RouterLink>
      <RouterLink to="/guia">sidebarLeft</RouterLink>
      

      <div class="title">Ícones</div>
      <RouterLink to="/list-icons">ícons</RouterLink>
    </nav>

    <RouterView />
    </div>
</template>

<style>
  h1 {
    font-weight: 700;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 26px;
    gap: 8px;
    padding: 8px 10px;
  }

  .wrapper {
    display: flex;
    margin-left: 220px;
  }

  nav {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #E1EAF3;
    width: 220px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    height: 100vh;
  }

  .title {
    text-align: center;
    width: 100%;
    padding: 15px 20px;
    font-size: 22px;
    font-weight: 600;
    cursor: default;
    border-top: 1px solid #E1EAF3;
  }

  nav a {
    padding: 5px 30px;
    border-top: 1px solid #E1EAF3;
  }

  nav a:last-child {
    border-bottom: 1px solid #E1EAF3;
  }

</style>