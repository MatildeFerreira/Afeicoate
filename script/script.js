// afeiçoa-te // 2021/22 // Design de Interação Web e Jogos //Matilde Ferreira //

//Declarar variáveis globais
let DadosUtilizador;
let nrPergunta;
let Pergunta;
let Respostas = [];
let NrRespostas;
let perguntas = [];
let respostas = [];
let op1 = [];
let op2 = [];
let op3 = [];
let op4 = [];
let op5 = [];
let op6 = [];
let op1R;
let op1V;
let op1O;
let op2R;
let op2V;
let op2O;
let op3R;
let op3V;
let op3O;
let op4R;
let op5R;
let op6R;
let UNome;
let UEtapa;
let UPergunta;
let op;
let json;
let check = false;
let Answers = [];
let NrAnimal = 1;
console.log(document.location.pathname);
//----------------------------------------------------------------LOG IN---------------------------------------------------------------
//Se o utilizador estiver na página do login
if (document.location.pathname === "https://whiteraaven.github.io/Afeicoate/index.html") {

    //checboxes
    $("#memorizar").on("click", function () {
        $(".checkm").css("display", "block");
    });

    $("#sessao").on("click", function () {
        $(".checks").css("display", "block");
    });

    $(".checkm").on("click", function () {
        $(".checkm").css("display", "none");
    });

    $(".checks").on("click", function () {
        $(".checks").css("display", "none");
    });

    DadosUtilizador = localStorage.getItem("Utilizador");

    //Verificar se já existe um utilizador em local storage
    if (DadosUtilizador != null) {

        //Se existirem, ir para a home page (skip login)
        location.href = '/home.html'
    }
};

//Se o utilizador clicar em iniciar sessão
$("#iniciarsessao").on("click", function () {

    //Se o Nome for Preenchido
    if ($("#email").val() != "") {

        //Botão muda de cor
        $("#iniciarsessao").animate({
            backgroundColor: "rgb(222,27,0,1)"
        }, 250);

        //Guardar utilizador
        let DadosUtilizador = ({
            "Utilizador": {
                Nome: $("#email").val(),
                Etapa: "1",
                Pergunta: "0",
                Answers: []
            }
        });

        localStorage.setItem("Utilizador", JSON.stringify(DadosUtilizador));

        //Elementos desaparecem
        setTimeout(function () {
            $("#LogIn").animate({
                marginTop: "-10vh",
                opacity: 0
            }, 500);

            $("#base").animate({
                marginTop: "25vh",
                opacity: 0
            }, 500);
        }, 500);

        setTimeout(function () {
            $("#basefake").css("display", "block");
            $("#basefake").animate({
                bottom: "0vh"
            }, 500);
        }, 1000)

        //Ir para Página principal
        setTimeout(function () {
            location.href = 'home.html'
        }, 1500);
    }
});

//----------------------------------------------------------------Home Page---------------------------------------------------------------
//Se o utilizador estiver na página principal // Home Page Dinâmica consoante etapa
if (document.location.pathname === "home.html") {

    DadosUtilizador = localStorage.getItem("Utilizador");
    DadosUtilizador = JSON.parse(DadosUtilizador);

    //Verificar se existem utilizadores em local storage
    if (DadosUtilizador === null) {

        //Se não existirem voltar à página de login
        location.href = 'index.html'

    } else {
        //Se existirem 

        //Retirar do local storage o nome do utilizador, e a etapa em que está
        $.each(DadosUtilizador, function (index, value) {
            //Alterar balão de fala com o nome do utilizador
            $("#Greeting").html("Olá " + value.Nome + "!");

            //Se estiver na Etapa 1 -> Teste de aptidão à adoção
            if (value.Etapa === "1") {
                $("#PrimeiroP").html("Primeiro, preciso de verificar que estás preparada para adotar.");
                $("#SegundoP").html("Podes consultar o nosso guia do lado esquerdo antes de testares os teus conhecimentos!");
                $(".bprincipal").html("Testar aptidão à adoção");

                //Se estiver na Etapa 2-> Formulário compatibilidade
            } else if (value.Etapa === "2") {
                $("#PrimeiroP").html("Está na altura de descobrirmos o teu companheiro de quatro patas! Tenho a certeza que o vais adorar.");
                $("#SegundoP").html("");
                $(".bprincipal").html("Encontra o teu companheiro");
                $(".bprincipal").attr('id', "encontrar");
                //Se estiver na Etapa 3 -> Escolher gato
            } else if (value.Etapa === "3") {
                $("#PrimeiroP").html("Já encontraste os gatinhos compatíveis contigo, está na altura de escolheres um!");
                $("#SegundoP").html("");
                $(".bprincipal").html("Escolhe o teu gatinho");
                $(".bprincipal").attr('id', "escolher");
            } else {
                $("#PrimeiroP").html("Já podes contactar a associação onde está a Marta para a adotares! Espero que sejam muito felizes juntas!");
                $("#SegundoP").html("");
                $(".bprincipal").html("A Marta");
                $(".bprincipal").attr('id', "Animal");
                $("#terceiro").css("display", "block");
                $(".bprincipal3").css("display", "block");
            }
        });
    }
};

