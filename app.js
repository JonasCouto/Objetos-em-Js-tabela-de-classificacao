// 1 declarar os jogadores em formato de objetos - testar no console log 
// 2 fazer a função para calcular os pontos dos jogadores - testar no console log.
// 2.1 declarar uma lista de jogadores para poder passar como parametreos para as proximas funçoes
// 3 fazer a funcao para mostrar na tela os jogadores e pontos utilizando as tags do HTML e os valores dos objetos - vai receber o parametro da lista de jogadores
// 4 fazer as funçoes que vai receber o i como parametro de cada jogador para funcionalidades dos botoes da tela 

// Objetos

var jonas ={nome: "Jonas", vitorias: 0, empates: 1, derrotas: 1,  pontos: 0};
var paulo ={nome: "Paulo", vitorias: 1, empates: 2, derrotas: 2,  pontos: 0};
var bento ={nome: "Bento", vitorias: 2, empates: 3, derrotas: 0,  pontos: 0};

// Lista de jogadores
var jogadores = [jonas, paulo, bento];
// console.log(jogadores);


// funcao para calcular os pontos de cada jogador
function calcularPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;    
}
// teste no console
jonas.pontos =  calcularPontos(paulo);
console.log(paulo)


function seePointsInView(jogadores) {
    var elemento = ""
    // montar a tabela
    for(var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td> " + jogadores[i].nome +"</td>";
        elemento += "<td> " + jogadores[i].vitorias +"</td>";
        elemento += "<td> " + jogadores[i].empates +"</td>";
        elemento += "<td> " + jogadores[i].derrotas +"</td>";
        elemento += "<td> " + jogadores[i].pontos +"</td>";
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota()'>Derrota</button></td></tr>";
    }
    
    // escrever na tabela
    var tabela = document.getElementById("tabelaJogadores")
    tabela.innerHTML = elemento;   
}

function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias ++;
    jogador.pontos = calcularPontos(jogador);
    seePointsInView(jogadores);
}

// chamada das funçoes
seePointsInView(jogadores);
adicionarVitoria(jogadores);