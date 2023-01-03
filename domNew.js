//var mainHead = document.querySelector('#main-header');
//mainHead.style.border = 'solid 10px red';
//
//let inputText = document.querySelector('input');
//inputText.value = 'Jaan';
//
//let submit = document.querySelector('input[type="submit"]');
//submit.value = "SEND"; 
//
//const items = document.querySelector('.list-group');
//items.style.color = 'red';
//const itemsLast = document.querySelector('.list-group-item:last-child');
//itemsLast.style.color = 'yellow';
//
//const titles = document.querySelectorAll('.title');
//titles[1].textContent = "Hello";
//console.log(titles);
//
////const odd = document.querySelectorAll('li:nth-child(odd)');
//////const even = document.querySelectorAll('li:nth-child(even//)');
//
//for (let i = 0; i < odd.length; i++) {
//    odd[i].style.backgroundColor = 'red';//
//    even[i].style.backgroundColor = 'blue';
//}

//const itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = "skyBlue";
//console.log(itemList.parentNode.parentNode);
//itemList.parentNode.parentNode.style.borderBottom = "solid 5px blue"

//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'pink';
//itemList.children[1].textContent = "Nini Color";
//itemList.children[2].style.backgroundColor = 'lightYellow';
//itemList.children[2].textContent = "Pet Pet Color"
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.style.backgroundColor = "skyBlue";
//itemList.firstElementChild.textContent = "Jaan Color";
//
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.style.backgroundColor = "lavender";
//itemList.lastElementChild.textContent = "Love Sucks Sometime Chai";
//
//console.log(itemList.nextElementSibling);
//
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = "blue"

//Creation of "div"
//const newDiv = document.createElement('div');
//
////Adding Class into it
//newDiv.className = "Jaan";
//
////Add ID into it
//newDiv.id = "Nini";
//
////Add attribute
//newDiv.setAttribute('title', 'Jaan Nini');
//
////Creat text node
//const newDivText = document.createTextNode('Nini World')
//
//// Add text to div
//newDiv.appendChild(newDivText);
//
//const container = document.querySelector('#main-header .container');
//const h1 = document.querySelector('#main-header h1');
//
//console.log(newDiv);
//
//container.insertBefore(newDiv, h1);


//const button = document.querySelector('#button');
//button.addEventListener('click', buttonClick);
//
//function buttonClick(e) {
    //console.log("Butter Chicken");
    //document.getElementById('header-title').textContent = 'Maloze Pet Pet';
    //document.querySelector('#main').style.backgroundColor = "lightPink";
    //console.log(e.target);
    //console.log(e.target.id);
    //console.log(e.target.className);
    //console.log(e.target.classList);

    //const output = document.querySelector('#output');
    //output.innerHTML = '<h3>' + e.target.id + '</h3>';

    //console.log(e.type)

    //console.log(e.clientX, e.clientY);

    //console.log(e.offsetX, e.offsetY);

    //console.log(e.altKey, e.ctrlKey);
//}

//const button = document.querySelector('#button');
//const box = document.querySelector('#box');


//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);
//`
//`box.addEventListener('mouseenter', runEvent);
//`box.addEventListener('mouseleave', runEvent);
//`
//`box.addEventListener('mouseover', runEvent);
//`box.addEventListener('mouseout', runEvent);
//`

//box.addEventListener('mousemove', runEvent);

//const itemInput = document.querySelector('#item');
//const form = document.querySelector('form');
//const select = document.querySelector('select');

//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);

//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);

//itemInput.addEventListener('copy', runEvent);
//itemInput.addEventListener('paste', runEvent);

//itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);
//form.addEventListener('submit', runEvent);
//
//function runEvent(e) {
//    e.preventDefault();
//    console.log('EVENT TYPE:'  + e.type);
//
//    console.log(e.target.value);
//    //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
    //output.innerHTML = '<h3>MouseX: '+ e.offsetX + '</h3><h3>MouseY: '
    //+e.offsetY+'</h3>';

    //document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
//}


const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//Add item Function
function addItem(e) {
    e.preventDefault();

 //Get input value
 const newItem = document.querySelector('#item').value;
 
 //Create new li elements
 const li = document.createElement('li');

 //Add class
 li.className = 'list-group-item';

// Add text node with input value
li.appendChild(document.createTextNode(newItem));

// create del btn
const dltBtn = document.createElement('button');

//Add claases to del button
dltBtn.className = 'btn btn-danger btn-sm float-right delete';

//Append text node
dltBtn.appendChild(document.createTextNode('X'));

//Append butto to li
li.appendChild(dltBtn);

itemList.appendChild(li);
}

//remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    const text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item) {
        const itemsName = item.firstChild.textContent;
    if (itemsName.toLocaleLowerCase().indexOf(text) != -1) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
    });
    
}