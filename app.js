// 1 declarar os jogadores em formato de objetos - testar no console log 
// 2 fazer a função para calcular os pontos dos jogadores - testar no console log.
// 2.1 declarar uma lista de jogadores para poder passar como parametreos para as proximas funçoes
// 3 fazer a funcao para mostrar na tela os jogadores e pontos utilizando as tags do HTML e os valores dos objetos - vai receber o parametro da lista de jogadores
// 4 fazer as funçoes que vai receber o i como parametro de cada jogador para funcionalidades dos botoes da tela 

// Objetos

var jonas ={nome: "Jonas", vitorias: 0, empates: 0, derrotas: 0,  pontos: 0};
var paulo ={nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0,  pontos: 0};
var bento ={nome: "Bento", vitorias: 0, empates: 0, derrotas: 0,  pontos: 0};

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
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate( " + i + " )'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
    }
    
    // escrever na tabela
    var tabela = document.getElementById("tabelaJogadores")
    tabela.innerHTML = elemento;   
}

// Adiciona vitoria e soma pontos
function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias ++;
    jogador.pontos = calcularPontos(jogador);
    seePointsInView(jogadores);
}

// adiciona derrotas e soma o ponto do empate
function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates ++;
    jogador.pontos =  calcularPontos(jogador);
    seePointsInView(jogadores);

}
// adiciona as derrotas de cada jogador
function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas ++;~
    seePointsInView(jogadores);
}

function adicionarJogador(){
    var jogador ={nome: "", vitorias: 0, empates: 0, derrotas: 0,  pontos: 0};
    jogador.nome = (document.getElementById("nome").value);
    jogadores.push(jogador);
    seePointsInView(jogadores);
    console.log (jogadores)
}


// chamada das funçoes
seePointsInView(jogadores);
adicionarVitoria(jogadores);