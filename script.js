"use strict";


/* =========================================================
   ELEMENTOS
========================================================= */

const startScreen =
    document.getElementById("startScreen");

const gameScreen =
    document.getElementById("gameScreen");

const startButton =
    document.getElementById("startButton");

const restartButton =
    document.getElementById("restartButton");

const playAgainButton =
    document.getElementById("playAgainButton");

const drawPlayAgainButton =
    document.getElementById("drawPlayAgainButton");

const themeToggle =
    document.getElementById("themeToggle");


const board =
    document.getElementById("ticTacToeBoard");

const cells =
    [
        ...document.querySelectorAll(
            ".board-cell"
        )
    ];


const turnSymbol =
    document.getElementById("turnSymbol");

const turnName =
    document.getElementById("turnName");

const gameStatus =
    document.getElementById("gameStatus");


const playerXCard =
    document.getElementById("playerXCard");

const playerOCard =
    document.getElementById("playerOCard");


const xCorrect =
    document.getElementById("xCorrect");

const oCorrect =
    document.getElementById("oCorrect");


/* QUESTÃO */

const questionModal =
    document.getElementById("questionModal");

const questionPlayer =
    document.getElementById("questionPlayer");

const modalPlayerSymbol =
    document.getElementById("modalPlayerSymbol");

const questionCategory =
    document.getElementById("questionCategory");

const questionText =
    document.getElementById("questionText");

const questionOptions =
    document.getElementById("questionOptions");

const answerFeedback =
    document.getElementById("answerFeedback");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackText =
    document.getElementById("feedbackText");

const continueQuestionButton =
    document.getElementById(
        "continueQuestionButton"
    );


/* RESULTADO */

const winnerModal =
    document.getElementById("winnerModal");

const winnerSymbol =
    document.getElementById("winnerSymbol");

const winnerTitle =
    document.getElementById("winnerTitle");

const winnerDescription =
    document.getElementById("winnerDescription");


const drawModal =
    document.getElementById("drawModal");


/* =========================================================
   CONDIÇÕES DE VITÓRIA
========================================================= */

const WINNING_COMBINATIONS = [

    [0, 1, 2],

    [3, 4, 5],

    [6, 7, 8],


    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],


    [0, 4, 8],

    [2, 4, 6]

];


/* =========================================================
   PERGUNTAS
========================================================= */

