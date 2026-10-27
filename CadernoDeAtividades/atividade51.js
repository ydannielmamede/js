// Atividade 51 — A propriedade inexistente
let dispositivo = {
 nome: "Impressora",
 fabricante: "Epson",
 funcionando: true
};
if (dispositivo.funcionando === true) {
 console.log("Equipamento funcionando");
} else {
 console.log("Verificar equipamento");
}
// Enunciado: o programa deveria consultar a situação do equipamento, mas acessa uma
// propriedade incorreta.
// Identifique o erro, corrija o código e explique como a linguagem se comporta quando
// tentamos acessar uma propriedade que não existe no objeto.=> Uma propriedade inexistente retorna undefined.