//Se o utilizador clicar em Testar Aptidão
$("#testaraptidao").on("click", function () {


    //Botão muda de cor
    $("#testaraptidao").animate({
        backgroundColor: "rgb(222,27,0,1)"
    }, 250);


    //Elementos desaparecem
    setTimeout(function () {
        $(".bprincipal").animate({
            opacity: 0,
            marginTop: "5vh"
        }, 500);

        $(".speech-bubble").animate({
            opacity: 0
        }, 500);

        $("menu").animate({
            opacity: 0
        }, 500);

    }, 500);

    setTimeout(function () {
        $("#cat").animate({
            opacity: 0
        }, 500);
    }, 1000);

    //Ir para página de teste de aptidão à adoção
    setTimeout(function () {

        location.href = 'teste-aptidao-adocao.html'

    }, 1500);

});
//----------------------------------------------------------------Teste Aptidão---------------------------------------------------------------
//Se o utilizador estiver na página do teste de adoção
if (document.location.pathname === "teste-aptidao-adocao.html") {

    DadosUtilizador = localStorage.getItem("Utilizador");
    DadosUtilizador = JSON.parse(DadosUtilizador);
    json = "script/teste.json";

    //Verificar se existem utilizadores em local storage
    if (DadosUtilizador === null) {

        //Se não existirem voltar à página de login
        location.href = 'index.html'

    } else {
        //Verificar qual o número da pergunta em que está o utilizador
        $.each(DadosUtilizador, function (index, value) {

            //Variável com o nr da Pergunta em que o utilizador está
            nrPergunta = value.Pergunta;

            //Variável com o nr da Etapa em que o utilizador está    
            UEtapa = value.Etapa;
        });
        //Verificar se o utilizador está na etapa 1
        if (UEtapa === "1") {

            //Se estiver
            //Carregar pergunta em que o utilizador está
            LoadPergunta(nrPergunta, json);

            nrPergunta = parseInt(nrPergunta);
            //Atualizar progresso da pergunta em que o utilizador está
            $("#info").html(nrPergunta + 1 + " de 15");

            //Se não estiver voltar a página inicial
        } else {
            location.href = 'home.html'
        }
    };
};

//Quando o utilizador responde a uma pergunta
$(".bsecundario").on("click", function () {
    $(".bsecundario").css("background-color", "rgb(255,135,135)");

    //Botão muda de cor
    $(this).animate({
        backgroundColor: "rgb(255,89,89,1)"
    }, 250);

    //Animação dos elementos a desaparecerem

    setTimeout(function () {
        $("#basehigh").animate({
            paddingTop: "10vh"
        }, 500);

        $(".bsecundario, .speech-bubble-teste").animate({
            opacity: 0,
        }, 500);
    }, 500);

    op = this.id;

    setTimeout(function () {

        //Encontrar a opção escolhida pelo utilizador
        if (op === "op1") {
            //Se for correta, avançar para a próxima pergunta
            if (op1V === "Certo") {
                json = "script/teste.json";
                Correta(json);

                //Se for errada, página de conselho
            } else if (op1V === "Errado") {
                Errada("op1");

            } else if (op1V === undefined) {
                json = "script/encontrar.json";
                Correta(json);
            }

        } else if (op === "op2") {
            if (op2V === "Certo") {
                json = "script/teste.json";
                Correta(json);

            } else if (op2V === "Errado") {
                Errada("op2");

            } else if (op2V === undefined) {
                json = "script/encontrar.json";
                Correta(json);
            }

        } else if (op === "op3") {
            if (op3V === "Certo") {
                json = "script/teste.json";
                Correta(json);

            } else if (op3V === "Errado") {
                Errada("op3");

            } else if (op3V === undefined) {
                json = "script/encontrar.json";
                Correta(json);
            }
        } else {
            json = "script/encontrar.json";
            Correta(json);
        }

    }, 1000);
});


