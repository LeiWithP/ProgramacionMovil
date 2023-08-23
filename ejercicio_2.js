function generateCombinations(array) {
    const result = [[]];
    
    array.forEach(item => {
        //const currentLength = result.length;
        const newCombinations = result.map(combination => [...combination, item]);
        result.push(...newCombinations);
    });
    
    return result;
}

// Ejemplo de uso
const inputArray = ['a', 'b', 'c'];
const combinations = generateCombinations(inputArray);
console.log(combinations);
