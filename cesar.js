let alfabeto = "abcdefghijklmnopqrstuvwxyz"
let letra
let novaletra

function criptografia(mensagem,chave,converter){
    for(let i = 0; i < mensagem.length; i++ ){
        if(mensagem[i] != " "){
            letra = mensagem[i]
            novaletra = converter(letra,chave)
            //mensagem[i] = novaletra
            console.log(novaletra)
        }else{
            novaletra = " "
            //mensagem[i] = novaletra
            console.log(novaletra)
        }
    }
    return mensagem
}

function cifraLetra(letra,chave){
    for(let i = 0; i < 26; i++ ){
        if(letra == alfabeto[i]){
            if(i+chave > 26){
                chave = i+chave - 26
                i = 0
            }
            letra = alfabeto[i+chave]
            return letra
        }
    }
}

function decifraLetra(letra,chave){
    for(let i = 0; i < 26 ; i++ ){
        if(letra == alfabeto[i]){
            if(i-chave < 0){
                chave = 26 - chave
                i = 26
            }
            letra = alfabeto[i-chave]
            return letra
        }
    }
}

export default {criptografia,cifraLetra,decifraLetra}