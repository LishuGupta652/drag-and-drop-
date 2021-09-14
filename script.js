const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById('check')


const richestPeople = [
    'jeff bezos',
    'Bill Gates',
    'Warren',
    'Benard',
    'Carlos',
    'Amamcio',
    'Larry',
    'Mark',
    'Michael'
]

// store list items 
const listItems = [];

let dragStartIndex ;

createList();

// Inser5t list items into DOM
function createList() {
    [...richestPeople].forEach((person, index ) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `<span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></li>     
        </div>
        `;

        listItems.push(listItem);

        draggable_list.appendChild(listItem)

    } )
}
