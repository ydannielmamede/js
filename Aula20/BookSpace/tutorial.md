# Tutorial — Integrando dados JSON no BookSpace

Este tutorial explica como os dados do arquivo `dados/livros.json` foram integrados à página `index.html` usando JavaScript.

## 1. Estrutura do projeto

```text
BookSpace/
├── dados/
│   └── livros.json
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
└── tutorial.md
```

Cada pasta possui uma responsabilidade:

- `index.html`: estrutura da página.
- `css/style.css`: aparência da página.
- `js/script.js`: dados e comportamento da página.
- `dados/livros.json`: banco de dados simples em formato JSON.

## 2. Estrutura dos dados JSON

O arquivo `dados/livros.json` é uma lista de objetos. Cada objeto representa um livro:

```json
{
    "id": 1,
    "titulo": "Código Limpo",
    "autor": "Robert C. Martin",
    "categoria": "Programação",
    "ano": 2008,
    "disponivel": true
}
```

Os principais campos são:

- `id`: identificação do livro.
- `titulo`: nome do livro.
- `autor`: pessoa que escreveu o livro.
- `categoria`: tipo de livro.
- `ano`: ano de publicação.
- `disponivel`: indica se o livro está disponível.

## 3. Conectar o JavaScript ao HTML

No `<head>` do `index.html`, o arquivo JavaScript foi conectado com:

```html
<script src="js/script.js" defer></script>
```

O atributo `defer` faz o JavaScript aguardar o HTML ser carregado antes de ser executado.

O caminho `js/script.js` é relativo ao `index.html`, portanto não depende do nome da pasta do projeto.

## 4. Esperar o carregamento da página

No início do `script.js`, foi utilizado um evento:

```javascript
document.addEventListener("DOMContentLoaded", () => {
    // Código da página
});
```

Esse evento informa ao navegador que o código deve começar depois que os elementos HTML forem encontrados.

## 5. Encontrar elementos do HTML

Os elementos importantes são encontrados pelo atributo `id`:

```javascript
const listaLivros = document.getElementById("listaLivros");
const campoPesquisa = document.getElementById("campoPesquisa");
const filtroCategoria = document.getElementById("filtroCategoria");
```

Essas constantes permitem que o JavaScript leia valores e insira conteúdo na página.

## 6. Guardar os livros em uma variável

Os dados carregados ficam armazenados em uma variável:

```javascript
let livros = [];
```

Ela começa vazia porque os dados serão recebidos pelo arquivo JSON.

## 7. Carregar o arquivo JSON

A leitura é feita pela função `fetch`:

```javascript
async function carregarLivros() {
    const resposta = await fetch("dados/livros.json");
    livros = await resposta.json();
}
```

### `fetch`

`fetch` solicita o arquivo JSON ao servidor.

### `async`

Indica que a função pode aguardar operações assíncronas.

### `await`

Faz a função aguardar a conclusão da operação.

### `json()`

Converte o texto recebido em dados JavaScript utilizáveis.

O caminho `dados/livros.json` é relativo ao `index.html`.

## 8. Tratar erros

Uma operação de leitura pode falhar por vários motivos, como arquivo não encontrado ou servidor desligado.

Por isso, o código utiliza `try/catch`:

```javascript
try {
    const resposta = await fetch("dados/livros.json");

    if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    livros = await resposta.json();
} catch (erro) {
    console.error("Não foi possível carregar os livros:", erro);
}
```

`try` contém o código que pode gerar erro. `catch` executa uma mensagem alternativa caso o erro aconteça.

A propriedade `resposta.ok` verifica se a resposta HTTP ocorreu corretamente.

## 9. Criar um card para cada livro

A função `criarCardLivro` transforma um objeto do JSON em elementos HTML:

```javascript
function criarCardLivro(livro) {
    const card = document.createElement("article");
    card.className = "card";

    const titulo = document.createElement("h3");
    titulo.textContent = livro.titulo;

    card.append(titulo);
    return card;
}
```

