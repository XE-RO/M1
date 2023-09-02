'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head=null
}
function Node(value) {
  this.value=value
  this.next=null
}

//            AGREGAR ELEMENTOS

LinkedList.prototype.add=function(arg){
  let current=this.head
  let node=new Node(arg)
  if(this.head===null){
    this.head=node
  }else{
    while(current.next!=null){
      current=current.next
    }
    current.next=node
  }
}

//        ELIMINAR ULTIMO ELEMENTO

LinkedList.prototype.remove=function(){
  let current=this.head
  if(this.head===null)return null
  if(this.head.next===null){
    this.head=null
    return current.value
  }
    while(current.next.next!=null){
      current=current.next
    }
    let aux=current.next
    current.next=null
    return aux.value
  }





  LinkedList.prototype.search=function(arg){
  let current=this.head
  if(typeof arg ==='function'){
    while(current!=null){
      if(arg(current.value)){
        return current.value
      }
      current=current.next
    }
  }
  while(current){
    if(current.value===arg){
      return current.value
    }
    current=current.next
  }
  return null
}


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.table=[]
  this.numBuckets=35
}

HashTable.prototype.hash=function(key){
  let hash=0
  for (let i = 0; i < key.length; i++) {
    hash+=key.charCodeAt(i)
  }
  return hash % this.numBuckets
}

HashTable.prototype.set=function(key,value){
  if(typeof key !== 'string')throw TypeError('Keys must be strings')
  let index=this.hash(key)
  if(this.table[index]==null){
    this.table[index]={}
  }
  this.table[index][key]=value //se añade en la posicion del array (el bucket) una propiedad key y su valor pasado por parametro
}

HashTable.prototype.get=function(key){
  let index=this.hash(key)
  if(this.table[index]!=undefined){ //this.table[buscarlugar]---> preguntando si hay algo
    return this.table[index][key]                               //retorna el valor que pasaron en key
  }

}
HashTable.prototype.hasKey=function(key){
  let index=this.hash(key)
  if(this.table[index][key]){
    return true
  }else{
    return false
  }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
