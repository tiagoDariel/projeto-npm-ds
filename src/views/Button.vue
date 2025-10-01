<!-- filepath: c:\Users\tiago.dariel\Desktop\projeto-ds\facilita-ds\src\components\DocsButton.vue -->
<template>
  <div class="docs-button">
    <section class="explicacao">
      <h1>Componente Button</h1>
      <p>
        O <strong>ui-button</strong> é um botão personalizável que aceita diferentes estilos através da prop <code>design</code> e permite definir uma cor personalizada com <code>customColor</code>.
      </p>
      <ul>
        <li><h2>Importação</h2>
          Importe o componente:
          <pre><code>import { uiButton } from 'facilita-ds/components'</code></pre>
        </li>
        <li><h2>Botões básicos</h2>
            O botão pega as cores pré definidas com os nomes primary, secondary, danger, warning
            para que eles funcionem é necessário adicionar a definição na raiz da estilização
            <br />
            Exemplo:
            <pre><code>
:root {
    --warning: #FFF6D4;
    --primary: #5E5CF0
    --secondary: #232941
    --danger: #E72C3E
    --success: #076634
}
            </code></pre>

            Exemplo usando as cores:
            <pre><code>
&lt;ui-button design="warning"&gt;warning&lt;/ui-button&gt;
&lt;ui-button design="primary"&gt;primary&lt;/ui-button&gt;
&lt;ui-button design="secondary"&gt;secondary&lt;/ui-button&gt;
&lt;ui-button design="danger"&gt;danger&lt;/ui-button&gt;
&lt;ui-button design="success"&gt;success&lt;/ui-button&gt;
&lt;ui-button&gt;default&lt;/ui-button&gt;
            </code></pre>
        </li>
        <li>
          <h2> Cores dinâmicas </h2>
          O botão pega a cor adicionada via props passando a propriedade <strong>custom-color</strong> e o codigo de cor em hexadecimal
          <pre>
            <code>
&lt;ui-button custom-color="#00bd7e"&gt;Custom Color&lt;/ui-button&gt;
&lt;ui-button custom-color="#762f05"&gt;Custom Color&lt;/ui-button&gt;
&lt;ui-button custom-color="#c2e0d6"&gt;Custom Color&lt;/ui-button&gt;
            </code>
            </pre>
        </li>
        <li>
          <h2>Botão outline</h2>
            Ao usar <code>line</code> no design, aplica borda e o texto colorida com o fundo transparente.
           <pre>
                <code>
&lt;ui-button design="warning line"&gt;warning&lt;/ui-button&gt;
&lt;ui-button design="primary line"&gt;primary&lt;/ui-button&gt;
&lt;ui-button design="secondary line"&gt;secondary&lt;/ui-button&gt;
&lt;ui-button design="danger line"&gt;danger&lt;/ui-button&gt;
&lt;ui-button design="success line"&gt;success&lt;/ui-button&gt;
&lt;ui-button design="line" custom-color="#c2e0d6"&gt;Custom Color&lt;/ui-button&gt;
                </code>
            </pre>
        </li>
        <li>
            <h2>Tamanhos de botão</h2>
          <ul>
            <li><code>design</code>: Define o estilo do botão (ex: <code>full</code>, <code>xxl</code>, <code>xl</code>, <code>md</code>, <code>sm</code>).</li>
            <li><code>customColor</code>: Define a cor principal do botão (hexadecimal, ex: <code>#e91e63</code>).</li>
          </ul>
        </li>
        <li>
        <h2>Observação</h2>
          O botão ajusta automaticamente a cor do texto para garantir contraste e, se usar <code>line</code> no design, aplica borda colorida e fundo transparente.
        </li>   
      </ul>
    </section>
    <section class="exemplo">
      <h2>Exemplo prático</h2>
      <div class="botoes-demo">
          <h3>Botões básicos</h3>
          <div class="demos">
                <ui-button design="warning">warning</ui-button>
                <ui-button design="primary">primary</ui-button>
                <ui-button design="secondary">secondary</ui-button>
                <ui-button design="danger">danger</ui-button>
                <ui-button design="success">success</ui-button>
                <ui-button>default</ui-button>
          </div>
      </div>

      <div class="botoes-demo">
          <h3>Cor dinâmica</h3>
          <div class="demos">
                <ui-button custom-color="#00bd7e">Custom color</ui-button>
                <ui-button custom-color="#762f05">Custom color</ui-button>
                <ui-button custom-color="#c2e0d6">Custom color</ui-button>
          </div>
      </div>

      <div class="botoes-demo">
          <h3>Botões outline</h3>
          <div class="demos">
                <ui-button design="warning line">warning</ui-button>
                <ui-button design="primary line">primary</ui-button>
                <ui-button design="secondary line">secondary</ui-button>
                <ui-button design="danger line"> danger</ui-button>
                <ui-button design="success line">success</ui-button>
                <ui-button design="line" custom-color="#c2e0d6">Custom color</ui-button>
          </div>
      </div>
      <div class="botoes-demo">
          <h3>Tamanhos de Botões</h3>
          <div class="demos">
              <ui-button design="full">Full</ui-button> 
        </div>
          <div class="demos">
              <ui-button design="xxl">xxl</ui-button>  padding 0 36
        </div>
           <div class="demos">
               <ui-button design="xl">xl</ui-button>  padding 0 28
        </div>
          <div class="demos">
              <ui-button design="md">md</ui-button>  padding 0 20
        </div>
          <div class="demos">
                <ui-button design="sm">sm</ui-button> padding 0 12
          </div>
      </div>


    </section>
  </div>
</template>

<script setup lang="ts">
import { uiButton } from 'facilita-ds/components'
defineOptions({
    name: 'facilita-ds-button'
})
</script>

<style scoped>
.docs-button {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: #f8fafc;
  font-family: 'Segoe UI', Arial, sans-serif;
}
.explicacao {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
  width: 820px;
}
.exemplo {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
  max-height: 100vh;
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
.botoes-demo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 25px;
}
.demos {
    display: flex;
    gap: 1rem;

}
</style>