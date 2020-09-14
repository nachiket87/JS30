export {}

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items: {}[] = [];

items = [{id: 1}, {id: 2}, 3]


function addItem(e: Event) {
  console.log(e);
  e.preventDefault();
}

addItems.addEventListener('submit', addItem);




// console.log(typeof(addItems)); is an object