Cada elemento é criado separadamente:

- `<article>`: container do card.
- `<h3>`: título.
- `<p>`: autor, categoria, ano e disponibilidade.
- `<button>`: emprestar ou devolver.

O uso de `textContent` evita interpretar os textos como HTML.

## 10. Inserir os cards na página

A função `renderizarLivros` limpa a lista atual e cria novos cards:

```javascript
function renderizarLivros(lista) {
    listaLivros.replaceChildren();

    const fragmento = document.createDocumentFragment();

    lista.forEach((livro) => {
        fragmento.appendChild(criarCardLivro(livro));
    });

    listaLivros.appendChild(fragmento);
}
```

### `replaceChildren`

Remove os cards antigos antes de inserir os novos.

### `DocumentFragment`

É usado como uma área temporária para montar vários elementos antes de adicioná-los ao HTML.

### `forEach`

Percorre todos os livros da lista enviada à função.

### `appendChild`

Adiciona um elemento dentro de outro elemento.

## 11. Atualizar os indicadores

Os indicadores são atualizados com o método `filter`:

```javascript
function atualizarIndicadores() {
    const disponiveis = livros.filter((livro) => {
        return livro.disponivel;
    }).length;

    totalLivros.textContent = livros.length;
    totalDisponiveis.textContent = disponiveis;
    totalEmprestados.textContent = livros.length - disponiveis;
}
```

`filter` cria uma nova lista contendo apenas os livros disponíveis.

A propriedade `length` informa quantos elementos existem nessa nova lista.

## 12. Implementar a pesquisa

Cada vez que o usuário digita no campo de pesquisa, o evento `input` executa a função de filtro:

```javascript
campoPesquisa.addEventListener("input", aplicarFiltros);
```

Dentro da função:

```javascript
const texto = campoPesquisa.value.trim().toLowerCase();
```

- `value`: pega o texto digitado.
- `trim`: remove espaços das extremidades.
- `toLowerCase`: transforma o texto em letras minúsculas.

Depois, o título e o autor são comparados:

```javascript
livro.titulo.toLowerCase().includes(texto)
livro.autor.toLowerCase().includes(texto)
```

`includes` verifica se o texto pesquisado existe dentro do título ou do autor.

## 13. Implementar o filtro por categoria

O elemento `<select>` possui o evento `change`:

```javascript
filtroCategoria.addEventListener("change", aplicarFiltros);
```

Durante a filtragem:

```javascript
const categoriaCorrespondente =
    categoria === "" || livro.categoria === categoria;
```

A opção vazia representa todas as categorias.

## 14. Combinar pesquisa e categoria

A função `aplicarFiltros` executa os dois filtros ao mesmo tempo:

```javascript
const livrosFiltrados = livros.filter((livro) => {
    const textoCorrespondente =
        livro.titulo.toLowerCase().includes(texto) ||
        livro.autor.toLowerCase().includes(texto);

    const categoriaCorrespondente =
        categoria === "" || livro.categoria === categoria;

    return textoCorrespondente && categoriaCorrespondente;
});
```

Os dois resultados precisam ser verdadeiros:

- `&&`: exige que o texto corresponda.
- `&&`: exige que a categoria corresponda.

Depois, os resultados são enviados para a renderização:

```javascript
renderizarLivros(livrosFiltrados);
```

## 15. Emprestar e devolver livros

Cada botão recebe um evento `click`:

```javascript
botao.addEventListener("click", () => {
    livro.disponivel = !livro.disponivel;

    aplicarFiltros();
    atualizarIndicadores();
});
```

O operador `!` inverte o valor lógico:

- `true` vira `false`.
- `false` vira `true`.

Assim:

- Quando disponível, emprestar muda o valor para `false`.
- Quando emprestado, devolver muda o valor para `true`.

