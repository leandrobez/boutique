let trava = false;
let iCount1, iCount2, iTexto;

const mask = {
  maskDonw: e => {
    if (e != undefined) {
      if (trava == false) {
        iTexto = e.value;
        iCount1 = e.value.length;
        trava = true;
      }
    }
  },
  maskUp: (e, msc) => {
    if (e != undefined) {
      iCount2 = e.value.length;

      if (iCount2 > iCount1) {
        if (iCount2 - iCount1 > 1) {
          iCount1 = iCount2 - 1;
          e.select;
        } else {
          e.value = e.value.substr(0, iCount1 + 1);
          if (e.value.length > msc.length) {
            e.value = e.value.substr(0, msc.length);
          }
          if (iCount1 == 0) {
            if (msc.substring(iCount1, iCount1 + 1) != '#') {
              nChar = 1;
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
          } else {
            if (msc.substring(iCount1 + 1, iCount1 + 2) != '#') {
              var nChar = 1;
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
      } else {
        //console.log('teste', iCount2, iCount1, msc);
        if (msc.substr(iCount2, 1) != '#') {
          nChar = 1;
          while (msc.substr(iCount1 - nChar, 1) != '#' && nChar <= iCount1) {
            nChar++;
          }
          e.value = iTexto.substr(0, iCount2 - nChar + 1);
        } /*else {
    //Recortando a máscara para filtrar possível tecla de aderência: Default: desabilitado.
    objCampoMascara.value = iTexto.substr(0,iCount1-1);
    }*/
      }
      trava = false;
    }
  }
};

module.exports.mDown = mask.maskDonw;
module.exports.mUp = mask.maskUp;
