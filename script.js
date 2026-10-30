// Passo 1: Selecionamos os elementos do HTML que vamos precisar interagir
const botaoMenu = document.getElementById('botaoMenu');
const barraLateral = document.getElementById('barraLateral');
const botaoFechar = document.getElementById('botaoFechar');

// Passo 2: Criamos a função para abrir o menu
botaoMenu.addEventListener('click', function() {
    // Adiciona a classe 'aberta' na barra lateral. O CSS faz o resto!
    barraLateral.classList.add('aberta'); 
});

// Passo 3: Criamos a função para fechar o menu
botaoFechar.addEventListener('click', function() {
    // Remove a classe 'aberta', e o CSS empurra a barra de volta para fora da tela
    barraLateral.classList.remove('aberta');
});