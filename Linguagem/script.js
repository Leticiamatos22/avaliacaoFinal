// Crie um array de frases para digitar
var phrases = [
    "Evolução dos projetos realizados em HTML e CSS"
  ];
  
  var typingText = document.getElementById("typing-text");
  
  // Função para exibir as frases com o efeito de digitação
  function typeWriter() {
    var i = 0;
    var j = 0;
    var currentPhrase = "";
 
  
    function type() {
      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase = phrases[i].substring(0, j++);
          typingText.innerHTML = currentPhrase;
        } 
        
  
        if (j > phrases[i].length) {
          isDeleting = true;
        }

  
        setTimeout(type, 100);
      }
    }
  
    type();
  }
  
  // Chame a função para iniciar a animação de digitação
  typeWriter();

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

