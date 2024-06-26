import './css/style.css';

// Resolver con (pop, push, shift, unshift)

// 1. Inventario de Frutas: Crea un array llamado frutas con al menos 5 frutas. Utiliza pop para eliminar la última fruta y mostrarla por consola. Luego, usa push para agregar "mango" al final del array.

const arrayFrutas = ['mora', 'limón', 'banano', 'pera', 'fresa'];
let arrayFrutasJSON = JSON.stringify(arrayFrutas, null, 4);
console.log(`*arrayFrutas\n${arrayFrutasJSON}`);
console.log(arrayFrutas);
alert(`*arrayFrutas*\n${arrayFrutasJSON}`);
let eliminado = arrayFrutas.pop();
console.log(`Elemento eliminado usando POP => ${eliminado}"`);
console.log(arrayFrutas);
alert(`Elemento eliminado usando POP => ${eliminado}"`);
arrayFrutasJSON = JSON.stringify(arrayFrutas, null, 4);
alert(`*arrayFrutas*\n${arrayFrutasJSON}`);
arrayFrutas.push('mango');
console.log('Elemento agregado usando PUSH => "mango"');
console.log(arrayFrutas);
alert('Elemento agregado usando PUSH => "mango"');
arrayFrutasJSON = JSON.stringify(arrayFrutas, null, 4);
alert(`*arrayFrutas*\n${arrayFrutasJSON}`);

// 2. Lista de Tareas: Declara un array tareas con 3 tareas pendientes. Usa shift para eliminar la primera tarea y mostrarla por consola como "Tarea completada".  Añade una nueva tarea al principio del array con unshift.

const tareas = ['desayuno', 'almuerzo', 'cena'];
let tareasJSON = JSON.stringify(tareas, null, 4);
console.log(`*Tareas pendientes*\n${tareasJSON}`);
console.log(tareas);
alert(`Tareas pendientes\n${tareasJSON}`);
let completa = tareas.shift();
console.log(`La tarea *${completa}* ha sido completada!!`);
alert(`La tarea *${completa}* ha sido completada!!`);
tareasJSON = JSON.stringify(tareas, null, 4);
console.log(`*Tareas pendientes*\n${tareasJSON}`);
console.log(tareas);
alert(`*Tareas pendientes*\n${tareasJSON}`);

// 3. Fila de Espera: Simula una fila de espera con un array clientes.  Añade 2 nuevos clientes al final de la fila con push.  Atiende al primer cliente usando shift y muestra su nombre por consola.

const filaEspera = [
  { nombre: 'Juan', apellido: 'Cruz' },
  { nombre: 'Thiago', apellido: 'Conde' },
  { nombre: 'Wilman', apellido: 'Conde' },
  { nombre: 'Marco', apellido: 'Perez' },
  { nombre: 'Andres', apellido: 'Martinez' },
];
let filaEsperaJSON = JSON.stringify(filaEspera, null, 4);
console.log(`*Fila de espera*\n${filaEsperaJSON}`);
console.log(filaEspera);
alert(`*Fila de espera*\n${filaEsperaJSON}`);
filaEspera.push({ nombre: 'Tania', apellido: 'Moreno' }, { nombre: 'Rosa', apellido: 'Roa' });
filaEsperaJSON = JSON.stringify(filaEspera, null, 4);
console.log(`*LLegan mas clientes*\n*Fila de espera actualizada*\n${filaEsperaJSON}`);
console.log(filaEspera);
alert(`*LLegan mas clientes*\n*Fila de espera actualizada*\n${filaEsperaJSON}`);
let atendido = filaEspera.shift();
let atendidoJSON = JSON.stringify(atendido, null, 4);
filaEsperaJSON = JSON.stringify(filaEspera, null, 4);
console.log(`*Cliente atendido*\n${atendidoJSON}`);
alert(`*Cliente atendido*\n${atendidoJSON}`);
console.log(`*Fila de espera actualizada*\n${filaEsperaJSON}`);
console.log(filaEspera);
alert(`*Fila de espera actualizada*\n${filaEsperaJSON}`);

