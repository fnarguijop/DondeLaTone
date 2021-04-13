
function addRemoveExtra(extra) {
    document.getElementById(extra.value).classList.toggle('d-none');
    document.getElementById('message').style.display = 'flex';
}