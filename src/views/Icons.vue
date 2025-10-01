<template>
  <div class="container">
    <section class="explicacao">
      <h1>Como usar os ícones</h1>
      <ol>
        <li>
          <strong>importe o ícone desejado:</strong>
          <pre><code>import { uiIconBrush } from 'facilita-ds/icons'</code></pre>
        </li>
        <li>
          <strong>Use o componente no template:</strong>
          <pre><code>&lt;ui-icon-brush :fill="'#42b983'" /&gt;</code></pre>
        </li>
        <li>
          <strong>Personalize a cor usando a prop <code>fill</code>:</strong>
          <div class="icones-exemplo">
            <uiIconBrush fill="#42b983" />
            <uiIconBusiness fill="#35495e" />
            <uiIconCalculator fill="orange" />
          </div>
        </li>
      </ol>
    </section>
    <section class="todos-icones">
      <h2>Todos os ícones disponíveis</h2>
      <allIcons />
    </section>
  </div>
</template>

<script setup lang="ts">
import { uiIconBrush, uiIconBusiness, uiIconCalculator, AllIcons } from 'facilita-ds/icons'
defineOptions({
    name: 'facilita-ds-icons'
})
</script>

<style scoped>
.container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
  font-family: 'Segoe UI', Arial, sans-serif;
  width: 100vw;
}
.explicacao {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
}
.todos-icones {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
  overflow: auto;
  width: 60vw;
}
h1, h2 {
  color: #35495e;
  margin-bottom: 1rem;
}
ol {
  padding-left: 1.2rem;
}
pre {
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin: 0.5rem 0;
  font-size: 0.95em;
}
.icones-exemplo {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 0.5rem;
}
.icones-exemplo > * {
  font-size: 2.5rem;
}
</style>