document.addEventListener('DOMContentLoaded', function () {

    function isPrimo(numero) {
        if (numero < 2) {
          return false;
        }
      
        for (let i = 2; i <= Math.sqrt(numero); i++) {
          if (numero % i === 0) {
            return false;
          }
        }
      
        return true;
    }

    let num = parseInt(prompt('Insira um numero: '));

    if(typeof num == 'number' && num >= 1){
        let s = isPrimo(num);
        if(s == true){
            alert('é primo');
        }else{
            alert('nao primo');
        }
    }

});