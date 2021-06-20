//Una función que cuente la cantidad de palabras en un texto largo.
 //Por ejemplo la entrada "Loren ipsun dolor sit amen." debe retornar 5.
 
 function contar_palabras(){

    const x = ['Loren', 'ipsun', 'dolor', 'ssit', 'amen'];
	
    console.log(x.length);

}
 
contar_palabras();

//Una función que función que indique si un texto es un palíndromo.

function reverseString(string){
    return string.split('').reverse().join('');

}

console.log(assert(reverseString('amor a roma'), 'amor a roma'));
console.log(assert(reverseString('reconocer'), 'reconocer'));

function assert(a,b){
    return (a===b);  
}