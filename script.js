window.onload = function() {
    var title = document.getElementById("title");
  
    // Adiciona a classe CSS para iniciar a animação
    title.classList.add("fade-in");
  };

  
  window.onload = function() {
    var character = document.getElementById("character");
    var balloon = document.getElementById("balloon");
  
    // Função para exibir o personagem e o balão
    function showCharacter() {
      character.classList.remove("hidden");
      balloon.classList.remove("hidden");
    }
  
    showCharacter(); // Exibe o personagem e o balão
  };

