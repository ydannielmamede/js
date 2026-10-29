const usuarios = [
    {nome:"Ana", email:"ana@email.com"},
    {nome:"Carlos", email:"carlos@email.com"},
    {nome:"Marina", email:""},
]

const emailCadastrado = usuarios.every(usuario => usuario.email.trim() !== "")

console.log(emailCadastrado);
