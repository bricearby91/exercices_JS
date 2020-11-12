const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Tous les livres ont-ils déjà été empruntés au moins une fois ?")

function allRented(array) {

for (let book of array) {

  if (book.rented == 0) {
    return false;
  }
}
  return true;

}

console.log(allRented(books))

console.log(" ")
console.log("Le livre ayant été emprunté le plus grand nombre de fois est : ")

var maxValue = books[0].rented;
for(var i = 1; i < books.length; i++) {
   var currentValue = books[i].rented;
   if(currentValue > maxValue) {
      maxValue = currentValue;
   }
}

for (let book of books) {
  if (book.rented == maxValue) {
    console.log(book.title)
  }
}

console.log(" ")
console.log("Le livre ayant été emprunté le plus petit nombre de fois est : ")

var minValue = books[0].rented;
for(var i = 1; i < books.length; i++) {
   var currentValue = books[i].rented;
   if(currentValue < maxValue) {
      minValue = currentValue;
   }
}

for (let book of books) {
  if (book.rented == minValue) {
    console.log(book.title)
  }
}

console.log(" ")
console.log("Le livre avec l'ID 873495 est :")

for (let book of books) {
  if (book.id == 873495) {
    console.log(book.title)
  }
}

console.log(" ")
console.log("Supprimons l'élément ayant l'ID 133712 :")

for (let index in books) {
  if (books[index].id == 133712) {
    console.log(`Il s'agit de : ${books[index].title}`)
    books.splice(index,1)
    break
  }
}

console.log("Liste des ouvrages par ordre alphabétique :")

books.sort((a, b) => {
    let fa = a.title,
        fb = b.title;

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

console.log(books)