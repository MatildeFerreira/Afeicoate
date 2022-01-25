// afeiçoa-te // 2021/22 // Design de Interação Web e Jogos //Matilde Ferreira //

let Nome;
let DadosUtilizador;
// --------------------------------------LOG IN ---------------------------
//Elementos surgem quando a página abre
setTimeout(function () {
    $("#LogIn").animate({
        marginTop: 0,
        opacity: 1
    }, 600);

    $("#base").animate({
        bottom: "0vh",
        opacity: 1
    }, 600);

}, 150);

//Quando se Inicia Sessão
$("#iniciarsessao").on("click", function () {

    //Se o Nome for Preenchido
    if ($("#email").val() != "") {

        //Botão muda de cor
        $("#iniciarsessao").animate({
            backgroundColor: "rgb(222,27,0,1)"
        }, 250);

        //Verificar se já existem utilizadores com esse e-mail
        CheckDadosUtilizador($("#email").val());

        //Elementos desaparecem
        setTimeout(function () {
            $("#LogIn").animate({
                marginTop: "-10vh",
                opacity: 0
            }, 600);

            $("#base").animate({
                bottom: "-10vh",
                opacity: 0
            }, 600);
        }, 300);

        //Ir para Página principal
        setTimeout(function () {
            location.href = 'Afeicoate/home.html'
        }, 1000);

    } else {

    }
})

//Função verificar utilizadores
function CheckDadosUtilizador(Nome) {

    DadosUtilizador = localStorage.getItem(Nome);

    //Se já existem utilizadores com o mesmo e-mail
    if (DadosUtilizador != null) {

        DadosUtilizador = JSON.parse(DadosUtilizador);


        //Se não existem utilizadores com o mesmo e-mail
    } else {

        //Acrescentar utilizador
        let DadosUtilizador = [
            {
                1: {
                    Etapa: 0
                }
    }
];
        localStorage.setItem(Nome, JSON.stringify(DadosUtilizador));
    }
}

// -------------------------------------- HOME ---------------------------

//Elementos surgem quando a página abre
setTimeout(function () {
    $("#cat").animate({
        opacity: 1
    }, 600);
    $("menu").animate({
        opacity: 1
    }, 600);

}, 950);

setTimeout(function () {
    $(".speech-bubble").animate({
        opacity: 1
    }, 600);

}, 1450);

setTimeout(function () {
    $(".bprincipal").animate({
        opacity: 1,
        marginTop: "0vh"
    }, 600);

}, 1950);

//Quando se Clica em Testar Aptidao
$("#testaraptidao").on("click", function () {

    //Botão muda de cor
    $("#testaraptidao").animate({
        backgroundColor: "rgb(222,27,0,1)"
    }, 250);

    //Verificar se já existem utilizadores com esse e-mail
    CheckDadosUtilizador($("#email").val());

    //Elementos desaparecem
    setTimeout(function () {
        $(".bprincipal").animate({
            opacity: 0,
            marginTop: "5vh"
        }, 600);

        $(".speech-bubble").animate({
            opacity: 0
        }, 600);

        $("menu").animate({
            opacity: 0
        }, 600);

    }, 300);
    
    setTimeout(function () {
        $("#cat").animate({
            opacity: 0
        }, 600);
    }, 900);

    //Ir para página de teste de aptidão à adoção
    setTimeout(function () {
        location.href = '/teste-aptidao-adocao.html'
    }, 1200);

})
