/*  Week 10 - DOM Coding Assignment
**  Author: Bob Ruzga
**  Date: june 29,2024 
**
**  Coding Steps:
Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
    A Bootstrap styled table representing your choice of data.
    A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
*/

let id = 0;

document.getElementById('addMusic').addEventListener('click', () => {
    let table = document.getElementById('mTable1');
    let row = table.insertRow(1);
    row.setAttribute('rowId', `item-${id}`);
    row.insertCell(0).innerHTML = id + 1;
    row.insertCell(1).innerHTML = document.getElementById('genreId').value;
    row.insertCell(2).innerHTML = document.getElementById('bandId').value;
    row.insertCell(3).innerHTML = document.getElementById('albumId').value;
    let rowAction = row.insertCell(4);
    rowAction.appendChild(createRemoveBtn(id++));
    document.getElementById('genreId').value = ' ';
    document.getElementById('bandId').value = ' ';
    document.getElementById('albumId').value = ' ';
    })

function createRemoveBtn(id) {
    let rmBtn = document.createElement('button');
    rmBtn.className = 'btn btn-primary';
    rmBtn.id = id;
    rmBtn.innerHTML = 'Remove';
    rmBtn.onclick = () => {
        console.log(`Removing row with id: item-${id}`);
        let elementToRemove = document.getElementById(`item-${id}`);
        console.log(elementToRemove);
        elementToRemove.parentNode.removeChild(elementToRemove);
    };
    return rmBtn;

}