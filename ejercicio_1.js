function camelToSnake(camel) {
    let snakeCase = camel.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    let words = camel.match(/[A-Z][a-z]*/g);
    
    return {
        palabras: words.length,
        snake_case: snakeCase
    };
}

const input = "MateriaProgramaciónMóvil";
const result = camelToSnake(input);
console.log(result);