//Carregar pergunta
function LoadPergunta(pNrPergunta, pJson) {
    op1 = [];
    op2 = [];
    op3 = [];
    op4 = [];
    op5 = [];
    op6 = [];

    $("#op3, #op4, #op5, #op6").css("display", "none");
    $("button").css("width", "100%");

    $(document).ready(function () {
        $.getJSON(pJson, function (teste) {
            $.each(teste, function (key, val) {
                //Popular array com todas as perguntas
                perguntas.push(key);

                //Popular arry com todas as respostas
                respostas.push(val);

            });

            //Variável com a pergunta em que o utilizador está
            Pergunta = perguntas[pNrPergunta];

            //Variável com as respostas da pergunta em que o utilizador está
            Respostas = respostas[pNrPergunta];
            Respostas = Respostas[0];

            //Variável com o número de respostas possíveis para a pergunta em que o utilizador está 
            NrRespostas = Object.keys(Respostas).length;

            //Valores da primeira opção de resposta
            op1.push(Object.values(Respostas)[0]);
            op1 = op1[0];
            //Resposta da opção 1
            op1R = Object.values(op1[0])[0];

            //Valor da opção 1 (Certo ou Errado)
            op1V = Object.values(op1[0])[1];

            //Se for errada a opção tem um output
            if (op1V === "Errado") {
                //Output da opção 1
                op1O = Object.values(op1[0])[2];
            }

            //Valores da segunda opção de resposta
            op2.push(Object.values(Respostas)[1]);
            op2 = op2[0];

            //Resposta da opção 2
            op2R = Object.values(op2[0])[0];

            //Valor da opção 2 (Certo ou Errado)
            op2V = Object.values(op2[0])[1];

            //Se for errada a opção tem um output
            if (op2V === "Errado") {
                //Output da opção 2
                op2O = Object.values(op2[0])[2];
            }

            //Se existir uma terceira opção de resposta
            if (NrRespostas >= 3) {
                //Mostrar três botões
                $("#op3").css("display", "block");

                //Valores da terceira opção de resposta
                op3.push(Object.values(Respostas)[2])
                op3 = op3[0];

                //Resposta da opção 3
                op3R = Object.values(op3[0])[0];

                //Valor da opção 3 (Certo ou Errado)
                op3V = Object.values(op3[0])[1];

                //Se for errada a opção tem um output
                if (op3V === "Errado") {

                    //Output da opção 3
                    op3O = Object.values(op3[0])[2];;
                }
            };

            if (NrRespostas === 6) {
                $("button").css("width", "48%");
                $("#op4, #op5, #op6").css("display", "block");

                op4.push(Object.values(Respostas)[3])
                op4 = op4[0];
                op4R = Object.values(op4[0])[0];

                op5.push(Object.values(Respostas)[4])
                op5 = op5[0];
                op5R = Object.values(op5[0])[0];

                op6.push(Object.values(Respostas)[5])
                op6 = op6[0];
                op6R = Object.values(op6[0])[0];
            };

            //Alterar fala do gato
            $(".speech-bubble-teste #PrimeiroP").html(Pergunta);

            //Alterar opções de resposta
            $("#op1").html(op1R);
            $("#op2").html(op2R);
            $("#op3").html(op3R);
            $("#op4").html(op4R);
            $("#op5").html(op5R);
            $("#op6").html(op6R);

            if (pNrPergunta > 0) {
                $("#anterior").css("display", "block");
            };
        });
    });
}
//Pergunta Correta -> Atualizar dados
function Correta(pjson) {
    //Buscar dados do utilizador ao local storage
    DadosUtilizador = localStorage.getItem("Utilizador");
    DadosUtilizador = JSON.parse(DadosUtilizador);

    $.each(DadosUtilizador, function (index, value) {
        UNome = value.Nome;
        UEtapa = value.Etapa;
        UPergunta = parseInt(value.Pergunta);
        UAnswers = value.Answers;
    });

    //Se já não houver perguntas -> Passa para a próxima etapa
    if (UPergunta >= 14) {

        LayoutExit();
        if (json === "script/teste.json") {

            $(".bprincipal2").html("Continuar");
            $(".speech-bubble-teste #Greeting").css("display", "block");
            $(".speech-bubble-teste #Greeting").html("Parabéns " + UNome + "!");
            $(".speech-bubble-teste #PrimeiroP").html("Estás apta a adotar de forma responsável. Agora vou ajudar-te a encontrares o teu gatinho!");

            //Atualizar o nr da Etapa em que o utilizador está
            DadosUtilizador = ({
                "Utilizador": {
                    Nome: UNome,
                    Etapa: "2",
                    Pergunta: 0,
                    Answers: []
                }
            });

            //Guardar dados atualizados
            localStorage.setItem("Utilizador", JSON.stringify(DadosUtilizador));
        } else {

            $("button").css("width", "100%");

            $(".bprincipal2").html("Conhecer Gatinhos");
            $(".speech-bubble-teste #Greeting").css("display", "block");
            $(".speech-bubble-teste #Greeting").html("Muito bem " + UNome + "!");
            $(".speech-bubble-teste #PrimeiroP").html("Encontrei cinco gatinhos compatíveis contigo. Está na altura de escolheres um!");

            //Atualizar o nr da Etapa em que o utilizador está
            DadosUtilizador = ({
                "Utilizador": {
                    Nome: UNome,
                    Etapa: "3",
                }
            });
            //Guardar dados atualizados
            localStorage.setItem("Utilizador", JSON.stringify(DadosUtilizador));
        }
        //Se ainda houver perguntas
    } else {
        $("#anterior").animate({
            opacity: 1,
        }, 500);
        $("#anterior").css("pointer-events", "all");

        Answers = UAnswers;

        if (nrPergunta === UAnswers.length) {

            nrPergunta = nrPergunta + 1;
            Answers.push(op);
            //Carregar nova pergunta
            UPergunta = UPergunta + 1;
            LoadPergunta(UPergunta, json);
            $("#info").html(UPergunta + 1 + " de 15");

        } else {
            Answers[nrPergunta] = op;
            nrPergunta = nrPergunta + 1;
            LoadPergunta(nrPergunta, json);

            $.each(DadosUtilizador, function (index, value) {
                let id = value.Answers[nrPergunta];
                setTimeout(function () {
                    $("#" + id).css("background-color", "rgb(255,89,89,1)");
                }, 500)

                $("#info").html(nrPergunta + 1 + " de 15");
            });

            if (nrPergunta === UAnswers.length) {
                $("#proximo").animate({
                    opacity: 0,
                }, 500);
                $("#proximo").css("pointer-events", "none");
            }
        }

        //Atualizar o nr da Pergunta em que o utilizador está
        DadosUtilizador = ({
            "Utilizador": {
                Nome: UNome,
                Etapa: UEtapa,
                Pergunta: UPergunta,
                Answers: Answers
            }
        });

        //Guardar dados atualizados
        localStorage.setItem("Utilizador", JSON.stringify(DadosUtilizador));

        //Animação elementos a aparecerem
        setTimeout(function () {
            $(".speech-bubble-teste").animate({
                opacity: 1
            }, 500);
            $(".bsecundario").css("background-color", "rgb(255,135,135)");
        }, 250);

        setTimeout(function () {
            $("#basehigh").animate({
                paddingTop: "7%"
            }, 500);

            $(".bsecundario").animate({
                opacity: 1,
            }, 500);
        }, 500);
    }


}

