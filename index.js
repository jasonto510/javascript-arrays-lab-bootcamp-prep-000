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
  var kitten = [];
  return [name, ... kitten];
}

function removeLastKitten(){
  var kitten = [];
  return kitten.slice()
}