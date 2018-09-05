// Add your functions and code here

kittens = ["George", "Joe", "Jason"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kitten.pop();
  return kitten;
}

function destructivelyRemoveFirstKitten(){
  kitten.unshift();
  return kitten;
}

function appendKitten(name){
  return [...kitten, name];
}

function prependKitten(name){
  kittens = [name, ... kitten];
  return kittens;
}

function removeLastKitten(){
  kittens = kitten.slice(0, array.length - 1);
  return kittens;
}

function removeFirstKitten(){
  return kitten.slice(1);
}