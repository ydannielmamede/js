// Aguarda o carregamento completo da página antes de procurar elementos do HTML.
document.addEventListener("DOMContentLoaded", () => {
    const listaLivros = document.getElementById("listaLivros");
    const campoPesquisa = document.getElementById("campoPesquisa");
    const filtroCategoria = document.getElementById("filtroCategoria");
    const totalLivros = document.getElementById("totalLivros");
    const totalDisponiveis = document.getElementById("totalDisponiveis");
    const totalEmprestados = document.getElementById("totalEmprestados");
    const mensagem = document.getElementById("mensagem");
    const btnTema = document.getElementById("btnTema");
    const btnCadastrar = document.getElementById("btnCadastrar");

    let livros = [];

    // Faz a requisição ao arquivo JSON e converte a resposta para JavaScript.
    async function carregarLivros() {
        try {
            const resposta = await fetch("dados/livros.json");

            if (!resposta.ok) {
                throw new Error(`Erro HTTP: ${resposta.status}`);
            }

            livros = await resposta.json();
            atualizarIndicadores();
            renderizarLivros(livros);
            mostrarMensagem("Livros carregados com sucesso!", "sucesso");
        } catch (erro) {
            console.error("Não foi possível carregar os livros:", erro);
            mostrarMensagem("Não foi possível carregar os livros. Execute a página por um servidor local.", "erro");
        }
    }

    function atualizarIndicadores() {
        const disponiveis = livros.filter((livro) => livro.disponivel).length;

        totalLivros.textContent = livros.length;
        totalDisponiveis.textContent = disponiveis;
        totalEmprestados.textContent = livros.length - disponiveis;
    }

    function criarCardLivro(livro) {
        const card = document.createElement("article");
        card.className = "card";
        card.dataset.id = livro.id;

        if (!livro.disponivel) {
            card.classList.add("emprestado");
        }

        const capa = document.createElement("div");
        capa.className = "capa";
        capa.textContent = "📖";

        const titulo = document.createElement("h3");
        titulo.textContent = livro.titulo;

        const autor = document.createElement("p");
        autor.textContent = `Autor: ${livro.autor}`;

        const detalhes = document.createElement("p");
        detalhes.textContent = `${livro.categoria} • ${livro.ano}`;

        const status = document.createElement("p");
        status.className = "status";
        status.textContent = livro.disponivel ? "Disponível" : "Emprestado";

        const botao = document.createElement("button");
        botao.type = "button";
        botao.textContent = livro.disponivel ? "Emprestar" : "Devolver";

        botao.addEventListener("click", () => {
            livro.disponivel = !livro.disponivel;
            aplicarFiltros();
            atualizarIndicadores();

            const acao = livro.disponivel ? "devolvido" : "emprestado";
            mostrarMensagem(`“${livro.titulo}” foi ${acao}.`, "sucesso");
        });

        card.append(capa, titulo, autor, detalhes, status, botao);
        return card;
    }

    function renderizarLivros(lista) {
        listaLivros.replaceChildren();

        if (lista.length === 0) {
            mostrarMensagem("Nenhum livro corresponde à pesquisa.", "erro");
            return;
        }

        const fragmento = document.createDocumentFragment();
        lista.forEach((livro) => fragmento.appendChild(criarCardLivro(livro)));
        listaLivros.appendChild(fragmento);

        mostrarMensagem(`${lista.length} livro(s) encontrado(s).`, "sucesso");
    }

    function aplicarFiltros() {
        const texto = campoPesquisa.value.trim().toLowerCase();
        const categoria = filtroCategoria.value;

        const livrosFiltrados = livros.filter((livro) => {
            const textoCorrespondente =
                livro.titulo.toLowerCase().includes(texto) ||
                livro.autor.toLowerCase().includes(texto);

            const categoriaCorrespondente =
                categoria === "" || livro.categoria === categoria;

            return textoCorrespondente && categoriaCorrespondente;
        });

        renderizarLivros(livrosFiltrados);
    }

    function mostrarMensagem(texto, tipo) {
        mensagem.textContent = texto;
        mensagem.className = tipo;
    }

    campoPesquisa.addEventListener("input", aplicarFiltros);
    filtroCategoria.addEventListener("change", aplicarFiltros);

    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("tema-escuro");
        const modoEscuro = document.body.classList.contains("tema-escuro");
        btnTema.textContent = modoEscuro ? "Alterar para tema claro" : "Alterar tema";
    });

    btnCadastrar.addEventListener("click", () => {
        const titulo = document.getElementById("titulo");
        const autor = document.getElementById("autor");
        const categoria = document.getElementById("categoria");
        const ano = document.getElementById("ano");

        if (!titulo.value.trim() || !autor.value.trim() || !ano.value) {
            mostrarMensagem("Preencha título, autor e ano antes de cadastrar.", "erro");
            return;
        }

        const novoLivro = {
            id: Date.now(),
            titulo: titulo.value.trim(),
            autor: autor.value.trim(),
            categoria: categoria.value,
            ano: Number(ano.value),
            disponivel: true
        };

        livros.push(novoLivro);
        aplicarFiltros();
        atualizarIndicadores();

        titulo.value = "";
        autor.value = "";
        ano.value = "";
        mostrarMensagem(`“${novoLivro.titulo}” foi cadastrado.`, "sucesso");
    });

    carregarLivros();
});