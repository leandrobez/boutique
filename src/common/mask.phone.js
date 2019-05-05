let trava = false;
let iCount1, iCount2, iTexto;
/*
iCount1 --> Comprimento da máscara no evento onkeydown (Referência para filtrar teclas de aderência!!!);
iCount2 --> Comprimento da máscara no evento onkeyup;
iTexto --> Texto atual na máscara, antes da função mascara() ser chamada com onkeyup;
nChar --> Variável controle;
*/

//Função chamada a partir do evento onkeydown;
export const MaskDown = e => {
  if (e != undefined) {
    if (trava == false) {
      //Armazenando a frase em uma variável, para ser utilizada durante o backspace;
      iTexto = e.value;

      //Comprimento da máscara no evento onkeydown;
      iCount1 = e.value.length;
      //alert(iCount1);
      //Adicionando trava para evitar possível tecla de aderência:
      trava = true;
    }
  }
};

//Função chamada a partir do evento onkeyup;
export const MaskUp = (e, msc) => {
  if (e != undefined) {
    //Comprimento da máscara no evento onkeyup;
    iCount2 = e.value.length;
    //Verificando se o usuário inseriu novos caracteres, ou se apertou a tecla DELETE/BACKSPACE:
    // -------------------- Caso 1: Inserção de novos caracteres --------------------
    //Quantidade caracteres final (onkeydown) maior que a inicial (onkeyup) -> Houve inserção de caracteres;
    if (iCount2 > iCount1) {
      //Pequena correção para bug que estava ocorrendo com navegação com tecla TAB;
      //A tecla TAB não dispara nem keydown, fazendo com que iCount1 seja 0 e iCount2 o valor normal;
      //Por isso, vamos corrigir (Agradecimentos ao  -rafael- pela observação do bug) :-)
      if (iCount2 - iCount1 > 1) {
        iCount1 = iCount2 - 1;
        e.select;
      } else {
        //Recortando a máscara para filtrar possível tecla de aderência:
        e.value = e.value.substr(0, iCount1 + 1);
        //Verificando se o comprimento da máscara não é excedido;
        if (e.value.length > msc.length) {
          e.value = e.value.substr(0, msc.length);
        }
        //Antes de mais nada, verificar se a máscara já inicia com caracteres especiais e já inserí-los;
        if (iCount1 == 0) {
          //Contando o número de caracteres especiais (se porventura existirem):
          if (msc.substring(iCount1, iCount1 + 1) != '#') {
            nChar = 1;
            //Contar as ocorrências de símbolos especiais, diferentes de: #, que iniciam a máscara:
            while (
              msc.substring(iCount1 + nChar, iCount1 + nChar + 1) != '#' &&
              nChar <= msc.length
            ) {
              nChar++;
            }
            e.value =
              msc.substring(0, iCount1 + nChar) +
              e.value.substr(0, iCount1 + 1);
          }
          //Se não iniciar com caracteres especiais:
        } else {
          //Verificando se existe caracteres especiais à frente do último caractere inserido:
          if (msc.substring(iCount1 + 1, iCount1 + 2) != '#') {
            var nChar = 1;
            //Contar as ocorrências de símbolos especiais que sucedem o último caractere inserido;
            while (
              msc.substring(iCount1 + nChar, iCount1 + nChar + 1) != '#' &&
              nChar <= msc.length
            ) {
              nChar++;
            }
            e.value =
              e.value.substr(0, iCount1 + 1) +
              msc.substring(iCount1 + 1, iCount1 + nChar);
          }
        }
      }
      // -------------------- Caso 2: Deleção de caracteres | Backspace --------------------
    } else {
      //Verificando se o caractere apagado é um símbolo especial ou não:
      if (msc.substr(iCount2, 1) != '#') {
        nChar = 1;
        //alert(msc.substr(iCount2,1));
        //Looping para percorrer os caracteres especiais retrocedentes:
        while (msc.substr(iCount1 - nChar, 1) != '#' && nChar <= iCount1) {
          alert(msc.substr(iCount1 - nChar, 1) + ' -- ' + nChar);
          nChar++;
        }
        //Apagando os caracteres retrocedentes, conforme o valor atribuído a nChar:
        e.value = iTexto.substr(0, iCount2 - nChar + 1);
      } /*else {
	//Recortando a máscara para filtrar possível tecla de aderência: Default: desabilitado.
	objCampoMascara.value = iTexto.substr(0,iCount1-1);
	}*/
    }
    //Liberando a trava para possibilitar novo evento onkeydown:
    trava = false;
  }
};
