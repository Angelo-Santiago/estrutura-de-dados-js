function Stack() {
    var items = []
    //adiciona um item antes do primero elemento
    this.unshift = function (element){
        items.unshift(element)
    }

    //adiciona um item depois do ultimo elemento 
    this.push = function(element){
        items.push(element)
    }

    //remove o ultimo elemento
    this.pop = function() {
        return items.pop()
    }

    //O peek retorna sempre o próximo elemento do indice 
    this.peek = function() {
        return items[items.length -1]
    }
    //verifica se a lista "pilha" está vazia ou não
    this.isEmpty = function() {
        return items.length === 0 
    }
    //Limpa o array "pilha"
    this.clear = function (){
        items = []
    }

    // verifica o tamanho do array
    this.size = function() {
        return items.length
    }
    // implementa  a funcionalidade do console.log, sem precisar chamá-lo diretamente
    this.print = function() {
        console.log(items.toString())
    }
}

var pilha  = new Stack()

console.log(pilha.isEmpty())

pilha.push(5)
pilha.print()
pilha.push(10)
pilha.print()
pilha.push(15)
pilha.print()
pilha.push(20)
pilha.print()


console.log(pilha.size())

pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()

console.log(pilha.isEmpty())

//LIFO
// Last in first Out