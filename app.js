//Ejercicio 1

const mostrarDatos = (nombre, apellido, edad) =>{
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
}
console.log(mostrarDatos('Juan', 'Santiago', 30));

//Ejercicio 2

const numeros = [2, 4, 8, 1, 9];
let sumaCubos = numeros.reduce((resultado, numero)=>{
    return resultado += Math.pow(numero, 3);
}, 0);
console.log(sumaCubos);

//Ejercicio 3

const tipoDato = (dato) => {
    return `El tipo de dato es ${typeof(dato)}`;
}
console.log(tipoDato(78));

//Ejercicio 4

const numeros2 = [20, 25, 8, 17, 48];
let sumaNumeros = numeros2.reduce((resultado, numero)=>{
    return resultado += numero;
}, 0);
console.log(sumaNumeros);

//Ejercicio 5

const valores = [
    10, 
    'Juan', 
    'A', 
    35, 
    true, 
    0.25, 
    'Lima', 
    {cargo: 'ingenieria', edad: 30}
];

const noString = valores.filter(valor => {
    return typeof(valor) !== 'string';
});
console.log(noString);

//Ejercicio 6

const numeros3 = [3 ,-1, 10, 4.5, -2, 1, 5.1, 4, -2];
const encontrarNum = (arreglo) => {
    let min = Math.min.apply(null,arreglo);
    let max = Math.max.apply(null,arreglo);
    return [min, max];
}
console.log(encontrarNum(numeros3));

//Ejercicio 7

const arreglo2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const formatNumber = (arreglo) => {
    return `(${arreglo[0]}${arreglo[1]}${arreglo[2]})  ${arreglo[3]}${arreglo[4]}${arreglo[5]}-${arreglo[6]}${arreglo[7]}${arreglo[8]}`
}
console.log(formatNumber(arreglo2));

//Ejercicio 8

const matriz = [
    [4, 2, 7, 1], 
    [20, 70, 40, 90], 
    [1, 2, 0],
    [2.5, 4.7, 10.25]
];
let newMatriz = [];
const findLargestNums = () => {
    for(i=0; i<matriz.length; i++){
        newMatriz.push(Math.max.apply(null,matriz[i]));
    }
    return newMatriz;
}
console.log(findLargestNums());

//Ejercicio 9

const   
    palabra = 'circumlocution',
    caracter = 'c';
let primerIndex = palabra.indexOf('c');
let ultimoIndex = palabra.lastIndexOf('c');
console.log(`The first "c" has index ${primerIndex}, the last "c" has index ${ultimoIndex}`);

//Ejercicio 10

const toArray = {
    nombre: 'Juan',
    apellido: 'Santiago',
    edad: 30,
    pais: 'Peru'
}
const convertirObj = ()=> {
    return Object.entries(toArray);
}
console.log(convertirObj());

//Ejercicio 11

const personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
];
const presupuesto = personas.reduce((suma, persona) =>{
    return suma += persona.budget;
}, 0);
console.log(presupuesto);

//Ejercicio 12

const estudiantes = [
    { name: "Steve", edad: 18 },
    { name: "Mike", edad: 31 },
    { name: "John" , edad: 21},
    { name: "Juan", edad: 25 },
];
let arrayName = [];
for(j=0; j<estudiantes.length; j++){
    arrayName.push(estudiantes[j].name);
}
console.log(arrayName);

//Ejercicio 13

const objectToArray= {
    likes: 2,
    dislikes: 3,
    followers: 10
}
  
const convertirObj2 = ()=> {
    return Object.entries(objectToArray);
}
console.log(convertirObj2());

//Ejercicio 14
let resultado = 0;
const sumaCuadrados = (numero) => {
    for(n=1; n<=numero; n++){
        resultado += Math.pow(n,2);
    }
    return resultado;
}
console.log(sumaCuadrados(5));

//Ejercicio 15

const numeros4 = [3, 4, 6, 1, 0, 9];
const multiplyElement = numeros4.map(numero => {
    return numero*numeros4.length;
});
console.log(multiplyElement);

//Ejercicio 16
const newArrayCount = [];
const countdown = (numero => {
    for(m=numero; m>=0; m--){
        newArrayCount.push(m);
    }
    return newArrayCount;
});
console.log(countdown(10));

//Ejercicio 17

const numeros5 = [10, 4, 1, 4, -10, -50, 32, 21];
const diferencia = (arreglo) => {
    return Math.max.apply(null,arreglo) - Math.min.apply(null,arreglo);
}
console.log(diferencia(numeros5));

//Ejercicio 18

const list = [1, 2, 3, "x", "y", 10, 20.5, 0.25, 'hola', 20];
const enteros = list.filter(valor => {
    if(valor%1 === 0){
        return valor;
    }
});
console.log(enteros);

//Ejercicio 19
let arrayRepeat = [];
const repetir = function(elemento, tiempo){
    for(let w=1; w<=tiempo; w++){
        arrayRepeat.push(elemento);
    }
    return arrayRepeat;
}
console.log(repetir(13, 5));

//Ejercicio 20

const texto = 'apples and bananas';
const remplazar = function(valor){
    let nuevoTexto =  valor.replace('a', 'u');
    return nuevoTexto;
}
console.log(remplazar(texto));

//Ejercicio 21

const palabra2 = 'I am finding Nemo !';
const texto2 = 'Nemo';

if (palabra2.includes(texto2) === true){
    console.log(`Encontre a Nemo en ${palabra2.indexOf(texto2)}`);
}

//Ejercicio 22

const texto3 = 'hello';
const capLast = function(valor){
    return texto3
}