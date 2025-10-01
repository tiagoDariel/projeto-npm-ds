<template>
  <section>
    <div class="guide">
      <h1>Guia de Instalação - facilita-ds</h1>
      <p>
        O <strong>facilita-ds</strong> é composto por três pacotes principais, todos disponíveis no mesmo repositório npm:
      </p>
      <ul>
        <li><code>@facilita-ds/template</code></li>
        <li><code>@facilita-ds/icons</code></li>
        <li><code>@facilita-ds/components</code></li>
      </ul>

      <h2>Pré-requisitos</h2>
      <ul>
        <li>Node.js 16+</li>
        <li>npm ou yarn</li>
      </ul>

      <h2>Instalação</h2>
      <p>Com <strong>npm</strong>:</p>
      <pre><code>npm install facilita-ds@latest</code></pre>
      <p>Com <strong>yarn</strong>:</p>
      <pre><code>yarn add facilita-ds@latest</code></pre>

      <h2>Como usar em um projeto</h2>
      <pre><code lang="ts">
  import { UiTemplateNomeDoTemplate } from '@facilita-ds/template';
  import { uiIconNomeDoIcone } from '@facilita-ds/icons';
  import { UiNomeDoComponent } from '@facilita-ds/components';
      </code></pre>

      <p>
        Consulte a documentação de cada pacote para exemplos de uso e customização.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'facilita-ds-guide'
    })
</script>

<style scoped>
section {
  margin: 0 auto;
  padding: 2rem;
  height: 100vh;
  width: 100vw;
}
.guide {
  max-width: 700px;
}
pre {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
}
h2{
  margin-top: 20px;
}
</style>