// 4. Rotación de Elementos: Crea un array números con 5 números. Utiliza pop para sacar el último número y luego unshift para agregarlo al principio. Repite este proceso 3 veces y observa cómo cambian las posiciones.

const arrayNumeros = [18, 2, 37, 81, 38];
let arrayNumerosJSON = JSON.stringify(arrayNumeros, null, 4);
console.log(`*arrayNumeros original*\n${arrayNumerosJSON}`);
console.log(arrayNumeros);
alert(`*arrayNumeros original*\n${arrayNumerosJSON}`);
let temp;
for (let i = 1; i <= 3; i++) {
  console.log(`Cambio #${i}`);
  alert(`Cambio #${i}`);
  temp = arrayNumeros.pop();
  arrayNumeros.unshift(temp);
  arrayNumerosJSON = JSON.stringify(arrayNumeros, null, 4);
  console.log(`*arrayNumeros actual*\n${arrayNumerosJSON}`);
  console.log(arrayNumeros);
  alert(`*arrayNumeros actual*\n${arrayNumerosJSON}`);
}

// 5. Carrito de Compras:  Declara un array carrito vacío. Permite al usuario agregar 3 productos al carrito con push. Luego, dale la opción de eliminar el último producto agregado usando pop.

const carrito = [];
carrito.push(prompt('Agrega 1er producto a tu carrito'));
carrito.push(prompt('Agrega 2do producto a tu carrito'));
carrito.push(prompt('Agrega 3er producto a tu carrito'));
let carritoJSON = JSON.stringify(carrito, null, 4);
console.log(`*Productos en tu carrito\n${carritoJSON}`);
console.log(carrito);
alert(`*Productos en tu carrito\n${carritoJSON}`);
temp = prompt(
  'Si desea eliminar el último producto de su carrito, envíe la letra "S", de lo contrario envíe cualquier caracter',
);
// debugger;
if (temp === 's' || temp === 'S') {
  while (temp === 's' || temp === 'S') {
    carrito.pop();
    carritoJSON = JSON.stringify(carrito, null, 4);
    console.log(`*Productos actuales en tu carrito\n${carritoJSON}`);
    console.log(carrito);
    alert(`*Productos actuales en tu carrito\n${carritoJSON}`);
    temp = prompt(
      'Si desea eliminar el último producto de su carrito, envíe la letra "S", de lo contrario envíe cualquier caracter',
    );
  }
}
carritoJSON = JSON.stringify(carrito, null, 4);
console.log(`*Productos finales en tu carrito\n${carritoJSON}`);
console.log(carrito);
alert(`*Productos finales en tu carrito\n${carritoJSON}`);

// Resolver según corresponda y según lo indicado.

// 6. (map) Doblar Valores:  Dado un array valores con números, crea un nuevo array dobles donde cada elemento sea el doble del valor original usando map.

const arrayNum = [1, 7, 8, 4, 10];
let arrayNumJSON = JSON.stringify(arrayNum, null, 4);
console.log(`*arrayNum*\n${arrayNumJSON}`);
console.log(arrayNum);
alert(`*arrayNum*\n${arrayNumJSON}`);
temp = arrayNum.map((x) => x * 2);
arrayNumJSON = JSON.stringify(temp, null, 4);
console.log(`*arrayNum X 2*\n${arrayNumJSON}`);
console.log(temp);
alert(`*arrayNum X 2*\n${arrayNumJSON}`);

// 7. (map) Nombres en Mayúsculas: Convierte todos los nombres de un array nombres a mayúsculas utilizando map.

