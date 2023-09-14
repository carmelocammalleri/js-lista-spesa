const listGroup = document.getElementById ('list');

//1.
const listEl = [
  'acqua',
  'pane',
  'sale',
  'carote',
  'cipolle',
  'carta igienica',
  'uova'
]

//2.
let i = 0;
let message = "";

//3.
while(i < listEl.length){
  let spesa = listEl[i];
  message += `<li>${spesa}</li>`; i++;
  listGroup.innerHTML=message;
}

//4.
console.log(message);






