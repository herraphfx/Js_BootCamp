

function insertRow(){
    let table = document.getElementById('sampleTable');
    
    let rows = document.createElement('tr');

    let cell1 = document.createElement('td');
    cell1.textContent = 'cell 1';
    rows.appendChild(cell1);

    let cell2 = document.createElement('td');
    cell2.textContent = 'cell 2';
    rows.appendChild(cell2);


    table.appendChild(rows);
}

//no working very well
function removeRow(){
    let table = document.getElementById('sampleTable');
    
    let rows = document.getElementsByTagName('tr')[0];

    let cell1 = document.getElementsByTagName('td');
    cell1.textContent = 'cell 1';
    rows.remove;

    let cell2 = document.getElementsByTagName('td');
    cell2.textContent = 'cell 2';
    rows.remove;


    table.remove(rows);
}