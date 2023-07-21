window.onload = function () {
  setTimeout(function () {
    document.querySelector(".loading").remove();
  }, 2900);
};

const audioPlayer = document.querySelector("audio");
audioPlayer.volume = 0.1;

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removerSelecaoDoPersonagem();

    personagem.classList.add("selecionado");

    alterarImagemPersonagemSelecionado(personagem);

    alterarNomePersonagemSelecionado(personagem);

    alterarDescricaoPersonagem(personagem);
  });
});

function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-descripton");
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

function alterarImagemFundoPersonagem(personagem) {
  const fundoPersonagem = document.querySelector(".fundo-personagem");
  const idPersonagem = personagem.id;
  fundoPersonagem.style.backgroundImage = `url(./src/imagens/${idPersonagem}bg.jpg)`;
}

const personagensbg = document.querySelectorAll(".personagem");
personagensbg.forEach((personagem) => {
  personagem.addEventListener("mouseover", () => {
    alterarImagemFundoPersonagem(personagem);
  });
});

personagens.forEach(personagem => {
  const audio = document.querySelector('audio');
  const nomePersonagem = personagem.id;
  const audioSrc = `./src/audio/${nomePersonagem}.mp3`;

  personagem.addEventListener('mouseover', () => {
    audio.src = audioSrc;
    audio.play();
  });
});
