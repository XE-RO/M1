'use strict';

function BinarioADecimal(num) {
   let invertido=num.toString().split('').reverse()

   let resultado=0
   for(let i=0 ; i<invertido.length ; i++){
      resultado+=Math.pow(2,i)*invertido[i]
   }
   return resultado
}
//console.log(BinarioADecimal(10000))

function DecimalABinario(num) {
   let numero=[]

   while(num>0){
      numero.unshift(num%2)
      num=Math.floor(num/2)
   }
 return numero.join("")
 
}
//console.log(DecimalABinario(36))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
