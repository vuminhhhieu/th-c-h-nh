let inputvalue = document.getElementById('nhap').value;
let buttonluu = document.getElementById('save');
let buttonxoa = document.getElementById('delete');
function saveData () {
    localStorage.setItem('name', inputvalue)
}