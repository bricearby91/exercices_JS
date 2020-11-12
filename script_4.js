const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

const array1 = ["oui","non","va","donc","juh"]

console.log("Liste des entrepreneurs nés dans les années 1970 :")

for (let entrepreneur of entrepreneurs) {

    if (entrepreneur.year < 1980 && entrepreneur.year >= 1970) {

        console.log(entrepreneur.first + " " + entrepreneur.last);

}

}

console.log(" ")
console.log("Liste d'arrays contenant chacun le nom et prénom d'un entrepreneur :")

for (let entrepreneur of entrepreneurs) {
  let array_name = [ entrepreneur.first, entrepreneur.last ]
  console.log(array_name)
}


console.log(" ")

console.log("En 2020, ces entrepreneurs fêtent (ou auraient fêté) leurs :")

for (let entrepreneur of entrepreneurs) {

        console.log(entrepreneur.first + " " + entrepreneur.last + " : " + (2020-entrepreneur.year) + " ans");

}

console.log(" ")

console.log("Liste des entrepreneurs par ordre alphabétique :")

entrepreneurs.sort((a, b) => {
    let fa = a.last,
        fb = b.last;

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

console.log(entrepreneurs)

console.log(" ")

var maxValue = 0;
for(var i = 1; i < books.length; i++) {
   var currentValue = myArray[i].rented;
   if(currentValue > maxValue) {
      maxValue = currentValue;
   }
   console.log(maxValue)
}