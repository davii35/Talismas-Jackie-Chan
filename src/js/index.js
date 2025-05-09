const talismanImg = document.querySelector(".talisman-selecionado__img");
const talismanNome = document.querySelector(".talisman-selecionado__nome");
const talismanDescricao = document.querySelector(".talisman-selecionado__descricao");
const listaTalismans = document.querySelector(".lista-talismans");

const talismansDados = {
  1: {
    nome: "Talisman do Galo",
    descricao: "Dá ao usuário domínio sobre a levitação, tanto de objetos quanto de seu próprio corpo. Foi encontrado na Bavária, Alemanha, no castelo do Rei Luis II (Ludwig II)."
  },
  2: {
    nome: "Talisman do Touro",
    descricao: "Amplia a força, permitindo o usuário erguer coisas que pesam toneladas e potencializando seus ataques. Foi encontrado no México, na máscara do lutador mascarado El Toro Fuerte."
  },
  3: {
    nome: "Talisman da Serpente",
    descricao: "Quando ativado, o seu portador fica instantaneamente invisível. Foi encontrado no Brasil, em uma caverna próxima ao Rio Amazonas."
  },
  4: {
    nome: "Talisman do Coelho",
    descricao: "Aumenta a velocidade do portador. Foi encontrado nas Ilhas Galápagos, cravado na carapaça de uma tartaruga."
  },
  5: {
    nome: "Talisman da Ovelha",
    descricao: "Faz com que o usuário crie uma projeção astral, como um espírito que sai do corpo, sendo capaz de vagar por qualquer lugar sem ser visto ou sentido. Foi encontrado dentro de um caixote em um trem à caminho de Istambul, Turquia."
  },
  6: {
    nome: "Talisman do Dragão",
    descricao: "Dá a capacidade de controlar o fogo, fazendo-os sair pelas mãos ou até pelos olhos. Foi encontrado no Monte Vesúvio, na Itália."
  },
  7: {
    nome: "Talisman do Rato",
    descricao: "É capaz de dar vida a objetos inanimados, como estátuas e brinquedos. Foi encontrado nos Estados Unidos, mais especificamente em San Francisco."
  },
  8: {
    nome: "Talisman do Cavalo",
    descricao: "Cura qualquer ferimento ou feitiço maligno que esteja no possuidor do talismã. Foi encontrado no Polo Norte."
  },
  9: {
    nome: "Talisman do Macaco",
    descricao: "Transforma qualquer pessoa em um animal escolhido pelo portador do talismã. Algumas vezes o animal é aleatório. Foi encontrado na Micronésia, um pequeno grupo de ilhas no Oceano Pacífico."
  },
  10: {
    nome: "Talisman do Cachorro",
    descricao: "Enquanto possuir o talisman, o usuário terá imortalidade. Além disso, rejuvenesce sua energia e vitalidade. Foi encontrado na Holanda, em um moinho de vento."
  },
  11: {
    nome: "Talisman do Porco",
    descricao: "Permite ao portador emitir pelos olhos raios de calor com grande poder de destruição. Curiosamente, também estava na Bavária, Alemanha."
  },
  12: {
    nome: "Talisman do Tigre",
    descricao: 'Dá equilíbrio espiritual ao seu usuário, o fazendo controlar seu lado bom e mau. Mas, no desenho o talismã se partiu ao meio, dando a capacidade de separar o Yin e o Yang do usuário. Foi encontrado em uma competição de "quem come mais torta", nos Estados Unidos.'
  }
};

function identificaClique(target) {
    if (target.classList.contains("talisman")) {
        const indice = target.parentElement.style.getPropertyValue("--indice-talisman")
        exibeTalisman(indice);
    } else {}
}

window.addEventListener("click", (event) => {
    identificaClique(event.target);
})