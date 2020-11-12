sentence = prompt("Tapez votre message : ");

if (sentence.includes("?",sentence.length-1)) {
	console.log("Ouais Ouais...");
}
else if (sentence == "") {
	console.log("T'es en PLS ?");
}
else if (sentence == sentence.toUpperCase()) {
	console.log("Pwa, calme-toi...");
}
else if (sentence.includes("Fortnite")) {
	console.log("On se cale une partie ?");
}
else {
	console.log("Balek..");
}