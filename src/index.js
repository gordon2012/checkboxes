require('file-loader?name=[name].[ext]!./index.html');
require('./style.css');

const array = ['milk', 'eggs', 'cheese', 'bread', 'bacon'];
const items = array.map( e => { return {text: e, done: false} });
const list = document.querySelector('.list');
let selected = -1;

function populateList() {
    list.innerHTML = items.map( (item,i) => `
        <div class="item">
            <input type="checkbox" id="item${i}" data-item="${i}" ${item.done ? 'checked' : ''}>
            <label for="item${i}">${item.text}</label>
        </div>
    `).join('');
}
populateList();

list.addEventListener('click', handleClick);

function handleClick(e) {
    if(!e.target.matches('input')) return;
    const i = e.target.dataset.item;
    items[i].done = !items[i].done;
    if(items[i].done) {
        if(e.shiftKey && selected != -1) {
            multiCheck(selected, i);

            selected = -1;
        } else {
            selected = i;
        }
    }
}

function multiCheck(fr, to) {
    if(to < fr) {
        let tmp = fr;
        fr = to;
        to = tmp;
    }
    for(let i = fr; i <= to; i++) {
        doCheck(i)
    }
    populateList();
}

function doCheck(i) {
    items[i].done = true;
}
