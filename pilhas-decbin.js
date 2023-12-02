function dec2Bin(decNumber){
    var restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0){ // 23
        rest = Math.floor(decNumber % 2) // 1
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2) //0
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString()
    }

    return binaryString
}

console.log(dec2Bin(23))