function Errada(pOP) {
    //Layout de saída do formulário
    LayoutExit();
    //Encontrar a opção escolhida pelo utilizador
    if (pOP === "op1") {
        $(".speech-bubble-teste #PrimeiroP").html(op1O);

    } else if (pOP === "op2") {
        $(".speech-bubble-teste #PrimeiroP").html(op2O);

    } else {
        $(".speech-bubble-teste #PrimeiroP").html(op3O);
    }
}

//Se o utilizador sair do teste de aptidão
$(".close").on("click", function () {

    //Botão muda de cor
    $(".bprincipal2").animate({
        backgroundColor: "rgb(222,27,0,1)"
    }, 250);

    $(".paw").animate({
        right: "-35%"
    }, 500);

    $(".animaisinfo").animate({
        top: "65vh",
        height: "10vh"
    }, 500);


    $(".rotated").addClass("ArrowDown");
    $(".rotated").removeClass("rotated");

    $(".traits").animate({
        opacity: 1
    }, 250);

    //Elementos desaparecem
    setTimeout(function () {
        $("#op1").animate({
            marginTop: "5vh",
            opacity: 0
        }, 500);

        $("section, .speech-bubble-teste, #info, .bsecundario, #anterior, #proximo, #ant, #nr, #prox").animate({
            opacity: 0,
        }, 500);

        $(".bprincipal2").animate({
            opacity: 0,
            marginTop: "5vh"
        }, 500);

        $("#bar").animate({
            opacity: 0,
            top: "-10vh"
        }, 500);

        $(".animais").animate({
            marginLeft: "120%"
        }, 700);

        $(".paw").animate({
            right: "-140%"
        }, 700);

    }, 500);

    setTimeout(function () {
        $("#basehigh").animate({
            height: "30vh"
        }, 500);

        $("#basef").animate({
            bottom: "0vh",
            opacity: 1
        }, 500);

    }, 1300);

    //Ir para página principal
    setTimeout(function () {
        location.href = 'home.html'
    }, 1800);
});

//Se o utilizador sair do teste de aptidão
$(".bprincipal2").on("click", function () {
    //Buscar dados do utilizador ao local storage
    DadosUtilizador = localStorage.getItem("Utilizador");
    DadosUtilizador = JSON.parse(DadosUtilizador);

    $.each(DadosUtilizador, function (index, value) {
        UEtapa = value.Etapa;
    });

    //Botão muda de cor
    $(".bprincipal2").animate({
        backgroundColor: "rgb(222,27,0,1)"
    }, 250);


    //Elementos desaparecem
    setTimeout(function () {
        $("#op1").animate({
            marginTop: "5vh",
            opacity: 0
        }, 500);

        $("section, .speech-bubble-teste, #info, .bsecundario, #anterior, #proximo").animate({
            opacity: 0,
        }, 500);

        $(".bprincipal2").animate({
            opacity: 0,
            marginTop: "5vh"
        }, 500);

        $("#bar").animate({
            opacity: 0,
            top: "-10vh"
        }, 500);

    }, 500);
    setTimeout(function () {
        $("#basehigh").animate({
            height: "30vh"
        }, 500);
    }, 1000);

    if (UEtapa == 3) {
        setTimeout(function () {
            location.href = 'animais.html'
        }, 1000);
    } else {
        //Ir para página principal
        setTimeout(function () {
            location.href = 'home.html'
        }, 1500);
    }

});


