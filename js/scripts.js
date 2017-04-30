var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCase = animal.toUpperCase();
var textChange = text.replace('Papugi', animalUpperCase);
alert(textChange.slice(0, textChange.length/2));
console.log(textChange.slice(0, textChange.length/2));