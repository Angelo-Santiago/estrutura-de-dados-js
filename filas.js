function Queue() {
    var items = []

    this.enqueue = function (element){
        //Adicionar novo item

        items.push(element)
    }
    this.dequeue = function (){
        //remove um item

        return items.shift()
    }

    this.front = function() {
        // retorna o primeiro elemento da fila
        return items[0]
    }
    this.isEmpty = function (){
        //Verificar se a fila está vazia ou não
        return items.length === 0
    }
    this.size = function (){
        // retorna o tamanho da fila
        return items.length
    }

    this.print = function(){
        //Imprimir a fila no console   
        console.log(items.toString())
    }
}

let filas = new Queue();

filas.enqueue(20)
filas.print()
filas.enqueue(21)
filas.print()
filas.enqueue(22)
filas.print()
filas.enqueue(23)
filas.print()

filas.dequeue()
filas.print()
filas.dequeue()
filas.print()
filas.dequeue()
filas.print()
filas.dequeue()
filas.print()

// ou podemos utilizar laços de repetição para simplificar

let x = 0
while( x < 4){
    filas.enqueue(20 + x)
    filas.print()
    x++
}
for(let y = 0; y < 4; y++){
    filas.dequeue()
    filas.print()
}