function LayoutExit() {
    $(".bsecundario").css("display", "none");

    $("#basehigh").animate({
        paddingTop: "7%"
    }, 500);

    $("#info, #anterior, #proximo").animate({
        opacity: 0
    }, 500);

    setTimeout(function () {
        $("section").animate({
            height: "71vh"
        }, 500);

        $("#basehigh").animate({
            height: "30vh"
        }, 500);

        $("#bar").animate({
            opacity: 0,
            top: "-10vh"
        }, 500);
    }, 500);

    setTimeout(function () {
        $(".speech-bubble-teste").animate({
            opacity: 1
        }, 500)

    }, 1000);

    setTimeout(function () {

        $(".bprincipal2").css("display", "block");

        $(".bprincipal2").animate({
            marginTop: "0vh",
            opacity: 1
        }, 500);


    }, 1500);
};
//------------------------------------------------Encontrar companheiro----------------
//Se o utilizador clicar em Encontrar Companheiro
$("#encontrar").on("click", function () {


    //Botão muda de cor
    $("#encontrar").animate({
        backgroundColor: "rgb(222,27,0,1)"
    }, 250);


    //Elementos desaparecem
    setTimeout(function () {
        $(".bprincipal").animate({
            opacity: 0,
            marginTop: "5vh"
        }, 500);

        $(".speech-bubble").animate({
            opacity: 0
        }, 500);

        $("menu").animate({
            opacity: 0
        }, 500);

    }, 500);

    setTimeout(function () {
        $("#cat").animate({
            opacity: 0
        }, 500);
    }, 1000);

    //Ir para página de teste de aptidão à adoção
    setTimeout(function () {

        location.href = 'encontrar-companheiro.html'

    }, 1500);

});

//Se o utilizador estiver na página de encontrar companheiro
if (document.location.pathname === "encontrar-companheiro.html") {
    json = "script/encontrar.json"

    DadosUtilizador = localStorage.getItem("Utilizador");
    DadosUtilizador = JSON.parse(DadosUtilizador);

    //Verificar se existem utilizadores em local storage
    if (DadosUtilizador === null) {

        //Se não existirem voltar à página de login
        location.href = 'index.html'

    } else {
        //Verificar qual o número da pergunta em que está o utilizador
        $.each(DadosUtilizador, function (index, value) {

            //Variável com o nr da Pergunta em que o utilizador está
            nrPergunta = value.Pergunta;

            //Variável com o nr da Etapa em que o utilizador está    
            UEtapa = value.Etapa;
        });
        //Verificar se o utilizador está na etapa 1
        if (UEtapa === "2") {

            //Se estiver
            //Carregar pergunta em que o utilizador está
            LoadPergunta(nrPergunta, json);

            nrPergunta = parseInt(nrPergunta);
            //Atualizar progresso da pergunta em que o utilizador está
            $("#info").html(nrPergunta + 1 + " de 15");

            //Se não estiver voltar a página inicial
        } else {
            location.href = 'home.html'
        }
    };
};

