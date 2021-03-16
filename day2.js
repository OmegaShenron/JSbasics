var challenge = '30daysJavaScript';
var enterprise = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(challenge);
//tamaño de la variable
console.log(challenge.length);
//Convertir a mayusculas
console.log(challenge.toUpperCase);
//Convertir a minusculas
console.log(challenge.toLowerCase);
//Dividir string
console.log(challenge.substring(0, 2));
console.log(challenge.substring(2, 6));
console.log(challenge.substring(6, 10));
console.log(challenge.substring(10, 17));
//Checar si tiene la palabra señalada
console.log(challenge.includes('Script'));
//Split in array
console.log(challenge.split());
//<Split in array with ,
console.log(enterprise.split(','));
//Remplazar javascript por phyton
console.log(challenge.replace('JavaScript', 'Phyton'));
//Qué caracter esta en el espacio 15
console.log(challenge.charAt(15));
//Ascii de la letra J
console.log(challenge.charCodeAt(11));
//