const QUESTIONS = [

    {
        category:
            "Absolutismo",

        question:
            "O Absolutismo foi caracterizado principalmente pela:",

        options: [
            "Concentração de poderes nas mãos do monarca",
            "Divisão total do poder entre camponeses",
            "Ausência completa de governos",
            "Substituição dos reis por assembleias populares em toda a Europa"
        ],

        answer: 0,

        explanation:
            "O Absolutismo esteve associado à concentração de grande autoridade política nas mãos dos monarcas."
    },


    {
        category:
            "Absolutismo",

        question:
            "Em qual período histórico o Absolutismo ganhou força na Europa?",

        options: [
            "Idade Moderna",
            "Pré-História",
            "Antiguidade Oriental",
            "Século XXI"
        ],

        answer: 0,

        explanation:
            "As monarquias absolutistas se fortaleceram principalmente durante a Idade Moderna."
    },


    {
        category:
            "Luís XIV",

        question:
            "Qual rei francês tornou-se um dos maiores símbolos do Absolutismo?",

        options: [
            "Luís XIV",
            "Carlos Magno",
            "Luís XVI exclusivamente",
            "Napoleão III"
        ],

        answer: 0,

        explanation:
            "Luís XIV, conhecido como Rei Sol, tornou-se um dos maiores símbolos das monarquias absolutistas."
    },


    {
        category:
            "Luís XIV",

        question:
            "Luís XIV governou qual reino?",

        options: [
            "França",
            "Inglaterra",
            "Portugal",
            "Prússia"
        ],

        answer: 0,

        explanation:
            "Luís XIV foi rei da França entre 1643 e 1715."
    },


    {
        category:
            "Versalhes",

        question:
            "O Palácio de Versalhes esteve diretamente associado ao governo de:",

        options: [
            "Luís XIV",
            "Henrique VIII",
            "João Calvino",
            "Martinho Lutero"
        ],

        answer: 0,

        explanation:
            "Versalhes tornou-se um grande símbolo do poder e da corte de Luís XIV."
    },


    {
        category:
            "Versalhes",

        question:
            "Uma função política da corte de Versalhes foi:",

        options: [
            "Aproximar e controlar parte da nobreza francesa",
            "Eliminar completamente a monarquia",
            "Transformar a França em uma república",
            "Criar o Parlamento inglês"
        ],

        answer: 0,

        explanation:
            "A vida da corte ajudava Luís XIV a manter membros da nobreza próximos à monarquia."
    },


    {
        category:
            "Thomas Hobbes",

        question:
            "Qual pensador escreveu a obra Leviatã?",

        options: [
            "Thomas Hobbes",
            "Nicolau Maquiavel",
            "João Calvino",
            "Galileu Galilei"
        ],

        answer: 0,

        explanation:
            "Thomas Hobbes publicou Leviatã em 1651."
    },


    {
        category:
            "Thomas Hobbes",

        question:
            "Para Thomas Hobbes, um Estado forte seria importante principalmente para:",

        options: [
            "Manter a ordem e evitar conflitos permanentes",
            "Eliminar qualquer forma de governo",
            "Impedir a existência de leis",
            "Substituir todas as instituições pela Igreja"
        ],

        answer: 0,

        explanation:
            "Hobbes defendia um poder soberano forte como forma de garantir ordem e segurança."
    },


    {
        category:
            "Maquiavel",

        question:
            "Qual obra é associada a Nicolau Maquiavel?",

        options: [
            "O Príncipe",
            "Leviatã",
            "Utopia",
            "Institutas da Religião Cristã"
        ],

        answer: 0,

        explanation:
            "O Príncipe é a obra mais conhecida de Nicolau Maquiavel."
    },


    {
        category:
            "Maquiavel",

        question:
            "Maquiavel analisou especialmente questões relacionadas:",

        options: [
            "Ao poder político e à manutenção do governo",
            "À astronomia moderna",
            "À anatomia humana",
            "À Reforma Católica exclusivamente"
        ],

        answer: 0,

        explanation:
            "Maquiavel tornou-se conhecido por suas análises sobre política, poder e governo."
    },


    {
        category:
            "Estado Nacional",

        question:
            "A formação dos Estados Nacionais esteve associada à:",

        options: [
            "Centralização do poder político",
            "Fragmentação cada vez maior de todos os reinos",
            "Ausência de fronteiras políticas",
            "Desaparecimento das monarquias"
        ],

        answer: 0,

        explanation:
            "A centralização política foi um dos processos fundamentais para a formação dos Estados Nacionais."
    },


    {
        category:
            "Estado Nacional",

        question:
            "Qual elemento contribuiu para a consolidação dos Estados Nacionais?",

        options: [
            "Criação de estruturas administrativas centralizadas",
            "Eliminação de qualquer governo central",
            "Desaparecimento dos impostos",
            "Fim das leis"
        ],

        answer: 0,

        explanation:
            "Os reis fortaleceram instituições administrativas para ampliar o controle sobre seus territórios."
    },


    {
        category:
            "Centralização",

        question:
            "A centralização monárquica reduziu principalmente o poder político de:",

        options: [
            "Parte dos senhores feudais",
            "Todos os comerciantes",
            "Todos os camponeses exclusivamente",
            "Os navegadores"
        ],

        answer: 0,

        explanation:
            "O fortalecimento dos reis limitou parte da autonomia política tradicional dos nobres feudais."
    },


    {
        category:
            "Centralização",

        question:
            "O fortalecimento dos reis europeus esteve relacionado ao declínio:",

        options: [
            "Da fragmentação política feudal",
            "Das cidades",
            "Do comércio europeu",
            "Da utilização de moedas"
        ],

        answer: 0,

        explanation:
            "A formação das monarquias nacionais reduziu a fragmentação política típica de muitas estruturas feudais."
    },


    {
        category:
            "Exército",

        question:
            "Os monarcas fortaleceram seu poder por meio da criação de:",

        options: [
            "Exércitos permanentes",
            "Exércitos totalmente independentes do Estado",
            "Governos sem forças militares",
            "Somente tropas religiosas"
        ],

        answer: 0,

        explanation:
            "A formação de exércitos permanentes ajudou os monarcas a reduzir sua dependência militar dos nobres."
    },


    {
        category:
            "Impostos",

        question:
            "A cobrança regular de impostos ajudava as monarquias porque:",

        options: [
            "Financiava o governo e o exército",
            "Eliminava completamente a administração pública",
            "Impedía qualquer atividade militar",
            "Substituía a moeda"
        ],

        answer: 0,

        explanation:
            "A arrecadação permitia financiar burocracia, guerras, exércitos e outras atividades do Estado."
    },


    {
        category:
            "Burocracia",

        question:
            "O desenvolvimento de uma burocracia real permitia:",

        options: [
            "Maior administração e controle do território",
            "Fim completo das leis",
            "Ausência de funcionários do governo",
            "Fragmentação imediata dos reinos"
        ],

        answer: 0,

        explanation:
            "Funcionários ligados à monarquia ajudavam a administrar impostos, leis e diferentes regiões."
    },


    {
        category:
            "Burguesia",

        question:
            "Por que parte da burguesia apoiou a centralização monárquica?",

        options: [
            "A unificação política podia favorecer comércio e segurança",
            "Desejava restaurar a fragmentação feudal",
            "Era contrária à utilização de moedas",
            "Queria eliminar todas as cidades"
        ],

        answer: 0,

        explanation:
            "Maior estabilidade, regras mais uniformes e segurança podiam beneficiar atividades comerciais."
    },


    {
        category:
            "Feudalismo",

        question:
            "A formação dos Estados Nacionais esteve relacionada historicamente ao:",

        options: [
            "Enfraquecimento de estruturas políticas feudais",
            "Fortalecimento absoluto da fragmentação feudal",
            "Retorno ao Império Romano antigo",
            "Fim das cidades"
        ],

        answer: 0,

        explanation:
            "O fortalecimento das monarquias ocorreu paralelamente ao enfraquecimento de várias estruturas políticas feudais."
    },


    {
        category:
            "Direito Divino",

        question:
            "A teoria do direito divino dos reis defendia que:",

        options: [
            "A autoridade do rei possuía fundamento religioso",
            "Todo rei deveria ser eleito diretamente pela população",
            "Nenhum monarca possuía autoridade política",
            "Os nobres eram superiores a qualquer rei"
        ],

        answer: 0,

        explanation:
            "Segundo essa justificativa, o poder do monarca estaria associado à vontade divina."
    },


    {
        category:
            "Jacques Bossuet",

        question:
            "Jacques Bossuet ficou conhecido por defender:",

        options: [
            "O direito divino dos reis",
            "O fim de toda monarquia",
            "O Calvinismo em Genebra",
            "A separação dos Estados Unidos"
        ],

        answer: 0,

        explanation:
            "Bossuet foi um importante defensor da teoria do direito divino e da autoridade monárquica."
    },


    {
        category:
            "França",

        question:
            "Qual país é frequentemente utilizado como exemplo clássico de monarquia absolutista?",

        options: [
            "França",
            "Estados Unidos",
            "Brasil republicano",
            "Grécia clássica"
        ],

        answer: 0,

        explanation:
            "A França de Luís XIV é um dos exemplos mais conhecidos do Absolutismo europeu."
    },


    {
        category:
            "Estados Nacionais",

        question:
            "Portugal, Espanha, França e Inglaterra passaram por processos relacionados à:",

        options: [
            "Formação e centralização de monarquias nacionais",
            "Eliminação definitiva de governos",
            "Formação de cidades-Estado gregas",
            "Criação do Império Romano"
        ],

        answer: 0,

        explanation:
            "Esses reinos passaram por diferentes processos de fortalecimento das monarquias e centralização política."
    },


    {
        category:
            "Península Ibérica",

        question:
            "Na Península Ibérica, a formação das monarquias nacionais esteve ligada também:",

        options: [
            "À expansão dos reinos cristãos durante a Reconquista",
            "À Revolução Industrial",
            "À independência dos Estados Unidos",
            "À queda de Constantinopla exclusivamente"
        ],

        answer: 0,

        explanation:
            "A Reconquista teve importância na formação de Portugal e na consolidação dos reinos que dariam origem à Espanha."
    },


    {
        category:
            "Monarquia",

        question:
            "No Absolutismo, o rei procurava concentrar funções relacionadas:",

        options: [
            "À administração, justiça e poder militar",
            "Somente à religião",
            "Somente ao comércio",
            "Exclusivamente à agricultura"
        ],

        answer: 0,

        explanation:
            "As monarquias absolutistas buscavam concentrar diferentes instrumentos de autoridade estatal."
    },


    {
        category:
            "Síntese",

        question:
            "Qual alternativa melhor relaciona Absolutismo e Estados Nacionais?",

        options: [
            "A centralização dos Estados favoreceu o fortalecimento das monarquias",
            "O Absolutismo dependia da fragmentação total do território",
            "Os Estados Nacionais eliminaram imediatamente todas as monarquias",
            "Os dois processos não possuem qualquer relação histórica"
        ],

        answer: 0,

        explanation:
            "A centralização do poder político e a formação dos Estados contribuíram para o fortalecimento das monarquias."
    },


    {
        category:
            "Síntese",

        question:
            "Qual conjunto apresenta elementos associados à formação dos Estados Nacionais?",

        options: [
            "Exército, impostos, burocracia e centralização",
            "Fragmentação, ausência de leis e fim dos impostos",
            "Politeísmo, cidades-Estado e faraós",
            "Internet, ferrovias e industrialização"
        ],

        answer: 0,

        explanation:
            "Exércitos permanentes, arrecadação, administração e centralização foram instrumentos importantes do fortalecimento estatal."
    },


    {
        category:
            "Sociedade",

        question:
            "A formação dos Estados Nacionais ocorreu de forma:",

        options: [
            "Gradual e diferente em cada região europeia",
            "Instantânea e idêntica em toda a Europa",
            "Exclusivamente durante o século XX",
            "Sem qualquer conflito"
        ],

        answer: 0,

        explanation:
            "Cada região europeia apresentou ritmos, conflitos e características próprias de centralização."
    },


    {
        category:
            "Poder político",

        question:
            "Uma característica central das monarquias absolutistas era a tentativa de:",

        options: [
            "Reduzir poderes políticos concorrentes ao poder real",
            "Aumentar a autonomia de todos os senhores feudais",
            "Eliminar qualquer autoridade do rei",
            "Criar democracias contemporâneas"
        ],

        answer: 0,

        explanation:
            "Os monarcas procuravam reduzir autonomias políticas que limitassem a autoridade da Coroa."
    },


    {
        category:
            "Economia",

        question:
            "O fortalecimento dos Estados Nacionais também permitiu aos governos:",

        options: [
            "Adotar políticas econômicas mais centralizadas",
            "Eliminar completamente o comércio",
            "Acabar com todas as moedas",
            "Proibir qualquer arrecadação"
        ],

        answer: 0,

        explanation:
            "Estados mais centralizados passaram a adotar políticas econômicas e fiscais de alcance mais amplo."
    }

];