//-------------------------------------Escolher gatinho------------------------
//Se o utilizador clicar em Testar Aptidão
$("#escolher").on("click", function () {


    //Botão muda de cor
    $("#testaraptidao").animate({
        backgroundColor: "rgb(222,27,0,1)"
    }, 250);


    //Elementos desaparecem
    setTimeout(function () {
        $(".bprincipal").animate({
            opacity: 0,
            marginTop: "5vh"
        }, 500);

        $(".speech-bubble").animate({
            opacity: 0
        }, 500);

        $("menu").animate({
            opacity: 0
        }, 500);

    }, 500);

    setTimeout(function () {
        $("#cat").animate({
            opacity: 0
        }, 500);
    }, 1000);

    //Ir para página de teste de aptidão à adoção
    setTimeout(function () {

        location.href = 'animais.html'

    }, 1500);

});
$(document).ready(function () {
    $("#anterior").on("click", function () {

        //Animação dos elementos a desaparecerem
        $("#basehigh").animate({
            paddingTop: "10vh"
        }, 500);

        $(".bsecundario, .speech-bubble-teste").animate({
            opacity: 0,
        }, 500);

        setTimeout(function () {
            $(".bsecundario").css("background-color", "rgb(255,135,135)");

            $("#proximo").css("display", "block");

            $("#proximo").animate({
                opacity: 1,
            }, 500);
            $("#proximo").css("pointer-events", "all");
        }, 500)


        DadosUtilizador = localStorage.getItem("Utilizador");
        DadosUtilizador = JSON.parse(DadosUtilizador);

        json = "script/encontrar.json";

        if (check == false) {
            $.each(DadosUtilizador, function (index, value) {

                nrPergunta = value.Pergunta;
                nrPergunta = nrPergunta - 1;

                setTimeout(function () {

                    LoadPergunta(nrPergunta, json);
                    let id = value.Answers[nrPergunta];
                    $("#" + id).css("background-color", "rgb(255,89,89,1)");

                }, 500);

                $("#info").html(nrPergunta + 1 + " de 15");

                check = true;

                if (nrPergunta === 0) {
                    $("#anterior").animate({
                        opacity: 0,
                    }, 500);

                    $("#anterior").css("pointer-events", "none");
                } else {
                    $("#anterior").animate({
                        opacity: 1,
                    }, 500);
                    $("#anterior").css("pointer-events", "all");
                }
            });
        } else {
            nrPergunta = nrPergunta - 1;
            $.each(DadosUtilizador, function (index, value) {
                let id = value.Answers[nrPergunta];
                setTimeout(function () {
                    LoadPergunta(nrPergunta, json);
                    $("#" + id).css("background-color", "rgb(255,89,89,1)");
                }, 500);

            });


            $("#info").html(nrPergunta + 1 + " de 15");
            if (nrPergunta === 0) {
                $("#anterior").animate({
                    opacity: 0,
                }, 500);

                $("#anterior").css("pointer-events", "none");
            } else {
                $("#anterior").animate({
                    opacity: 1,
                }, 500);

                $("#anterior").css("pointer-events", "all");
            }
        }

        //Animação elementos a aparecerem
        setTimeout(function () {
            $(".speech-bubble-teste").animate({
                opacity: 1
            }, 500);
        }, 500);

        setTimeout(function () {
            $("#basehigh").animate({
                paddingTop: "7%"
            }, 500);

            $(".bsecundario").animate({
                opacity: 1,
            }, 500);
        }, 750);

    });
});

$(document).ready(function () {

    $("#proximo").on("click", function () {

        DadosUtilizador = localStorage.getItem("Utilizador");
        DadosUtilizador = JSON.parse(DadosUtilizador);

        json = "script/encontrar.json";
        nrPergunta = nrPergunta + 1;

        //Animação dos elementos a desaparecerem
        $("#basehigh").animate({
            paddingTop: "10vh"
        }, 500);

        $(".bsecundario, .speech-bubble-teste").animate({
            opacity: 0,
        }, 500);

        setTimeout(function () {
            $(".bsecundario").css("background-color", "rgb(255,135,135)");

            $("#anterior").css("display", "block");

            $("#anterior").animate({
                opacity: 1,
            }, 500);

            $("#anterior").css("pointer-events", "all");
            LoadPergunta(nrPergunta, json);
        }, 500);

        $("#info").html(nrPergunta + 1 + " de 15");

        $.each(DadosUtilizador, function (index, value) {

            setTimeout(function () {
                let id = value.Answers[nrPergunta];
                $("#" + id).css("background-color", "rgb(255,89,89,1)");
            }, 500);

            if (nrPergunta === value.Pergunta) {
                $("#proximo").animate({
                    opacity: 0,
                }, 500);

                $("#proximo").css("pointer-events", "none");
            }
        });

        //Animação elementos a aparecerem
        setTimeout(function () {
            $(".speech-bubble-teste").animate({
                opacity: 1
            }, 500);
        }, 500);

        setTimeout(function () {
            $("#basehigh").animate({
                paddingTop: "7%"
            }, 500);

            $(".bsecundario").animate({
                opacity: 1,
            }, 500);
        }, 750);
    });
});
//---------------------------- Adotar
if (document.location.pathname === "animais.html") {

    DadosUtilizador = localStorage.getItem("Utilizador");

    //Verificar se já existe um utilizador em local storage
    if (DadosUtilizador === null) {

        //Se existirem, ir para a home page (skip login)
        location.href = 'home.html'
    }
};

