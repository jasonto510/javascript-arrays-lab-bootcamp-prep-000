// Add your functions and code here

kittens = ["George", "Joe", "Jason"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var kittens2 = [...kittens, name];
  return kittens2;
}

function prependKitten(name){
  var kittens2 = [name, ... kittens];
  return kittens2;
}

function removeLastKitten(){
  kittens = kitten.slice(0, array.length - 1);
  return kittens;
}

function removeFirstKitten(){
  return kitten.slice(1);
}