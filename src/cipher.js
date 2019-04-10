window.cipher = {
  encode: (offset,toEncode) => {

    for ( let i= 0; i < toEncode.lenght; i++) {
        let toAscii = toEncode.charCodeAt (i) ;
        //console.loge(toAscii);
        if (toAscii>=65 && toAscii<=90 ){
let toUnicode = String.fromCharCode((toAscii- 65 + offset)%26 + 65);
result += toUnicode;
        }else if (toAscii === 32) {
            toAscii = (( toAscii - 32 + offset)%1 + 32);
            toUnicode1 = String.fromCharCode( toAscii);
            resultadocifrado += toUnicode;
        }

