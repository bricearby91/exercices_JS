myNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");
let count = 1;
var res = 1
while (count <= myNumber) {
	res *= count
	count++
}

console.log(`Le résultat est : ${res}`)