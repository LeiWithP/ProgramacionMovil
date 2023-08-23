function camelToSnake(camel) {
    let snakeCase = camel.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    let words = camel.match(/[A-Z][a-z]*/g);
    
    return {
        palabras: words.length,
        snake_case: snakeCase
    };
}

const snake = "MateriaProgramaciónMóvil";
const result = camelToSnake(snake);
console.log(result);
