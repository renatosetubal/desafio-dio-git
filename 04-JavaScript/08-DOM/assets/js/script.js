const bt = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];



function mudaClasses() {
    bt.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function mudaTexto() {
    if (body.classList.contains('dark-mode')) {
        bt.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return;
    }else{
        bt.innerHTML = "Dark Mode";
        h1.innerHTML = "Light Mode ON";
        return;
    }
}

function mudaModo() {
    mudaClasses();
    mudaTexto();

}

bt.addEventListener('click', mudaModo);