$(".ArrowDown").on("click", function () {

    if ($(this).hasClass("ArrowDown") === true) {

        $(".traits").animate({
            opacity: 0
        }, 250);


        $(".animaisinfo").animate({
            top: "28vh",
            height: "47vh"
        }, 800);

        $(".ArrowDown").addClass("rotated");
        $(".ArrowDown").removeClass("ArrowDown");


    } else {
        $(".animaisinfo").animate({
            top: "65vh",
            height: "10vh"
        }, 800);


        $(".rotated").addClass("ArrowDown");
        $(".rotated").removeClass("rotated");

        setTimeout(function () {
            $(".traits").animate({
                opacity: 1
            }, 250);
        }, 500);
    }

});
$(document).ready(function () {
    $(".adotar").on("click", function () {
        //Buscar dados do utilizador ao local storage
        DadosUtilizador = localStorage.getItem("Utilizador");
        DadosUtilizador = JSON.parse(DadosUtilizador);

        $.each(DadosUtilizador, function (index, value) {
            UNome = value.Nome;
        });


        //Atualizar o nr da Etapa em que o utilizador está
        DadosUtilizador = ({
            "Utilizador": {
                Nome: UNome,
                Etapa: "4"
            }
        });

        //Guardar dados atualizados
        localStorage.setItem("Utilizador", JSON.stringify(DadosUtilizador));

        //Botão muda de cor
        $(this).animate({
            backgroundColor: "rgb(222,27,0,1)"
        }, 250);

        setTimeout(function () {
            $(".paw").animate({
                right: "-35%"
            }, 700);

            $(".animaisinfo").animate({
                top: "65vh",
                height: "10vh"
            }, 700);


            $(".rotated").addClass("ArrowDown");
            $(".rotated").removeClass("rotated");

            $(".traits").animate({
                opacity: 1
            }, 250);
        }, 500);

        //Elementos desaparecem
        setTimeout(function () {
            $("#ant, #nr, #prox").animate({
                opacity: 0,
            }, 500);

            $("#bar").animate({
                opacity: 0,
                top: "-10vh"
            }, 500);

            $(".animais").animate({
                marginLeft: "120%"
            }, 700);

            $(".paw").animate({
                right: "-140%"
            }, 700);

        }, 1300);

        setTimeout(function () {
            $("#basef").animate({
                bottom: "0vh",
                opacity: 1
            }, 500);

        }, 1800);

        //Ir para página principal
        setTimeout(function () {
            location.href = 'home.html'
        }, 2300);
    });
});

$("#prox").on("click", function () {

    $(".animaisinfo").animate({
        top: "65vh",
        height: "10vh"
    }, 500);

    $(".rotated").addClass("ArrowDown");
    $(".rotated").removeClass("rotated");

    $(this).animate({
        color: "#DE1B00"
    }, 500);

    setTimeout(function () {
        if (NrAnimal === 1) {
            NrAnimal = 2;
            $("#Marta").css("display", "block");
            $("#Marta").css("margin-left", "120%");

            setTimeout(function () {
                $("#Tobias").css("display", "none");
                $("#ant").html("<img id='arrowAnt' src='img/Arrow_Anterior_R.svg'>Tobias");
                $("#prox").html("Azeitona<img id='arrowProx' src='img/Arrow_Proximo_R.svg'>");
                $("#nr").html(NrAnimal + " de 5");

                $("#ant").animate({
                    opacity: 1
                }, 500);
                $("#ant").css("pointer-events", "all");
            }, 700);

        } else if (NrAnimal === 2) {
            NrAnimal = 3;
            $("#Azeitona").css("display", "block");
            $("#Azeitona").css("margin-left", "120%");

            setTimeout(function () {
                $("#Marta").css("display", "none");
                $("#ant").html("<img id='arrowAnt' src='img/Arrow_Anterior_R.svg'>Marta");
                $("#prox").html("Nestum<img id='arrowProx' src='img/Arrow_Proximo_R.svg'>");
                $("#nr").html(NrAnimal + " de 5");
            }, 700);

        } else if (NrAnimal === 3) {
            NrAnimal = 4;
            $("#Nestum").css("display", "block");
            $("#Nestum").css("margin-left", "120%");

            setTimeout(function () {
                $("#Azeitona").css("display", "none");
                $("#ant").html("<img id='arrowAnt' src='img/Arrow_Anterior_R.svg'>Azeitona");
                $("#prox").html("Kevin<img id='arrowProx' src='img/Arrow_Proximo_R.svg'>");
                $("#nr").html(NrAnimal + " de 5");
            }, 700);

        } else if (NrAnimal === 4) {
            NrAnimal = 5;

            $("#prox").css("pointer-events", "none");

            $("#Kevin").css("display", "block");
            $("#Kevin").css("margin-left", "120%");

            setTimeout(function () {
                $("#Nestum").css("display", "none");
                $("#ant").html("<img id='arrowAnt' src='img/Arrow_Anterior_R.svg'>Nestum");
                $("#nr").html(NrAnimal + " de 5");
                $("#prox").animate({
                    opacity: 0
                }, 500);
            }, 700);

        }

        $("#prox").animate({
            color: "#FF2E2E"
        }, 500);

        $(".animais").animate({
            marginLeft: "0%"
        }, 700);
        $(".paw").animate({
            right: "-35%"
        }, 700);

        setTimeout(function () {
            $(".paw").animate({
                right: "-140%"
            }, 700);
        }, 700);
    }, 500);

});

