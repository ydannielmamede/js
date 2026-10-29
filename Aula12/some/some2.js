const usuarios = [
    {nome: "Ana", perfil: "usuario"},
    {nome: "Carlos", perfil: "usuario"},
    {nome: "Marina", perfil: "administrador"},
]

const existeAdmin = usuarios.some(usuario => usuario.perfil === "administrador")

console.log(existeAdmin);
