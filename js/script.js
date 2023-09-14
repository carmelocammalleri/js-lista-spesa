const listGroup = document.getElementById ('list');

//1.
const listEl = [
  'acqua',
  'pane',
  'sale',
  'carote',
  'cipolle'
]

//2.
// const addEl = prompt('Aggiungi cose da comprare');
// listEl.push(addEl);

//3.
let i = 0;
let message = "";

while(i < listEl.length){
  let spesa = listEl[i];
  message += `<li>${spesa}</li>`; i++;
  listGroup.innerHTML=message;
}
console.log(message);






