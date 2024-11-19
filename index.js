import cesar from "./cesar.js";

let mensagem = "teste a z"
let mensagemcrip = "nada"

console.log("Mensagem Original: ")
console.log(mensagem)

console.log("Mensagem Criptografada: ")
mensagemcrip = cesar.criptografia(mensagem,3,cesar.cifraLetra)
console.log(mensagemcrip)
console.log("Mensagem Descriptografada: ")
console.log(cesar.criptografia(mensagemcrip,3,cesar.decifraLetra))
