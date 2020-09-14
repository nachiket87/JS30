"use strict";
var addItems = document.querySelector('.add-items');
var itemsList = document.querySelector('.plates');
var items = [];
items = [{ id: 1 }, { id: 2 }, 3];
function addItem(e) {
    console.log(e);
    e.preventDefault();
}
addItems.addEventListener('submit', addItem);
// console.log(typeof(addItems)); is an object
