

// Objetos
var jonas ={nome: "Teste 1", vitorias: 0, empates: 0, derrotas: 0,  pontos: 0};
var paulo ={nome: "Teste 2", vitorias: 0, empates: 0, derrotas: 0,  pontos: 0};
var bento ={nome: "Teste 3", vitorias: 0, empates: 0, derrotas: 0,  pontos: 0};

// Lista de jogadores
var jogadores = [jonas, paulo, bento];

// funcao para calcular os pontos de cada jogador
function calcularPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;    
}
// teste no console
jonas.pontos =  calcularPontos(paulo);
// console.log(paulo)


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
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "<td><button onClick='excluirNome(" + i + ")'>Excluir</button></td></tr>";
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

// adicionar novos jogadores na tabela
function adicionarJogador(){
    var jogador ={nome: "", vitorias: 0, empates: 0, derrotas: 0,  pontos: 0};
    var limpa = '';
    jogador.nome = (document.getElementById("nome").value);
    jogadores.push(jogador);

    // limpaar o input do nome apos inserir na lista 
    document.getElementById("nome").value = limpa;

    // mostra aaa tabela atualizazda
    seePointsInView(jogadores);
    
}

function excluirNome(i){
    var jogador = jogadores[i];
    this.jogadores.splice(i, 1);
    seePointsInView(jogadores);
    console.log(jogador);
}

// chamada das funçoes
seePointsInView(jogadores);
adicionarVitoria(jogadores);
excluirNome();