/* =========================================================
   ESTADO
========================================================= */

let state = {

    board: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],

    currentPlayer:
        "X",

    correct: {
        X: 0,
        O: 0
    },

    selectedCell:
        null,

    questions:
        [],

    questionIndex:
        0,

    currentQuestion:
        null,

    answered:
        false,

    lastAnswerCorrect:
        false,

    gameOver:
        false

};


/* =========================================================
   UTILIDADES
========================================================= */

function shuffle(array) {

    const copy =
        [...array];


    for (
        let i =
            copy.length - 1;

        i > 0;

        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            copy[i],
            copy[j]
        ] =
        [
            copy[j],
            copy[i]
        ];

    }


    return copy;
}


/* =========================================================
   COMEÇAR
========================================================= */

function startGame() {

    state = {

        board: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],

        currentPlayer:
            "X",

        correct: {
            X: 0,
            O: 0
        },

        selectedCell:
            null,

        questions:
            shuffle(
                QUESTIONS
            ),

        questionIndex:
            0,

        currentQuestion:
            null,

        answered:
            false,

        lastAnswerCorrect:
            false,

        gameOver:
            false

    };


    startScreen.classList.add(
        "hidden"
    );


    gameScreen.classList.remove(
        "hidden"
    );


    questionModal.classList.add(
        "hidden"
    );


    winnerModal.classList.add(
        "hidden"
    );


    drawModal.classList.add(
        "hidden"
    );


    gameStatus.textContent =
        "Partida em andamento";


    renderBoard();

    updateInterface();


    window.scrollTo({

        top: 0,

        behavior:
            "smooth"

    });

}


