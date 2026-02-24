
const inputNome = document.getElementById('input-name');
const displayNome = document.getElementById('display-name');

displayNome.innerText = "Seu Nome Aqui";


inputNome.addEventListener('input', () => {
    
    // Se o input não estiver vazio, coloca o que foi digitado no h1
    if (inputNome.value.length > 0) {
        displayNome.innerText = inputNome.value;
    } else {
        // Se apagar tudo, volta o texto padrão
        displayNome.innerText = "Seu Nome Aqui";
    }
});