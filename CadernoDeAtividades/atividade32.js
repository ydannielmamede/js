// Atividade 32 — Função de validação
// Uma aplicação de cadastro precisa verificar se um nome é válido.
// Crie uma função chamada validarNome(nome) que retorne:
// • true, se o nome contiver pelo menos 3 caracteres após a remoção dos espaços das
// extremidades.
// • false, caso contrário.
// Depois, utilize a função dentro de uma estrutura condicional para informar se o cadastro pode
// continuar.
// Teste os valores "Ana", " João ", "Li" e "".
// Dica: pesquise como funciona o método trim() de strings.

function validarNome(nome) {
  if (nome.length >= 3) {
    return true
  } else {
    return false
  }
}

const nome = validarNome("li").trim()

if (nome === true) {
  console.log("Pode continuar o cadastro!")
} else {
  console.log("Nao pode continuar o cadastro")
}