/* =========================================================
   TABULEIRO
========================================================= */

function renderBoard() {

    cells.forEach(
        (cell, index) => {

            const value =
                state.board[
                    index
                ];


            cell.textContent =
                value;


            cell.classList.remove(
                "x-cell",
                "o-cell",
                "pending",
                "winning"
            );


            if (
                value === "X"
            ) {

                cell.classList.add(
                    "x-cell"
                );

            }


            if (
                value === "O"
            ) {

                cell.classList.add(
                    "o-cell"
                );

            }


            cell.disabled =
                value !== "" ||
                state.gameOver;

        }
    );

}


/* =========================================================
   CLIQUE
========================================================= */

cells.forEach(
    cell => {

        cell.addEventListener(
            "click",
            () => {

                if (
                    state.gameOver
                ) {

                    return;
                }


                const index =
                    Number(
                        cell.dataset.index
                    );


                if (
                    state.board[index] !==
                    ""
                ) {

                    return;
                }


                selectCell(
                    index
                );

            }
        );

    }
);


/* =========================================================
   SELECIONAR CASA
========================================================= */

function selectCell(
    index
) {

    state.selectedCell =
        index;


    cells[index]
        .classList
        .add(
            "pending"
        );


    openQuestion();

}


/* =========================================================
   PEGAR QUESTÃO
========================================================= */

