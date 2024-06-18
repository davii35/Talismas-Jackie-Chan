const talismans = document.querySelectorAll(".talisman");
const banner = document.getElementById("banner");
let talismanAtual;
let descricao;

function limpaBanner() {
    banner.innerHTML = "";
}

function removeInstrucao() {
    document.getElementById("instrucao").style.display = "none";
}

function exibeTalismanMaisTitulo(talismanSelecionado) {
    removeInstrucao();
    limpaBanner();
    banner.innerHTML = `<img src="src/image/${talismanSelecionado}.webp" alt="Talismã do ${talismanSelecionado}"><br><p class="selecionado__talisman-titulo">Talismã do ${talismanSelecionado}</p>`
}

function exibeDescricao(descricao) {
    banner.innerHTML += `<p class="selecionado__talisman-descricao">${descricao}</p>`
}

for (let i = 0; i < talismans.length; i++) {
    talismans[i].addEventListener("click", function () {
        switch (i) {
            case 0:
                talismanAtual = "galo";
                descricao = "Permite ao usuário levitar objetos e, caso seja usado junto com o do coelho, levitar a si mesmo e voar em grande velocidade. Foi encontrado na Bavária, Alemanha, no castelo do Rei Luis II (Ludwig II).";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 1:
                talismanAtual = "touro";
                descricao = "Amplia a força, capacitando o usuário a erguer coisas que pesam toneladas e potencializando seus ataques. Foi encontrado no México, na máscara do lutador mascarado El Toro Fuerte.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 2:
                talismanAtual = "serpente";
                descricao = "Quando ativado, o seu portador fica instantaneamente invisível. Foi encontrado no Brasil, em uma caverna próxima ao Rio Amazonas.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 3:
                talismanAtual = "coelho";
                descricao = "Aumenta a velocidade do portador. Foi encontrado nas Ilhas Galápagos, cravado na carapaça de uma tartaruga.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 4:
                talismanAtual = "ovelha";
                descricao = "Faz com que o usuário crie uma projeção astral, como um espírito que sai do corpo, sendo capaz de vagar por qualquer lugar sem ser visto ou sentido. Foi encontrado dentro de um caixote em um trem à caminho de Istambul, Turquia.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 5:
                talismanAtual = "dragao";
                descricao = "Dá a capacidade de controlar o fogo, fazendo-os sair pelas mãos ou até pelos olhos. Foi encontrado no Monte Vesúvio, na Itália.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 6:
                talismanAtual = "rato";
                descricao = " É capaz de dar vida a objetos inanimados, como estátuas e brinquedos. Foi encontrado nos Estados Unidos, mais especificamente em San Francisco.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 7:
                talismanAtual = "cavalo";
                descricao = "Cura qualquer ferimento ou feitiço maligno que esteja no possuidor do talismã. Foi encontrado no Polo Norte.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 8:
                talismanAtual = "macaco";
                descricao = "Transforma qualquer pessoa em um animal escolhido pelo portador do talismã. Algumas vezes o animal é aleatório. Foi encontrado na Micronésia, um pequeno grupo de ilhas no Oceano Pacífico.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 9:
                talismanAtual = "cachorro";
                descricao = "Faz com que o usuário se torne imortal enquanto estiver em posse do talismã, além de ter um tipo de rejuvenescimento na sua energia. Isso quer dizer que até mesmo um idoso ganha a disposição de um jovem com esse poder. Foi encontrado na Holanda, em um moinho de vento.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 10:
                talismanAtual = "porco";
                descricao = "Permite ao portador emitir pelos olhos raios de calor com grande poder de destruição. Curiosamente, também estava na Bavária, Alemanha.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break

            case 11:
                talismanAtual = "tigre";
                descricao = "Dá o controle sobre o Yin e o Yang, lados bom e mau de qualquer ser. Quando o talismã foi dividido ao meio seu poder tornou-se o de separar o lado bom e o lado mau de uma pessoa em dois seres. Foi encontrado nos Estados Unidos, de alguma forma ele foi parar em uma torta numa competição de quem comia mais.";
                exibeTalismanMaisTitulo(talismanAtual);
                exibeDescricao(descricao);
                break
        }
    })
}