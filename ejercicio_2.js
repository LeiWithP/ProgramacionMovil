function generateCombinations(array) {
    const result = [];

    function generator(start, combination) {
        result.push([...combination]);
        
        for (let i = start; i < array.length; i++) {
            combination.push(array[i]);
            generator(i + 1, combination);
            combination.pop();
        }
    }

    generator(0, []);

    return result;
}

// Ejemplo de uso
const input = ['a', 'b', 'c', 'd', 'e'];
const combinations = generateCombinations(input);
console.log(combinations);