const arrayNombres = ['Tomas', 'Juan', 'Andres', 'Johana', 'Alex'];
let arrayNombresJSON = JSON.stringify(arrayNombres, null, 4);
console.log(`*arrayNombres*\n${arrayNombresJSON}`);
console.log(arrayNombres);
alert(`*arrayNombres*\n${arrayNombresJSON}`);
temp = arrayNombres.map((x) => x.toUpperCase());
arrayNombresJSON = JSON.stringify(temp, null, 4);
console.log(`*arrayNombres en mayúscula*\n${arrayNombresJSON}`);
console.log(temp);
alert(`*arrayNombres en mayúscula*\n${arrayNombresJSON}`);

// 8. (map) Precios con IVA:  Tienes un array precios con precios sin IVA. Calcula un nuevo array precios Con IVA donde cada precio incluya un IVA del 21%.

const arrayPrecios = [15000, 21000, 13500, 78000, 47000];
let arrayPreciosJSON = JSON.stringify(arrayPrecios, null, 4);
console.log(`*arrayPrecios*\n${arrayPreciosJSON}`);
console.log(arrayPrecios);
alert(`*arrayPrecios*\n${arrayPreciosJSON}`);
temp = arrayPrecios.map((x) => x * 1.21);
arrayPreciosJSON = JSON.stringify(temp, null, 4);
console.log(`*arrayPrecios + iva de 21%*\n${arrayPreciosJSON}`);
console.log(temp);
alert(`*arrayPrecios + iva de 21%*\n${arrayPreciosJSON}`);

// 9. (map) Cuadrados de Números:  Crea un array números del 1 al 10. Obtén un nuevo array cuadrados donde cada elemento sea el cuadrado del número original.

const arrayNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayNum1JSON = JSON.stringify(arrayNum1, null, 4);
console.log(`*arrayNum1*\n${arrayNum1JSON}`);
console.log(arrayNum1);
alert(`*arrayNum1*\n${arrayNum1JSON}`);
temp = arrayNum1.map((x) => x ** 2);
arrayNum1JSON = JSON.stringify(temp, null, 4);
console.log(`*arrayNum1 al cuadrado*\n${arrayNum1JSON}`);
console.log(temp);
alert(`*arrayNum1 al cuadrado*\n${arrayNum1JSON}`);

// 10. (filter) Números Pares:  Filtra un array números para obtener solo los números pares.

const arrayNum2 = [34, 23, 43, 56, 43, 89, 86, 32];
let arrayNum2JSON = JSON.stringify(arrayNum2, null, 4);
console.log(`*arrayNum2*\n${arrayNum2JSON}`);
console.log(arrayNum2);
alert(`*arrayNum2*\n${arrayNum2JSON}`);
temp = arrayNum2.filter((x) => x % 2 === 0);
arrayNum2JSON = JSON.stringify(temp, null, 4);
console.log(`*pares en arrayNum2*\n${arrayNum2JSON}`);
console.log(temp);
alert(`*pares en arrayNum2*\n${arrayNum2JSON}`);

// 11. (filter) Palabras Largas:  Encuentra las palabras de más de 5 letras en un array palabras.

const arrayPalabras = [
  'esternón',
  'mano',
  'cuádriceps',
  'boca',
  'tobillo',
  'pie',
  'dedos',
  'uñas',
  'cabello',
  'tórax',
  'pecho',
  'garganta',
  'ojos',
  'mandíbula',
  'estomago',
  'hígado',
  'riñón',
  'pancreas',
];
let arrayPalabrasJSON = JSON.stringify(arrayPalabras, null, 4);
console.log(`*arrayPalabras*\n${arrayPalabrasJSON}`);
console.log(arrayPalabras);
alert(`*arrayPalabras*\n${arrayPalabrasJSON}`);
temp = arrayPalabras.filter((x) => x.length > 5);
arrayPalabrasJSON = JSON.stringify(temp, null, 4);
console.log(`*palabras con 5+ caracteres*\n${arrayPalabrasJSON}`);
console.log(temp);
alert(`*palabras con 5+ caracteres*\n${arrayPalabrasJSON}`);

