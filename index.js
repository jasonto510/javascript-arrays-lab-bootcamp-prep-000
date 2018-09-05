// Add your functions and code here
function destructivelyAppendKitten(name){
  var kitten = [];
  kitten.push(name);
  return kitten;
}

function destructivelyPrependKitten(name){
  var kitten = [];
  kitten.push(name);
  return kitten;
}

function destructivelyRemoveLastKitten(){
  var kitten = [];
  kitten.pop();
  return kitten;
}

function destructivelyRemoveFirstKitten(){
  var kitten = [];
  kitten.unshift();
  return kitten;
}

function appendKitten(name){
  var kitten = [];
  return [...kitten, name];
}

function prependKitten(name){
  kittens = [name, ... kitten];
  return kittens;
}

function removeLastKitten(){
  var kitten = [];
  kittens = kitten.slice(0, array.length - 1);
  return kittens;
}

function removeFirstKitten(){
  var kitten = [];
  return kitten.slice(1);
}