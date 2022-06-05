const inputTexto = document.querySelector(".textarea");
const mensaje = document.querySelector(".textarea2");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;

}

function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i ++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        

        }

    

    }

    return stringParaEncriptar;
   

}