Os indicadores e os cards são atualizados depois da mudança.

## 16. Alterar o tema

O botão usa `classList.toggle`:

```javascript
document.body.classList.toggle("tema-escuro");
```

Essa instrução:

- Adiciona `tema-escuro` se a classe não existir.
- Remove `tema-escuro` se ela já existir.

A aparência da classe é definida no CSS:

```css
.tema-escuro {
    background-color: #0f172a;
    color: white;
}
```

## 17. Cadastrar um novo livro

Ao clicar no botão de cadastro:

1. O código pega os valores dos campos.
2. Verifica se título, autor e ano foram preenchidos.
3. Cria um novo objeto.
4. Adiciona o objeto à variável `livros`.
5. Atualiza os cards e os indicadores.

Exemplo do objeto criado:

```javascript
const novoLivro = {
    id: Date.now(),
    titulo: titulo.value.trim(),
    autor: autor.value.trim(),
    categoria: categoria.value,
    ano: Number(ano.value),
    disponivel: true
};
```

`Date.now()` gera um número baseado na hora atual e pode ser usado como identificador temporário.

`Number()` converte o ano digitado em número.

A adição ao array é feita com:

```javascript
livros.push(novoLivro);
```

Os campos são depois apagados:

```javascript
titulo.value = "";
autor.value = "";
ano.value = "";
```

## 18. Exibir mensagens ao usuário

A função `mostrarMensagem` altera o texto e a classe da mensagem:

```javascript
function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = tipo;
}
```

O HTML possui classes CSS para sucesso e erro:

```css
.sucesso {
    background-color: #dcfce7;
    color: #166534;
}

.erro {
    background-color: #fee2e2;
    color: #991b1b;
}
```

## 19. Boas práticas aplicadas

### Separação de responsabilidades

- HTML: estrutura.
- CSS: aparência.
- JavaScript: comportamento e dados.

### Uso de uma variável central

Todos os livros ficam em `livros`, evitando várias fontes de dados diferentes.

### Uso de funções específicas

Cada função possui uma responsabilidade principal:

- `carregarLivros`: busca os dados.
- `atualizarIndicadores`: calcula os totais.
- `criarCardLivro`: cria o card de um livro.
- `renderizarLivros`: mostra os cards.
- `aplicarFiltros`: filtra os dados.
- `mostrarMensagem`: apresenta mensagens.

### Uso de `textContent`

É preferível para inserir texto fornecido pelo usuário ou por dados externos, pois não interpreta o texto como HTML.

### Uso de `replaceChildren`

Evita acumular elementos antigos na página.

### Uso de `try/catch`

Permite mostrar uma mensagem clara caso o carregamento falhe.

### Uso de nomes claros

Nomes como `livrosFiltrados`, `atualizarIndicadores` e `mostrarMensagem` facilitam o entendimento do código.

## 20. Executar o projeto corretamente

Não abra o arquivo diretamente como `file:///...` ao usar `fetch`. Os navegadores podem bloquear a leitura de arquivos locais.

Inicie um servidor local a partir da pasta `js`:

```powershell
cd "C:\Users\60011146.EDU\Desktop\js"
python -m http.server 5500
```

Depois, acesse:

```text
http://localhost:5500/Aula20/BookSpace/index.html
```

Mantenha o servidor aberto enquanto utiliza a página.

## 21. Fluxo completo da aplicação

1. O navegador carrega o `index.html`.
2. O atributo `defer` carrega o `script.js`.
3. O evento `DOMContentLoaded` inicia o JavaScript.
4. O JavaScript solicita `dados/livros.json` com `fetch`.
5. Os dados são convertidos por `json()`.
6. Os indicadores são calculados.
7. Os livros são transformados em cards.
8. O usuário pode pesquisar e filtrar.
9. O usuário pode emprestar, devolver ou cadastrar livros.
10. O HTML é atualizado diretamente pelo JavaScript.