// 12. (filter) Productos en Oferta:  Tienes un array productos con objetos que tienen propiedades nombre y precio. Filtra los productos que estén en oferta (precio menor a $500).

const arrayProductos = [
  { producto: 'tv', precio: 350 },
  { producto: 'monitor', precio: 480 },
  { producto: 'ps5', precio: 550 },
  { producto: 'iphone', precio: 800 },
  { producto: 'router', precio: 375 },
  { producto: 'audífonos', precio: 499 },
  { producto: 'Nintendo', precio: 575 },
];
let arrayProductosJSON = JSON.stringify(arrayProductos, null, 4);
console.log(`*arrayProductos*\n${arrayProductosJSON}`);
console.log(arrayProductos);
alert(`*arrayProductos*\n${arrayProductosJSON}`);
temp = arrayProductos.filter((x) => x.precio < 500);
arrayProductosJSON = JSON.stringify(temp, null, 4);
console.log(`*productos en descuento* (<500)\n${arrayProductosJSON}`);
console.log(temp);
alert(`*productos en descuento* (<500)\n${arrayProductosJSON}`);

// 13. (filter) Estudiantes Aprobados:  Filtra un array estudiantes (objetos con propiedades nombre y nota) para obtener solo a los estudiantes con notas mayores o iguales a 7.

const arrayEstudiantes = [
  { nombre: 'Thiago', nota: 8 },
  { nombre: 'Andres', nota: 4 },
  { nombre: 'Luisa', nota: 6.7 },
  { nombre: 'Wilfer', nota: 7.5 },
  { nombre: 'Carolina', nota: 6.5 },
  { nombre: 'Felipe', nota: 7 },
  { nombre: 'Juan', nota: 7.2 },
];
let arrayEstudiantesJSON = JSON.stringify(arrayEstudiantes, null, 4);
console.log(`*arrayEstudiantes*\n${arrayEstudiantesJSON}`);
console.log(arrayEstudiantes);
alert(`*arrayEstudiantes*\n${arrayEstudiantesJSON}`);
temp = arrayEstudiantes.filter((x) => x.nota >= 7);
arrayEstudiantesJSON = JSON.stringify(temp, null, 4);
console.log(`*estudiantes aprobados* 7+\n${arrayEstudiantesJSON}`);
console.log(temp);
alert(`*estudiantes aprobados* 7+\n${arrayEstudiantesJSON}`);

// 14. (filter) Tareas Completadas:  Dado un array tareas (objetos con propiedades descripción y completada), filtra las tareas que estén marcadas como completadas.

const arrayTareas = [
  { descripción: 'hacer la cama', completada: true },
  { descripción: 'lavar los platos', completada: false },
  { descripción: 'guardar los platos', completada: false },
  { descripción: 'limpiar el comedor', completada: true },
  { descripción: 'cocinar', completada: true },
  { descripción: 'barrer la casa', completada: true },
  { descripción: 'lavar la ropa', completada: false },
  { descripción: 'comprar verduras', completada: true },
  { descripción: 'cambiar bolsa basura', completada: false },
  { descripción: 'tirar la basura', completada: true },
];

let arrayTareasJSON = JSON.stringify(arrayTareas, null, 4);
console.log(`*arrayTareas*\n${arrayTareasJSON}`);
console.log(arrayTareas);
alert(`*arrayTareas*\n${arrayTareasJSON}`);
temp = arrayTareas.filter((x) => x.completada === true);
arrayTareasJSON = JSON.stringify(temp, null, 4);
console.log(`*tareas completadas*\n${arrayTareasJSON}`);
console.log(temp);
alert(`*tareas completadas*\n${arrayTareasJSON}`);

// 15. (forEach) Mostrar Lista: Imprime por consola cada elemento de un array nombres utilizando forEach.

