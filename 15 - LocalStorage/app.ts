export {}
const addItems = document.querySelector('.add-items');
const itemsList: HTMLUListElement= document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];



function addItem(e: Event) {
  e.preventDefault(); // prevent reload of page which is default for form subission (submit button)

  const text: string = (this.querySelector('[name=item]')).value
  
  let item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(item))
  this.reset();
}

const populateList = (plates = [], platesList: HTMLUListElement) => {
  platesList.innerHTML = plates.map((plate, i: number)  => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id=item${i} ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
    `
  }).join("");

}
addItems.addEventListener('submit', addItem);
populateList(items, itemsList);













