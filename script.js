const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em um belo dia em cwb city, você esta saindo normamente do colegio . Assim que empurra a porta de saida se depara com o marquinhos, um super corredor de stock car, ele em seguida vendo que ficou muito admirado com ele, te oferece uma carona, oque voce responde a ele?",
        alternativas: [
            {
                texto: "claro!vamo mete marcha",
                afirmacao: "1-gosto de aventuras duvidosas"
            },
            {
                texto: "não, to de boa e vou ape",
                afirmacao: "1-burro pra kct é o marquinho mano"
            }
        ]
    },
    {
        enunciado: "quando vcs estão de role, ele pergunta se tu sabe dirigir(obs:voces estão em uma porsche 911 gt3rs) oq vc responde?",
        alternativas: [
            {
                texto: "não sei dirigir, ninguem me esinou",
                afirmacao: "2-meu Deus que mlk hj em dia nao sabe dirigir?"
            },
            {
                texto: "obvio que sei irmão",
                afirmacao: "2-boa mlk pelo menos isso ne?"
            }
        ]
    },
    {
        enunciado: "ele encosta a porsche e diz, então blza vamos ver,oque você faz?",
        alternativas: [
            {
                texto: "entra no banco do motorista e mete marcha",
                afirmacao: "3-agora o mlk tem moral em"
            },
            {
                texto: "da uma desculpa e nao vai",
                afirmacao: "3-decepçao nao serve nem pra da um acelero"
            }
        ]
    },
    {
        enunciado: "ele vendo que voce dirige muito bem te convida para um treino classificatorio da copa pistão, oq voce faz?",
        alternativas: [
            {
                texto: "falo que vou pq o pai é o toque",
                afirmacao: "4-aproveita as oportunidaes"
            },
            {
                texto: "falo que não pq tenho medo de velocidade",
                afirmacao: "4-que geraçao perdida pqp"
            }
        ]
    },
    {
        enunciado: "voce então corre na copa pistao e termina em 1 lugar e então o marquinhos te oferece uma vaga na rust-eze oq voce diz?",
        alternativas: [
            {
                texto: "nhe não to muito afim",
                afirmacao: "5-a oportunidade que tu deixou passar, voce e muito burro"
            },
            {
                texto: "katchau!! vam bora",
                afirmacao: "5-boa guri tu é monstro"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Piston Cup";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();