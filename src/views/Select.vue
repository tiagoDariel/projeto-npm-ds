<template>
  <div class="docs-select">
    <section class="explanation">
      <h1>Componente <code style="font-weight: 600;">ui-select</code></h1>
      <p>
        O <strong>ui-select</strong> é um componente de seleção avançado, com suporte a múltipla seleção, busca, agrupamento, customização de opções, scroll infinito e muito mais.
      </p>
      <ol>
        <li>
          <strong>Importação:</strong>
          <pre><code style="font-weight: 600;">import { uiSelect } from 'facilita-ds/components'</code></pre>
        </li>
        <li>
          <strong>Uso básico:</strong>
          <pre><code>&lt;ui-select
  label="Cidade"
  v-model="cidade"
  :options="cities"
  placeholder="Selecione uma cidade"
  return-label="label"
  return-value="value"
/&gt;</code></pre>
        </li>
        <li>
          <strong>Principais props:</strong>
          <ul>
            <li><code style="font-weight: 600;">label</code>: Texto exibido acima do campo.</li>
            <li><code style="font-weight: 600;">v-model</code>: Valor selecionado (array para múltiplo, valor único para simples).</li>
            <li><code style="font-weight: 600;">options</code>: Lista de opções simples (<code style="font-weight: 600;">[{ label, value }]</code>).</li>
            <li><code style="font-weight: 600;">optionWithTitle</code>: Lista de opções agrupadas (<code style="font-weight: 600;">{ Grupo: [{ label, value }] }</code>).</li>
            <li><code style="font-weight: 600;">multiple</code>: Habilita seleção múltipla.</li>
            <li><code style="font-weight: 600;">placeholder</code>: Placeholder do campo.</li>
            <li><code style="font-weight: 600;">return-label</code>: Nome da chave exibida visualmente.</li>
            <li><code style="font-weight: 600;">return-value</code>: Nome da chave usada como valor. 
                <ul>
                    <li>
                        Obs.: Se o <span style="font-weight: 600;">return-value</span> não existir será retornado o objeto inteiro
                    </li>
                </ul>
            </li>
            <li><code style="font-weight: 600;">accordion</code>: Mostra grupos de opções como accordions.</li>
            <li><code style="font-weight: 600;">searchable</code>: Habilita campo de busca.</li>
            <li><code style="font-weight: 600;">loading</code>: Exibe ícone de carregando.</li>
            <li><code style="font-weight: 600;">keep-selected</code>: Mantém seleção ao buscar novos dados (útil em busca remota).</li>
            <li><code style="font-weight: 600;">notFound</code>: Texto exibido quando não há resultados.</li>
            <li><code style="font-weight: 600;">error</code>: Estado de erro visual.</li>
            <li><code style="font-weight: 600;">errorMessage</code>: Mensagem de erro.</li>
            <li><code style="font-weight: 600;">required</code>: Campo obrigatório.</li>
          </ul>
        </li>
        <li>
          <strong>Eventos:</strong>
          <ul>
            <li><code style="font-weight: 600;">@search:input</code>: Disparado ao digitar no campo de busca (útil para busca remota).</li>
            <li><code style="font-weight: 600;">@options:load</code>: Disparado ao chegar no fim da lista (scroll infinito).</li>
          </ul>
        </li>
        <li>
          <strong>Slots:</strong>
          <ul>
            <li><code style="font-weight: 600;">default</code>: Customiza o conteúdo de cada opção (recebe <code style="font-weight: 600;">item</code>).</li>
          </ul>
        </li>
      </ol>
      <h2>Atributos</h2>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Tipo</th>
            <th>Padrão</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in attr" :key="key">
            <td class="font-mono font-medium">{{ key }}</td>
            <td class="font-mono">{{ item.type }}</td>
            <td class="font-mono">{{ formatDefault(item.default) }}</td>
            <td>{{ item.description }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="example">
      <h2>Exemplos práticos</h2>
      <div class="selects-demo">
        <div class="selects-demo-options"> 
            <h3>Múltiplos</h3>
            <button class="toggle-btn" @click="toggleCode('simple')">
                {{ showCode.simple ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        <div class="item-select" v-if="!showCode.simple">
            <ui-select
                label="Cidade"
                v-model="cidade"
                :options="cities"
                placeholder="Selecione uma cidade"
                return-label="label"
                return-value="value"
            />
        </div>
         <pre v-else class="code-block"><code class="language-html">{{ codeSamples.simple }}</code></pre>
        <p><strong>Selecionado:</strong> {{ cidade }}</p>

        
        <div class="selects-demo-options"> 
            <h3>Simples</h3>
            <button class="toggle-btn" @click="toggleCode('multiple')">
                {{ showCode.multiple ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.multiple">
            <ui-select
            label="Cidades"
            v-model="selectedCities"
            :options="cities"
            placeholder="Selecione as cidades"
            return-label="label"
            return-value="value"
            multiple
            />
            </div>
         <pre v-else class="code-block"><code class="language-html">{{ codeSamples.multiple }}</code></pre>
         <p><strong>Selecionados:</strong> {{ selectedCities }}</p>

        <div class="selects-demo-options"> 
            <h3>Com grupos</h3>
            <button class="toggle-btn" @click="toggleCode('groups')">
                {{ showCode.multiple ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.groups">
        <ui-select
          label="Nomes"
          v-model="selectGroupName"
          :option-with-title="groupedOptionsName"
          placeholder="Selecione um estado"
          return-label="label"
          return-value="value"
        />
        </div>
        <pre v-else class="code-block"><code class="language-html">{{ codeSamples.groups }}</code></pre>
        <p><strong>Selecionados:</strong> {{ selectGroupName }}</p>

        <div class="selects-demo-options"> 
            <h3>Com grupos (múltiplo)</h3>
            <button class="toggle-btn" @click="toggleCode('groupsMultiple')">
                {{ showCode.groupsMultiple ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.groupsMultiple">
        <ui-select
          label="Nomes"
          v-model="selectGroupNameMultiple"
          :option-with-title="groupedOptionsName"
          placeholder="Selecione um estado"
          return-label="label"
          return-value="value"
          multiple
        />
        </div>
         <pre v-else class="code-block"><code class="language-html">{{ codeSamples.groupsMultiple }}</code></pre>
        <p><strong>Selecionados:</strong> {{ selectGroupNameMultiple }}</p>

        <div class="selects-demo-options"> 
            <h3>Com grupos (accordion)</h3>
            <button class="toggle-btn" @click="toggleCode('accordion')">
                {{ showCode.accordion ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.accordion">
        <ui-select
          label="Estados"
          v-model="selectedEstados"
          :option-with-title="groupedOptions"
          placeholder="Selecione um estado"
          return-label="label"
          return-value="value"
          accordion
        />
        </div>
         <pre v-else class="code-block"><code class="language-html">{{ codeSamples.accordion }}</code></pre>
        <p><strong>Selecionados:</strong> {{ selectedEstados }}</p>

        <div class="selects-demo-options"> 
            <h3>Com grupos (accordion, múltiplo)</h3>
            <button class="toggle-btn" @click="toggleCode('accordionMultiple')">
                {{ showCode.accordionMultiple ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.accordionMultiple">
        <ui-select
          label="Nomes"
          v-model="selectedNome"
          :option-with-title="groupedOptionsName"
          placeholder="Selecione um nome"
          return-label="label"
          return-value="value"
          accordion
          multiple
        />
        </div>
         <pre v-else class="code-block"><code class="language-html">{{ codeSamples.accordionMultiple }}</code></pre>
        <p><strong>Selecionados:</strong> {{ selectedNome }}</p>

        <div class="selects-demo-options"> 
            <h3>Customizando opções com slot</h3>
            <button class="toggle-btn" @click="toggleCode('custom')">
                {{ showCode.custom ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.custom">
        <ui-select
          label="Cidades customizadas"
          v-model="cidadeCustom"
          :options="cities"
          placeholder="Selecione uma cidade"
          return-label="label"
          return-value="value"
        >
          <template #default="{ item }">
            <span style="display: flex; align-items: center;">
              <uiIconBrush :fill="'#2084E5'" style="margin-right: 8px;" />
              {{ item.label }}
            </span>
          </template>
        </ui-select>
        </div>

        <pre v-else class="code-block"><code class="language-html">{{ codeSamples.custom }}</code></pre>
        <p><strong>Selecionado:</strong> {{ cidadeCustom }}</p>

        <div class="selects-demo-options"> 
            <h3>Busca simples</h3>
            <button class="toggle-btn" @click="toggleCode('search')">
                {{ showCode.search ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.search">
            <ui-select
                label="Usuários"
                :loading="usersLoading"
                v-model="userSearch"
                :options="usersOptions"
                placeholder="Selecione uma cidade"
                return-label="label"
                return-value="value"
                searchable
                @search:input="searchUsers" 
            />
        </div>
        <pre v-else class="code-block"><code class="language-html">{{ codeSamples.search }}</code></pre>
        <p><strong>Selecionado:</strong> {{ userSearch }}</p>

        <div class="selects-demo-options"> 
            <h3>Busca simples (múltiplo)</h3>
            <button class="toggle-btn" @click="toggleCode('searchMultiple')">
                {{ showCode.searchMultiple ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.searchMultiple">
            <ui-select
                label="Usuários"
                :loading="usersLoadingMultiple"
                v-model="userSearchMultiple"
                :options="usersOptionsMultiple"
                placeholder="Selecione uma cidade"
                return-label="label"
                return-value="value"
                searchable
                multiple
                @search:input="searchUsersMultiple" 
            />
        </div>
        <pre v-else class="code-block"><code class="language-html">{{ codeSamples.searchMultiple }}</code></pre>
        <p><strong>Selecionado:</strong> {{ userSearchMultiple }}</p>

        <div class="selects-demo-options"> 
            <h3>Busca simples (múltiplo, mantendo seleção)</h3>
            <button class="toggle-btn" @click="toggleCode('searchMultipleKeep')">
                {{ showCode.searchMultipleKeep ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.searchMultipleKeep">
        <ui-select
          label="Usuários"
          :loading="usersLoadingKeep"
          v-model="userSearchKeep"
          :options="usersOptionsKeep"
          placeholder="Selecione uma cidade"
          return-label="label"
          return-value="value"
          searchable
          multiple
          keep-selected
          @search:input="searchUsersKeep" 
        />
        </div>
        <pre v-else class="code-block"><code class="language-html">{{ codeSamples.searchMultipleKeep }}</code></pre>
        <p><strong>Selecionado:</strong> {{ userSearchKeep }}</p>

        <div class="selects-demo-options"> 
            <h3>Busca com campo customizado</h3>
            <button class="toggle-btn" @click="toggleCode('customSearch')">
                {{ showCode.customSearch ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.customSearch">
            <ui-select
                label="Usuários"
                :loading="usersLoadingCustom"
                v-model="userSearchCustom"
                :options="usersOptionsCustom"
                placeholder="Selecione uma cidade"
                return-label="label"
                return-value="value"
                searchable
                multiple
                @search:input="searchUsersCustom" 
            >
          <template #default="{ item }">
            <span style="display: flex; align-items: center;">
              <uiIconBrush :fill="'#2084E5'" style="margin-right: 8px;" />
              {{ item.label }}
            </span>
          </template>
        </ui-select>

        </div>
         <pre v-else class="code-block"><code class="language-html">{{ codeSamples.customSearch }}</code></pre>

        <div class="selects-demo-options"> 
            <h3>Scroll infinito</h3>
            <button class="toggle-btn" @click="toggleCode('infinity')">
                {{ showCode.infinity ? 'Ocultar' : 'Ver código' }}
            </button>
        </div>
        
        <div class="item-select" v-if="!showCode.infinity">
            <ui-select
                label="Usuários"
                :loading="usersLoadingIfinityScroll"
                v-model="userSearchIfinityScroll"
                :options="usersOptionsIfinityScroll"
                placeholder="Selecione uma cidade"
                return-label="label"
                return-value="value"
                searchable
                multiple
                @search:input="searchUseriIfinityScroll"
                @options:load="searchUseriIfinityScroll"
            />
        </div>
         <pre v-else class="code-block"><code class="language-html">{{ codeSamples.infinity }}</code></pre>
        <p><strong>Selecionado:</strong> {{ userSearchIfinityScroll }}</p>

            <div class="selects-demo-options"> 
                <h3>Busca por clique ou enter</h3>
                <button class="toggle-btn" @click="toggleCode('click')">
                    {{ showCode.click ? 'Ocultar' : 'Ver código' }}
                </button>
            </div>
        
            <div class="item-select" v-if="!showCode.click">
                <ui-select
                    label="Usuários"
                    :loading="usersLoadingClick"
                    v-model="userSearchClick"
                    :options="usersOptionsClick"
                    placeholder="Selecione uma cidade"
                    return-label="label"
                    return-value="value"
                    searchable
                    multiple
                    :is-auto-search="false"
                    @search:input="searchUseriClick"
                    @options:load="searchUseriClick"
                />
            </div>
            <pre v-else class="code-block"><code class="language-html">{{ codeSamples.click }}</code></pre>
            <p><strong>Selecionado:</strong> {{ userSearchClick }}</p>

            <div class="selects-demo-options"> 
                <h3>Com error</h3>
                <button class="toggle-btn" @click="toggleCode('error')">
                    {{ showCode.error ? 'Ocultar' : 'Ver código' }}
                </button>
            </div>
        
            <div class="item-select" v-if="!showCode.error">
                <ui-select
                    label="Usuários"
                    v-model="userSearch"
                    :options="[]"
                    placeholder="Selecione uma cidade"  
                    return-label="label"
                    return-value="value"
                    searchable
                    :error="true"
                    error-message="Menssagem de erro exemplo"
                    :is-auto-search="false"
                />
            </div>
            <pre v-else class="code-block"><code class="language-html">{{ codeSamples.error }}</code></pre>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { uiSelect } from 'facilita-ds/components'
// import { uiIconBrush } from 'facilita-ds/icons'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

defineOptions({ name: 'DocsUiSelect' })

// Estado dos códigos
const showCode = ref({
    simple: false,
    multiple: false,
    groups: false,
    groupsMultiple: false,
    accordion: false,
    accordionMultiple: false,
    custom: false,
    search: false,
    searchMultiple: false,
    searchMultipleKeep: false,
    customSearch: false,
    infinity: false,
    click: false,
    error: false,
})

// Função de alternância
function toggleCode(example: keyof typeof showCode.value) {
  showCode.value[example] = !showCode.value[example]
  nextTick(() => hljs.highlightAll())
}

// Estados e exemplos
const cidade = ref('')
const selectedCities = ref<string[]>([])
const cidadeCustom = ref('')
const selectedEstados = ref<string[]>([])
const selectedNome = ref<string[]>([])
const selectGroupName = ref<string>('')
const selectGroupNameMultiple = ref<string[]>([])

const userSearch = ref<string[]>([])
const usersOptions = ref([] as { label: string; value: string }[])
const usersLoading = ref(false)

const userSearchKeep = ref<string[]>([])
const usersOptionsKeep = ref([] as { label: string; value: string }[])
const usersLoadingKeep= ref(false)

const userSearchMultiple = ref<string[]>([])
const usersOptionsMultiple = ref([] as { label: string; value: string }[])
const usersLoadingMultiple= ref(false)

const userSearchCustom = ref<string[]>([])
const usersOptionsCustom = ref([] as { label: string; value: string }[])
const usersLoadingCustom = ref(false)

const userSearchIfinityScroll = ref<string[]>([])
const usersOptionsIfinityScroll  = ref([] as { label: string; value: string }[])
const usersLoadingIfinityScroll  = ref(false)

const userSearchClick = ref<string[]>([])
const usersOptionsClick  = ref([] as { label: string; value: string }[])
const usersLoadingClick  = ref(false)


const cities = [
  { label: 'São Paulo', value: 'sp' },
  { label: 'Rio de Janeiro', value: 'rj' },
  { label: 'Belo Horizonte', value: 'bh' },
]

const groupedOptions = {
  Sudeste: [
    { label: 'São Paulo', value: 'sp' },
    { label: 'Rio de Janeiro', value: 'rj' },
    { label: 'Belo Horizonte', value: 'bh' },
  ],
  Sul: [
    { label: 'Curitiba', value: 'ctba' },
    { label: 'Porto Alegre', value: 'poa' },
  ]
}

const groupedOptionsName = {
  'Nomes com A': [
    { label: 'Abenrto', value: 'Alberto' },
    { label: 'Ana', value: 'Ana' },
    { label: 'Ariel', value: 'Ariel' },
  ],
  'Nomes com B': [
    { label: 'Beatriz', value: 'Beatriz' },
    { label: 'Breno', value: 'Breno' },
  ],
   'Nomes com C': [
    { label: 'Caio', value: 'Caio' },
    { label: 'Cintia', value: 'Cintia' },
  ]
}

// Tabela de atributos
const attr = {
  "label": {
    "type": "string",
    "default": "—",
    "description": "Texto exibido acima do campo."
  },
  "modelValue": {
    "type": "string | number | (string | number)[]",
    "default": "—",
    "description": "Valor atual selecionado (para `v-model`)."
  },
  "disabled": {
    "type": "boolean",
    "default": false,
    "description": "Desativa o campo."
  },
  "loading": {
    "type": "boolean",
    "default": false,
    "description": "Exibe ícone de *loading* no canto direito."
  },
  "error": {
    "type": "boolean",
    "default": false,
    "description": "Define o estado de erro visual."
  },
  "errorMessage": {
    "type": "string",
    "default": "—",
    "description": "Texto exibido em caso de erro."
  },
  "placeholder": {
    "type": "string",
    "default": "—",
    "description": "Placeholder do campo."
  },
  "required": {
    "type": "boolean",
    "default": false,
    "description": "Indica campo obrigatório."
  },
  "name": {
    "type": "string",
    "default": "—",
    "description": "Atributo `name` do input."
  },
  "isAutoSearch": {
    "type": "boolean",
    "default": false,
    "description": "Habilita a busca automática conforme digita."
  },
  "options": {
    "type": "OptionType[]",
    "default": [],
    "description": "Lista de opções simples."
  },
  "optionWithTitle": {
    "type": "Record<string, OptionType[]>",
    "default": {},
    "description": "Lista de opções agrupadas por título."
  },
  "notFound": {
    "type": "string",
    "default": "Nenhum resultado encontrado",
    "description": "Texto exibido quando não há resultados."
  },
  "multiple": {
    "type": "boolean",
    "default": false,
    "description": "Habilita seleção múltipla."
  },
  "returnValue": {
    "type": "string",
    "default": "",
    "description": "Nome da chave que será usada como *valor*."
  },
  "returnLabel": {
    "type": "string",
    "default": "label",
    "description": "Nome da chave exibida visualmente."
  },
  "accordion": {
    "type": "boolean",
    "default": false,
    "description": "Mostra grupos de opções como *accordions*."
  },
  "searchable": {
    "type": "boolean",
    "default": "false",
    "description": "Habilita campo de busca."
  },
  "keepSelected": {
    "type": "boolean",
    "default": false,
    "description": "Mantém seleção ao bucar novos dados."
  }
}

// Códigos fonte para exibição
const codeSamples = {
  simple: `
<template>
  <ui-select
    label="Cidade"
    v-model="cidade"
    :options="cities"
    placeholder="Selecione uma cidade"
    return-label="label"
    return-value="value"
  />
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const cidade = ref('')
    const cities = [
        { label: 'São Paulo', value: 'sp' },
        { label: 'Rio de Janeiro', value: 'rj' },
        { label: 'Belo Horizonte', value: 'bh' },
    ]
`,
  multiple: `
  <template>
    <ui-select
        label="Cidades"
        v-model="selectedCities"
        :options="cities"
        multiple
        placeholder="Selecione as cidades"
        return-label="label"
        return-value="value"
    />
    </template>
    <script setup lang="ts">
        import { ref } from 'vue'
        import UiSelect from 'facilita-ds/components/ui-select.vue'

        const selectedCities = ref<string[]>([])

        const cities = [
            { label: 'São Paulo', value: 'sp' },
            { label: 'Rio de Janeiro', value: 'rj' },
            { label: 'Belo Horizonte', value: 'bh' },
        ]`,
    groups: `
<template>
    <ui-select
        label="Nomes"
        v-model="selectGroupName"
        :option-with-title="groupedOptionsName"
        placeholder="Selecione um estado"
        return-label="label"
        return-value="value"
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const selectGroupName = ref<string>('')

    const groupedOptionsName = {
        'Nomes com A': [
            { label: 'Abenrto', value: 'Alberto' },
            { label: 'Ana', value: 'Ana' },
            { label: 'Ariel', value: 'Ariel' },
        ],
        'Nomes com B': [
            { label: 'Beatriz', value: 'Beatriz' },
            { label: 'Breno', value: 'Breno' },
        ],
        'Nomes com C': [
            { label: 'Caio', value: 'Caio' },
            { label: 'Cintia', value: 'Cintia' },
        ]
    }
`,
    groupsMultiple: `
<template>
    <ui-select
        label="Nomes"
        v-model="selectGroupNameMultiple"
        :option-with-title="groupedOptionsName"
        placeholder="Selecione um estado"
        return-label="label"
        return-value="value"
        multiple
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const selectGroupNameMultiple = ref<string[]>([])

    const groupedOptionsName = {
        'Nomes com A': [
            { label: 'Abenrto', value: 'Alberto' },
            { label: 'Ana', value: 'Ana' },
            { label: 'Ariel', value: 'Ariel' },
        ],
        'Nomes com B': [
            { label: 'Beatriz', value: 'Beatriz' },
            { label: 'Breno', value: 'Breno' },
        ],
        'Nomes com C': [
            { label: 'Caio', value: 'Caio' },
            { label: 'Cintia', value: 'Cintia' },
        ]
    }
`,
    accordion: `
<template>
    <ui-select
        label="Estados"
        v-model="selectedEstados"
        :option-with-title="groupedOptions"
        placeholder="Selecione um estado"
        return-label="label"
        return-value="value"
        accordion
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const selectedEstados = ref<string[]>([])

    const groupedOptions = {
        Sudeste: [
            { label: 'São Paulo', value: 'sp' },
            { label: 'Rio de Janeiro', value: 'rj' },
            { label: 'Belo Horizonte', value: 'bh' },
        ],
        Sul: [
            { label: 'Curitiba', value: 'ctba' },
            { label: 'Porto Alegre', value: 'poa' },
        ]
    }
`,
    accordionMultiple: `
<template>
    <ui-select
        label="Nomes"
        v-model="selectedNome"
        :option-with-title="groupedOptionsName"
        placeholder="Selecione um nome"
        return-label="label"
        return-value="value"
        accordion
        multiple
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const selectedNome = ref<string[]>([])

    const groupedOptionsName = {
        'Nomes com A': [
            { label: 'Abenrto', value: 'Alberto' },
            { label: 'Ana', value: 'Ana' },
            { label: 'Ariel', value: 'Ariel' },
        ],
        'Nomes com B': [
            { label: 'Beatriz', value: 'Beatriz' },
            { label: 'Breno', value: 'Breno' },
        ],
        'Nomes com C': [
            { label: 'Caio', value: 'Caio' },
            { label: 'Cintia', value: 'Cintia' },
        ]
    }
`,
    custom: `
<template>
    <ui-select
        label="Cidades customizadas"
        v-model="cidadeCustom"
        :options="cities"
        placeholder="Selecione uma cidade"
        return-label="label"
        return-value="value"
    >
        <template #default="{ item }">
            <span style="display: flex; align-items: center;">
                <uiIconBrush :fill="'#2084E5'" style="margin-right: 8px;" />
                {{ item.label }}
            </span>
        </template>
    </ui-select>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'
    import { uiIconBrush } from 'facilita-ds/icons'

    const cidadeCustom = ref('')

    const cities = [
        { label: 'São Paulo', value: 'sp' },
        { label: 'Rio de Janeiro', value: 'rj' },
        { label: 'Belo Horizonte', value: 'bh' },
    ]
`,
    search: `
<template>
    <ui-select
        label="Usuários"
        :loading="usersLoading"
        v-model="userSearch"
        :options="usersOptions"
        placeholder="Selecione uma cidade"
        return-label="label"
        return-value="value"
        searchable
        @search:input="searchUsers" 
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const userSearch = ref<string[]>([])
    const usersOptions = ref([] as { label: string; value: string }[])
    const usersLoading = ref(false)

    function searchUsers(name: string) {
        usersLoading.value = true;
        setTimeout(() => {
            usersLoading.value = false;
            // Simula search
            usersOptions.value = [
                { label: name + ' Silva', value: 'silva' },
                { label: name + ' Souza', value: 'souza' },
                { label: name + ' Oliveira', value: 'oliveira' },
            ];
        }, 1500);
    }
`,
    searchMultiple: `
<template>
    <ui-select
        label="Usuários"
        :loading="usersLoadingMultiple"
        v-model="userSearchMultiple"
        :options="usersOptionsMultiple"
        placeholder="Selecione uma cidade"
        return-label="label"
        return-value="value"
        searchable
        multiple
        @search:input="searchUsersMultiple" 
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const userSearchMultiple = ref<string[]>([])
    const usersOptionsMultiple = ref([] as { label: string; value: string }[])
    const usersLoadingMultiple = ref(false)

    function searchUsersMultiple(name: string) {
        usersLoadingMultiple.value = true;
        setTimeout(() => {
            usersLoadingMultiple.value = false;
            // Simula busca
            usersOptionsMultiple.value = [
                { label: name + ' Silva', value: 'silva' },
                { label: name + ' Souza', value: 'souza' },
                { label: name + ' Oliveira', value: 'oliveira' },
            ];
        }, 1500);
    }
`,
    searchMultipleKeep: `
<template>
    <ui-select
        label="Usuários"
        :loading="usersLoadingKeep"
        v-model="userSearchKeep"
        :options="usersOptionsKeep"
        placeholder="Selecione uma cidade"
        return-label="label"
        return-value="value"
        searchable
        multiple
        keep-selected
        @search:input="searchUsersKeep" 
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const userSearchKeep = ref<string[]>([])
    const usersOptionsKeep = ref([] as { label: string; value: string }[])
    const usersLoadingKeep = ref(false)

    function searchUsersKeep(name: string) {
        usersLoadingKeep.value = true;
        setTimeout(() => {
            usersLoadingKeep.value = false;
            // Simula busca
            usersOptionsKeep.value = [
                { label: name + ' Silva', value: 'silva' },
                { label: name + ' Souza', value: 'souza' },
                { label: name + ' Oliveira', value: 'oliveira' },
            ];
        }, 1500);
    }
`,
    customSearch: `
<template>
    <ui-select
        label="Usuários"
        :loading="usersLoadingCustom"
        v-model="userSearchCustom"
        :options="usersOptionsCustom"
        placeholder="Selecione uma cidade"
        return-label="label"
        return-value="value"
        searchable
        multiple
        @search:input="searchUsersCustom"
    >
        <template #default="{ item }">
            <span style="display: flex; align-items: center;">
                <uiIconBrush :fill="'#2084E5'" style="margin-right: 8px;" />
                {{ item.label }}
            </span>
        </template>
    </ui-select>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'
    import { uiIconBrush } from 'facilita-ds/icons'

    const userSearchCustom = ref<string[]>([])
    const usersOptionsCustom = ref([] as { label: string; value: string }[])
    const usersLoadingCustom = ref(false)

    function searchUsersCustom(name: string) {
        usersLoadingCustom.value = true;
        setTimeout(() => {
            usersLoadingCustom.value = false;
            // Simula busca
            usersOptionsCustom.value = [
                { label: name + ' Silva', value: 'silva' },
                { label: name + ' Souza', value: 'souza' },
                { label: name + ' Oliveira', value: 'oliveira' },
            ];
        }, 1500);
    }
`,
    infinity: ` 
<template>
    <ui-select
        label="Usuários"
        :loading="usersLoadingIfinityScroll"
        v-model="userSearchIfinityScroll"
        :options="usersOptionsIfinityScroll"
        placeholder="Selecione uma cidade"
        return-label="label"
        return-value="value"
        searchable
        multiple
        @search:input="searchUseriIfinityScroll"
        @options:load="searchUseriIfinityScroll"
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const userSearchIfinityScroll = ref<string[]>([])
    const usersOptionsIfinityScroll  = ref([] as { label: string; value: string }[])
    const usersLoadingIfinityScroll  = ref(false)

    function searchUseriIfinityScroll(name: string) {
        usersLoadingIfinityScroll.value = true;
        setTimeout(() => {
            usersLoadingIfinityScroll.value = false;
            // Simula busca
            usersOptionsIfinityScroll.value = [
                ...usersOptionsIfinityScroll.value,
                { label: name + ' Silva', value: 'silva' },
                { label: name + ' Souza', value: 'souza' },
                { label: name + ' Oliveira', value: 'oliveira' },
            ];
        }, 1500);
    }
`,
click: ` 
<template>
    <ui-select
        label="Usuários"
        :loading="usersLoadingClick"
        v-model="userSearchClick"
        :options="usersOptionsClick"
        placeholder="Selecione uma cidade"
        return-label="label"
        return-value="value"
        searchable
        multiple
        @search:input="searchUseriClick"
        @options:load="searchUseriClick"
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const userSearchClick = ref<string[]>([])
    const usersOptionsClick  = ref([] as { label: string; value: string }[])
    const usersLoadingClick  = ref(false)

    function searchUseriClick(name: string) {
        usersLoadingClick.value = true;
        setTimeout(() => {
            usersLoadingClick.value = false;
            // Simula busca
            usersOptionsClick.value = [
                ...usersOptionsClick.value,
                { label: name + ' Silva', value: 'silva' },
                { label: name + ' Souza', value: 'souza' },
                { label: name + ' Oliveira', value: 'oliveira' },
            ];
        }, 1500);
    }
`,
error: ` 
<template>
    <ui-select
        label="Usuários"
        v-model="userSearch"
        placeholder="Selecione uma cidade"
        searchable
        error-message="Menssagem de erro exemplo"
        :options="[]"
        :error="true"
        :is-auto-search="false"
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import UiSelect from 'facilita-ds/components/ui-select.vue'

    const userSearch = ref<string[]>([])
    `
}

onMounted(() => hljs.highlightAll())

function formatDefault(value: boolean | string | number | object | (string | number)[]) {
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (Array.isArray(value)) return '[]'
  if (typeof value === 'object' && value !== null) return '{}'
  return value
}

// Função para gerar nomes fictícios
function nameGenereation(base: string, quantidade = 10) {
    const conectores = ["de", "da", "do", "dos", "das"];
    const sobrenomesBase = [
      "Silva", "Souza", "Oliveira", "Pereira", "Lima", "Costa", "Santos",
      "Martins", "Ferreira", "Nascimento", "Mendes", "Cardoso", "Ramos",
      "Moreira", "Azevedo", "Gonçalves", "Barbosa", "Teixeira", "Rocha", "Campos",
      "Carvalho", "Monteiro", "Araújo", "Andrade", "Correia", "Moraes"
    ];
    const segundosNomes = [
      "Augusto", "Henrique", "Gabriel", "Antônio", "Eduardo",
      "Beatriz", "Fernanda", "Camila", "Letícia", "Rafaela",
      "Sofia", "Miguel", "Catarina", "Rodrigo", "Mateus"
    ];
    const nomesGerados = [];
    for (let i = 0; i < quantidade; i++) {
      const sobrenome1 = sobrenomesBase[Math.floor(Math.random() * sobrenomesBase.length)];
      const sobrenome2 = Math.random() < 0.4 ? sobrenomesBase[Math.floor(Math.random() * sobrenomesBase.length)] : null;
      const conector = Math.random() < 0.3 ? conectores[Math.floor(Math.random() * conectores.length)] : null;
      const segundoNome = Math.random() < 0.5 ? segundosNomes[Math.floor(Math.random() * segundosNomes.length)] : null;
      let nomeCompleto = base;
      if (segundoNome) nomeCompleto += ` ${segundoNome}`;
      nomeCompleto += ` ${sobrenome1}`;
      if (conector && sobrenome2) nomeCompleto += ` ${conector} ${sobrenome2}`;
      else if (sobrenome2) nomeCompleto += ` ${sobrenome2}`;
      nomesGerados.push(nomeCompleto);
    }
    return nomesGerados;
}


function searchUseriClick(name: string) {
  usersLoadingClick.value = true;
  setTimeout(() => {
      usersLoadingClick.value = false;
      const names = nameGenereation(name, 10);
      usersOptionsClick.value = names.map(n => ({ label: n, value: n.toLowerCase().replace(/\s+/g, '_') }))
  }, 1500);
}
// Funções de busca simulada
function searchUsers(name: string) {
  usersLoading.value = true;
  setTimeout(() => {
      usersLoading.value = false;
      const names = nameGenereation(name, 10);
      usersOptions.value = names.map(n => ({ label: n, value: n.toLowerCase().replace(/\s+/g, '_') }));
  }, 1500);
}
function searchUsersMultiple(name: string) {
  usersLoadingMultiple.value = true;
  setTimeout(() => {
      usersLoadingMultiple.value = false;
      const names = nameGenereation(name, 10);
      usersOptionsMultiple.value = names.map(n => ({ label: n, value: n.toLowerCase().replace(/\s+/g, '_') }));
  }, 1500);
}
function searchUsersKeep(name: string) {
  usersLoadingKeep.value = true;
  setTimeout(() => {
      usersLoadingKeep.value = false;
      const names = nameGenereation(name, 10);
      usersOptionsKeep.value = names.map(n => ({ label: n, value: n.toLowerCase().replace(/\s+/g, '_') }));
  }, 1500);
}
function searchUsersCustom(name: string) {
  usersLoadingCustom.value = true;
  setTimeout(() => {
      usersLoadingCustom.value = false;
      const names = nameGenereation(name, 10);
      usersOptionsCustom.value = names.map(n => ({ label: n, value: n.toLowerCase().replace(/\s+/g, '_') }));
  }, 1500);
}
function searchUseriIfinityScroll(name: string) {
  usersLoadingIfinityScroll.value = true;
  setTimeout(() => {
      usersLoadingIfinityScroll.value = false;
      const names = nameGenereation(name, 10);
      usersOptionsIfinityScroll.value = [...usersOptionsIfinityScroll.value, ...names.map(n => ({ label: n, value: n.toLowerCase().replace(/\s+/g, '_') }))];
  }, 1500);
}
</script>

<style scoped>
.docs-select {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
  font-family: 'Segoe UI', Arial, sans-serif;
  width: calc(100vw - 220px);
}
.explanation {
  width: 400px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
  width: calc(50vw - 110px);
}
.example {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
  width: calc(50vw - 110px);
}
h1, h2, h3 {
  color: #35495e;
  margin-top: 10px;
  font-weight: 700;
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
.selects-demo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%
    }

.selects-demo-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
}

.selects-demo-options button {
    background: #2084E5;
    color: white;
    border: none;
    padding: 6px 1px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9em;
    width: 83px;
    height: 26px;
}

.item-select {
    width: 400px;
}
.table-auto {
  border-spacing: 0;
  border: 1px solid #ccc;
}
th, td {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
th {
  background-color: #f9f9f9;
  font-weight: 600;
}
td {
  background-color: #fff;
}
.font-mono {
  font-family: monospace;
}
.font-medium {
  font-weight: 600;
  font-size: 14px;
}
.code-block {
  background: #1e1e1e;       /* fundo escuro */
  color: #d4d4d4;            /* cor do texto */
  padding: 1.5rem;           /* espaço interno */
  border-radius: 8px;        /* cantos arredondados */
  margin-top: 1rem;          /* espaço acima */
  margin-bottom: 1rem;       /* espaço abaixo */
  overflow-x: auto;          /* scroll horizontal se necessário */
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  line-height: 1.6;          /* aumenta espaço entre linhas */
  white-space: pre-wrap;     /* mantém quebras de linha e espaços */
  max-height: 400px;
}
</style>