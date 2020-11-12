const tableCorrespondance = {
"UCU" : "Sérine",
"UCC" : "Sérine",
"UCG" : "Sérine",
"UCA" : "Sérine",
"AGU" : "Sérine",
"AGC" : "Sérine",
"CCU" : "Proline",
"CCC" : "Proline",
"CCA" : "Proline",
"CCG" : "Proline",
"UUA" : "Leucine",
"UUG" : "Leucine",
"UUC" : "Phénylalanine",
"UUU" : "Phénylalanine",
"CGU" : "Arginine",
"CGC" : "Arginine",
"CGA" : "Arginine",
"CGG" : "Arginine",
"AGA" : "Arginine",
"AGG" : "Arginine",
"UAU" : "Tyrosine",
"UAC" : "Tyrosine"
};

sample_1 = "CCGUCGUUGCGCUACAGC"
sample_2 = "CCUCGCCGGUACUUCUCG"

let codon = ""
let finalArray = []
for (letter of sample_2) {
	codon += letter
	if (codon.length == 3) {
		finalArray.push(tableCorrespondance[codon])
		codon = ""
}
}

console.log(finalArray.join(" - "))