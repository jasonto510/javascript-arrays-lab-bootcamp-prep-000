// Add your functions and code here

kitten = ["George", "Joe", "Jason"];

function destructivelyAppendKitten(name){
  kitten.push(name);
  return kitten;
}

function destructivelyPrependKitten(name){
  kitten.push(name);
  return kitten;
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