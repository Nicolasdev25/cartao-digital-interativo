// 1. Selecionamos os elementos que você criou no HTML
const inputNome = document.getElementById('input-name');
const displayNome = document.getElementById('display-name');

// 2. Definimos um nome padrão para o cartão não começar vazio
displayNome.innerText = "Seu Nome Aqui";

// 3. Adicionamos o "ouvinte" para detectar quando você digita
inputNome.addEventListener('input', () => {
    
    // Se o input não estiver vazio, coloca o que foi digitado no h1
    if (inputNome.value.length > 0) {
        displayNome.innerText = inputNome.value;
    } else {
        // Se apagar tudo, volta o texto padrão
        displayNome.innerText = "Seu Nome Aqui";
    }
});