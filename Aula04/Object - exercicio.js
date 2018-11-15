//Exercicio 1
//create a user
var library = [];
var user1 = {name:'Mariana', id:01, books:[]}
var user2 = {name:'Joao', id:02, books:[]}

//Exercicio 2
//create some book objects
var book1 = {title: 'The Catcher in the Rye',
 author: 'J.D Saliner',
 isbn:'03167',
 category:'Classic Literature'
};
var book2 = {title: 'To Kill a Mockingird',
 author: 'Harper Lee',
 ibn: '0446310786',
 category:'Classic Literature'
};

//Exercicio 3

//Exercicio 4

library.push(user1, user2);
library[0].books.push(book1, book2);
console.log(library);