const arrayNombres1 = ['Tomas', 'Juan', 'Andres', 'Johana', 'Alex', 'Pedro', 'Pablo'];
let arrayNombres1JSON = JSON.stringify(arrayNombres1, null, 4);
console.log(`*arrayNombres impreso en consola usando forEach*\n${arrayNombres1JSON}`);
console.log(arrayNombres1);
alert(`*arrayNombres imprimiendo en consola/pantalla usando forEach*\n${arrayNombres1JSON}`);
arrayNombres1.forEach((x) => alert(x));
arrayNombres1.forEach((x) => console.log(x));

// 16. (forEach) Sumar Edades:  Calcula la suma de las edades de un array edades usando forEach.

const arrayPersonas = [
  { nombre: 'Thiago', edad: 6 },
  { nombre: 'Andres', edad: 44 },
  { nombre: 'Luisa', edad: 15 },
  { nombre: 'Wilfer', edad: 41 },
  { nombre: 'Carolina', edad: 31 },
  { nombre: 'Felipe', edad: 42 },
  { nombre: 'Juan', edad: 18 },
];
let arrayPersonasJSON = JSON.stringify(arrayPersonas, null, 4);
console.log(`*arrayPersonas*\n${arrayPersonasJSON}`);
console.log(arrayPersonas);
alert(`*arrayPersonas*\n${arrayPersonasJSON}`);
temp = 0;
arrayPersonas.forEach((x) => (temp += x.edad));
console.log(`*suma total de todas las edades`);
console.log(temp);
alert(`*suma total de todas las edades*\n${temp}`);

// 17. (forEach) Aplicar Descuento:  Tienes un array productos (objetos con nombre y precio). Aplica un descuento del 10% a cada producto usando forEach.

const arrayProductos1 = [
  { producto: 'tv', precio: 350 },
  { producto: 'monitor', precio: 480 },
  { producto: 'ps5', precio: 550 },
  { producto: 'iphone', precio: 800 },
  { producto: 'router', precio: 375 },
  { producto: 'audífonos', precio: 499 },
  { producto: 'Nintendo', precio: 575 },
];
let arrayProductos1JSON = JSON.stringify(arrayProductos1, null, 4);
console.log(`*arrayProductos1*\n${arrayProductos1JSON}`);
console.log(arrayProductos1);
alert(`*arrayProductos1*\n${arrayProductos1JSON}`);
temp = [];
arrayProductos1.forEach(function (x) {
  console.log({ producto: x.producto, precio: x.precio * 0.9 });
  temp.push({ producto: x.producto, precio: x.precio * 0.9 });
});
arrayProductos1JSON = JSON.stringify(temp, null, 4);
console.log(`*productos con 10% de descuento*\n${arrayProductos1JSON}`);
console.log(temp);
alert(`*productos con 10% de descuento*\n${arrayProductos1JSON}`);

// 18. (forEach) Enviar Invitaciones:  Simula el envío de invitaciones por correo electrónico a cada persona de un array invitados utilizando forEach (puedes imprimir un mensaje de "Invitación enviada a [nombre]" por consola).

const arrayNombres2 = [
  { nombre: 'Juan', apellido: 'Cruz' },
  { nombre: 'Thiago', apellido: 'Conde' },
  { nombre: 'Wilman', apellido: 'Conde' },
  { nombre: 'Marco', apellido: 'Perez' },
  { nombre: 'Andres', apellido: 'Martinez' },
];
let arrayNombres2JSON = JSON.stringify(arrayNombres2, null, 4);
console.log(`*arrayNombres2*\n${arrayNombres2JSON}`);
console.log(arrayNombres2);
alert(`*arrayNombres2*\n${arrayNombres2JSON}`);
alert(`Invitaciones enviadas por consola`);
arrayNombres2.forEach((x) => console.log(`Invitación enviada a ${x.nombre} ${x.apellido}`));
