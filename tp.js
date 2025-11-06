// CONSIGNE : 

// Créer une variable a avec la valeur 12
// Créer une variable b avec la valeur 45
// Créer une variable c avec pour valeur la somme de a et b

let a = 12;     // Variable "a" défini à 12
let b = 45;     // Variable "b" défini à 45
let c = a+b;    // Variable "C" défini de a + b
console.log(c)  // Print de la valeur "c" dans la console

// Créer une variable bonjour avec la valeur "Hello"
// Créer une variable tout_le_monde avec la valeur " World"
// Afficher dans la console la concaténation des 2 variables

let bonjour = "Hello ";             // Variable "bonjour" défini par "Hello"
let tout_le_monde = "World";        // Variable "tout_le_monde" défini par World
console.log(bonjour+tout_le_monde)  // Print "Hello World"

// Calculer la surface un cercle de rayon 12cm
// Utiliser une constante pour la valeur de PI

const PI = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679; 
let rayon = 12;
console.log("Aire du cercle :",PI*rayon*rayon,"cm²");

// Ecrire un programme qui indique si quelqu'un est majeur ou mineur en fonction de son âge
// Avec une structure if

let age = 18;

if (a >= 18) { 
    console.log("La personne est majeur");
} else { 
    console.log("La personne est mineur");
}

// En suisse, la majorité est à 17 ans, en France à 18 ans.
// Refaire le programme ci-dessus en tenant compte de la nationalité

let ages = 18;
let nat = "Française";

if (nat == 'Suisse' && ages < 17) { 
    console.log("La personne",nat,"est mineur");
} else if (nat == 'Française' && ages < 18) { 
    console.log("La personne",nat,"est mineur");
} else { 
    console.log("La personne",nat,"est majeur");
}

// Ecrire un programme pour afficher une table de multiplication
// Avec une boucle for

let table = 5;

console.log("Table de multiplication de",table)
for (let i = 0; i <=10; i++) {
    console.log(table,"x",i,"=",i*table);
}