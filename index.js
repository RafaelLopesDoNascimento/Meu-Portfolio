const button = document.getElementById('mostrarMenu');
const menu = document.getElementById('menu-js');

button.addEventListener('click', function() {
  if (menu.style.display == 'none') {
    menu.style.display = 'block'; // Exibe o menu ao clicar no botão
  } else {
    menu.style.display = 'none'; // Oculta o menu se já estiver visível
  }
});