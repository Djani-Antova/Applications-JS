start()

function start() {
    const email = localStorage.getItem('email');
    if(email != null ) [
        document.getElementById('welcome').textContent = `Welcome back, ${email}!`
    ]
    document.getElementById('create_btn').addEventListener('click', postData);
    document.getElementById('save_btn').addEventListener('click', savePart);
    document.getElementById('load_btn').addEventListener('click', loadData);
    document.getElementById('table-body').addEventListener('click', tableAction);
    document.getElementById('cancel_btn').addEventListener('click', toggleEditors);
}
// Task 2: load and display
async function loadData() {
    const url = `http://localhost:3030/jsonstore/autoparts`;

    const response = await fetch(url);

    const data = await response.json();

    const rows = Object.values(data).map(createRow);
    document.getElementById('table-body').replaceChildren(...rows)
}

function createRow(record) {
    const element = document.createElement('tr');
    element.innerHTML = `
    <td>${record._id}</td>
    <td>${record.label}</td>
    <td>$ ${record.price}</td>
    <td>${record.qty}</td>
    <td>
        <button data-id="${record._id}" class='delete_btn'>Delete</button>
        <button data-id="${record._id}" class='edit_btn'>Edit</button>
    </td>`

    return element;
}

//Task 1: Post data
async function postData() {
    const label = document.getElementById('part_label').value;
    const price = Number(document.getElementById('part_price').value);
    const qty = Number(document.getElementById('part_qty').value);

    const partData = {
        label,
        price,
        qty
    };
    const url = `http://localhost:3030/jsonstore/autoparts`

    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(partData)
    }

    const response = await fetch(url, options);
    const result = await response.json();

    loadData()

}

// Task 3: Event delegation
function tableAction(event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        if (target.classList.contains('delete_btn')) {
            deleteRecord(target.dataset.id);
        } else if (target.classList.contains('edit_btn')) {
            loadForEditing(target.dataset.id)
        }
    }
}

//Task 4: Delete data
async function deleteRecord(recordId) {

    const choice = confirm('Are you sure?');
    if (choice === false) {
        return;
    }
    const url = `http://localhost:3030/jsonstore/autoparts/` + recordId;
    const options = {
        method: 'delete'
    };

    const response = await fetch(url, options);
    loadData()
}

//Task 5: Edit part
async function loadForEditing(recordId,) {
    const url = `http://localhost:3030/jsonstore/autoparts/` + recordId;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('editor_create').style.display = 'none';
    document.getElementById('editor_edit').style.display = 'block';

    document.getElementById('edit_part_id').value = data._id;
    document.getElementById('edit_part_label').value = data.label;
    document.getElementById('edit_part_price').value = data.price;
    document.getElementById('edit_part_qty').value = data.qty;

}

async function savePart() {
    const record = {}
    record._id = document.getElementById('edit_part_id').value
    record.label = document.getElementById('edit_part_label').value
    record.price = Number(document.getElementById('edit_part_price').value)
    record.qty = Number(document.getElementById('edit_part_qty').value)

    const url = `http://localhost:3030/jsonstore/autoparts/` + record._id;
    const options = {
        method: 'put',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(record)
    };

    const response = await fetch(url, options)
    const result = await response.json();

    loadData()
}

function toggleEditors() {
    document.getElementById('editor_create').style.display = 'block';
    document.getElementById('editor_edit').style.display = 'none';
}

