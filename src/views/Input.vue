<template>
  <div class="docs-input">
    <section class="explicacao">
      <h1>Componente Input</h1>
      <p>
        O <strong>ui-input</strong> é um campo de entrada flexível, com suporte a máscara, ícone, texto agrupado, estados de erro e mais.
      </p>
      <ol>
        <li>
          Importe o componente:
          <pre><code>import { uiInput } from 'facilita-ds/components'</code></pre>
        </li>
        <li>
          Use no template:
          <pre><code>
&lt;ui-input label="Nome"   v-model="nome" placeholder="Digite seu nome" /&gt;

&lt;ui-input label="Telefone"   v-model="telefone" mask="(##) #####-####" placeholder="(99) 99999-9999"/&gt;

&lt;ui-input label="Com erro" v-model="erro" :error="true"  errorMessage="Campo obrigatório!" /&gt;

&lt;ui-input label="Com ícone" v-model="comIcone" :icon="true"&gt;
    &lt;template #icon&gt;
        &lt;uiIconBrush :fill="'#2084E5'" /&gt;
    &lt;/template&gt;
&lt;/ui-input&gt;

&lt;ui-input label="Com texto agrupado" v-model="comGrupo" groupText="R$" /&gt;
</code></pre>
        </li>
        <li>
          <strong>Principais props:</strong>
          <ul>
            <li><code>label</code>: Texto do label</li>
            <li><code>v-model</code>: Valor do Input</li>
            <li><code>mask</code>: Máscara (usa <code>maska</code>)</li>
            <li><code>type</code>: Tipo do input (ex: <code>text</code>, <code>password</code>)</li>
            <li><code>placeholder</code>: Placeholder</li>
            <li><code>required</code>: Campo obrigatório</li>
            <li><code>error</code>: Estado de erro</li>
            <li><code>errorMessage</code>: Mensagem de erro</li>
            <li><code>disabled</code>: Desabilita o campo</li>
            <li><code>icon</code>: Exibe slot de ícone</li>
            <li><code>iconFill</code>: Cor do ícone</li>
            <li><code>groupText</code>: Texto agrupado à esquerda</li>
          </ul>
        </li>
        <li>
          <strong>Slots:</strong>
          <ul>
            <li><code>icon</code>: Para inserir um ícone customizado à esquerda do input</li>
          </ul>
        </li>
      </ol>
    </section>
    <section class="exemplo">
      <h2>Exemplo prático</h2>
      <div class="inputs-demo">
        <ui-input label="Nome" v-model="nome" placeholder="Digite seu nome" />
        <ui-input label="Telefone" v-model="telefone" mask="(##) #####-####" placeholder="(99) 99999-9999" />
        <ui-input label="Com erro" v-model="erro" :error="true" errorMessage="Campo obrigatório!" />
        <ui-input label="Com ícone" v-model="comIcone" :icon="true">
          <template #icon>
            <uiIconBrush :fill="'#2084E5'" />
          </template>
        </ui-input>
        <ui-input label="Com texto agrupado" v-model="comGrupo" groupText="R$" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { uiInput } from 'facilita-ds/components'
import { uiIconBrush } from 'facilita-ds/icons'

const nome = ref('')
const telefone = ref('')
const erro = ref('')
const comIcone = ref('')
const comGrupo = ref('')
</script>

<style scoped>
.docs-input {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
  font-family: 'Segoe UI', Arial, sans-serif;
}
.explicacao {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
  width: 50vw;
}
.exemplo {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
  width: 30vw;
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
  white-space: pre-line;
}
.inputs-demo {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
}
</style>