$("#ant").on("click", function () {
    $(".animaisinfo").animate({
        top: "65vh",
        height: "10vh"
    }, 500);


    $(".rotated").addClass("ArrowDown");
    $(".rotated").removeClass("rotated");

    $(this).animate({
        color: "#DE1B00"
    }, 500);

    setTimeout(function () {

        if (NrAnimal === 2) {
            NrAnimal = 1;

            $("#ant").css("pointer-events", "none");

            setTimeout(function () {
                $("#Tobias").css("display", "block");

                $("#Marta").animate({
                    marginLeft: "100%"
                }, 700);
            }, 700);

            setTimeout(function () {
                $("#Marta").css("display", "none");
                $("#prox").html("Marta<img id='arrowProx' src='img/Arrow_Proximo_R.svg'>");
                $("#nr").html(NrAnimal + " de 5");
                $("#ant").animate({
                    opacity: 0
                }, 500);
            }, 1400);

        } else if (NrAnimal === 3) {
            NrAnimal = 2;

            setTimeout(function () {
                $("#Marta").css("display", "block");

                $("#Azeitona").animate({
                    marginLeft: "100%"
                }, 700);
            }, 700);

            setTimeout(function () {
                $("#Azeitona").css("display", "none");
                $("#ant").html("<img id='arrowAnt' src='img/Arrow_Anterior_R.svg'>Tobias");
                $("#prox").html("Azeitona<img id='arrowProx' src='img/Arrow_Proximo_R.svg'>");
                $("#nr").html(NrAnimal + " de 5");
            }, 1400);

        } else if (NrAnimal === 4) {
            NrAnimal = 3;

            setTimeout(function () {
                $("#Azeitona").css("display", "block");

                $("#Nestum").animate({
                    marginLeft: "100%"
                }, 700);
            }, 700);

            setTimeout(function () {
                $("#Nestum").css("display", "none");
                $("#ant").html("<img id='arrowAnt' src='img/Arrow_Anterior_R.svg'>Marta");
                $("#prox").html("Nestum<img id='arrowProx' src='img/Arrow_Proximo_R.svg'>");
                $("#nr").html(NrAnimal + " de 5");
            }, 1400);

        } else if (NrAnimal === 5) {
            NrAnimal = 4;

            setTimeout(function () {
                $("#Nestum").css("display", "block");

                $("#Kevin").animate({
                    marginLeft: "100%"
                }, 700);
            }, 700);

            setTimeout(function () {
                $("#Kevin").css("display", "none");
                $("#ant").html("<img id='arrowAnt' src='img/Arrow_Anterior_R.svg'>Azeitona");
                $("#prox").html("Kevin<img id='arrowProx' src='img/Arrow_Proximo_R.svg'>");
                $("#nr").html(NrAnimal + " de 5");

                $("#prox").animate({
                    opacity: 1
                }, 500);
                $("#prox").css("pointer-events", "all");

            }, 1400);

        }

        $("#ant").animate({
            color: "#FF2E2E"
        }, 500);

        $(".paw").animate({
            right: "-35%"
        }, 700);

        setTimeout(function () {
            $(".paw").animate({
                right: "-140%"
            }, 700);
        }, 700);
    }, 500);
});

//-------------------------------------------------Animações Gerais Quando Nova Página HTML é Aberta -------------------------

//Primeiros Elementos
$("#LogIn").animate({
    marginTop: 0,
    opacity: 1
}, 500);

$("#base").animate({
    marginTop: "7vh",
    opacity: 1
}, 500);

$("#basef").animate({
    bottom: "-20vh",
    opacity: 0
}, 500);

$("#basehigh").animate({
    height: "40vh",
    paddingTop: "10vh"
}, 500);


$("#cat").animate({
    opacity: 1
}, 500);



//Terceiros Elementos
setTimeout(function () {
    $(".speech-bubble, menu, #catdeitado").animate({
        opacity: 1
    }, 500);
    $("#bar").animate({
        opacity: 1,
        top: 0
    }, 500);
}, 500);

//Quartos Elementos
setTimeout(function () {
    $(".bprincipal").animate({
        opacity: 1,
        marginTop: "0vh",
    }, 500);

    $(" .speech-bubble-teste, .bprincipal3").animate({
        opacity: 1
    }, 500);
    $(".animais").animate({
        marginLeft: "0%"
    }, 700);
    $(".paw").animate({
        right: "-35%"
    }, 700);

}, 1000);

//Quintos elementos
setTimeout(function () {
    $(".paw").animate({
        right: "-140%"
    }, 700);
    $("#info, #nr, #anterior, #prox, .bsecundario").animate({
        opacity: 1
    }, 500);

    $("#basehigh").animate({
        paddingTop: "7%"
    }, 500);

    $("#anterior").css("pointer-events", "all");

}, 1500);