function getNextQuestion() {

    if (
        state.questionIndex >=
        state.questions.length
    ) {

        state.questions =
            shuffle(
                QUESTIONS
            );


        state.questionIndex =
            0;

    }


    const question =
        state.questions[
            state.questionIndex
        ];


    state.questionIndex++;


    return question;

}


/* =========================================================
   ABRIR QUESTÃO
========================================================= */

function openQuestion() {

    state.currentQuestion =
        getNextQuestion();


    state.answered =
        false;


    state.lastAnswerCorrect =
        false;


    questionPlayer.textContent =
        `Jogador ${state.currentPlayer}`;


    modalPlayerSymbol.textContent =
        state.currentPlayer;


    modalPlayerSymbol
        .classList
        .toggle(
            "symbol-x",
            state.currentPlayer === "X"
        );


    questionCategory.textContent =
        state.currentQuestion
            .category;


    questionText.textContent =
        state.currentQuestion
            .question;


    questionOptions.innerHTML =
        "";


    answerFeedback
        .classList
        .add(
            "hidden"
        );


    answerFeedback
        .classList
        .remove(
            "correct-feedback",
            "incorrect-feedback"
        );


    continueQuestionButton
        .classList
        .add(
            "hidden"
        );


    const options =
        state.currentQuestion
            .options
            .map(
                (text, index) => ({

                    text,

                    correct:
                        index ===
                        state.currentQuestion
                            .answer

                })
            );


    shuffle(
        options
    ).forEach(
        option => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "option-button";


            button.textContent =
                option.text;


            button.addEventListener(
                "click",
                () => {

                    answerQuestion(
                        button,
                        option
                    );

                }
            );


            questionOptions.appendChild(
                button
            );

        }
    );


    questionModal.classList.remove(
        "hidden"
    );

}


