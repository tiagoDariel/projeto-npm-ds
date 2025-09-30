<template>
  <div class="docs-tabs">
    <section class="explication">
      <h1>Tabs - Como usar</h1>
      <p>
        O componente <strong>Tabs</strong> permite criar navegação por abas.  
        Cada aba é definida por um componente <strong>ui-tab-pane</strong>.
      </p>
      <ol>
        <li>
          Importe os componentes:
          <pre><code>import { uiTabs, uiTabPane } from 'facilita-ds/components'</code></pre>
        </li>
        <li>
          Use o componente <code>&lt;ui-tabs&gt;</code> como container e adicione <code>&lt;ui-tab-pane&gt;</code> para cada aba:
          <pre><code>&lt;ui-tabs&gt;
  &lt;ui-tab-pane label="Primeira Aba" name="primeira"&gt;Conteúdo da Aba 1&lt;/ui-tab-pane&gt;
  &lt;ui-tab-pane label="Segunda Aba" name="segunda"&gt;Conteúdo da Aba 2&lt;/ui-tab-pane&gt;
  &lt;ui-tab-pane label="Terceira Aba" name="terceira"&gt;Conteúdo da Aba 3&lt;/ui-tab-pane&gt;
&lt;/ui-tabs&gt;</code></pre>
        </li>
        <li>
            Para carregar a aba já atíva é preciso adicionar <code>&lt;ui-tabs v-model="tabActive"&gt;</code>
<code>
    <br> Exemplo:
<pre>
&lt;script&gt;
    import { ref } from 'vue'
    const tabActive = ref('primeira')
&lt;/script&gt;
<pre><code>&lt;ui-tabs v-model="tabActive"&gt;
  &lt;ui-tab-pane label="Primeira Aba" name="primeira"&gt;Conteúdo da Aba 1&lt;/ui-tab-pane&gt;
  &lt;ui-tab-pane label="Segunda Aba" name="segunda"&gt;Conteúdo da Aba 2&lt;/ui-tab-pane&gt;
  &lt;ui-tab-pane label="Terceira Aba" name="terceira"&gt;Conteúdo da Aba 3&lt;/ui-tab-pane&gt;
&lt;/ui-tabs&gt;</code></pre> 
</pre>
</code>
        </li>
        <li>
          O atributo <code>label</code> define o texto da aba e <code>name</code> é o identificador único.
        </li>
      </ol>
    </section>

    <section class="example">
        <div class="title-example">
            <h2>Exemplo prático</h2>
            <div class="options">
                <ui-button design="sm primary" @click="pageActive='code'">Código</ui-button>
                <ui-button design="sm primary" @click="pageActive='view'">Tela</ui-button>
            </div>
        </div>
      <div class="example-page" v-if="pageActive === 'view'">
        <ui-tabs v-model="tabActive">
            <ui-tab-pane label="Primeira Aba" name="primeira">
            <p style="width: 100%; background-color: aqua;">Conteúdo da primeira aba.</p>
            </ui-tab-pane>
            <ui-tab-pane label="Segunda Aba" name="segunda">
            <p style="width: 100%; background-color:blanchedalmond;">Conteúdo da segunda aba.</p>
            </ui-tab-pane>
            <ui-tab-pane label="Terceira Aba" name="terceira">
            <p style="width: 100%; background-color:cadetblue;">Conteúdo da terceira aba.</p>
            </ui-tab-pane>
        </ui-tabs>
      </div>
      <div class="example-codigo" v-else>
          <pre class="code">
                <code>
&lt;template&gt;
    &lt;section class="example"&gt;
        &lt;div class="example-container"&gt;
            &lt;ui-tabs v-model="tabActive"&gt;
                &lt;ui-tab-pane label="Primeira Aba" name="primeira"&gt;
                    &lt;p style="width: 100%; background-color: aqua;"&gt;Conteúdo da primeira aba.&lt;/p&gt;
                &lt;/ui-tab-pane&gt;

                &lt;ui-tab-pane label="Segunda Aba" name="segunda"&gt;
                    &lt;p style="width: 100%; background-color:blanchedalmond;"&gt;Conteúdo da segunda aba.&lt;/p&gt;
                &lt;/ui-tab-pane&gt;

                &lt;ui-tab-pane label="Terceira Aba" name="terceira"&gt;
                    &lt;p style="width: 100%; background-color:cadetblue;"&gt;Conteúdo da terceira aba.&lt;/p&gt;
                &lt;/ui-tab-pane&gt;
            &lt;/ui-tabs&gt;
        &lt;/div&gt;
    &lt;/section&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    import { uiTabs, uiTabPane } from 'facilita-ds/components'
    const tabActive = ref('primeira')
&lt;/script&gt;
            </code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { uiTabs, uiTabPane, uiButton } from 'facilita-ds/components'
import { ref } from 'vue'
defineOptions({
    name: 'facilita-ds-tabs'
})

const tabActive = ref('primeira')
const pageActive = ref('view')
</script>

<style scoped>
.docs-tabs {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
  font-family: 'Segoe UI', Arial, sans-serif;
}
.explication {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
}
.title-example {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.options {
    display: flex;
    gap: 10px;
}

.example {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
  width: 100%;
  position: relative;
  width: 700px;
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

.code {
    background-color: #35495e;
    color: #fff;
    max-width: 700px;
    overflow: auto;
}
</style>