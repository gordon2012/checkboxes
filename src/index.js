require('file-loader?name=[name].[ext]!./index.html');
require('./style.css');

let selected = -1;

const boxes = document.querySelectorAll('.item input');
boxes.forEach((e,i) => {
    // console.log(i);
    e.addEventListener('click', () => handleClick(i));
});

function handleClick(box) {
    // console.log(i);

    // boxes[1].click();

    if(selected == -1) {
        selected = box;
        boxes[box].parentNode.classList.add('selected');
    } else {
        // for(let i = selected; i < box; i++) {
        //     boxes[i].click();
        // }

    }


}

//.forEach(e => e.addEventListener('click', handleCheck));




function handleCheck(e) {
    console.dir(this.parentNode);
    // e.currentTarget.firstElementChild.click();
}



