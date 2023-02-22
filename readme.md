# easyTypes

## Tipado semi-fuerte para javascript

Este módulo provee una serie de funciones para validar y comprobar el tipo de datos usados en tu código, posee una curva de aprendizaje muy corta y te proporciona una capa extra de seguridad a la hora de realizar aplicaciones en JavaScript.

Podemos verlo como una versión reducida de TypeScript, pero mucho más simple y fácil de implementar.

Tipar tu código de JavaScript puede ser tan fácil como importar todas las funciones (const et = require("easy-types")) y usarlas en la primera línea de tus funciones, como se muestra en los ejemplos al final.

## Instalación

Para instalar, simplemente ejecuta:

##npm i easy-types

## Uso

Las funciones de este módulo están diseñadas para ser utilizadas en la validación de argumentos de funciones y en la comprobación de valores recibidos en un programa. Las funciones disponibles son:

### `Number(type)`

Comprueba si `type` es un número.

### `String(type)`

Comprueba si `type` es una cadena de texto.

### `Boolean(type)`

Comprueba si `type` es un valor booleano (`true` o `false`).

### `Function(type)`

Comprueba si `type` es una función.

### `Null(type)`

Comprueba si `type` es un valor `null`.

### `$Array(type, min, max)`

Comprueba si `type` es un array. También puedes proporcionar valores opcionales para `min` y `max`, que comprobarán si la longitud del array está dentro de los límites especificados, `min` y `max` no son obligatorios. 

### `Object(obj, interface)`

Comprueba si `obj` es un objeto. Si `interface` está presente, comprueba si las propiedades de `obj` coinciden con la interfaz especificada, la interface no es obligatoria.

Las interfaces se declaran como un objeto típico de JavaScript con su llave del mismo nombre que se requiere en el objeto y el valor como string. Aquí se presenta un ejemplo:

const interface = {
    nombre:"string",
    edad:"number",
    musicaFavorita:"array",
}

### `$typeof(type)`

Comprueba el tipo de `type` y devuelve una cadena de texto que indica el tipo de dato.


# Ejemplo 1, tipsdo simple
----------------------------------------------
const et = require('easy-types');

function sumarDosNumeros(x,y){
    et.Number(x)
    et.Number(y)
    //si uno de estos dos falla, generarra un - trow new Error("Error: Expected number - passed {tipo pasado}")
    return x + y
}
sumarDosNumeros(2,4)

# Ejemplo 2, interfaces
----------------------------------------------
const et = require('easy-types');

const persona = {
    nombre:"manuel",
    edad:32
}

const ipersona = {
    nombre:"string",
    edad:"number"
}

function saludar(persona){
    et.Object(persona,ipersona) 
    console.log(`hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años `)
    // si la interface no coincide con el objeto se indicara cual llave a fallado y que tipo requiere
}
saludar(persona)

