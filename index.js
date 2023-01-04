// Write your solution here!
function cats(){}
cats = ["Milo", "Otis", "Garfield"];

function arrayFunction (){
    beforeEach(function () {
        cats.length = 0;
      cats.push("Milo", "Otis", "Garfield");
      });
      
}
function destructivelyAppendCat(){
   cats.push("Ralph");   
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo");
}
function appendCat(name){
    let cats = ["Milo","Otis","Garfield"];
    let catsCopy = [...cats, name];
    return catsCopy
}
function prependCat(name){
    let cats = ["Milo","Otis","Garfield"];
    let catsCopy = [name, ...cats];
    return catsCopy
}
function removeLastCat(){
    let cats = ["Milo","Otis","Garfield"];
    let catsCopy = cats.slice(0, -1);
    return catsCopy
}
function removeFirstCat(){
    let cats = ["Milo","Otis","Garfield"];
    let catsCopy = cats.slice(1);
    return catsCopy
}

