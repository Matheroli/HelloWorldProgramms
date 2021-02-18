const ejs = require('ejs');
let a = 'Hello World';
let html = ejs.render('<%= a %>', {a: a});
//Je suis sûr que c'est faux :/
