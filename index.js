var Algorithmia = require("algorithmia");
const data = require('./sentimentos.json')

var rest;

function response(object){
    Algorithmia.client("simaWHJ74dK0KqN5pk1+vIF51tS1")
    .algo("nlp/SentimentAnalysis/1.0.5?timeout=300") // timeout is optional
    .pipe(object)
    .then(function(response) {
        rest = response.get();
        for(let i = 0; i < rest.length; i++){
            if(rest[i].sentiment < 0){
                console.log(`Você provavelmente está triste; Sentimento:${rest[i].sentiment}::`);
                console.log(`Frase: ${rest[i].document}. \n`);
                console.log('------------------------------------------------------- \n');
            }
            if(rest[i].sentiment > 0){
                console.log(`Você provavelmente está feliz; Sentimento: ${rest[i].sentiment}::`);
                console.log(`Frase: ${rest[i].document}. \n`);
                console.log('------------------------------------------------------- \n');
            }
        }
    });
}

response(data)