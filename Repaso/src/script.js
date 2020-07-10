// 1.-
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

/* Respuesta correcta: true false false
new Number () es un constructor de funciones incorporado (built-in). Aunque parece un número, 
no es realmente un número: tiene muchas características adicionales y es un objeto. Cuando 
usamos el operador ==, solo verifica si tiene el mismo valor. Ambos tienen el valor de 3, 
por lo que devuelve true. Sin embargo, cuando usamos el operador ===, tanto el valor como 
el tipo deben ser iguales. Entonces: new Number () no es un número, es un objeto. Ambos 
devuelven "false".
 */

 // 2.-
let greeting;
greetign = {}; // Typo!
console.log(greetign);

/* Respuesta correcta: {}
Lo que hace JS aquí es registrar el objeto debido a que acabamos de crear un objeto vacío en 
el objeto global. Cuando escribimos erróneamente greeting como greetign, el intérprete de JS 
ve esto como global.greetign = {} (o window.greetign = {} en un navegador). Para evitar esto, 
podemos usar el "use strict. Esto asegura que se haya declarado una variable antes de 
establecerla igual a cualquier cosa.
Aquí pueden revisar la documentación de "use stric":
- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Modo_estricto
 */

// 3.-
function bark() {
    console.log("Woof!");
}

bark.animal = "dog";

/* Respuesta correcta: No pasa nada, es totalmente correcto.
Esto es perfectamente posible en JavaScript, porque las funciones son objetos (Recuerda: todo 
aparte de los tipos primitivos son objetos en JS) Una función es un tipo especial de objeto. 
El código que escribes tú mismo no es la función real. La función es un objeto con propiedades. 
*/

// 4.-
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

console.log(member.getFullName());

/* Respuesta correcta: TypeError
En JS no se pueden añadir propiedades a un constructor como se puede hacer con los objetos. Si 
se desea añadir una característica a todos los objetos a la vez, se debe utilizar el prototype 
en su lugar. Para este caso,

Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

habría hecho que member.getFullName() funcionara. ¿Por qué es bueno? Imaginemos que añadimos este
método al constructor. Quizás no todas las "personas" necesitaban este método. Esto 
desperdiciaría mucho espacio de memoria, ya que todavía tendrían esa propiedad, que ocupa 
espacio de memoria para cada caso. En cambio, si sólo lo añadimos al prototipo, sólo lo tenemos 
en un lugar en la memoria, ¡pero todos ellos tienen acceso a él!

Para mayor información de prototype consulta:
- https://www.w3schools.com/js/js_object_prototypes.asp
- https://ui.dev/beginners-guide-to-javascript-prototype/
*/

// 5.-
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);

/* Respuesta correcta: Person {firstName: "Lydia", lastName: "Hallie"} and undefined
Para sarah, no usamos la palabra reservada new. Cuando se usa new, se refiere al nuevo objeto
vacío que creamos. Sin embargo, si no se agrega `new', se refiere al objeto global.
En el ejemplo this.firstName = "Sarah" y this.lastName = "Smith". Lo que 
realmente hicimos fue definir global.firstName = 'Sarah' y global.lastName = 'Smith'. sarah 
sarah se deja indefinida, ya que no regresamos un valor desde la función Person.
 */

// 6.-
function sum(a, b) {
    return a + b;
}

sum(1, "2");

/* Respuesta correcta: "12"
JavaScript es un lenguaje dinámicamente tipado o de tipado débil, esto significa que no es
necesario declarar el tipo de variable antes de usarla pues será determinado automáticamente 
cuando el programa comience a ser procesado. Los valores se pueden convertir automáticamente 
en otro tipo sin que se sepa, esto se denomina coerción de tipo implícita (implicit type 
coercion). La coerción es la conversión de un tipo a otro. En este ejemplo, JavaScript 
convierte el número 1 en una cadena, para que la función tenga sentido y devuelva un valor. 
Durante la suma de un tipo numérico (1) y un tipo de cadena ('2'), el número se trata como 
una cadena. Podemos concatenar cadenas como "Hello" + "World"``, así que lo que está pasando 
aquí es "1" + "2" que devuelve "12".
Para mayor información acerca de la coerción consulten este link:
- https://medium.com/@ManuCastrillonM/entendiendo-la-coerci%C3%B3n-en-javascript-bc202d22d23f
 */

// 7.-
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

/* Respuesta correcta: 0 2 2
El operador postfix unario ++:
    Devuelve el valor (esto devuelve 0)
    Incrementa el valor (el número es ahora 1)
El operador unario prefix ++:
    Incrementa el valor (el número es ahora 2)
    Devuelve el valor (esto devuelve 2)
Por lo tanto, devuelve 0 2 2 2.
 */

// 8.- 
function checkAge(data) {
    if (data === { age: 18 }) {
        console.log("You are an adult!");
    } else if (data == { age: 18 }) {
        console.log("You are still an adult.");
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({ age: 18 });

/* Respuesta correcta: Hmm.. You don't have an age I guess
Al probar la igualdad, los tipos primitivos se comparan por su valor, mientras que los objetos 
se comparan por su referencia. JavaScript comprueba si los objetos tienen una referencia a 
la misma ubicación en la memoria. Los dos objetos que estamos comparando no tienen eso: 
el objeto que pasamos como parámetro se refiere a una ubicación diferente en la memoria 
que el objeto que usamos para comprobar la igualdad. Esta es la razón por la que ambos
 { edad: 18 } === { edad: 18 } y { edad: 18 } == { edad: 18 } devuelven false
 */

// 9-
var num = 8;
var num = 10;

console.log(num);

/* Respuesta correcta: 10
Con la palabra reservada var, se pueden declarar múltiples variables con el mismo nombre. 
La variable tendrá entonces el último valor. No es posible hacer esto con let o const ya que 
tienen un alcance de bloque.
*/

// 10.-
const a = {};
const b = { key: "b" };
const c = { key: "c" };

console.log("b: ", b);
console.log("c: ", c);

a[b] = 123;
a[c] = 456;

console.log(a[b]);

/* 
Las keys de los objetos se convierten automáticamente en strings. Estamos tratando de 
establecer un objeto como key para el objeto a, con el valor de 123. Sin embargo, 
cuando se obtiene la representación en cadena de un objeto (stringfy), se convierte en
"[object Object]". Así que lo que estamos diciendo aquí, es que a["object Object"] = 123. 
Entonces, podemos intentar hacer lo mismo de nuevo. c es otro objeto que estamos 
implícitamente stringfying. Entonces, a["object Object"] = 456. Para finalizar,
mostramos a[b], que en realidad es a["object Object"].Así Acabamos de igualar a 456, por
lo que devuelve 456.
 */

