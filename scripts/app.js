document.querySelector('#LoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    var a = document.querySelector('#loginEmail').value;
    var b = document.querySelector('#loginPass').value;
    console.log(a, b);
    alertMessage('Added..!', 'alert-success')
})


// ==================================alerting for the authentication message======================================//
const alertMessage = (txt, cls) => {

    // getting the parent reference here
    const parent = document.querySelector('.modal-body');

    // adding before this class
    const before = document.querySelector('.slogan');

    // creating div here
    const div = document.createElement('div');

    // creating para here
    const parag = document.createElement('p');

    // adding class here
    parag.className = `text-center alert ${cls}`;

    // adding text content
    parag.textContent = txt;

    // appending para here
    div.appendChild(parag);

    // inserting div here
    parent.insertBefore(div, before);

    // removing the class here
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 2000);


}