/* =========================================================
   RESPONDER
========================================================= */

function answerQuestion(
    selectedButton,
    option
) {

    if (
        state.answered
    ) {

        return;
    }


    state.answered =
        true;


    const buttons =
        [
            ...questionOptions
                .querySelectorAll(
                    ".option-button"
                )
        ];


    buttons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    const correctText =
        state.currentQuestion
            .options[
                state.currentQuestion
                    .answer
            ];


    buttons.forEach(
        button => {

            if (
                button.textContent ===
                correctText
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        option.correct
    ) {

        state.lastAnswerCorrect =
            true;


        state.correct[
            state.currentPlayer
        ]++;


        selectedButton.classList.add(
            "correct"
        );


        feedbackTitle.textContent =
            "Resposta correta";


        feedbackText.textContent =
            `${state.currentQuestion.explanation} Sua marca será colocada no tabuleiro.`;


        answerFeedback.classList.add(
            "correct-feedback"
        );

    } else {

        state.lastAnswerCorrect =
            false;


        selectedButton.classList.add(
            "incorrect"
        );


        feedbackTitle.textContent =
            "Resposta incorreta";


        feedbackText.textContent =
            `${state.currentQuestion.explanation} A casa continuará vazia e o turno passará ao adversário.`;


        answerFeedback.classList.add(
            "incorrect-feedback"
        );

    }


    answerFeedback.classList.remove(
        "hidden"
    );


    continueQuestionButton
        .classList
        .remove(
            "hidden"
        );


    updateInterface();

}


/* =========================================================
   CONTINUAR
========================================================= */

continueQuestionButton
    .addEventListener(
        "click",
        () => {

            questionModal.classList.add(
                "hidden"
            );


            resolveMove();

        }
    );


/* =========================================================
   RESOLVER JOGADA
========================================================= */

function resolveMove() {

    const cellIndex =
        state.selectedCell;


    cells[cellIndex]
        .classList
        .remove(
            "pending"
        );


    /* SE ACERTOU, CONFIRMA */

    if (
        state.lastAnswerCorrect
    ) {

        state.board[
            cellIndex
        ] =
            state.currentPlayer;


        renderBoard();


        const win =
            getWinner();


        if (
            win
        ) {

            finishWithWinner(
                state.currentPlayer,
                win
            );

            return;
        }


        if (
            isBoardFull()
        ) {

            finishWithDraw();

            return;
        }

    }


    /* ERRANDO OU ACERTANDO,
       O TURNO SEMPRE PASSA */

    changeTurn();


    state.selectedCell =
        null;


    state.currentQuestion =
        null;


    state.answered =
        false;


    state.lastAnswerCorrect =
        false;


    updateInterface();

}


/* =========================================================
   TROCA DE TURNO
========================================================= */

function changeTurn() {

    state.currentPlayer =
        state.currentPlayer ===
        "X"
            ? "O"
            : "X";

}


/* =========================================================
   VERIFICAR VENCEDOR
========================================================= */

function getWinner() {

    for (
        const combination
        of WINNING_COMBINATIONS
    ) {

        const [
            a,
            b,
            c
        ] =
            combination;


        if (
            state.board[a] &&
            state.board[a] ===
                state.board[b] &&
            state.board[a] ===
                state.board[c]
        ) {

            return combination;

        }

    }


    return null;

}


/* =========================================================
   TABULEIRO CHEIO
========================================================= */

function isBoardFull() {

    return state.board.every(
        cell =>
            cell !== ""
    );

}


/* =========================================================
   VITÓRIA
========================================================= */

function finishWithWinner(
    player,
    combination
) {

    state.gameOver =
        true;


    combination.forEach(
        index => {

            cells[index]
                .classList
                .add(
                    "winning"
                );

        }
    );


    gameStatus.textContent =
        `Jogador ${player} venceu`;


    winnerSymbol.textContent =
        player;


    winnerSymbol.classList.toggle(
        "x-winner",
        player === "X"
    );


    winnerTitle.textContent =
        `Jogador ${player} venceu`;


    winnerDescription.textContent =
        `O Jogador ${player} conquistou três casas em sequência e venceu a disputa.`;


    setTimeout(
        () => {

            winnerModal
                .classList
                .remove(
                    "hidden"
                );

        },
        450
    );

}


/* =========================================================
   EMPATE
========================================================= */

function finishWithDraw() {

    state.gameOver =
        true;


    gameStatus.textContent =
        "Deu velha";


    setTimeout(
        () => {

            drawModal
                .classList
                .remove(
                    "hidden"
                );

        },
        350
    );

}


/* =========================================================
   INTERFACE
========================================================= */

function updateInterface() {

    turnSymbol.textContent =
        state.currentPlayer;


    turnName.textContent =
        `Jogador ${state.currentPlayer}`;


    turnSymbol.classList.toggle(
        "o-turn",
        state.currentPlayer === "O"
    );


    playerXCard.classList.toggle(
        "active",
        state.currentPlayer === "X"
    );


    playerOCard.classList.toggle(
        "active",
        state.currentPlayer === "O"
    );


    xCorrect.textContent =
        state.correct.X;


    oCorrect.textContent =
        state.correct.O;

}


/* =========================================================
   EVENTOS
========================================================= */

startButton.addEventListener(
    "click",
    startGame
);


playAgainButton.addEventListener(
    "click",
    startGame
);


drawPlayAgainButton.addEventListener(
    "click",
    startGame
);


restartButton.addEventListener(
    "click",
    () => {

        const confirmed =
            window.confirm(
                "Deseja reiniciar a partida?"
            );


        if (
            confirmed
        ) {

            startGame();

        }

    }
);


/* =========================================================
   TEMA
========================================================= */

function setTheme(
    theme
) {

    if (
        theme === "dark"
    ) {

        document.body
            .classList
            .add(
                "dark-theme"
            );


        themeToggle.textContent =
            "☀";

    } else {

        document.body
            .classList
            .remove(
                "dark-theme"
            );


        themeToggle.textContent =
            "☾";

    }


    localStorage.setItem(
        "tronoEstadoTheme",
        theme
    );

}


themeToggle.addEventListener(
    "click",
    () => {

        const isDark =
            document.body
                .classList
                .contains(
                    "dark-theme"
                );


        setTheme(
            isDark
                ? "light"
                : "dark"
        );

    }
);


/* =========================================================
   CARREGAR TEMA
========================================================= */

function loadTheme() {

    const saved =
        localStorage.getItem(
            "tronoEstadoTheme"
        );


    if (
        saved
    ) {

        setTheme(
            saved
        );

        return;
    }


    const prefersDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    setTheme(
        prefersDark
            ? "dark"
            : "light"
    );

}


loadTheme();