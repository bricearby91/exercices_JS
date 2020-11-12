numberFloors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

var singleLine = ""
for (let i = 1; i <= numberFloors; i++) {
	singleLine = " ".repeat(numberFloors - i) + "#".repeat(i)
	console.log(singleLine)
}

